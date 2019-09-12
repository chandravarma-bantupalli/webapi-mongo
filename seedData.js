conn = new Mongo();
db = conn.getDB("UsersDatabase");

const users = [
  {
    "userId": "5d7a94bd7d211415b78b49fb",
    "userName": "Graves Cooper",
    "userCity": "Westboro",
    "userEmail": "gravescooper@parleynet.com",
    "userPhone": "+91 (996) 481-2249",
    "userFriends": [
      {
        "friendId": "5d7a94bd16330e94b36fa834",
        "friendName": "Byrd Eaton"
      },
      {
        "friendId": "5d7a94bddd204c559879041d",
        "friendName": "Roslyn Mack"
      },
      {
        "friendId": "5d7a94bd711e6ba7a6225637",
        "friendName": "Crane Caldwell"
      },
      {
        "friendId": "5d7a94bded809d1f6eb14e6e",
        "friendName": "Cooper Thompson"
      },
      {
        "friendId": "5d7a94bde214d817b5053b9e",
        "friendName": "Flossie Mcconnell"
      }
    ]
  },
  {
    "userId": "5d7a94bdb68ab2c3cc5efbc7",
    "userName": "Paulette Hines",
    "userCity": "Haring",
    "userEmail": "paulettehines@parleynet.com",
    "userPhone": "+91 (957) 494-2561",
    "userFriends": [
      {
        "friendId": "5d7a94bd634483759ec6168b",
        "friendName": "Belinda Norris"
      },
      {
        "friendId": "5d7a94bd351a9cf207cdc3a5",
        "friendName": "Le Kirk"
      },
      {
        "friendId": "5d7a94bdcd804460f702221f",
        "friendName": "Little Waller"
      },
      {
        "friendId": "5d7a94bdb81b076d4315a108",
        "friendName": "Ayala Burnett"
      },
      {
        "friendId": "5d7a94bd99ebc7cc255f20e5",
        "friendName": "Tommie Ballard"
      }
    ]
  },
  {
    "userId": "5d7a94bd2a556b2808458e97",
    "userName": "Hess Farrell",
    "userCity": "Masthope",
    "userEmail": "hessfarrell@parleynet.com",
    "userPhone": "+91 (832) 573-2529",
    "userFriends": [
      {
        "friendId": "5d7a94bd0b5ef582df717ebb",
        "friendName": "Sonia Bailey"
      },
      {
        "friendId": "5d7a94bdfad5abbafb26f321",
        "friendName": "Barr Hardin"
      },
      {
        "friendId": "5d7a94bd458ebe2928421c38",
        "friendName": "Tamera Good"
      },
      {
        "friendId": "5d7a94bda782e9fe408032e9",
        "friendName": "Taylor Palmer"
      },
      {
        "friendId": "5d7a94bd6158e55737d5c6b6",
        "friendName": "Kathie Nixon"
      }
    ]
  },
  {
    "userId": "5d7a94bdc890b34b4c41d931",
    "userName": "Zimmerman Ryan",
    "userCity": "Boykin",
    "userEmail": "zimmermanryan@parleynet.com",
    "userPhone": "+91 (953) 503-2409",
    "userFriends": [
      {
        "friendId": "5d7a94bdff867f51d92967b4",
        "friendName": "Cynthia Robbins"
      },
      {
        "friendId": "5d7a94bd3f64bdbc0e49bdf8",
        "friendName": "Pollard Oliver"
      },
      {
        "friendId": "5d7a94bdc525297b2b77e46f",
        "friendName": "Hubbard Ochoa"
      },
      {
        "friendId": "5d7a94bd744bb03faf14f919",
        "friendName": "Alyce Mays"
      },
      {
        "friendId": "5d7a94bd10d7d2f2de09d5b8",
        "friendName": "Kristi Burton"
      }
    ]
  },
  {
    "userId": "5d7a94bd31dabeccde32cfe9",
    "userName": "Rosemary Downs",
    "userCity": "Wedgewood",
    "userEmail": "rosemarydowns@parleynet.com",
    "userPhone": "+91 (993) 536-3739",
    "userFriends": [
      {
        "friendId": "5d7a94bde8c490833708bfd4",
        "friendName": "Hines Dillon"
      },
      {
        "friendId": "5d7a94bd0791e34ded0edc8b",
        "friendName": "Teresa Garcia"
      },
      {
        "friendId": "5d7a94bd7ea90b70da031016",
        "friendName": "Jannie Wiley"
      },
      {
        "friendId": "5d7a94bda36e29b7614e2bd0",
        "friendName": "Bernard Bell"
      },
      {
        "friendId": "5d7a94bdd173281db883d53c",
        "friendName": "Tillman Holden"
      }
    ]
  }
]

db.Users.insertMany(users);