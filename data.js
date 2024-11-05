var APP_DATA = {
  "scenes": [
    {
      "id": "0-erc_level-1_starbucks",
      "name": "ERC_Level 1_Starbucks",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.14474429723860283,
        "pitch": 0,
        "fov": 1.2996675116209502
      },
      "linkHotspots": [
        {
          "yaw": -0.5274459871061143,
          "pitch": 0.10946845437240782,
          "rotation": 11.780972450961727,
          "target": "1-erc_level-1_nearescalator"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.927726320888807,
          "pitch": 0.1376132946520734,
          "title": "Starbucks",
          "text": "A good place to drink, study."
        },
        {
          "yaw": -1.7105612430951158,
          "pitch": 0.1818100540875882,
          "title": "Self-service vending machines",
          "text": "Snacks, drinks..."
        },
        {
          "yaw": -0.3263556581435427,
          "pitch": 0.12030725208760629,
          "title": "Way to upstairs and Utown residents",
          "text": "Can go upstairs on the left and go straight to the residential area"
        },
        {
          "yaw": 2.135159734429723,
          "pitch": 0.08888784525340299,
          "title": "To the lawn and FairPrice",
          "text": "Go downstairs from here"
        },
        {
          "yaw": 1.4047606469201295,
          "pitch": -0.028260532608580746,
          "title": "Flavours",
          "text": "Text"
        },
        {
          "yaw": -0.36536880141066774,
          "pitch": -0.20627439421592797,
          "title": "Utown residential area",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-erc_level-1_nearescalator",
      "name": "ERC_Level 1_NearEscalator",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0097619713522903,
          "pitch": 0.03910031094190103,
          "rotation": 10.995574287564278,
          "target": "0-erc_level-1_starbucks"
        },
        {
          "yaw": -2.861079298152587,
          "pitch": 0.2500644794128064,
          "rotation": 7.0685834705770345,
          "target": "2-erc_level-1_tembusu-tree"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.5378171191284213,
          "pitch": 0.015090440633386493,
          "title": "To Flavours",
          "text": "Text"
        },
        {
          "yaw": 0.24096336449707323,
          "pitch": -0.0702936899663662,
          "title": "Flavours",
          "text": "Text"
        },
        {
          "yaw": -2.6875809418030876,
          "pitch": 0.2280410431305775,
          "title": "Tembusu tree",
          "text": "Text"
        },
        {
          "yaw": -0.9062587633709462,
          "pitch": 0.03239243249898571,
          "title": "To starbucks",
          "text": "Go downstairs to starbucks"
        }
      ]
    },
    {
      "id": "2-erc_level-1_tembusu-tree",
      "name": "ERC_Level 1_Tembusu Tree",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9603572187078342,
          "pitch": 0.342774185675049,
          "rotation": 0.7853981633974483,
          "target": "1-erc_level-1_nearescalator"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.967380262256702,
          "pitch": 0.4938204562204298,
          "title": "To Escalator",
          "text": "You can use the escalator to explore the level 2 &amp; 3 of ERC."
        },
        {
          "yaw": 1.2063939326228876,
          "pitch": 0.24630958283111148,
          "title": "To study room",
          "text": "You can find study room along this path."
        },
        {
          "yaw": -2.4130523402376056,
          "pitch": -0.5143807368481887,
          "title": "Study room on Level 3",
          "text": "Quite and great place to view Utown&nbsp;"
        },
        {
          "yaw": -1.572409071577324,
          "pitch": 0.11005877897466121,
          "title": "Toilet",
          "text": "Male and female"
        },
        {
          "yaw": -2.1734629580256097,
          "pitch": 0.006794643807650047,
          "title": "Drinking machine",
          "text": "Cool and hot water."
        }
      ]
    }
  ],
  "name": "UtownERC",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
