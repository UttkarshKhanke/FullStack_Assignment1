import response from './response.json' assert { type: 'json' }

const nameAndYearList = response.map(item => ({ 
    name: item.name, year: item.vehicle.year 
}));

const yearAbove2020List = response.filter(item => 
    item.vehicle.year > 2020);

// Printing the resulting arrays for verification
console.log("List of objects with only name and year properties:");
console.log(nameAndYearList);

console.log("\nList of objects with year higher than 2020:");
console.log(yearAbove2020List);