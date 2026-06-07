export interface Memory {
  id: string;
  title: string;
  description: string;
  image: string;
  date?: string;
  quote?: string;
}

export interface MemoryLocation {
  id: string;
  name: string;
  coordinates: [number, number];
  memories: Memory[];
}

export const memoryLocations: MemoryLocation[] = [
  {
    "id": "60d1b6dd-77a3-45d8-8587-34714cd58d13",
    "name": "St.Francis High School",
    "coordinates": [12.925275371121932, 77.62915847029555],
    "memories": [
      {
        "id": "962ab38e-45ca-4202-9f3a-d4afe5862f4c",
        "title": "When love was new and everything felt endless",
        "description": "Bound between 4 walls and school corridors, our love bloomed amidst those notebooks. When sharing a bench without a bag in between felt romantic, Lil closeness in class gave butterflies.  Enna nenp edye chinni nin ahh modle blush, Modle nangu, nan eldhe ning athid dinnagalu surprise agi band agi nambok agdhe thapkond edhu. Modlene sparshake mudidhe mugilunage parthi ondu enna achehakidhe. Jagathe thildhe ero yavasighe mudidha preeti edu.  Enna fresh ede — \"Do uh love me ge\" dare ah antha kelidhu.  Ennu I stare at the window, That bench where our love started.  This is our school, Where every wall is painted with our love, And the bench holds special memories of us.  Nenap ede adith truth or dare, Nenp ede koth ahh modle ne kiss. Nanp ede modlne sparsha.",
        "image": "/images/st_francis_high.jpg",
        "quote": "Corrider Glances and Stolen time behind school walls"
      }
    ]
  },
  {
    "id": "64589c76-13b9-42d8-9358-d05737e2a6df",
    "name": "St.Francis Composite Pu college",
    "coordinates": [12.927304904319707, 77.63027113586817],
    "memories": [
      {
        "id": "62fb75c4-72ca-42bd-9835-28065e93af8b",
        "title": "When every song felt like ours",
        "description": "Unexpected Union, Unseperable bound. Nan bestie sikidh PU college edu. A First bench idoit with a crazy back bencher 😜. Golden period with million memories and billion dreams. Prathi kshana nin jothe kaldhidhu maryak agdhe ero asht huch agidhe, Uh were a day dream to me every song would hum ur name every detail would draw me to you. Those rainy days and romantic walk lil walk meaning our everything my cycle being our ratha 💕 Its been the golden period of our bound.",
        "image": "/images/st_francis_pu.jpg",
        "quote": "The kind of Love that felt like a movie even if it was just lunch breaks and long texts"
      },
      {
        "id": "c93b7a1d-8e4f-4b2c-9a1d-5c6e7f8a9b0c",
        "title": "Classroom Secrets",
        "description": "The golden days weren't just about innocent walks and lectures. In those quiet, stolen moments inside empty classrooms, our playful and passionate side came alive. The way you would quickly shift your uniform to tease me with a beautiful, naughty flash of your bare skin, and I’d excitedly share my own intimate reveals in return. It was our heart-racing little game—a secret, thrilling connection shared just between us before the halls filled up again. A perfect, fiery mix of sweet romance and growing desire.",
        "image": "/images/pu_empty_class.jpg",
        "quote": "A secret world of playful teasing, hidden right behind the desks of an empty classroom."
      }
    ]
  },
  {
    "id": "17b10f61-5067-4c5e-a346-3eb77cd1e074",
    "name": "Giraffe Tution centre",
    "coordinates": [12.934902963538983, 77.61241091957339],
    "memories": [
      {
        "id": "29ba586c-b056-4f2b-83e1-7da13a15f4d0",
        "title": "Romance in the Corners",
        "description": "The venue that witnessed a million butterflies. Reunited after college, sneaking out for kachori and coffee breaks. Every walk after tuition, every bunk to the mall, and every little challenge we faced—this place is completely quenched with our love.",
        "image": "/images/giraffe_tuition.jpg",
        "quote": "Love brewed between lectures and evening coffees."
      },
      {
        "id": "b82f9e4c-1d7a-4c3b-9e2f-5a6b7c8d9e0f",
        "title": "Stairwell Secrets",
        "description": "The real thrill of the tuition building was what we did in the shadows. Sneaking into the empty lift or pulling you into a dark, secluded corner on the stairs, the adrenaline was intoxicating. The rush of pulling your top down to suck your breasts, slipping my fingers wet and deep inside you, or feeling your warm mouth wrap around me for a quick, sloppy blowjob while praying no one would walk by. Pure, electric heat and unadulterated lust hidden right out in the open.",
        "image": "/images/giraffe_stairs.jpg",
        "quote": "The hottest thrills were the ones we stole in the dark, quiet corners of the stairwell."
      }
    ]
  },
  {
    "id": "e935650b-64e4-4797-a78e-e0ed51a22521",
    "name": "Cycle Rides",
    "coordinates": [12.936469136322064, 77.61455289722075],
    "memories": [
      {
        "id": "9cf1086f-74ce-4e3a-bd80-133296698dd0",
        "title": "Spokes spinning,Hearts racing",
        "description": "Those cycles riding we went on etching our love on every road we rode, Nenna nan arms madhe me leading our ways, preethi ali kaldogthidhe ninna hang kursi karkond hogo ahhh kushi no prathi dinna nenp aguthe. 😊 Enna i wanna relive them kane. RETEO love kinda feel ur presence brightening my soul. These ride hold a really special place 💖",
        "image": "/images/cycle_rides.jpg",
        "quote": "The road streched endlessly, but time stood still with you on my cycle."
      }
    ]
  },
  {
    "id": "cfbd079e-0fc8-4ed3-8429-c83ce08e383e",
    "name": "Sapna Book house",
    "coordinates": [12.93641178535703, 77.61645597322531],
    "memories": [
      {
        "id": "463672f7-ed3d-424c-8a7a-56d0feb89679",
        "title": "Pages of Us",
        "description": "Stopping for stationery on our way from tuition, but my favorite story was unfolding right beside me. Wandering through the aisles, surrounded by thousands of books, I knew our love story was the most beautiful one ever written.",
        "image": "/images/sapna_bookhouse.jpg",
        "quote": "Among all the stories in the world, ours is my favorite."
      }
    ]
  },
  {
    "id": "e2db4ebb-e91d-4ed4-8068-c504bcfb45c1",
    "name": "Centro mall",
    "coordinates": [12.916629171942214, 77.59234671043451],
    "memories": [
      {
        "id": "fe10d23b-d727-4b96-b430-f93629cc185c",
        "title": "Our Hangout Haven",
        "description": "Escaping the routine near NHCE, finding our own little corners in the mall just to spend a few more hours together. Those casual hangouts were the highlight of my days.",
        "image": "/images/centro_mall.jpg",
        "quote": "Time spent doing nothing with you is time beautifully spent."
      }
    ]
  },
  {
    "id": "81d3bae0-c58a-4098-bb84-87bd4bb1ea61",
    "name": "Christ College",
    "coordinates": [12.934690986363215, 77.60590778990831],
    "memories": [
      {
        "id": "8d22e17f-f924-483a-a26d-ba4d46c2785a",
        "title": "Post-Exam Relief",
        "description": "Meeting up right after our board exams. The weight of the world melted away the second I saw your smile. The exams were challenging, but the reward of holding you made it all worth it.",
        "image": "/images/christ_college.jpg",
        "quote": "You were the calm after the hardest storms."
      }
    ]
  },
  {
    "id": "3cf57ae7-ddf4-455a-ba89-78221f5745cf",
    "name": "St.Josephs college",
    "coordinates": [12.962425131611521, 77.59651436028976],
    "memories": [
      {
        "id": "28f8efa6-ae86-4241-a3b2-824068f3cca3",
        "title": "Degree Days",
        "description": "My degree college, marking a new chapter. Through all the academic challenges and schedule struggles, you were my anchor, proving our bond only grows stronger with time.",
        "image": "/images/st_josephs.jpg",
        "quote": "Growing up alongside you has been my greatest privilege."
      }
    ]
  },
  {
    "id": "c0d145a4-0e39-4bad-9fca-95f93a87ec15",
    "name": "Lalbagh",
    "coordinates": [12.95128837969613, 77.58537215507184],
    "memories": [
      {
        "id": "3da44dd8-756c-4edf-9d07-262dc43d4947",
        "title": "Our First Real Meeting",
        "description": "Our very first official meet after all the house struggles. Walking among the blooming flowers of Lalbagh, the world finally felt right again because my greatest treasure was holding my hand.",
        "image": "/images/lalbagh.jpg",
        "quote": "After the storm, love blossomed under the open sky."
      }
    ]
  },
  {
    "id": "c31b5b21-499c-4796-a2dc-2b19982e0ed4",
    "name": "St.Marys Basilica, Shivaginagar",
    "coordinates": [12.984279903864286, 77.6044699537223],
    "memories": [
      {
        "id": "a0879cdd-4a28-4373-a89e-a4114614c58f",
        "title": "With My Love in the Divine Presence",
        "description": "The warm glow of the candles mirrored the softness in your eyes, and the stained glass above seemed to paint blessings across your face. In that holy silence, I didn’t need to speak — because love was already praying through my soul.",
        "image": "/images/st_marys.jpg",
        "quote": "In the presence of the divine, our hearts aligned — not just in love, but in something eternal. That day, we were not just together; we were blessed into forever."
      }
    ]
  },
  {
    "id": "05a98a83-eeff-45c9-95a1-68672ca6ba75",
    "name": "Cubbon park",
    "coordinates": [12.977620011288474, 77.59759322776674],
    "memories": [
      {
        "id": "144991db-ef81-421b-8981-3e77b50335a6",
        "title": "Nature's Embrace",
        "description": "A lovely time together, lost in the greenery and the morning traffic forgotten. Beneath the canopy of those ancient trees, time stood perfectly still just for us, Chinni.",
        "image": "/images/cubbon_park.jpg",
        "quote": "Lost in the woods, but found in your eyes."
      }
    ]
  },
  {
    "id": "23a7e5a2-7bb2-42fd-b080-cd7349aa4ab6",
    "name": "Bal bhavan",
    "coordinates": [12.976912431521002, 77.59658108063024],
    "memories": [
      {
        "id": "df10e837-5b48-4d21-bc30-87fe0c0a6af3",
        "title": "Childlike Joy",
        "description": "Sharing giggles on the toy train ride, watching the pure excitement on your face. It reminded me that our love keeps the innocent, childlike joy alive in both our hearts.",
        "image": "/images/bal_bhavan.jpg",
        "quote": "Love is just riding life’s rollercoasters and toy trains together."
      }
    ]
  },
  {
    "id": "68fbaa6c-e6dd-43c0-9318-1dc9af41170d",
    "name": "New Horizon College of Engineering",
    "coordinates": [12.93374765303481, 77.69177592733625],
    "memories": [
      {
        "id": "ea36cd92-f435-41c5-a7d8-8c512b054083",
        "title": "New Beginnings at NHCE",
        "description": "The switch from degree to engineering. Sneaking around campus just to catch a glimpse of you, reminding me that no matter where my career takes me, you are my ultimate destination.",
        "image": "/images/nhce.jpg",
        "quote": "Building a future, one stolen glance at a time."
      }
    ]
  },
  {
    "id": "a919198a-3c8e-44f7-8e9c-2beb4b8b66b5",
    "name": "First bike ride around NHCE",
    "coordinates": [12.932120905062199, 77.69185484960774],
    "memories": [
      {
        "id": "d2586c6f-b9a4-48d4-ab0c-0dd3f2313a0e",
        "title": "First Borrowed Ride",
        "description": "A borrowed bike from a friend, but the memories were all ours. With the wind in our hair and your arms wrapped tightly around me, our first bike ride felt like absolute freedom and pure magic.",
        "image": "/images/first_bike_ride.jpg",
        "quote": "The road was short, but the memory stretches into forever."
      }
    ]
  },
  {
    "id": "614bce9a-a36e-47d8-9c91-80e4366653c9",
    "name": "Agara Jaganath Temple",
    "coordinates": [12.92406575253915, 77.6507320855773],
    "memories": [
      {
        "id": "f190ba91-cda1-4336-b369-7e38e7b6bbbd",
        "title": "Those temple stairs didn’t just carry our feet — they lifted our love into something divine",
        "description": "A date fresh in our hearts. Those lil talk and walks we took. The time spent felt it was our world, the unexpected match of our dress, The walk into the temple hlding your hand. The nervous step i kept to match Yours. The way you said 'Kelkond ede nanna muddu na jothe baro thara madu'..... that sprak in ur eyes was the satisfaction in my eyes. It was a day meant for us ❤️😌✨",
        "image": "/images/agara_temple.jpg",
        "quote": "In every step we climbed, love itself awakened — as if the temple breathed life into what we already held in our hearts."
      }
    ]
  },
  {
    "id": "39005ea7-ee9b-4834-b04b-0f60d557ed67",
    "name": "Divinity mall",
    "coordinates": [12.940533216161914, 77.52479647227882],
    "memories": [
      {
        "id": "ecf4edc1-000c-4bf7-a8a7-da2a0d187174",
        "title": "Theater Glances",
        "description": "Watching 'Devara' with your friend. While the movie played on the screen, my eyes kept finding their way to you in the dark theater. Your smile was the real showstopper.",
        "image": "/images/divinity_mall.jpg",
        "quote": "In a room full of action, my eyes were only on you."
      }
    ]
  },
  {
    "id": "0eef239e-8f2c-40f6-a231-1b77350e5ea4",
    "name": "Double decker bike ride",
    "coordinates": [12.906404649689822, 77.58059158025182],
    "memories": [
      {
        "id": "eaddf9b2-bfc9-4f57-bf59-5620d728f089",
        "title": "Cruising the New Roads",
        "description": "Riding on the newly built road you loved so much. The perfect evening, the cool breeze, and the perfect girl holding onto me tight. It felt like we were flying.",
        "image": "/images/double_decker.jpg",
        "quote": "Every new road is better when you're the one riding with me."
      }
    ]
  },
  {
    "id": "8fc51f24-a09d-492b-b64a-a624e6a0238e",
    "name": "Olive Street Café",
    "coordinates": [12.912539756807897, 77.65340213314585],
    "memories": [
      {
        "id": "e663f49e-7acc-406d-8909-42182250b56f",
        "title": "Our First Café Date",
        "description": "Sipping coffee across from each other on our first official café date. The ambiance was beautiful, but nothing could compare to getting lost in the deep warmth of your eyes.",
        "image": "/images/olive_cafe.jpg",
        "quote": "A cup of coffee and a lifetime of love brewing."
      }
    ]
  },
  {
    "id": "eef18466-4fac-4d97-a692-e94115d1df7b",
    "name": "Commercial street",
    "coordinates": [12.98214276959929, 77.60854835308056],
    "memories": [
      {
        "id": "36c23653-edc0-4910-8f2a-22b0a95bb023",
        "title": "Lost in the Crowd",
        "description": "Roaming and chilling in the vibrant, bustling streets. In a sea of people, neon lights, and endless shops, feeling your hand slip into mine made the whole world slow down.",
        "image": "/images/commercial_street.jpg",
        "quote": "In the midst of noise, it was your hand in mine that brought me peace."
      }
    ]
  },
  {
    "id": "092bd6bb-ffb1-427b-abb2-dea017c857ea",
    "name": "National college",
    "coordinates": [12.951002255785006, 77.57324568717227],
    "memories": [
      {
        "id": "7e9ba08c-a90a-4f80-91f5-6498675eabfb",
        "title": "Frequent Visits",
        "description": "Your college, and my absolute favorite destination. Those frequent visits just to meet you proved that no distance or busy schedule could ever keep me away from my Chinni.",
        "image": "/images/national_college.jpg",
        "quote": "Any route is the scenic route if it leads me to you."
      }
    ]
  },
  {
    "id": "2a4d4b1a-8c3b-4c2d-9a1b-3c4d5e6f7a8b",
    "name": "Kadle Parshe",
    "coordinates": [12.94029870371755, 77.56672494838847],
    "memories": [
      {
        "id": "1b2c3d4e-5f6a-7b8c-9d0e-1f2a3b4c5d6e",
        "title": "Festive Love",
        "description": "The iconic groundnut fair in Basavanagudi. Sharing the joy, the vibrant lights, and the roasted peanuts with you made a beautiful tradition feel intimately ours.",
        "image": "/images/kadle_parshe.jpg",
        "quote": "Lights, laughter, and my love walking right beside me."
      }
    ]
  },
  {
    "id": "3b5e5c2b-9d4c-5d3e-0b2c-4d5e6f7a8b9c",
    "name": "HAL History Museum",
    "coordinates": [12.954696810408747, 77.68073413428392],
    "memories": [
      {
        "id": "2c3d4e5f-6a7b-8c9d-0e1f-2a3b4c5d6e7f",
        "title": "Awe and Aeronautics",
        "description": "Wandering through the aeronautics museum together. Looking at the majestic planes was awesome, but catching you staring at me in wonder was the real breathtaking view.",
        "image": "/images/hal_museum.jpg",
        "quote": "Exploring the skies, grounded by your love."
      }
    ]
  },
  {
    "id": "4c6f6d3c-0e5d-6e4f-1c3d-5e6f7a8b9c0d",
    "name": "Private Retreat",
    "coordinates": [12.921147521969814, 77.66425012599109],
    "memories": [
      {
        "id": "3d4e5f6a-7b8c-9d0e-1f2a-3b4c5d6e7f8a",
        "title": "Raw Release",
        "description": "Finally behind closed doors after all the house struggles, we didn't hold back at all. We stripped away our clothes and fell right into the sheets. The raw sex was exactly what we had been craving. Feeling your bare legs wrap tight around me as our bodies moved together, sweating and chasing that intense climax, was absolute perfection.",
        "image": "/images/private_retreat_1.jpg",
        "quote": "Nothing between us but skin, sweat, and pure sexual heat."
      },
      {
        "id": "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
        "title": "Unwrapping the Green Saree",
        "description": "I asked you to wear that stunning green saree, and seeing the way it hugged your curves drove me completely insane. Slowly unwrapping those yards of fabric to reveal your bare skin underneath was the ultimate tease. Fucking you with that gorgeous green silk tangled around our sweaty bodies made the sex feel incredibly primal, passionate, and deeply possessive.",
        "image": "/images/private_retreat_saree.jpg",
        "quote": "Unwrapping you like the ultimate prize, lost in the folds of silk and raw desire."
      },
      {
        "id": "f6e5d4c3-b2a1-4098-b7c6-d5e4f3a2b1c0",
        "title": "Blindfolded Anticipation",
        "description": "You took complete control that day, Chinni. Blindfolding me so I couldn't see, I could only feel you stripping down to that matching bra and panty set. Feeling you straddle me, slowly grinding and teasing my body while I was completely at your mercy, sent my anticipation through the roof. The intense heat of your wetness and the tight, commanding way you sat on me and rode me made it a mind-blowing session.",
        "image": "/images/private_retreat_blindfold.jpg",
        "quote": "Robbed of my sight, every touch from you felt like a bolt of lightning."
      },
      {
        "id": "11223344-5566-4778-99aa-bbccddeeff00",
        "title": "Shower Surrender",
        "description": "We couldn't even make it to the bed for this round. Dragging each other into the shower, the hot water beating down on our naked bodies only fueled the intense fire between us. Pressing you against the slick, wet tiles, feeling your legs wrap tight around my waist as I thrusted deep inside you. Slippery, wet, and incredibly raw—it was pure, unfiltered lust.",
        "image": "/images/private_retreat_shower.jpg",
        "quote": "Hot water and hotter bodies, completely consumed by the rush."
      },
      {
        "id": "aabbccdd-eeff-4112-2334-455667788990",
        "title": "Morning Heat",
        "description": "There is nothing quite like waking up to the warmth of your naked body pressed heavily against mine. Before we even spoke a word, my hands were exploring your curves. Slow, deep, and incredibly intimate morning sex, feeling every sleepy moan and tight squeeze as we slowly built up to a perfect, trembling climax. The absolute best way to start the day.",
        "image": "/images/private_retreat_morning.jpg",
        "quote": "Waking up inside my favorite dream, with you completely wrapped around me."
      }
    ]
  },
  {
    "id": "5d7a7e4d-1f6e-7f5a-2d4e-6f7a8b9c0d1e",
    "name": "LuLu Mall",
    "coordinates": [12.981551577142213, 77.56368374962982],
    "memories": [
      {
        "id": "4e5f6a7b-8c9d-0e1f-2a3b-4c5d6e7f8a9b",
        "title": "Movie Magic",
        "description": "Wandering the grand aisles of the mall hand in hand before settling in to watch Moana 2. Roaming together, creating our own little adventure before watching one on screen.",
        "image": "/images/lulu_mall.jpg",
        "quote": "Every adventure is better with you as my co-star."
      }
    ]
  },
  {
    "id": "6e8b8f5e-2a7f-8a6b-3e5f-7a8b9c0d1e2f",
    "name": "Visvesvaraya Museum",
    "coordinates": [12.975182861850374, 77.59664717475727],
    "memories": [
      {
        "id": "5f6a7b8c-9d0e-1f2a-3b4c-5d6e7f8a9b0c",
        "title": "Curiosity and Us",
        "description": "Revisiting the iconic museum from our PU days. We explored the wonders of science, but nothing was more fascinating than the undeniable chemistry lingering between us.",
        "image": "/images/visvesvaraya_museum.jpg",
        "quote": "Science explains the world, but only the heart explains us."
      }
    ]
  },
  {
    "id": "7f9c9a6f-3b8a-9b7c-4f6a-8b9c0d1e2f3a",
    "name": "Aquarium",
    "coordinates": [12.976568768115545, 77.5986132819016],
    "memories": [
      {
        "id": "6a7b8c9d-0e1f-2a3b-4c5d-6e7f8a9b0c1d",
        "title": "Ocean Eyes",
        "description": "Taking my sweet nature lover to the aquarium. Watching your eyes light up at the colorful marine life, I realized you are the most beautiful, captivating wonder I will ever see.",
        "image": "/images/aquarium.jpg",
        "quote": "Diving deep into love every time I look at you."
      }
    ]
  },
  {
    "id": "8a0d0b7a-4c9b-0c8d-5a7b-9c0d1e2f3a4b",
    "name": "Cubbon Park Boating",
    "coordinates": [12.978674853748792, 77.59671250485839],
    "memories": [
      {
        "id": "7b8c9d0e-1f2a-3b4c-5d6e-7f8a9b0c1d2e",
        "title": "Rowing Together",
        "description": "The gentle ripples of the water during our boating ride after Bal Bhavan. It was peaceful, calm, and utterly romantic—just me, you, and the quiet rhythm of the water.",
        "image": "/images/cubbon_boating.jpg",
        "quote": "Drifting gently, anchored only by your love."
      }
    ]
  },
  {
    "id": "9b1e1c8b-5d0c-1d9e-6b8c-0d1e2f3a4b5c",
    "name": "Cool Joint Jayanagar",
    "coordinates": [12.928652709586048, 77.585536197928],
    "memories": [
      {
        "id": "8c9d0e1f-2a3b-4c5d-6e7f-8a9b0c1d2e3f",
        "title": "Sweet Cravings",
        "description": "Taking you for that mango shake you were craving so badly. There’s absolutely nothing sweeter than fulfilling your little wishes and seeing that radiant, satisfied smile.",
        "image": "/images/cool_joint.jpg",
        "quote": "Your smile is the sweetest treat of all."
      }
    ]
  },
  {
    "id": "ac2f2d9c-6e1d-2e0f-7c9d-1e2f3a4b5c6d",
    "name": "Ramadevara Betta",
    "coordinates": [12.7214, 77.2965],
    "memories": [
      {
        "id": "9d0e1f2a-3b4c-5d6e-7f8a-9b0c1d2e3f4a",
        "title": "First Long Drive",
        "description": "Our very first long drive on the bike on June 4th, 2025. A late birthday gift for you that became a core memory for us both. The open road, the breeze, and your arms wrapped around me tight.",
        "image": "/images/ramadevara_betta.jpg",
        "quote": "The journey matters most when you are my destination."
      }
    ]
  },
  {
    "id": "bd3a3ead-7f2e-3f1a-8d0e-2f3a4b5c6d7e",
    "name": "Ragihalli Forest Trail",
    "coordinates": [12.7845, 77.5643],
    "memories": [
      {
        "id": "0e1f2a3b-4c5d-6e7f-8a9b-0c1d2e3f4a5b",
        "title": "Green Canopy Drive",
        "description": "The lush, green-filled road in out birthday gift long drive that you loved so much. The beautiful forest trail mirrored the blooming, endless nature of our beautiful love.",
        "image": "/images/ragihalli_forest.jpg",
        "quote": "Riding through nature, completely lost in you."
      }
    ]
  },
  {
    "id": "ce4b4fbe-8a3f-4a2b-9e1f-3a4b5c6d7e8f",
    "name": "Manchanabele Dam",
    "coordinates": [12.8767, 77.3340],
    "memories": [
      {
        "id": "1f2a3b4c-5d6e-7f8a-9b0c-1d2e3f4a5b6c",
        "title": "Waterside Serenity",
        "description": "Our second picturesque stop after Ramadevara Betta. Standing by the expansive, calm waters with the gentle breeze brushing against us made for a picture-perfect moment together.",
        "image": "/images/manchanabele_dam.jpg",
        "quote": "Still waters run deep, just like the love I hold for you."
      },
      {
        "id": "a5b6c7d8-e9f0-1a2b-3c4d-5e6f7a8b9c0d",
        "title": "Lakeside Heat",
        "description": "We sat down on the bank for a quiet lunch, but my appetite quickly shifted entirely to you. I started squeezing and playing with your breasts right there in the open air. The thrill of it turned you on so much that you didn't even care—you just impulsively stripped off your top and pushed your bare breasts right into my mouth. The rush of your urgent desire and tasting your hot skin by the water completely took over our afternoon.",
        "image": "/images/manchanabele_lunch.jpg",
        "quote": "A quiet lunch by the bank turned into a breathless, open-air feast of bare skin and raw desire."
      }
    ]
  },
  {
    "id": "df5c5acf-9b4a-5b3c-0f2a-4b5c6d7e8f9a",
    "name": "Janapada Loka",
    "coordinates": [12.6953, 77.3204],
    "memories": [
      {
        "id": "2a3b4c5d-6e7f-8a9b-0c1d-2e3f4a5b6c7d",
        "title": "Cultural Break",
        "description": "A well-deserved short trip from Bangalore for a refreshing break. Soaking in the rich folk culture and art, while happily soaking in every second of each other's presence.",
        "image": "/images/janapada_loka.jpg",
        "quote": "Every getaway feels like a honeymoon when I’m with you."
      }
    ]
  },
  {
    "id": "ea6d6bdf-ac5b-6c4d-1a3b-5c6d7e8f9a0b",
    "name": "Champakadhama Betta",
    "coordinates": [12.8080, 77.5804],
    "memories": [
      {
        "id": "3b4c5d6e-7f8a-9b0c-1d2e-3f4a5b6c7d8e",
        "title": "New Year, New Heights",
        "description": "A special New Year ride representing fresh beginnings and new starts. Scaling the heights of the hill together, making a promise to make this year our most beautiful one yet.",
        "image": "/images/champakadhama_betta.jpg",
        "quote": "Starting the year exactly where I belong—by your side."
      },
      {
        "id": "c1d2e3f4-a5b6-4c7d-8e9f-0a1b2c3d4e5f",
        "title": "Hillside Exposure",
        "description": "Wandering to the secluded backside of the hill, our quiet escape turned wildly intimate. Away from any prying eyes, I stripped your top completely off. With your pants pushed down to your knees and your chest exposed to the open air, you stood there stunningly semi-naked. The intense contrast of the cool, sweeping breeze against your bare skin and the raw, burning heat between us made that moment completely unforgettable.",
        "image": "/images/champakadhama_breeze.jpg",
        "quote": "Standing semi-naked in the sweeping breeze, our raw body heat was the only thing that mattered."
      }
    ]
  },
  {
    "id": "fb7e7ce0-bd6c-7d5e-2b4c-6d7e8f9a0b1c",
    "name": "Bannerghatta Forest",
    "coordinates": [12.8009, 77.5777],
    "memories": [
      {
        "id": "4c5d6e7f-8a9b-0c1d-2e3f-4a5b6c7d8e9f",
        "title": "Wild and Exposed",
        "description": "Hidden deep in the shady canopy, the wild thrill of being exposed outdoors completely took over. We stripped down right there in the forest. Having sex beneath the trees, feeling your bare skin against the earth and the deep, wet heat of you with every thrust, was intensely hot. A raw, primal rush of sexual pleasure in the wild.",
        "image": "/images/bannerghatta_forest.jpg",
        "quote": "Fucking out in the open, fueled by the primal thrill of getting caught."
      }
    ]
  },
  {
    "id": "0c8f8df1-ce7d-8e6f-3c5d-7e8f9a0b1c2d",
    "name": "Bannerghatta Zoo",
    "coordinates": [12.8009, 77.5777],
    "memories": [
      {
        "id": "5d6e7f8a-9b0c-1d2e-3f4a-5b6c7d8e9f0a",
        "title": "Birthday Safari",
        "description": "The perfect birthday date for my special day. Walking hand in hand, discovering the animals, and making the most beautifully wild memories with my favorite person on earth.",
        "image": "/images/bannerghatta_zoo.jpg",
        "quote": "The best gift I could ever ask for was your time."
      }
    ]
  },
  {
    "id": "1d9a9e02-df8e-9f7a-4d6e-8f9a0b1c2d3e",
    "name": "Artic Ice Creams RR Nagar",
    "coordinates": [12.9274, 77.5156],
    "memories": [
      {
        "id": "6e7f8a9b-0c1d-2e3f-4a5b-6c7d8e9f0a1b",
        "title": "Midnight Cravings",
        "description": "Taking you on a spontaneous long drive just because you craved ice cream. I would drive to the absolute ends of the earth just to taste the cold sweetness melting on your warm lips.",
        "image": "/images/artic_icecreams.jpg",
        "quote": "Sweet cravings matched only by my craving for you."
      }
    ]
  },
  {
    "id": "2e0b0f13-ea9f-0a8b-5e7f-9a0b1c2d3e4f",
    "name": "NICE Road",
    "coordinates": [12.8524, 77.5451],
    "memories": [
      {
        "id": "7f8a9b0c-1d2e-3f4a-5b6c-7d8e9f0a1b2c",
        "title": "Evening Glide",
        "description": "A slow, mesmerizing ride through the evening on NICE road. The brilliant sunset hues, the empty stretch of highway, and the comforting heat of you pressed gently against my back.",
        "image": "/images/nice_road.jpg",
        "quote": "The perfect road is the one we travel together."
      }
    ]
  },
  {
    "id": "3f1c1a24-fb0a-1b9c-6f8a-0b1c2d3e4f5a",
    "name": "Regal Suite at Thilak Nagar",
    "coordinates": [12.9238, 77.5937],
    "memories": [
      {
        "id": "8a9b0c1d-2e3f-4a5b-6c7d-8e9f0a1b2c3d",
        "title": "Our First Time",
        "description": "The unforgettable day of our first truly private date—the very first time I entered you. Standing completely naked, I kissed and tasted every single inch of your bare body from top to bottom. Sliding deep inside you for the first time was an indescribable rush of pure pleasure. The heat of your tight grip around me as we made love is a high I will never forget.",
        "image": "/images/regal_suite.jpg",
        "quote": "The incredible high of finally claiming your body and feeling you take all of me."
      }
    ]
  },
  {
    "id": "4a2d2b35-0c1b-2c0d-7a9b-1c2d3e4f5a6b",
    "name": "Mysore Palace",
    "coordinates": [12.3051, 76.6551],
    "memories": [
      {
        "id": "9b0c1d2e-3f4a-5b6c-7d8e-9f0a1b2c3d4e",
        "title": "Royal Journey",
        "description": "Our first trip to Mysore together on a bus. Sitting beside you, feeling the excitement of a new city, I felt like royalty simply because I had my majestic queen right beside me.",
        "image": "/images/mysore_palace.jpg",
        "quote": "You are the queen of my heart's kingdom."
      }
    ]
  },
  {
    "id": "5b3e3c46-1d2c-3d1e-8b0c-2d3e4f5a6b7c",
    "name": "St. Philomena's Church",
    "coordinates": [12.3207, 76.6586],
    "memories": [
      {
        "id": "0c1d2e3f-4a5b-6c7d-8e9f-0a1b2c3d4e5f",
        "title": "Holy Whispers",
        "description": "Roaming through the towering, majestic halls of St. Philomena's during our Mysore trip. A quiet moment of pure grace and silent gratitude for the universe bringing us together.",
        "image": "/images/philomenas_church.jpg",
        "quote": "Our love is the greatest blessing I could ever pray for."
      }
    ]
  },
  {
    "id": "6c4f4d57-2e3d-4e2f-9c1d-3e4f5a6b7c8d",
    "name": "Mysore Private Date",
    "coordinates": [12.3050, 76.6550],
    "memories": [
      {
        "id": "1d2e3f4a-5b6c-7d8e-9f0a-1b2c3d4e5f6a",
        "title": "Sheer Tease",
        "description": "You drove me absolutely crazy standing there in that transparent outfit, your bare lingerie teasing me right through the sheer fabric. You looked incredibly hot and seductive holding that rose. We ripped those clothes off, ending in a hard, passionate session of sweaty sex, completely devouring each other in that room.",
        "image": "/images/mysore_pvt.jpg",
        "quote": "A transparent tease that ended in a completely naked, sweaty surrender."
      }
    ]
  },
  {
    "id": "7d5a5e68-3f4e-5f3a-0d2e-4f5a6b7c8d9e",
    "name": "Mysore National History Museum",
    "coordinates": [12.3021, 76.6661],
    "memories": [
      {
        "id": "2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b",
        "title": "A Walk Through Time",
        "description": "Continuing our roaming through the heritage of Mysore. Discovering the ancient history enclosed in the museum while actively creating an unforgettable, timeless legacy of our own.",
        "image": "/images/mysore_museum.jpg",
        "quote": "Making history, one beautiful memory at a time."
      }
    ]
  },
  {
    "id": "8e6b6f79-4a5f-6a4b-1e3f-5a6b7c8d9e0f",
    "name": "Gundamagere Kere Viewpoint",
    "coordinates": [13.2500, 77.5500],
    "memories": [
      {
        "id": "3f4a5b6c-7d8e-9f0a-1b2c-3d4e5f6a7b8c",
        "title": "Naked by the Lake",
        "description": "A total escape where we could just strip down and be completely naked by the calm lake bank. The thrill of having sex right there in the open, the cool breeze hitting our heated, sweaty bodies as we rode out our climaxes together, was incredibly refreshing. Unfiltered, deeply sexual intimacy out in the open air.",
        "image": "/images/gundamagere_kere.jpg",
        "quote": "Completely bare by the water, our bodies moving as naturally as the waves."
      }
    ]
  },
  {
    "id": "9f7c7a80-5b6a-7b5c-2f4a-6b7c8d9e0f1a",
    "name": "VV Puram Food Street",
    "coordinates": [12.9521, 77.5750],
    "memories": [
      {
        "id": "4a5b6c7d-8e9f-0a1b-2c3d-4e5f6a7b8c9d",
        "title": "Flavors of Love",
        "description": "Sharing a steaming plate of corn masala amidst the delicious, aromatic chaos of the food street. The spice of the food was absolutely perfect, mirroring the fiery spark between us.",
        "image": "/images/vv_puram.jpg",
        "quote": "Life is delicious, especially when shared with you."
      }
    ]
  },
  {
    "id": "0a8d8b91-6c7b-8c6d-3a5b-7c8d9e0f1a2b",
    "name": "Nexus Mall",
    "coordinates": [12.9345, 77.6111],
    "memories": [
      {
        "id": "5b6c7d8e-9f0a-1b2c-3d4e-5f6a7b8c9d0e",
        "title": "Sweet Escapes",
        "description": "Our frequent, thrilling bunks from tuition to escape into the air-conditioned aisles of Nexus mall. Stolen hours of window shopping and holding your hand when we probably should have been studying.",
        "image": "/images/nexus_mall.jpg",
        "quote": "The best lessons I learned were the ones while skipping class with you."
      },
      {
        "id": "d74e8f1a-3c2b-4b9d-8a5f-1e6c7d9b0a2f",
        "title": "Fitting Room Rush",
        "description": "Bunking tuition took a wildly hot turn when we slipped into that cramped trial room together. The intense adrenaline of sneaking around and trying to stay quiet made every touch feel electric. Pressing you against the mirror, stripping down hurriedly among the hanging clothes, and having quick, breathless sex right there in the shop. A sudden, intensely hot rush of pure desire hidden behind a single locked door.",
        "image": "/images/nexus_trial_room.jpg",
        "quote": "The ultimate thrill wasn't just skipping class, but taking you right there behind a locked door."
      }
    ]
  },
  {
    "id": "e4b3c2d1-f5a6-7b8c-9d0e-1f2a3b4c5d6e",
    "name": "RG Suites Sarjapur",
    "coordinates": [12.9224, 77.6833],
    "memories": [
      {
        "id": "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
        "title": "The Cafe Escalation",
        "description": "What started as a normal cafe date turned into something completely unexpected. The tension boiled over, and the second we got to the room, I took you hard and raw. No slow build-up, no waiting—just an explosive, intense release that caught us both completely off guard.",
        "image": "/images/rg_suites_cafe.jpg",
        "quote": "An unexpected spark that ignited into raw heat the second the door closed."
      },
      {
        "id": "2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
        "title": "The Afternoon Ritual",
        "description": "Our absolute favorite routine after sneaking away from classes. Getting in, freshening up, and then pulling you into a warm, naked cuddle. Having you sit on me as we slowly transitioned from sweet affection to deep, burning lust.",
        "image": "/images/rg_suites_cuddle.jpg",
        "quote": "The perfect transition from a sweet embrace to complete surrender."
      },
      {
        "id": "3c4d5e6f-7a8b-9c0d-1e2f-3a4b5c6d7e8f",
        "title": "Slow Tease",
        "description": "I loved taking my time with you, Chinni. Slowly grabbing and squeezing your breasts, playing with you and teasing you until you couldn't take it anymore. Lifting your top off to expose your skin and claiming you right there.",
        "image": "/images/rg_suites_tease.jpg",
        "quote": "Building the fire slowly, touch by agonizingly slow touch."
      },
      {
        "id": "4d5e6f7a-8b9c-0d1e-2f3a-4b5c6d7e8f9a",
        "title": "Uncovering You",
        "description": "The intoxicating rush of placing hot, wet kisses all down your neck. Reaching around to unclasp your bra, tossing it aside, and finally setting your breasts free for my hands and mouth to explore completely.",
        "image": "/images/rg_suites_neck.jpg",
        "quote": "Stripping away the layers until there was nothing left to hide."
      },
      {
        "id": "5e6f7a8b-9c0d-1e2f-3a4b-5c6d7e8f9a0b",
        "title": "Taste and Touch",
        "description": "The taste of your skin and the intense heat of your body. Sucking your breasts and feeling you arch into me with every pull. Slipping my fingers deep inside you, feeling how incredibly wet you were for me as I finally pulled your pants off.",
        "image": "/images/rg_suites_touch.jpg",
        "quote": "Tasting every inch, feeling you melt right into my hands."
      },
      {
        "id": "6f7a8b9c-0d1e-2f3a-4b5c-6d7e8f9a0b1c",
        "title": "Raw Connection",
        "description": "The intense rush of finally penetrating you, sliding deep inside with absolutely nothing between us. The first of those deeply raw moments where we completely lost ourselves in the slick friction and body heat.",
        "image": "/images/rg_suites_raw1.jpg",
        "quote": "Skin to skin, completely unfiltered and deeply connected."
      },
      {
        "id": "7a8b9c0d-1e2f-3a4b-5c6d-7e8f9a0b1c2d",
        "title": "Unfiltered Heat",
        "description": "Another time we just needed it completely raw. The primal feeling of your tight grip around my cock, feeling every single sensation and deeply intimate twitch without any barrier holding us back.",
        "image": "/images/rg_suites_raw2.jpg",
        "quote": "No barriers, just the raw intensity of two bodies moving as one."
      },
      {
        "id": "8b9c0d1e-2f3a-4b5c-6d7e-8f9a0b1c2d3e",
        "title": "Six Rounds of Stamina",
        "description": "Those absolute marathon sessions where time just completely disappeared. Pushing through six incredible rounds of sex, our bodies completely synced, sweating and thrusting together until we had absolutely nothing left to give.",
        "image": "/images/rg_suites_rounds.jpg",
        "quote": "Going until we were completely spent, and then going again."
      },
      {
        "id": "9c0d1e2f-3a4b-5c6d-7e8f-9a0b1c2d3e4f",
        "title": "The College Bunk",
        "description": "The sheer thrill of sneaking away from the college routine. Between 12 and 5, the world outside simply didn't exist. It was just a locked door, tangled sheets, and the heavy adrenaline of hiding away just to fuck all afternoon.",
        "image": "/images/rg_suites_bunk.jpg",
        "quote": "Stolen hours from the real world, spent locked away in ours."
      },
      {
        "id": "0d1e2f3a-4b5c-6d7e-8f9a-0b1c2d3e4f5a",
        "title": "5 PM Exhaustion",
        "description": "The sweet, heavy exhaustion that hits right before 5 PM. After five straight hours of kissing, touching, going raw, and penetrating, laying tangled together completely spent and satisfied before having to get dressed and step back outside.",
        "image": "/images/rg_suites_exhaustion.jpg",
        "quote": "The beautiful exhaustion of an afternoon spent entirely on you."
      }
    ]
  }
];