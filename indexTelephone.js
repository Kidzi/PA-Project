const Telephone = require("./Telephone");
const Favorite = require("./TelephoneCat").Favorite;
const Regular = require("./TelephoneCat").Regular;

const A1 = new Telephone("Alex", "Frank", "063426563", "Artist");
const A2 = new Telephone("Jon", "Gab", "078642363", "Alchimist");
const A3 = new Telephone("Sam", "Pox", "068765433", "Militar");
const A4 = new Telephone("Shaldon", "Jall", "063676464", "Seller");
const A5 = new Telephone("Alfred", "Stan", "068969874", "Frizer");

let B1 = new Telephone("Max", "Gragor", "073253456", "Tractorist");
let B2 = new Telephone("Bob", "Toper", "073456786", "Buisnesman");
let B3 = new Telephone("Frad", "Hell", "074566756", "Builder");
let B4 = new Telephone("Anton", "Hiuston", "074366236", "Artist");
let B5 = new Telephone("Bruse", "Hax", "078976543", "Brutar");

const totContacts = [A1,A2,A3,A4,A5,B1,B2,B3,B4,B5];

console.log("-----------------------")
console.log("------Defoult List------")
console.log("-----------------------")


for (let i = 0; i < totContacts.length; i++) {
	console.log(totContacts[i].getDescription())
}


let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
        	if (inputArr[j] && inputArr[j+1]) {
        		 if (inputArr[j].getContact() > inputArr[j + 1].getContact()) {
	                let tmp = inputArr[j];
	                inputArr[j] = inputArr[j + 1];
	                inputArr[j + 1] = tmp;
            	}
        	}  
        }
    }
    return inputArr;
};

bubbleSort(totContacts);

console.log("-----------------------")
console.log("------Sorted List------")
console.log("-----------------------")

for (let i = 0; i < totContacts.length; i++) {
	console.log(totContacts[i].getDescription())
}


console.log("-----------------------")
console.log("---Favorite  Contact---")
console.log("-----------------------")


let favorite = new Favorite("Alexey", "Motei", "078453545", "Florist", "Bub");
console.log(favorite.getDescription());


console.log("-----------------------")
console.log("----Regular Contact----")
console.log("-----------------------")

const regular = new Regular("Jax", "Boys", "074450454", "Boxer", "Pes");
console.log(regular.getDescription());
console.log("-----------------------")