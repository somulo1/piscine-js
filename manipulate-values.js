function filterValues(obj, func) {
    let result = {};
    for (let key in obj) {
        if (func(obj[key])) {
            result[key] = obj[key];
        }
    }
    return result;
}

function  mapValues(obj, func) {
    let result = {};
    for (let key in obj) {
        result[key] = func(obj[key]);
    }
    return result;
}

function reduceValues(obj, func, initial) {
    let values
    let acc
    let start
    if (initial === undefined){
         values = Array.from(Object.values(obj))
         acc = values[0]
         start = 1
    } else {
        acc = initial
        values = Array.from(Object.values(obj))
        start = 0
    }
    for (let i = start; i < values.length; i++){
        acc = func(acc,values[i])
    }
    return acc 
}

// const nutritionDB = {
//     tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
//     vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
//     oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
//     onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
//     garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
//     paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
//     sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
//     orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
//   }
// console.log(filterValues(nutritionDB, (v) => v === 0))
//  // console.log(mapValues(nutritionDB, (v) => v+1))
//  // console.log(reduceValues(nutritionDB, (acc, cr) => acc + cr))
//   console.log(reduceValues(nutritionDB, (acc, cr) => acc + cr))

// const nu    garlic: { calories: 149, protein: 6.4, carbs: 33, sugar: 1, fiber: 2.1, fat: 0.5 },trients = { carbohydrates: 12, protein: 20, fat: 5 }
// console.log(reduceValues(nutrients, (acc, cr) => acc + cr))
