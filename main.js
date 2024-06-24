let month="jan";
if(month == "Ramadan"){
    console.log("water bottle is not allowed")
} else {
    console.log("water is allowed")
}
let raining= false
let weather = "cloudy"
if(raining){
    console.log("take a umbrella with your self")
} else if (weather == "sunny"){
    console.log("no need to take umbrela")
} else{
    console.log("wear sun glasses")
}
let rishtaaccepted = true
let proposel = rishtaaccepted ? "give eiddi" : "moye moye"
console.log(proposel)
// rishta accpeted me (?) is question mark k matlab he (IF). or isme (:) ka matlaB
// HE (else).
//example
let hungry = false 
let burger = hungry ? "eat burger" : "no need to eat"
console.log(burger)
// Switch case
let car = "fortuner"
switch(car){
    case "alto":
    console.log("pending")
    break;
    case "civic":
    console.log("we will think about it")
case "fortuner":
    console.log("accepted %")
    break;
    default :
    console.log("work hard")
}
var percentage = 30;
switch (percentage) {
    case 80:
        console.log("A");
        break;
    case 70:
        console.log("B");
        break;
    case 60:
        console.log("C");
        break;
    case 50:
        console.log("D");
        break;
    case 40:
        console.log("D");
        break;
    default:
        console.log("work hard");
}
