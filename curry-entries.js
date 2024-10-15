function defaultCurry(obj1) {
    return function curried(obj2) {
        return {...obj1,...obj2 };
    }
}

function mapCurry(func) {
    return function curried(obj) {
        let result = {};

        for (const [key, value] of Object.entries(obj)) {
           let newKeyVal = func([key, value]);
           let newKey = newKeyVal[0];
           let newValue = newKeyVal[1];
          
            result[newKey] = newValue;
        }
        return result;
    }
}

function reduceCurry(func) {
    return function curried(obj, initial) {
        let result = initial === undefined ? Object.entries(obj)[0] : initial;
        for (const [key, value] of Object.entries(obj)) {
            result = func(result, [key, value]);
        }
        return result;
    }
}

function filterCurry(func) {
    return function curried(obj) {
        let result = {};

        for (const [key, value] of Object.entries(obj)) {
            if (func([key, value])) {
                result[key] = value
            }
        }
        return result;
    }
}

function reduceScore(personnel, initVal=0) {
   return reduceCurry((acc, [_, person]) =>
    person.isForceUser ? acc + person.pilotingScore + person.shootingScore :acc
 )(personnel, initVal);
};

function filterForce(personnel) {
    return filterCurry(([_, person]) => 
        person.shootingScore >= 80 && person.isForceUser
    )(personnel);
}

function mapAverage(personnel) {
    return mapCurry(([key, person]) => [
        key,
        {...person, averageScore: (person.pilotingScore + person.shootingScore) / 2 }
    ])(personnel);
};

// const withDefaults = {x: 1, y: 2};
// console.log({...withDefaults})
// const result = {...withDefaults, ...{y: 3, z: 4}};
// console.log(result); // Output: {x: 1, y: 3, z: 4}

// const personnel = {
//     lukeSkywalker: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true  },
//     sabineWren:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
//     zebOrellios:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
//     ezraBridger:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true  },
//     calebDume:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true  },
//   }
  
// // console.log(mapCurry(([k, v]) => [`${k}_force`, v])(personnel))
// console.log(reduceCurry((acc, [k, v]) => (acc += v))({ a: 1, b: 2, c: 3 }, 0))
// console.log(filterCurry(([k, v]) => typeof v === 'string' || k === 'arr')({
//     str: 'string',
//     nbr: 1,
//     arr: [1, 2],
//   }))

// console.log(reduceScore(personnel))
// console.log(mapAverage(personnel))
// console.log(filterForce(personnel))
  

