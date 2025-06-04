const SHOP_DATA = [
  {
    title: 'Paintings',
    items: [
      {
        id: 1,
        name: 'Abstract',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/artvault-db.firebasestorage.app/o/images%2Fpaintings%2FAbstract.jpg?alt=media&token=a123269c-ef80-4c34-88eb-560dbeb3cd91',
        price: 350,
      },
      {
        id: 2,
        name: 'Christmas Roses',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/artvault-db.firebasestorage.app/o/images%2Fpaintings%2FChristmas%20Roses.jpg?alt=media&token=3d154276-96c9-4db1-bcf4-ca8a586a4897',
        price: 450,
      },
      {
        id: 3,
        name: 'Clashing waves',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/artvault-db.firebasestorage.app/o/images%2Fpaintings%2FClashing%20waves.jpg?alt=media&token=bb23fb41-8eae-493a-8cca-161387aef4ea',
        price: 700,
      },
      {
        id: 4,
        name: 'Driving Home The Flock',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/artvault-db.firebasestorage.app/o/images%2Fpaintings%2FDriving%20Home%20The%20Flock.jpg?alt=media&token=012961d7-e26f-4514-bb51-32ced1ad3fe0',
        price: 600,
      },
      {
        id: 5,
        name: 'Fluid',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/artvault-db.firebasestorage.app/o/images%2Fpaintings%2FFluid.jpg?alt=media&token=7efc94c9-8993-4c38-8b62-038a8105b4c3',
        price: 450,
      },
      {
        id: 6,
        name: 'Lake Scenery',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/artvault-db.firebasestorage.app/o/images%2Fpaintings%2FLake%20Scenery.jpg?alt=media&token=5a87d0e6-5594-4ddb-9025-71a9c14293cd',
        price: 550,
      },
      {
        id: 7,
        name: 'Leaves',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/artvault-db.firebasestorage.app/o/images%2Fpaintings%2FLeaves.jpg?alt=media&token=7ce611f3-a727-4100-9f56-7e60abce00ac',
        price: 250,
      },
      {
        id: 8,
        name: 'Old Cottages',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/artvault-db.firebasestorage.app/o/images%2Fpaintings%2FOld%20Cottages.jpg?alt=media&token=b6cce85a-26b3-450c-9aba-5ef9b943c567',
        price: 450,
      },
    ],
  },
  {
    title: 'Sculptures',
    items: [
      {
        id: 9,
        name: 'Bronze Rose',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/artvault-db.firebasestorage.app/o/images%2Fsculptures%2FBronze%20Roses.jpg?alt=media&token=08f47f91-3764-48db-92f4-41de3444ca23',
        price: 3600,
      },
      {
        id: 10,
        name: 'Equinox',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/artvault-db.firebasestorage.app/o/images%2Fsculptures%2FEquinox.jpg?alt=media&token=4fc87efa-6105-4948-800f-e626905640c1',
        price: 1500,
      },
      {
        id: 11,
        name: 'Galloping Hare',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/artvault-db.firebasestorage.app/o/images%2Fsculptures%2FGalloping%20rabbit.jpg?alt=media&token=e6e4351a-14ee-4c27-bbc1-d34e65228f2d',
        price: 1300,
      },
      {
        id: 12,
        name: 'Lady Oblation',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/artvault-db.firebasestorage.app/o/images%2Fsculptures%2FLady%20Oblation.jpg?alt=media&token=8e3079f7-4c59-4c16-b01b-17d415036600',
        price: 3200,
      },
    ],
  },
  {
    title: 'Photography',
    items: [
      {
        id: 13,
        name: 'Drop of life',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/artvault-db.firebasestorage.app/o/images%2Fphotography%2FDrop%20of%20life.jpg?alt=media&token=6e4513ec-5166-44e3-bada-81199a544ac9',
        price: 400,
      },
      {
        id: 14,
        name: 'Drop',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/artvault-db.firebasestorage.app/o/images%2Fphotography%2FDrop.jpg?alt=media&token=7b3e9348-d3ce-4269-85ef-acb50f383d15',
        price: 340,
      },
      {
        id: 15,
        name: 'Forest Island',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/artvault-db.firebasestorage.app/o/images%2Fphotography%2FForest%20island.jpg?alt=media&token=1cf05636-4136-410a-8e21-0daac42bd5b2',
        price: 450,
      },
      {
        id: 16,
        name: 'House in forest',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/artvault-db.firebasestorage.app/o/images%2Fphotography%2FHouse%20in%20Forest.jpg?alt=media&token=e07b2df6-8d14-49bc-8370-bb252a3e453c',
        price: 450,
      },
      {
        id: 17,
        name: 'Ripple',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/artvault-db.firebasestorage.app/o/images%2Fphotography%2FRipple.jpg?alt=media&token=3f846604-dab8-474e-9a10-6851f255fdfa',
        price: 400,
      },
      {
        id: 18,
        name: 'Tree under aurora',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/artvault-db.firebasestorage.app/o/images%2Fphotography%2FTree%20under%20aurora.jpg?alt=media&token=a75b4b1f-c104-4c91-88a9-f3397fd377f1',
        price: 300,
      },
    ],
  },
  {
    title: 'Digital',
    items: [
      {
        id: 19,
        name: 'Abstract forest',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/artvault-db.firebasestorage.app/o/images%2Fdigital%2FAbstract%20forest.jpg?alt=media&token=a2101198-95b2-4437-bd21-22a82d8cc09b',
        price: 300,
      },
      {
        id: 20,
        name: 'Night Sea',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/artvault-db.firebasestorage.app/o/images%2Fdigital%2FNight%20sea.jpg?alt=media&token=320a59df-5717-4e08-a7ad-7d7df5a20585',
        price: 400,
      },
      {
        id: 21,
        name: 'Red Orange Abstract',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/artvault-db.firebasestorage.app/o/images%2Fdigital%2FRed%20Orange%20abstract.jpg?alt=media&token=6ff637bb-ad4f-4fed-b1a4-729c85aedf30',
        price: 260,
      },
      {
        id: 22,
        name: 'Shifting Pattern',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/artvault-db.firebasestorage.app/o/images%2Fdigital%2FShifting%20pattern.jpg?alt=media&token=d4da712d-ab33-4e5c-b723-11af273ea2f7',
        price: 300,
      },
      {
        id: 23,
        name: 'Negative Space',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/artvault-db.firebasestorage.app/o/images%2Fdigital%2Fnegative%20space.jpg?alt=media&token=d8109b40-5dcb-4aaf-8f57-1c0a84727bc9',
        price: 500,
      },
      {
        id: 24,
        name: 'Threads',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/artvault-db.firebasestorage.app/o/images%2Fdigital%2Fthreads.jpg?alt=media&token=3a5aea77-56a8-4ff7-8a8b-0be3d40e7f4e',
        price: 650,
      },
    ],
  },
  {
    title: 'Drawings',
    items: [
      {
        id: 25,
        name: 'Attraction',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/artvault-db.firebasestorage.app/o/images%2Fdrawings%2FAttraction.jpg?alt=media&token=3d7d3513-74e7-4233-b6ed-3bd757874321',
        price: 325,
      },
      {
        id: 26,
        name: 'Cat Architecture',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/artvault-db.firebasestorage.app/o/images%2Fdrawings%2FCat%20architecture.jpg?alt=media&token=d8fd5f5a-3815-46df-a458-bb6bfdd597a5',
        price: 400,
      },
      {
        id: 27,
        name: 'Loyal companion',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/artvault-db.firebasestorage.app/o/images%2Fdrawings%2FLoyal%20companion.jpg?alt=media&token=ea635955-4cfe-43d7-86db-11b19067bee4',
        price: 400,
      },
    ],
  },
];

export default SHOP_DATA;