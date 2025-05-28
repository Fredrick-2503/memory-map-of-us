
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
    "id": "f05c1a1c-9cf4-404c-af99-5ea2654a1d57",
    "name": "St.Francis High School ",
    "coordinates": [
      12.925275371121932,
      77.62915847029555
    ],
    "memories": []
  },
  {
    "id": "e51a68de-ff6e-46d0-a557-fdd3a3c889fd",
    "name": "St.Francis Composite Pu college",
    "coordinates": [
      12.927304904319707,
      77.63027113586817
    ],
    "memories": []
  },
  {
    "id": "b62a2f4c-7e2f-4c1b-b48a-6bd67001fb3f",
    "name": "Giraffe Tution centre",
    "coordinates": [
      12.934902963538983,
      77.61241091957339
    ],
    "memories": []
  },
  {
    "id": "d00598ea-bce7-4b87-a56e-825189c27a5b",
    "name": "Cycle Rides",
    "coordinates": [
      12.936469136322064,
      77.61455289722075
    ],
    "memories": [
      {
        "id": "da4be7ec-eb6a-47ca-8171-77e414eb0de0",
        "title": "adc",
        "description": "adc",
        "image": ""
      }
    ]
  },
  {
    "id": "2326b81e-64ba-4e36-9b52-acbd9731e27c",
    "name": "Sapna Book house",
    "coordinates": [
      12.93641178535703,
      77.61645597322531
    ],
    "memories": []
  },
  {
    "id": "311d8968-78eb-4575-9ac0-cac27bc5da3a",
    "name": "Centro mall",
    "coordinates": [
      12.916629171942214,
      77.59234671043451
    ],
    "memories": []
  },
  {
    "id": "c0cd3c0f-ad28-404b-a9fe-14c6b9952f36",
    "name": "Christ College",
    "coordinates": [
      12.934690986363215,
      77.60590778990831
    ],
    "memories": []
  },
  {
    "id": "3edaebab-4f92-4d83-b239-890567ca8a98",
    "name": "St.Josephs college ",
    "coordinates": [
      12.962425131611521,
      77.59651436028976
    ],
    "memories": []
  },
  {
    "id": "52ef562b-9b5c-4ac5-8720-339e8c929782",
    "name": "lalbagh",
    "coordinates": [
      12.95128837969613,
      77.58537215507184
    ],
    "memories": []
  },
  {
    "id": "ae9103bf-6a27-4535-9d60-c0a747f50769",
    "name": "basilica",
    "coordinates": [
      12.984279903864286,
      77.6044699537223
    ],
    "memories": []
  },
  {
    "id": "f845ef13-66b6-4509-b0a3-cfe030d639cb",
    "name": "cubbon park",
    "coordinates": [
      12.977620011288474,
      77.59759322776674
    ],
    "memories": []
  },
  {
    "id": "4131247c-6220-4a1e-b155-ab22815b965f",
    "name": "bal bhavan ",
    "coordinates": [
      12.976912431521002,
      77.59658108063024
    ],
    "memories": []
  },
  {
    "id": "32512b4a-455d-4717-a5a7-5444c096e674",
    "name": "nhce ",
    "coordinates": [
      12.93374765303481,
      77.69177592733625
    ],
    "memories": []
  },
  {
    "id": "612b11ca-ff70-4c93-a806-efc7f2eef71e",
    "name": "bike ",
    "coordinates": [
      12.932120905062199,
      77.69185484960774
    ],
    "memories": []
  },
  {
    "id": "68251a58-1815-4951-a3a4-d421236b5fc8",
    "name": "agara",
    "coordinates": [
      12.92406575253915,
      77.6507320855773
    ],
    "memories": []
  },
  {
    "id": "9ae493a3-9548-4ab4-80c3-b233a44599da",
    "name": "divinity mall",
    "coordinates": [
      12.940533216161914,
      77.52479647227882
    ],
    "memories": []
  },
  {
    "id": "90d3432c-3d01-4c36-90ce-05a150d8fc89",
    "name": "double decker",
    "coordinates": [
      12.906404649689822,
      77.58059158025182
    ],
    "memories": []
  },
  {
    "id": "acf94ec6-9c93-4b5d-a872-1e3eec5eba2e",
    "name": "olive ",
    "coordinates": [
      12.912539756807897,
      77.65340213314585
    ],
    "memories": []
  },
  {
    "id": "36cfd229-6d51-472c-8386-1dba27141ad3",
    "name": "commercial street ",
    "coordinates": [
      12.98214276959929,
      77.60854835308056
    ],
    "memories": []
  },
  {
    "id": "89c1114c-80ca-474d-9cfa-2f4029c7cb21",
    "name": "national college ",
    "coordinates": [
      12.951002255785006,
      77.57324568717227
    ],
    "memories": []
  }
];
// Note: Replace these placeholder images with your actual images
// Store them in public/images/ folder, and update the paths accordingly
