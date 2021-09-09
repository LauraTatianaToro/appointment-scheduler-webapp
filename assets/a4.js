



    

    var selectedDay = document.getElementsByClassName("calendar__number");
    var timeslot = document.getElementsByClassName("timeslot-default");


    var x = document.getElementById("dates");

    const divisibleBy = [];
    let h = 0;

function openTimeslots(num) {





    for (h = 6; h < 37; ++h){
      if(selectedDay[h].classList.contains("calendar__number--current")){
        selectedDay[h].setAttribute("class", "calendar__number");
      }
    }
    

for(var i =0; i <= 31; i++){
  if(num % i ==0){
    divisibleBy.push(i);
  }

}
console.log(divisibleBy);


selectedDay[5 + num ].setAttribute("class", "calendar__number calendar__number--current");



for(i = 0 ; i < divisibleBy.length; i++){
  if(divisibleBy[i] == "2"){
    document.getElementById("2").setAttribute("class", "timeslot-active");
    document.getElementById("3").setAttribute("class", "timeslot-default");
    document.getElementById("4").setAttribute("class", "timeslot-default");
    document.getElementById("5").setAttribute("class", "timeslot-default");
    document.getElementById("6").setAttribute("class", "timeslot-default");

    
  } 

  if(divisibleBy[i] == "3"){
    document.getElementById("2").setAttribute("class", "timeslot-default");
    document.getElementById("3").setAttribute("class", "timeslot-active");
    document.getElementById("4").setAttribute("class", "timeslot-default");
    document.getElementById("5").setAttribute("class", "timeslot-default");
    document.getElementById("6").setAttribute("class", "timeslot-default");
  } 

  if(divisibleBy[i] == "5"){

    document.getElementById("4").setAttribute("class", "timeslot-active");
    document.getElementById("5").setAttribute("class", "timeslot-default");
    document.getElementById("6").setAttribute("class", "timeslot-default");
  } 

  if(divisibleBy[i] == "7"){
    document.getElementById("2").setAttribute("class", "timeslot-default");
    document.getElementById("3").setAttribute("class", "timeslot-default");
    document.getElementById("4").setAttribute("class", "timeslot-default");
    document.getElementById("5").setAttribute("class", "timeslot-active");
    document.getElementById("6").setAttribute("class", "timeslot-default");

  } 

  if(divisibleBy[i] == 11){

    document.getElementById("2").setAttribute("class", "timeslot-default");
    document.getElementById("3").setAttribute("class", "timeslot-default");
    document.getElementById("4").setAttribute("class", "timeslot-default");
    document.getElementById("5").setAttribute("class", "timeslot-default");
    document.getElementById("6").setAttribute("class", "timeslot-active");

  } if(divisibleBy[i] == 1)  {

document.getElementById("2").setAttribute("class", "timeslot-default");
document.getElementById("3").setAttribute("class", "timeslot-default");
document.getElementById("4").setAttribute("class", "timeslot-default");
document.getElementById("5").setAttribute("class", "timeslot-default");
document.getElementById("6").setAttribute("class", "timeslot-default");

  }


}



  x.style.transition = "all .50s ease-in-out";
  x.style.height =
    "330px";


  /*  } else if (num %3 == 0){
      console.log("divisble by 3");
  } else if (num %5 == 0){
      console.log("divisble by 5");
} else if (num %7 == 0){
      console.log(num);
} else if (num %11 == 0) {
      console.log(num);

    } else {
      console.log("ew")
    }
*/

    /*
    var nums = document.getElementsByClassName('calendar__number');

    for(var i = 0; i < nums.length; i++) {
        console.log(nums[i].innerHTML);
        if(nums[i].innerHTML % 2 == 0){
          console.log(nums[i].innerHTML);
        }
            } */
}


function alertExistingAppointment(){
  alert("This page will show the user options for cancelling and rescheduling.")
}

function alertSubmitForm(){
  alert("The user is emailed their confirmation as well as the location of their appointment based on their address.")
}