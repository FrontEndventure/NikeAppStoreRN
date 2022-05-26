// const  IFruit = {
//   fruitId: number;
//   fruitName: string;
//   fruitType: 'IMPORT' | 'LOCAL';
//   stock: number;
// };
const fruits = [
  {
    fruitId: 1,
    fruitName: 'Apel',
    fruitType: 'IMPORT',
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: 'Kurma',
    fruitType: 'IMPORT',
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: 'apel',
    fruitType: 'IMPORT',
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: 'Manggis',
    fruitType: 'LOCAL',
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: 'Jeruk Bali',
    fruitType: 'LOCAL',
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: 'KURMA',
    fruitType: 'IMPORT',
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: 'Salak',
    fruitType: 'LOCAL',
    stock: 150,
  },
];

console.log(
  'buah yang dimiliki andi adalah: ',
  fruits.map(fruit => {
    return fruit.fruitName;
  }),
);

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
var rawdata = fruits.map(type => {
  return type.fruitType;
});
var unique = rawdata.filter(onlyUnique);
console.log('Banyak wadah berdasarkan tipe buah: ', unique.length);

const groupBy = (key, arr) =>
  arr.reduce(
    (cache, product) => ({
      ...cache,
      [product[key]]:
        product[key] in cache ? cache[product[key]].concat(product) : [product],
    }),
    {},
  );

console.log('Tipe buah dimiliki andi adalah: ', groupBy('fruitType', fruits));

function getArraySum(a) {
  var total = 0;
  for (var i in a) {
    total += a[i];
  }
  return total;
}

const hitungBuah = fruits.map(fruit => {
  return fruit.stock;
});
const hitungTotalBuah = getArraySum(hitungBuah);

console.log('Total Buah adalah: ', hitungTotalBuah);
