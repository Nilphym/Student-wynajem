const users = [
  {
    userId: 1,
    firstName: 'Heniu',
    secondName: 'Masny',
    email: 'heniu.masny@o2.pl',
    phone: '123456789',
    address: 'Wrocław, ul. Panieńskiego 13/6'
  }
];

export const offers = [
  {
    offerId: 1,
    user: users[0],
    name: 'Wynajmę pokój 1-osobowy',
    price: '800',
    publishDate: '2022-03-25',
    expirationDate: '2022-04-25',
    description:
      'Wynajmę pokój jednoosobowy spokojnej osobie bez nałogów. Cena obejmuje media. Pokój zlokalizowany w samym ścisłym centrum na rogu ulicy Psie Budy. Wszędzie bardzo blisko',
    location: { latitude: '51.109935', longitude: '17.026958' },
    photos: [
      'https://i.st-nieruchomosci-online.pl/g28dxqc/pokoj-do-wynajecia-wroclaw.jpg',
      'https://i.st-nieruchomosci-online.pl/gnmyx8c/pokoj-do-wynajecia-wroclaw.jpg',
      'https://d-art.ppstatic.pl/kadry/k/r/20/75/5b9ba0f6028f4_o_medium.jpg'
    ],
    views: 150,
    tags: [
      { label: 'Umeblowane', content: 'Tak' },
      { label: 'Rodzaj pokoju', content: 'Jednoosobowy' },
      { label: 'Preferowani', content: 'Mężczyźni' }
    ],
    observed: true
  },
  {
    offerId: 2,
    user: users[0],
    name: 'Wynajmę pokój 1-osobowy',
    price: '800',
    publishDate: '2022-03-25',
    expirationDate: '2022-04-25',
    description:
      'Wynajmę pokój jednoosobowy spokojnej osobie bez nałogów. Cena obejmuje media. Pokój zlokalizowany w samym ścisłym centrum na rogu ulicy Psie Budy. Wszędzie bardzo blisko',
    location: { latitude: '51.109935', longitude: '17.026958' },
    photos: [
      'https://i.st-nieruchomosci-online.pl/g28dxqc/pokoj-do-wynajecia-wroclaw.jpg',
      'https://i.st-nieruchomosci-online.pl/gnmyx8c/pokoj-do-wynajecia-wroclaw.jpg',
      'https://d-art.ppstatic.pl/kadry/k/r/20/75/5b9ba0f6028f4_o_medium.jpg'
    ],
    views: 150,
    tags: [
      { label: 'Umeblowane', content: 'Tak' },
      { label: 'Rodzaj pokoju', content: 'Jednoosobowy' },
      { label: 'Preferowani', content: 'Mężczyźni' }
    ],
    observed: false
  },
  {
    offerId: 3,
    user: users[0],
    name: 'Wynajmę pokój 1-osobowy',
    price: '800',
    publishDate: '2022-03-25',
    expirationDate: '2022-04-25',
    description:
      'Wynajmę pokój jednoosobowy spokojnej osobie bez nałogów. Cena obejmuje media. Pokój zlokalizowany w samym ścisłym centrum na rogu ulicy Psie Budy. Wszędzie bardzo blisko',
    location: { latitude: '51.109935', longitude: '17.026958' },
    photos: [
      'https://i.st-nieruchomosci-online.pl/g28dxqc/pokoj-do-wynajecia-wroclaw.jpg',
      'https://i.st-nieruchomosci-online.pl/gnmyx8c/pokoj-do-wynajecia-wroclaw.jpg',
      'https://d-art.ppstatic.pl/kadry/k/r/20/75/5b9ba0f6028f4_o_medium.jpg'
    ],
    views: 150,
    tags: [
      { label: 'Umeblowane', content: 'Tak' },
      { label: 'Rodzaj pokoju', content: 'Jednoosobowy' },
      { label: 'Preferowani', content: 'Mężczyźni' }
    ],
    observed: false
  },
  {
    offerId: 4,
    user: users[0],
    name: 'Wynajmę pokój 1-osobowy',
    price: '800',
    publishDate: '2022-03-25',
    expirationDate: '2022-04-25',
    description:
      'Wynajmę pokój jednoosobowy spokojnej osobie bez nałogów. Cena obejmuje media. Pokój zlokalizowany w samym ścisłym centrum na rogu ulicy Psie Budy. Wszędzie bardzo blisko',
    location: { latitude: '51.109935', longitude: '17.026958' },
    photos: [
      'https://i.st-nieruchomosci-online.pl/g28dxqc/pokoj-do-wynajecia-wroclaw.jpg',
      'https://i.st-nieruchomosci-online.pl/gnmyx8c/pokoj-do-wynajecia-wroclaw.jpg',
      'https://d-art.ppstatic.pl/kadry/k/r/20/75/5b9ba0f6028f4_o_medium.jpg'
    ],
    views: 150,
    tags: [
      { label: 'Umeblowane', content: 'Tak' },
      { label: 'Rodzaj pokoju', content: 'Jednoosobowy' },
      { label: 'Preferowani', content: 'Mężczyźni' }
    ],
    observed: false
  },
  {
    offerId: 5,
    user: users[0],
    name: 'Wynajmę pokój 1-osobowy',
    price: '800',
    publishDate: '2022-03-25',
    expirationDate: '2022-04-25',
    description:
      'Wynajmę pokój jednoosobowy spokojnej osobie bez nałogów. Cena obejmuje media. Pokój zlokalizowany w samym ścisłym centrum na rogu ulicy Psie Budy. Wszędzie bardzo blisko',
    location: { latitude: '51.109935', longitude: '17.026958' },
    photos: [
      'https://i.st-nieruchomosci-online.pl/g28dxqc/pokoj-do-wynajecia-wroclaw.jpg',
      'https://i.st-nieruchomosci-online.pl/gnmyx8c/pokoj-do-wynajecia-wroclaw.jpg',
      'https://d-art.ppstatic.pl/kadry/k/r/20/75/5b9ba0f6028f4_o_medium.jpg'
    ],
    views: 150,
    tags: [
      { label: 'Umeblowane', content: 'Tak' },
      { label: 'Rodzaj pokoju', content: 'Jednoosobowy' },
      { label: 'Preferowani', content: 'Mężczyźni' }
    ],
    observed: false
  },
  {
    offerId: 6,
    user: users[0],
    name: 'Wynajmę pokój 1-osobowy',
    price: '800',
    publishDate: '2022-03-25',
    expirationDate: '2022-04-25',
    description:
      'Wynajmę pokój jednoosobowy spokojnej osobie bez nałogów. Cena obejmuje media. Pokój zlokalizowany w samym ścisłym centrum na rogu ulicy Psie Budy. Wszędzie bardzo blisko',
    location: { latitude: '51.109935', longitude: '17.026958' },
    photos: [
      'https://i.st-nieruchomosci-online.pl/g28dxqc/pokoj-do-wynajecia-wroclaw.jpg',
      'https://i.st-nieruchomosci-online.pl/gnmyx8c/pokoj-do-wynajecia-wroclaw.jpg',
      'https://d-art.ppstatic.pl/kadry/k/r/20/75/5b9ba0f6028f4_o_medium.jpg'
    ],
    views: 150,
    tags: [
      { label: 'Umeblowane', content: 'Tak' },
      { label: 'Rodzaj pokoju', content: 'Jednoosobowy' },
      { label: 'Preferowani', content: 'Mężczyźni' }
    ],
    observed: false
  },
  {
    offerId: 7,
    user: users[0],
    name: 'Wynajmę pokój 1-osobowy',
    price: '800',
    publishDate: '2022-03-25',
    expirationDate: '2022-04-25',
    description:
      'Wynajmę pokój jednoosobowy spokojnej osobie bez nałogów. Cena obejmuje media. Pokój zlokalizowany w samym ścisłym centrum na rogu ulicy Psie Budy. Wszędzie bardzo blisko',
    location: { latitude: '51.109935', longitude: '17.026958' },
    photos: [
      'https://i.st-nieruchomosci-online.pl/g28dxqc/pokoj-do-wynajecia-wroclaw.jpg',
      'https://i.st-nieruchomosci-online.pl/gnmyx8c/pokoj-do-wynajecia-wroclaw.jpg',
      'https://d-art.ppstatic.pl/kadry/k/r/20/75/5b9ba0f6028f4_o_medium.jpg'
    ],
    views: 150,
    tags: [
      { label: 'Umeblowane', content: 'Tak' },
      { label: 'Rodzaj pokoju', content: 'Jednoosobowy' },
      { label: 'Preferowani', content: 'Mężczyźni' }
    ],
    observed: false
  },
  {
    offerId: 8,
    user: users[0],
    name: 'Wynajmę pokój 1-osobowy',
    price: '800',
    publishDate: '2022-03-25',
    expirationDate: '2022-04-25',
    description:
      'Wynajmę pokój jednoosobowy spokojnej osobie bez nałogów. Cena obejmuje media. Pokój zlokalizowany w samym ścisłym centrum na rogu ulicy Psie Budy. Wszędzie bardzo blisko',
    location: { latitude: '51.109935', longitude: '17.026958' },
    photos: [
      'https://i.st-nieruchomosci-online.pl/g28dxqc/pokoj-do-wynajecia-wroclaw.jpg',
      'https://i.st-nieruchomosci-online.pl/gnmyx8c/pokoj-do-wynajecia-wroclaw.jpg',
      'https://d-art.ppstatic.pl/kadry/k/r/20/75/5b9ba0f6028f4_o_medium.jpg'
    ],
    views: 150,
    tags: [
      { label: 'Umeblowane', content: 'Tak' },
      { label: 'Rodzaj pokoju', content: 'Jednoosobowy' },
      { label: 'Preferowani', content: 'Mężczyźni' }
    ],
    observed: false
  }
];
