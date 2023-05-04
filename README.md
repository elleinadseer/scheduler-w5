# scheduler-w5
Work Day Scheduler

Add the current day to be displayed at the top of the calendar
Each time block should be colour coded to indicate whether it is in the past, present of future
When clicking on a time block I can enter an event
When I click the save button for that time block the text for that event is saved in local storage
When refreshing the page the saved events should persist

HTML Notes:

      <!-- Use class for "past", "present", and "future" to apply styles to the
        time-block divs accordingly. The javascript will need to do this by
        adding/removing these classes on each div by comparing the hour in the
        id to the current hour. The html provided below is meant to be an example
        demonstrating how the css provided can be leveraged to create the
        desired layout and colors. The html below should be removed or updated
        in the finished product. Remember to delete this comment once the
        code is implemented.
        -->

      <!-- Example of a past time block. The "past" class adds a gray background color. -->

            <!-- Example of a present time block. The "present" class adds a red background color. -->

      <!-- Example of a future time block. The "future" class adds a green background color. -->


JS Notes: 

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
