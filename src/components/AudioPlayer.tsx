import { useEffect, useRef } from "react";

interface Props {
  isPlaying: boolean;
}

interface HeartParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  swaySpeed: number;
  swayAmplitude: number;
  swayPhase: number;
  wingFlapSpeed: number;
  wingFlapPhase: number;
  life: number;
  decay: number;
}

const HEART_COLORS = [
  "#ec4899", "#f43f5e", "#d946ef", "#a855f7",
  "#fb7185", "#fda4af", "#f472b6", "#db2777",
  "#ff7e9e", "#ffa3b8",
];

const AudioPlayer: React.FC<Props> = ({ isPlaying }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const rafRef = useRef<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const offscreenRef = useRef<HTMLCanvasElement | null>(null);

  const smoothBassRef = useRef(0);
  const smoothMidsRef = useRef(0);
  const smoothTrebleRef = useRef(0);

  const particlesRef = useRef<HeartParticle[]>([]);
  const bassHistoryRef = useRef<number[]>([]);
  const lastSpawnRef = useRef(0);

  // ── Draw a single heart with wing-flap ──
  const drawHeart = (
    ctx: CanvasRenderingContext2D,
    x: number, y: number, size: number,
    rotation: number, wingScale: number,
    opacity: number, color: string
  ) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.scale(wingScale, 1);
    ctx.globalAlpha = opacity;
    ctx.fillStyle = color;
    ctx.shadowColor = color;
    ctx.shadowBlur = size * 1.5;
    ctx.beginPath();
    const w = size, h = size;
    ctx.moveTo(0, -h / 4);
    ctx.bezierCurveTo(-w / 2, -h * 0.7, -w, -h / 3, -w, h / 10);
    ctx.bezierCurveTo(-w, h / 2, -w / 4, h * 0.8, 0, h);
    ctx.bezierCurveTo(w / 4, h * 0.8, w, h / 2, w, h / 10);
    ctx.bezierCurveTo(w, -h / 3, w / 2, -h * 0.7, 0, -h / 4);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  };

  // ── Spawn a burst of butterfly hearts ──
  const spawnHearts = (count: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const cw = canvas.width, ch = canvas.height;

    for (let i = 0; i < count; i++) {
      const x = cw * 0.1 + Math.random() * cw * 0.8;
      const y = ch + 10;
      particlesRef.current.push({
        x, y,
        vx: (Math.random() - 0.5) * 1.4,
        vy: Math.random() * 1.5 + 0.6,
        size: Math.random() * 12 + 5,
        color: HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)],
        rotation: (Math.random() - 0.5) * 0.5,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        swaySpeed: Math.random() * 2.5 + 1.5,
        swayAmplitude: Math.random() * 1.5 + 0.5,
        swayPhase: Math.random() * Math.PI * 2,
        wingFlapSpeed: Math.random() * 12 + 10,
        wingFlapPhase: Math.random() * Math.PI * 2,
        life: 1,
        decay: Math.random() * 0.002 + 0.0015,
      });
    }
  };

  // ── Resize ──
  useEffect(() => {
    const resize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    window.addEventListener("resize", resize);
    resize();
    if (!offscreenRef.current) {
      const off = document.createElement("canvas");
      off.width = 360;
      off.height = 200;
      offscreenRef.current = off;
    }
    return () => window.removeEventListener("resize", resize);
  }, []);

  // ── Audio ──
  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio("/mix.mp3");
      audio.loop = true;
      audio.volume = 1;
      audio.crossOrigin = "anonymous";
      audioRef.current = audio;
    }
    const audio = audioRef.current;
    if (isPlaying) {
      audio.play().catch((e) => console.warn("Autoplay blocked:", e));
      try {
        if (!audioContextRef.current) {
          const Ctx = window.AudioContext || (window as any).webkitAudioContext;
          const ctx = new Ctx();
          const analyser = ctx.createAnalyser();
          analyser.fftSize = 256;
          analyser.smoothingTimeConstant = 0.85;
          const source = ctx.createMediaElementSource(audio);
          source.connect(analyser);
          analyser.connect(ctx.destination);
          audioContextRef.current = ctx;
          analyserRef.current = analyser;
          sourceRef.current = source;
        } else if (audioContextRef.current.state === "suspended") {
          audioContextRef.current.resume();
        }
      } catch (e) { console.error("AudioContext:", e); }
    } else {
      audio.pause();
    }
    return () => { audio.pause(); };
  }, [isPlaying]);

  // ── Render loop ──
  useEffect(() => {
    const render = () => {
      let bass = 0, mids = 0, treble = 0, rawBass = 0;

      if (analyserRef.current) {
        if (!dataArrayRef.current || dataArrayRef.current.length !== analyserRef.current.frequencyBinCount)
          dataArrayRef.current = new Uint8Array(analyserRef.current.frequencyBinCount);
        analyserRef.current.getByteFrequencyData(dataArrayRef.current);
        const d = dataArrayRef.current;
        let s = 0;
        for (let i = 0; i < 12; i++) s += d[i]; rawBass = s / 12; bass = rawBass / 255;
        s = 0; for (let i = 13; i < 45; i++) s += d[i]; mids = s / 32 / 255;
        s = 0; for (let i = 46; i < 100; i++) s += d[i]; treble = s / 54 / 255;

        // Beat detection → spawn butterfly hearts
        const hist = bassHistoryRef.current;
        hist.push(rawBass);
        if (hist.length > 30) hist.shift();
        const avg = hist.reduce((a, b) => a + b, 0) / hist.length;
        const now = performance.now();
        if (rawBass > avg * 1.15 && rawBass > 80 && now - lastSpawnRef.current > 350) {
          spawnHearts(Math.floor(Math.random() * 4) + 3);
          lastSpawnRef.current = now;
        }
        // Gentle background spawning
        if (Math.random() < 0.04 && particlesRef.current.length < 40) spawnHearts(1);
      }

      smoothBassRef.current += (bass - smoothBassRef.current) * 0.06;
      smoothMidsRef.current += (mids - smoothMidsRef.current) * 0.08;
      smoothTrebleRef.current += (treble - smoothTrebleRef.current) * 0.1;

      const sBass = smoothBassRef.current;
      const sMids = smoothMidsRef.current;
      const sTreble = smoothTrebleRef.current;

      // Push breath to CSS for blob sync
      document.documentElement.style.setProperty("--audio-breath", (1 + sBass * 0.12).toFixed(4));

      const canvas = canvasRef.current;
      const offscreen = offscreenRef.current;
      if (!canvas || !offscreen) { rafRef.current = requestAnimationFrame(render); return; }
      const ctx = canvas.getContext("2d");
      const oCtx = offscreen.getContext("2d");
      if (!ctx || !oCtx) { rafRef.current = requestAnimationFrame(render); return; }

      const t = performance.now() / 1000;
      const w = offscreen.width, h = offscreen.height;

      // ─── Draw aurora silk bands on offscreen ───
      oCtx.clearRect(0, 0, w, h);
      oCtx.filter = "blur(6px)";

      // Band 1 — warm blush pink
      {
        const a = Math.min(0.12 + sBass * 0.08 + sTreble * 0.02, 0.22);
        oCtx.save();
        oCtx.globalAlpha = a;
        oCtx.strokeStyle = "rgb(245, 185, 210)";
        oCtx.lineWidth = 55;
        oCtx.lineCap = "round";
        oCtx.beginPath();
        const y0 = h * 0.1 + Math.sin(t * 0.07) * h * 0.06;
        const cx1 = w * 0.28, cy1 = h * 0.3 + Math.sin(t * 0.055 + 1.2) * h * 0.1 + sMids * h * 0.06;
        const cx2 = w * 0.7, cy2 = h * 0.6 + Math.cos(t * 0.06 + 0.5) * h * 0.08 - sMids * h * 0.05;
        const y1 = h * 0.85 + Math.sin(t * 0.08 + 2.5) * h * 0.04;
        oCtx.moveTo(-w * 0.08, y0);
        oCtx.bezierCurveTo(cx1, cy1, cx2, cy2, w * 1.08, y1);
        oCtx.stroke();
        oCtx.restore();
      }

      // Band 2 — cool lavender
      {
        const a = Math.min(0.08 + sBass * 0.06 + sTreble * 0.015, 0.16);
        oCtx.save();
        oCtx.globalAlpha = a;
        oCtx.strokeStyle = "rgb(215, 195, 240)";
        oCtx.lineWidth = 42;
        oCtx.lineCap = "round";
        oCtx.beginPath();
        const y0 = h * 0.88 + Math.cos(t * 0.065) * h * 0.04;
        const cx1 = w * 0.32, cy1 = h * 0.6 + Math.sin(t * 0.05 + 3) * h * 0.08 + sMids * h * 0.04;
        const cx2 = w * 0.72, cy2 = h * 0.25 + Math.cos(t * 0.058 + 1.8) * h * 0.07 - sMids * h * 0.03;
        const y1 = h * 0.12 + Math.cos(t * 0.075 + 4) * h * 0.035;
        oCtx.moveTo(-w * 0.06, y0);
        oCtx.bezierCurveTo(cx1, cy1, cx2, cy2, w * 1.06, y1);
        oCtx.stroke();
        oCtx.restore();
      }

      oCtx.filter = "none";

      // ─── Composite aurora → fullscreen ───
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(offscreen, 0, 0, canvas.width, canvas.height);

      // ─── Draw butterfly heart particles ───
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.y -= p.vy;
        p.x += p.vx + Math.sin(t * p.swaySpeed + p.swayPhase) * p.swayAmplitude;
        p.rotation += p.rotationSpeed;
        p.life -= p.decay;

        if (p.life <= 0 || p.y < -30 || p.x < -30 || p.x > canvas.width + 30) {
          particles.splice(i, 1);
          continue;
        }

        const wingScale = 0.5 + Math.abs(Math.sin(t * p.wingFlapSpeed + p.wingFlapPhase)) * 0.5;
        drawHeart(ctx, p.x, p.y, p.size, p.rotation, wingScale, p.life, p.color);
      }

      rafRef.current = requestAnimationFrame(render);
    };

    if (isPlaying) rafRef.current = requestAnimationFrame(render);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [isPlaying]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[9998]"
      style={{
        opacity: isPlaying ? 1 : 0,
        transition: "opacity 2s ease-in-out",
      }}
    />
  );
};

export default AudioPlayer;
