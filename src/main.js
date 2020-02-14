import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Lookup } from './lookup';

$(document).ready(function(){
  
  $("#searchButton").click(function(event){
    event.preventDefault();
    $("#results").empty();
    let name = $("#doctorName").val();
    let issue = $("#medicalIssue").val();
    let location = "wa-seattle";

    (async () => {
      let lookup = new Lookup();
      const response = await lookup.getDoctors(location, name, issue);
      getOutput(response);
    })();

    function getOutput(response){
      $("#results").append(`<h2>Search Results <span id='name'></span> <span id='issue'> at ${location}</h2>`);

      if (name != ""){
        $("#name").text("for Doctor: " + name);
      }
      if (issue != ""){
        $("#issue").text("for " + issue);
      }
      
      let count = 10;
      if (response.meta.total < 10){
        count = response.meta.total;
      }

      if (count === 0){
        $("#results").append("No doctors that met the inputted criteria were found.");
      } else{
        $("#results").append(`<ol type="1" id="doctors"></ol>`);
        for (let i =0; i < count; i++){
          let middleName = "";
          if(response.data[i].profile.middle_name != undefined){
            middleName = response.data[i].profile.middle_name;
          }
          let fullName = response.data[i].profile.first_name + " " + middleName + " " + response.data[i].profile.last_name
          $("#doctors").append(`<li id="doctor${i}"> ${fullName}</li>`);
        }
      }
      
    }
  });
});
