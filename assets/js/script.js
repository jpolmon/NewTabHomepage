var currentDay = moment().format('dddd') + " " + moment().format('MMMM Do YYYY');
var currentClockTime = moment().format('h:mm:ss a');


var interval = setInterval(function() {
    var rightNow = moment()
    $('#currentDay').html(rightNow.format("YYYY MMMM DD") + " "
    + rightNow.format("dddd")
    .substring(0,3).toLocaleUpperCase());
    $("#currentDay"). html(currentDay + " " + rightNow.format("hh:mm:ss A"));
}, 1000);


//    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>



// <h1 class = "header">Welcome "user's name"</h1>
// <p> Welcome to your homepage! I hope you have a wonderful day! </p>
// <p id="currentDay"></p>
