// The .ready() function will execute this code after the DOM is ready
  $(document).ready(function() {


      // TODO: Add code to display the current date in the header of the page.
    var now = dayjs()
    $('#currentDay').text(now.format('dddd, MMMM d'));


  function checkHour() {
  
    // Checks through each .time-block class and turns every ID (number written in string) into an integer using parseInt
    // This is stored in a variable named idInt
    $('.time-block').each(function () {
    var idInt = parseInt($(this).attr('id'));

    // Stores current hour in 'hour' variable to compare to idInt
    var hour = dayjs().hour();
  
    // Adds classes to idInt using (this) when the integer is compared to the integer in 'hour'
    if (idInt < hour) {
      $(this).addClass('past');
    } else if (idInt === hour) {
      $(this).addClass('present');
    } else {
    $(this).addClass('future');
    }
  });
  }


checkHour();


// Registers a click event on the .saveBtn class buttons
$('.saveBtn').on('click', function () {

  // Using (this) we can navigate to the ID's (via the .attr method) and get .description values
  // We do this so that we know what description was saved in which ID
  var theID = $(this).parent().attr('id');
  var msg = $(this).siblings('.description').val();

  // Save to local storage
localStorage.setItem(theID, msg);
});


  // Retrieves information from the localStorage
  // Inserts localStorage items into the value of the various descriptions

$('#9 .description').val(localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'));
$('#11 .description').val(localStorage.getItem('11'));
$('#12 .description').val(localStorage.getItem('12'));
$('#13 .description').val(localStorage.getItem('13'));
$('#14 .description').val(localStorage.getItem('14'));
$('#15 .description').val(localStorage.getItem('15'));
$('#16 .description').val(localStorage.getItem('16'));
$('#17 .description').val(localStorage.getItem('17'));

  });


  