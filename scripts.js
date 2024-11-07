// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// forEach basics
console.log("\nProvinces:");
provinces.forEach((province) => console.log(`  - ${province}`));

console.log("\nNames:");
names.forEach((name) => console.log(`  - ${name}`));

console.log("\nNames with Provinces:");
names.forEach((name, index) => console.log(`  - ${name} (${provinces[index]})`));

// transform to UPPERCASE
console.log("\nUppercase Provinces:");
const uppercaseProvinces = provinces.map((province) => province.toUpperCase());
console.log(`  - ${uppercaseProvinces.join(", ")}`);

// name length
console.log("\nName Lengths:");
const nameLengths = names.map((name) => name.length);
console.log(`  - ${nameLengths.join(", ")}`);

// sorting
console.log("\nSorted Provinces:");
const sortedProvinces = provinces.slice().sort(); // Slice to avoid mutating the original
console.log(`  - ${sortedProvinces.join(", ")}`);

// filter: Cape
const noCapeProvinces = provinces.filter(
  (province) => !province.includes("Cape")
);
console.log(`Count of remaining provinces: ${noCapeProvinces.length}`);

// Find: S
console.log("\nNames with 'S':");
const namesWithS = names.filter((name) => name.includes("S"));
console.log(`  - ${namesWithS.join(", ")}`);

// Creating Object Mapping
console.log("\nName to Province Mapping:");
const nameProvinceMap = names.reduce((map, name, index) => {
  map[name] = provinces[index] || "Unknown";
  return map;
}, {});
console.log(nameProvinceMap);

// Advanced exercises

// Logging products with lengths <= 5
console.log("\nProducts with length <= 5:");
const shortProductNames = products.filter((p) => p.product.length <= 5);
console.log(shortProductNames);

// Total price of products
const totalPrice = products
  .filter((p) => !isNaN(p.price))
  .reduce((sum, p) => sum + Number(p.price), 0);
console.log(`Total price: ${totalPrice}`);

// Combining product names
const combinedProductNames = products.reduce((str, p) => str + p.product + ", ", "").slice(0, -2);
console.log(`Combined product names: ${combinedProductNames}`);

// Finding extreme prices
const prices = products.map(p => Number(p.price) || Infinity);
const highestPrice = Math.max(...prices);
const lowestPrice = Math.min(...prices);
console.log(`Highest price: ${highestPrice}, Lowest price: ${lowestPrice}`);

// Transforming products into objects
const transformedProducts = Object.fromEntries(
  products.map(({ product, price }) => [product, { name: product, cost: price }])
);
console.log(transformedProducts);
