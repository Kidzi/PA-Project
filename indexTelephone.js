const Telephone = require("./Telephone");
const Favorite = require("./TelephoneCat").Favorite;
const Regular = require("./TelephoneCat").Regular;

const A1 = new Telephone("Alex", "Frank", "063426563", "Artist");
let ABC = new Telephone("Max", "Gragor", "073253456", "Tractorist");

console.log(A1.getDescription());
console.log("-----------------------")
console.log(ABC.getDescription());

let favorite = new Favorite("Alexey", "Motei", "078453545", "Florist", "Bub");
console.log(favorite.getDescription());
console.log("-----------------------")

const regular = new Regular("Jax", "Boys", "074450454", "Boxer", "Pes");
console.log(regular.getDescription());
console.log("-----------------------")