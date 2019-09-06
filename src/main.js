import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const convertToDay = (date) => {
  const year = date[0];
  // Date takes 0 - 11 as months so add condition to convert the input number into proper number
  let month = date[1];
  if (month === "01") {
    month = 0;
  } else if (month === "02") {
    month = 1;
  } else if (month === "03") {
    month = 2;
  } else if (month === "04") {
    month = 3;
  } else if (month === "05") {
    month = 4;
  } else if (month === "06") {
    month = 5;
  } else if (month == "07") {
    month = 6;
  } else if (month === "08") {
    month = 7;
  } else if (month === "09") {
    month = 8;
  } else if (month === "10") {
    month = 9;
  } else if (month === "11") {
    month = 10;
  } else if (month === "02") {
    month = 11;
  }
  const day = date[2];
  const getDate = new Date(year, month, day);

  // getDay() - returns number 0 - 6 which is Sun - Sat
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
  let weekDay = getDate.getDay()
  if (weekDay === 0) {
    weekDay = "Sunday";
  } else if (weekDay === 1) {
    weekDay = "Monday";
  } else if (weekDay === 2) {
    weekDay = "Tuesday";
  } else if (weekDay === 3) {
    weekDay = "Wednesday";
  } else if (weekDay === 4) {
    weekDay = "Thursday";
  } else if (weekDay === 5) {
    weekDay = "Friday";
  } else if (weekDay == 6) {
    weekDay = "Saturday";
  }
  return weekDay;
};

$(document).ready(function(){
  $("input#date").change(function(event){
    event.preventDefault();
    const date = $(this).val().split("-");
    $("#day").val($("#day").val() + convertToDay(date));
  });
});