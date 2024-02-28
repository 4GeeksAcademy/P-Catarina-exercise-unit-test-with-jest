const { fromEuroToDollar , fromDollarToYen , fromYenToPound } = require('./app.js');


test("One euro should be 1.07 dollars", function() {
    expect(fromEuroToDollar(3.5)).toBe(3.745);
});

test("Ten dollars should be 1462.616 yen", function() {
    expect(fromDollarToYen(10)).toBeCloseTo(1462.6168);
});

test("Five hundred yen should be 2.779 pounds", function() {
    expect(fromYenToPound(500)).toBeCloseTo(2.779);
});