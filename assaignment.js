// https://github.com/Rakibul71/third-assaignment/blob/main/assaignment.js


// Exercise one
function kilometerToMeter(kilometer) {
    if (kilometer >= 0) {
        var meter = kilometer * 1000; // 1 kilometer =1000 meter   
    }

    else {
        return "Unexpected Value !!!"
    }
    return meter;
}

var output = kilometerToMeter(-13);
console.log(output);



//Exercise two
function budgetCalculator(watch, phone, laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    if (watch >= 0 && phone >= 0 && laptop >= 0) {
        var totalPrice = watchPrice + phonePrice + laptopPrice;
    }
    else {
        return "Unexpected Value"
    }

    return totalPrice;
}
var price = budgetCalculator(10, 5, -2);
console.log(price);



// Exercise Three

function hotelCost(dayStay) {
    var cost = 0;
    if (dayStay >= 0) {
        if (dayStay <= 10) {
            cost = dayStay * 100;
        }
        else if (dayStay <= 20) {
            var firstTenDays = 10 * 100;
            var remainingDays = dayStay - 10;
            var secondTenDaysCost = remainingDays * 80;
            cost = firstTenDays + secondTenDaysCost;
        }
        else {
            var firstTenDays = 10 * 100;
            var secondTenDaysCost = 10 * 80;
            var remainingDays = dayStay - 20;
            var thirdPartCost = remainingDays * 50;
            cost = firstTenDays + secondTenDaysCost + thirdPartCost;
        }
    }
    else {
        return "Unexpected value!!!!"
    }
    return cost;
}
var totalCost = hotelCost(-60);
console.log(totalCost);




// Exercise Four

function megaFriend(friendsName) {

    var biggestName = friendsName[0];

    if (friendsName.length == 0){
        //If user input empty array this message will be shown
        return "Array can't be empty in This case. Please provide some values"
    }
    for (var i = 0; i < friendsName.length; i++) {

        var tempContainer = friendsName[i];

        if (tempContainer.length > biggestName.length) {
            biggestName = tempContainer;
        }
    }
    return biggestName;


}
