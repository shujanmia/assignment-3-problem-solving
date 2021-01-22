

//###1. kilometerToMeter
function kilometerToMeter(kilometer){
    if(kilometer < 0) return "Distance can not be negative"
    var meter = kilometer * 1000;      // (1 km = 1000 m)
    return meter;
}
var distanceM = kilometerToMeter(12);
console.log(distanceM);


//###2. budgetCalculator
function budgetCalculator(watch, mobile, laptop){
    if(watch < 0 || mobile < 0 || laptop < 0) return "price can not be negative"
    var result = watch * 50 + mobile * 100 + laptop * 500;
    return result;
}
var totalPrice = budgetCalculator(5, 1, 2); //Different number of watches, mobiles, and laptops.
console.log(totalPrice);



//###3. hotelCost
function hotelCost(n){
    if(n < 0) return "HotelCost can not be negative"
    var day = n;
    var hotelBara = 0;
    if(day <= 10){
        hotelBara = day * 100;
    } else if(day <= 20){
        var firstOffer = 10 * 100;
        var remaningDay = day - 10;
        var secondOffer = remaningDay * 80;
        hotelBara = firstOffer + secondOffer;
    }
    else{
        var firstOffer = 10*100;
        var secondOffer = 10*80;
        var remaningDay = day - 20;
        var thirdOffer = remaningDay * 50;
        hotelBara = firstOffer + secondOffer + thirdOffer;
    }
    return hotelBara;
}
var totalHotelCost = hotelCost(43);
console.log(totalHotelCost);


//###4. megaFriend
function megaFriend(name){
    var max = 0;
    for(var i = 0; i < name.length; i++){
        if(name[max].length < name[i].length){
            max = i;
        }
    }
    return  name[max];
}
var friendsName = megaFriend(["shujan", "habib", "masud", "salman","sojol"]);
console.log(friendsName);

