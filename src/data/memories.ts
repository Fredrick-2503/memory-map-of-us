
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
  coordinates: [number, number]; // [latitude, longitude]
  memories: Memory[];
}

export const memoryLocations: MemoryLocation[] = [
  {
    "id": "60d1b6dd-77a3-45d8-8587-34714cd58d13",
    "name": "St.Francis High School ",
    "coordinates": [
      12.925275371121932,
      77.62915847029555
    ],
    "memories": [
      {
        "id": "962ab38e-45ca-4202-9f3a-d4afe5862f4c",
        "title": "When love was new and everything felt endless",
        "description": "Bound between 4 walls and school corridors, our love bloomed amidst those notebooks. When sharing a bench without a bag in between felt romantic, Lil closeness in class gave butterflies.  Enna nenp edye chinni nin ahh modle blush, Modle nangu, nan eldhe ning athid dinnagalu surprise agi band agi nambok agdhe thapkond edhu. Modlene sparshake mudidhe mugilunage parthi ondu enna achehakidhe. Jagathe thildhe ero yavasighe mudidha preeti edu.  Enna fresh ede \u2014 \"Do uh love me ge\" dare ah antha kelidhu.  Ennu I stare at the window, That bench where our love started.  This is our school, Where every wall is painted with our love, And the bench holds special memories of us.  Nenap ede adith truth or dare, Nenp ede koth ahh modle ne kiss. Nanp ede modlne sparsha.",
        "image": "/.jpg",
        "quote": "Corrider Glances and Stolen time behind school walls"
      }
    ]
  },
  {
    "id": "64589c76-13b9-42d8-9358-d05737e2a6df",
    "name": "St.Francis Composite Pu college",
    "coordinates": [
      12.927304904319707,
      77.63027113586817
    ],
    "memories": [
      {
        "id": "62fb75c4-72ca-42bd-9835-28065e93af8b",
        "title": "When every song felt like ours",
        "description": " Unexpected Union,Unseperable bound. Nan bestie sikidh PU college edu.A First bench idoit with a crazy back bencher\ud83d\ude1c.Golden period with million memories and billion dreams.Prathi kshana nin jothe kaldhidhu maryak agdhe ero asht huch agidhe, Uh were a day dream to me every song would hum ur name every detail would draw me to you.Those rainy days and romantic walk lil walk meaning our everything my cycle being our ratha \ud83d\udc95 Its been the golden period of our bound.",
        "image": "/.jpg",
        "quote": "The kind of Love that felt like a movie even if it was just lunch breaks and long texts"
      }
    ]
  },
  {
    "id": "17b10f61-5067-4c5e-a346-3eb77cd1e074",
    "name": "Giraffe Tution centre",
    "coordinates": [
      12.934902963538983,
      77.61241091957339
    ],
    "memories": [
      {
        "id": "29ba586c-b056-4f2b-83e1-7da13a15f4d0",
        "title": "Romance hidden behind beyond corners",
        "description": "My Loves best venue a place that witnessed a million butterflies.Our unoin again after a short break after college,Those lil snacks breaks around the tuttion.Kachori galu coffee. Those walks after tutions our bunks to mall.Our autrocities in tution.Our 1st challege prathi ondhu witness madid place still quenched with our LOVE \u2764",
        "image": "/.jpg",
        "quote": "Love brewed between lectures and evening coffees"
      }
    ]
  },
  {
    "id": "e935650b-64e4-4797-a78e-e0ed51a22521",
    "name": "Cycle Rides",
    "coordinates": [
      12.936469136322064,
      77.61455289722075
    ],
    "memories": [
      {
        "id": "9cf1086f-74ce-4e3a-bd80-133296698dd0",
        "title": "Spokes spinning,Hearts racing",
        "description": "Those cycles riding we went on etching our love on every road we rode,Nenna nan arms madhe me leading our ways,preethi ali kaldogthidhe ninna hang kursi karkond hogo ahhh kushi no prathi dinna nenp aguthe.\ud83d\ude0aEnna i wanna relive them kane. RETEO love kinda feel ur presence brightening my soul. These ride hold a really special place\ud83d\udc96",
        "image": "/.jpg",
        "quote": "The road streched endlessly,but time stood still with you on my cycle."
      }
    ]
  }
  // {
  //   "id": "cfbd079e-0fc8-4ed3-8429-c83ce08e383e",
  //   "name": "Sapna Book house",
  //   "coordinates": [
  //     12.93641178535703,
  //     77.61645597322531
  //   ],
  //   "memories": [
  //     {
  //       "id": "463672f7-ed3d-424c-8a7a-56d0feb89679",
  //       "title": "1",
  //       "description": "1",
  //       "image": "1",
  //       "date": "1",
  //       "quote": "1"
  //     }
  //   ]
  // },
  // {
  //   "id": "e2db4ebb-e91d-4ed4-8068-c504bcfb45c1",
  //   "name": "Centro mall",
  //   "coordinates": [
  //     12.916629171942214,
  //     77.59234671043451
  //   ],
  //   "memories": [
  //     {
  //       "id": "fe10d23b-d727-4b96-b430-f93629cc185c",
  //       "title": "1",
  //       "description": "11",
  //       "image": "1",
  //       "quote": "1"
  //     }
  //   ]
  // },
  // {
  //   "id": "81d3bae0-c58a-4098-bb84-87bd4bb1ea61",
  //   "name": "Christ College",
  //   "coordinates": [
  //     12.934690986363215,
  //     77.60590778990831
  //   ],
  //   "memories": [
  //     {
  //       "id": "8d22e17f-f924-483a-a26d-ba4d46c2785a",
  //       "title": "1",
  //       "description": "1",
  //       "image": "1",
  //       "date": "1",
  //       "quote": "1"
  //     }
  //   ]
  // },
  // {
  //   "id": "3cf57ae7-ddf4-455a-ba89-78221f5745cf",
  //   "name": "St.Josephs college ",
  //   "coordinates": [
  //     12.962425131611521,
  //     77.59651436028976
  //   ],
  //   "memories": [
  //     {
  //       "id": "28f8efa6-ae86-4241-a3b2-824068f3cca3",
  //       "title": "1",
  //       "description": "1",
  //       "image": "1",
  //       "date": "1",
  //       "quote": "1"
  //     }
  //   ]
  // },
  // {
  //   "id": "c0d145a4-0e39-4bad-9fca-95f93a87ec15",
  //   "name": "Lalbagh",
  //   "coordinates": [
  //     12.95128837969613,
  //     77.58537215507184
  //   ],
  //   "memories": [
  //     {
  //       "id": "3da44dd8-756c-4edf-9d07-262dc43d4947",
  //       "title": "1",
  //       "description": "1",
  //       "image": "1",
  //       "date": "1",
  //       "quote": "1"
  //     }
  //   ]
  // },
  // {
  //   "id": "c31b5b21-499c-4796-a2dc-2b19982e0ed4",
  //   "name": "St.Marys Basilica, Shivaginagar",
  //   "coordinates": [
  //     12.984279903864286,
  //     77.6044699537223
  //   ],
  //   "memories": [
  //     {
  //       "id": "a0879cdd-4a28-4373-a89e-a4114614c58f",
  //       "title": "1",
  //       "description": "1",
  //       "image": "1",
  //       "date": "1",
  //       "quote": "1"
  //     }
  //   ]
  // },
  // {
  //   "id": "05a98a83-eeff-45c9-95a1-68672ca6ba75",
  //   "name": "Cubbon park",
  //   "coordinates": [
  //     12.977620011288474,
  //     77.59759322776674
  //   ],
  //   "memories": [
  //     {
  //       "id": "144991db-ef81-421b-8981-3e77b50335a6",
  //       "title": "1",
  //       "description": "1",
  //       "image": "1",
  //       "date": "1",
  //       "quote": "1"
  //     }
  //   ]
  // },
  // {
  //   "id": "23a7e5a2-7bb2-42fd-b080-cd7349aa4ab6",
  //   "name": "Bal bhavan ",
  //   "coordinates": [
  //     12.976912431521002,
  //     77.59658108063024
  //   ],
  //   "memories": [
  //     {
  //       "id": "df10e837-5b48-4d21-bc30-87fe0c0a6af3",
  //       "title": "1",
  //       "description": "1",
  //       "image": "1",
  //       "date": "1",
  //       "quote": "1"
  //     }
  //   ]
  // },
  // {
  //   "id": "68fbaa6c-e6dd-43c0-9318-1dc9af41170d",
  //   "name": "New Horizon College of Engineering",
  //   "coordinates": [
  //     12.93374765303481,
  //     77.69177592733625
  //   ],
  //   "memories": [
  //     {
  //       "id": "ea36cd92-f435-41c5-a7d8-8c512b054083",
  //       "title": "1",
  //       "description": "1",
  //       "image": "1",
  //       "date": "1",
  //       "quote": "1"
  //     }
  //   ]
  // },
  // {
  //   "id": "a919198a-3c8e-44f7-8e9c-2beb4b8b66b5",
  //   "name": "First bike ride",
  //   "coordinates": [
  //     12.932120905062199,
  //     77.69185484960774
  //   ],
  //   "memories": [
  //     {
  //       "id": "d2586c6f-b9a4-48d4-ab0c-0dd3f2313a0e",
  //       "title": "1",
  //       "description": "1",
  //       "image": "1",
  //       "date": "1",
  //       "quote": "1"
  //     }
  //   ]
  // },
  // {
  //   "id": "614bce9a-a36e-47d8-9c91-80e4366653c9",
  //   "name": "Agara",
  //   "coordinates": [
  //     12.92406575253915,
  //     77.6507320855773
  //   ],
  //   "memories": [
  //     {
  //       "id": "f190ba91-cda1-4336-b369-7e38e7b6bbbd",
  //       "title": "1",
  //       "description": "1",
  //       "image": "1",
  //       "date": "1",
  //       "quote": "1"
  //     }
  //   ]
  // },
  // {
  //   "id": "39005ea7-ee9b-4834-b04b-0f60d557ed67",
  //   "name": "Divinity mall",
  //   "coordinates": [
  //     12.940533216161914,
  //     77.52479647227882
  //   ],
  //   "memories": [
  //     {
  //       "id": "ecf4edc1-000c-4bf7-a8a7-da2a0d187174",
  //       "title": "1",
  //       "description": "1",
  //       "image": "1",
  //       "date": "1",
  //       "quote": "1"
  //     }
  //   ]
  // },
  // {
  //   "id": "0eef239e-8f2c-40f6-a231-1b77350e5ea4",
  //   "name": "Double decker",
  //   "coordinates": [
  //     12.906404649689822,
  //     77.58059158025182
  //   ],
  //   "memories": [
  //     {
  //       "id": "eaddf9b2-bfc9-4f57-bf59-5620d728f089",
  //       "title": "1",
  //       "description": "1",
  //       "image": "1",
  //       "date": "1",
  //       "quote": "1"
  //     }
  //   ]
  // },
  // {
  //   "id": "8fc51f24-a09d-492b-b64a-a624e6a0238e",
  //   "name": "Olive Street Caf\u00e9",
  //   "coordinates": [
  //     12.912539756807897,
  //     77.65340213314585
  //   ],
  //   "memories": [
  //     {
  //       "id": "e663f49e-7acc-406d-8909-42182250b56f",
  //       "title": "1",
  //       "description": "1",
  //       "image": "1",
  //       "date": "1",
  //       "quote": "1"
  //     }
  //   ]
  // },
  // {
  //   "id": "eef18466-4fac-4d97-a692-e94115d1df7b",
  //   "name": "Commercial street ",
  //   "coordinates": [
  //     12.98214276959929,
  //     77.60854835308056
  //   ],
  //   "memories": [
  //     {
  //       "id": "36c23653-edc0-4910-8f2a-22b0a95bb023",
  //       "title": "1",
  //       "description": "1",
  //       "image": "1",
  //       "date": "1",
  //       "quote": "1"
  //     }
  //   ]
  // },
  // {
  //   "id": "092bd6bb-ffb1-427b-abb2-dea017c857ea",
  //   "name": "National college ",
  //   "coordinates": [
  //     12.951002255785006,
  //     77.57324568717227
  //   ],
  //   "memories": [
  //     {
  //       "id": "7e9ba08c-a90a-4f80-91f5-6498675eabfb",
  //       "title": "1",
  //       "description": "1",
  //       "image": "1",
  //       "date": "1",
  //       "quote": "1"
  //     }
  //   ]
  // }
];
// Note: Replace these placeholder images with your actual images
// Store them in public/images/ folder, and update the paths accordingly
