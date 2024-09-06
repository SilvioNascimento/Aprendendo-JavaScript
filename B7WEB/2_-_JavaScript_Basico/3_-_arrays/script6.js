let cars = [
    {brand: 'Ferrari', year: 2020},
    {brand: 'BMW', year: 2018},
    {brand: 'Fiat', year: 2022}
];

// Forma detalhada:
cars.sort((a, b) => {
    if(a.year > b.year) {
        return 1;
    } else if(a.year < b.year) {
        return -1;
    } else {
        return 0;
    }
});

console.log(cars);

// Forma simplificada:
// cars.sort((a, b) => a.year - b.year);
// console.log(cars)