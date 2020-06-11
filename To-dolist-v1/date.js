
// console.log(module);
module.exports.getDate = function (){

    let today = new Date();

    let options = {
        weekday: "long",
        // year: "numeric",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("en-US",options);
    return day;
}

module.exports.getDay = function(){

    let today = new Date();

    let options = {
        weekday: "long"
    }
    var day = today.toLocaleDateString("en-US",options);
    return day;
}