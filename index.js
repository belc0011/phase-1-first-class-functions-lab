const returnFirstTwoDrivers = function(name) {
    const newNames = name.slice(0,2)
    return newNames;
}

const returnLastTwoDrivers = function(name) {
    const newNames = name.slice(name.length - 2, name.length);
    return newNames;
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return function multiply(fare) {
        const newFare = fare * int;
        return newFare;
    }
}
const fareDoubler = function(fare) {
    const newFare = createFareMultiplier(fare);
    return newFare(2);
}
const fareTripler = function(fare) {
    const newFare = createFareMultiplier(fare);
    return newFare(3);
}
function selectDifferentDrivers(drivers, driverFunction) {
const newDrivers = driverFunction(drivers);
return newDrivers;
}
