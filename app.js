// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


const fromEuroToDollar = (euro) => {
    return euro * 1.07
};

const fromDollarToYen = (dollar) => {
    return (dollar * 156.5) / 1.07
}

const fromYenToPound = (yen) => {
    return (yen * 0.87) / 156.5
}

module.exports = { fromEuroToDollar , fromDollarToYen , fromYenToPound };



console.log(fromDollarToYen(10))
console.log(fromYenToPound(500))
console.log(fromEuroToDollar(3.5))