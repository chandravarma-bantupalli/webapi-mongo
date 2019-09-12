conn = new Mongo();
db = conn.getDB("UsersDatabase");

const users = [
  {
    "userName": "Shannon Franks",
    "userCity": "Rivereno",
    "userEmail": "shannonfranks@parleynet.com",
    "userPhone": "+91 (952) 406-2819",
    "friends": [
      {
        "name": "Potter Blevins"
      },
      {
        "name": "Massey Collins"
      },
      {
        "name": "Tisha James"
      },
      {
        "name": "Jennifer Mcintyre"
      },
      {
        "name": "William Tucker"
      }
    ]
  },
  {
    "userName": "Lucia Padilla",
    "userCity": "Norvelt",
    "userEmail": "luciapadilla@parleynet.com",
    "userPhone": "+91 (863) 538-2789",
    "friends": [
      {
        "name": "Emily Duncan"
      },
      {
        "name": "Washington Guerra"
      },
      {
        "name": "Fernandez Maynard"
      },
      {
        "name": "Bernadette Knight"
      },
      {
        "name": "Magdalena Boyer"
      }
    ]
  },
  {
    "userName": "Gallagher Suarez",
    "userCity": "Welch",
    "userEmail": "gallaghersuarez@parleynet.com",
    "userPhone": "+91 (929) 525-2890",
    "friends": [
      {
        "name": "Hardin Martinez"
      },
      {
        "name": "Frederick Daugherty"
      },
      {
        "name": "Colleen Alford"
      },
      {
        "name": "Keri Franklin"
      },
      {
        "name": "Haney Zimmerman"
      }
    ]
  },
  {
    "userName": "Nolan Lowe",
    "userCity": "Brambleton",
    "userEmail": "nolanlowe@parleynet.com",
    "userPhone": "+91 (978) 418-3778",
    "friends": [
      {
        "name": "Estella Warren"
      },
      {
        "name": "Ora Raymond"
      },
      {
        "name": "Merritt Tyler"
      },
      {
        "name": "Cortez Rogers"
      },
      {
        "name": "Justice Walter"
      }
    ]
  },
  {
    "userName": "Hutchinson Rice",
    "userCity": "Wyano",
    "userEmail": "hutchinsonrice@parleynet.com",
    "userPhone": "+91 (888) 550-3083",
    "friends": [
      {
        "name": "Charlotte Aguilar"
      },
      {
        "name": "Jeanie Silva"
      },
      {
        "name": "Flora Klein"
      },
      {
        "name": "Jeanette Rich"
      },
      {
        "name": "Maria Hendricks"
      }
    ]
  },
  {
    "userName": "Hinton Odonnell",
    "userCity": "Saticoy",
    "userEmail": "hintonodonnell@parleynet.com",
    "userPhone": "+91 (951) 484-2305",
    "friends": [
      {
        "name": "Newman Mccarty"
      },
      {
        "name": "Kinney Livingston"
      },
      {
        "name": "Beck Puckett"
      },
      {
        "name": "Amie Wagner"
      },
      {
        "name": "Felecia Dunn"
      }
    ]
  },
  {
    "userName": "Rosa Gibson",
    "userCity": "Maxville",
    "userEmail": "rosagibson@parleynet.com",
    "userPhone": "+91 (896) 434-2778",
    "friends": [
      {
        "name": "Doreen Heath"
      },
      {
        "name": "Abby Yang"
      },
      {
        "name": "Josefa Munoz"
      },
      {
        "name": "Ollie Mcknight"
      },
      {
        "name": "Huber Sears"
      }
    ]
  }
]


db.Users.insertMany(users);