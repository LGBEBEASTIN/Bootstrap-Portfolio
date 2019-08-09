
function userDay() {
    var wkDay = new Array();
    wkDay[1] = "Monday";
    wkDay[2] = "Tuesday";
    wkDay[3] = "Wednesday";
    wkDay[4] = "Thursday";
    wkDay[5] = "Friday";
    wkDay[6] = "Saturday";
    wkDay[7] = "Sunday";

    var d = new Date();
    var n = wkDay[d.getDay()];
    console.log(n);
    $("#day").append(n + ",");
    var index = wkDay.indexOf(n);
    var catArray = new Array();
    catArray[0] = "";
    catArray[1] = "management";
    catArray[2] = "inspire";
    catArray[3] = "art";
    catArray[4] = "funny";
    catArray[5] = "sports";
    catArray[6] = "love";
    catArray[7] = "life";

    console.log(catArray[index]);
    let category = (catArray[index]);

    $.ajax({
        url: "https://quotes.rest/qod.json?category=" + category + "&lang=en&api_key=_sHYjMdQ5CSUcZjM6DJV5AeF",
        method: "GET"
    }).then(function (userQuote) {
        console.log(userQuote)
        $(".quoteDiv").append(userQuote.contents.quotes[0].quote);
    });
}

userDay();