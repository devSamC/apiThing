function findMaxPropertyValue(arrayOfObjs, property) {
    let max = 0;
    for (let i = 0; i < arrayOfObjs.length; i++) {
        let someProperty = arrayOfObjs[i][`${property}`]
        if( someProperty > max) {
            max = someProperty;
        } 
    } return max;
}

function findMinPropertyValue(arrayOfObjs, property) {
    let min = 1000;
    for (let i = 0; i < arrayOfObjs.length; i++) {
        let someProperty = arrayOfObjs[i][`${property}`]
        if( someProperty < min) {
            min = someProperty;
        } 
    } return min;
}
module.exports = {
    findMaxPropertyValue: findMaxPropertyValue, 
    findMinPropertyValue: findMinPropertyValue
}