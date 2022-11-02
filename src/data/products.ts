import Product from "./productInterface";

const products: Product[] = [
  {
    name: 'God of War: Ragnarok',
    image:
      'https://static.wikia.nocookie.net/doblaje/images/c/cf/GOW5.png/revision/latest?cb=20210930175435&path-prefix=es',
    description: 'Santa monica studios production',
    category: 'ps',
    stock: 8,
    price: 70,
    oldPrice: 80,
  },
  {
    name: 'The Last Of Us: Part II',
    image:
      'https://static.wikia.nocookie.net/thelastofus/images/f/f7/TLOUPartIICoverArt.png/revision/latest?cb=20200207025050',
    description: 'Naughty Dog production',
    category: 'ps',
    stock: 10,
    price: 70,
    oldPrice: 80,
  },
  {
    name: 'Uncharted: Nathan Drake Collection',
    image:
      'https://static.wikia.nocookie.net/uncharted/images/5/52/The_Nathan_Drake_Collection_front_cover.png/revision/latest?cb=20200614224745',
    description: 'Naughty Dog classic production',
    category: 'ps',
    stock: 5,
    price: 50,
    oldPrice: 60,
  },
  {
    name: 'Ghost of Tsushima',
    image:
      'https://http2.mlstatic.com/D_NQ_NP_655895-MCO42526360306_072020-O.jpg',
    description: 'sucker punch production',
    category: 'ps',
    stock: 3,
    price: 55,
    oldPrice: 65,
  },
  {
    name: 'Sunset OverDrive',
    image:
      'https://www.mobygames.com/images/covers/l/390242-sunset-overdrive-xbox-one-front-cover.png',
    description: 'Imnsoniac games production',
    category: 'xbox',
    stock: 3,
    price: 25,
    oldPrice: 40,
  },
  {
    name: 'Gears Of War 5',
    image:
      'https://upload.wikimedia.org/wikipedia/en/e/e4/Gears_5_cover_art.png',
    description: 'The Coalition production',
    category: 'xbox',
    stock: 2,
    price: 40,
    oldPrice: 50,
  },
  {
    name: 'Minecraft',
    image:
      'https://www.mobygames.com/images/covers/l/363275-minecraft-playstation-4-edition-xbox-one-front-cover.png',
    description: 'Mojang production',
    category: 'xbox',
    stock: 11,
    price: 35,
    oldPrice: 50,
  },
  {
    name: 'Halo: The Master Chief Collection',
    image:
      'https://preview.redd.it/nhrra8e8ony31.png?auto=webp&s=4719ad171d8d83c38de2eeed76849ee6ef2de539',
    description: 'Xbox studios production',
    category: 'xbox',
    stock: 1,
    price: 65,
    oldPrice: 70,
  },
  {
    name: 'Super Smash Bros: Ultimate',
    image:
      'https://s1.gaming-cdn.com/images/products/3000/orig-fallback-v1/super-smash-bros-ultimate-switch-switch-spel-nintendo-eshop-europe-cover.jpg',
    description: 'Nintendo production',
    category: 'nintendo',
    stock: 12,
    price: 50,
    oldPrice: 55,
  },
  {
    name: 'Pokemon sword',
    image:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d9b80142-df74-412e-bf8e-9015cfaa53e3/ddas43t-8a7f98f8-bb54-4a45-8d6f-63113224f884.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q5YjgwMTQyLWRmNzQtNDEyZS1iZjhlLTkwMTVjZmFhNTNlM1wvZGRhczQzdC04YTdmOThmOC1iYjU0LTRhNDUtOGQ2Zi02MzExMzIyNGY4ODQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vsZLb-NuyR40BAXd14aAmKwqFC9GLssmqhDY_GFcxWQ',
    description: 'Nintendo production',
    category: 'nintendo',
    stock: 2,
    price: 40,
    oldPrice: 60,
  },
  {
    name: 'Animal Crossing: New Horizons',
    image:
      'https://sanandresitodeleje.com/wp-content/uploads/2020/10/animal-crossing-nsw_1_2.jpg',
    description: 'Nintendo production',
    category: 'nintendo',
    stock: 9,
    price: 15,
    oldPrice: 50,
  },
  {
    name: 'The Legend Of Zelda: Tears Of The Kingdom',
    image:
      'https://nintendoeverything.com/wp-content/uploads/Zelda-Tears-of-the-Kingdom-boxart.jpg',
    description: 'Nintendo Production',
    category: 'nintendo',
    stock: 1,
    price: 70,
    oldPrice: 75,
  },
  {
    name: 'Portal 2',
    image: 'https://vgboxart.com/boxes/PC/37296-portal-2-old-full.png',
    description: 'Valve production',
    category: 'pc',
    stock: 20,
    price: 3,
    oldPrice: 20,
  },
  {
    name: 'Outlast',
    image:
      'https://www.mobygames.com/images/covers/l/363744-outlast-xbox-one-front-cover.png',
    description: 'Red Barrels production',
    category: 'pc',
    stock: 19,
    price: 17,
    oldPrice: 35,
  },
  {
    name: 'Project Zomboid',
    image:
      'http://cdn.shopify.com/s/files/1/0531/4789/3960/products/c885743821cce93ad525c5919aa9faa9.png?v=1621279357',
    description: 'The Indie Stone production',
    category: 'pc',
    stock: 30,
    price: 8,
    oldPrice: 12,
  },
  {
    name: 'World Of WarCraft',
    image:
      'https://i.pinimg.com/originals/21/f5/0b/21f50bc489fbb1f9d042bc6897266f94.png',
    description: 'Blizzard Production',
    category: 'pc',
    stock: 4,
    price: 50,
    oldPrice: 55,
  },
];

export default products;