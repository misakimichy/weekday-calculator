import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const convertToDay = (date) => {
  const year = date[0];
  const month = date[1];
  const day = date[2];
  const getDate = new Date(year, month, day);
  const weekday = new Array(7);
  weekday[0] = "Saturday";
  weekday[1] = "Sunday";
  weekday[2] = "Monday";
  weekday[3] = "Tuesday";
  weekday[4] = "Wednesday";
  weekday[5] = "Thursday";
  weekday[6] = "Friday";
  
  const wd = weekday[getDate.getDate()];
  return wd;
}

$(document).ready(function(){
  $("input#date").change(function(event){
    event.preventDefault();
    // Save the inputted date and remove hyphens
    const date = $(this).val().split("-");
    $("#day").val($("#day").val() + convertToDay(date));
  });
});