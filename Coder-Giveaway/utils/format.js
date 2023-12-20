function time(milliseconds){
var seconds = Math.floor((milliseconds / 1000) % 60);
var minutes = Math.floor((milliseconds / 1000 / 60) % 60);
var hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);
var formattedTime = [
    hours.toString().padStart(2, "0"),
    minutes.toString().padStart(2, "0"),
    seconds.toString().padStart(2, "0")
].join(":");
    return formattedTime
}
module.exports={time}