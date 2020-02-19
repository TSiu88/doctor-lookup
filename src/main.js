import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Lookup } from './lookup';

$(document).ready(function(){
  
  $("#searchButton").click(function(event){
    event.preventDefault();
    $("#results").empty();
    $("#headers").hide();
    $(".breaks").hide();
    let name = $("#doctorName").val();
    let issue = $("#medicalIssue").val();
    let distance = $("#distance").val();
    let location = $("#location").val();
    if(location ===""){
      location = "Seattle";
    }

    (async () => {
      let lookup = new Lookup();
      const coordinatesJson = await lookup.getCoordinates(location);
      let coordinates = getLocation(coordinatesJson, distance);
      const response = await lookup.getDoctors(coordinates, name, issue);
      getOutput(response);
    })();

    function getLocation(json, distance){
      let locationString = json.results[0].geometry.lat.toFixed(3) + "," + json.results[0].geometry.lng.toFixed(3) +","+distance;
      return locationString;
    }

    function getOutput(response){
      $("#results").append(`<h2>Search Results <span id="count"></span> of <span id="total"></span> <span id='name'></span> <span id='issue'></span> at ${location}</h2>`);

      if (name != ""){
        $("#name").text("for \"" + name +"\"");
      }
      if (issue != ""){
        $("#issue").text("on \"" + issue +"\"");
      }
      
      let count = 10;
      if (response.meta.total < 10){
        count = response.meta.total;
      }
      $("#count").text(count);
      $("#total").text(response.meta.total);

      if (count === 0){
        $("#results").append(`<p>No doctors that met the inputted criteria were found.</p>`);
      } else {
        $("#results").append(`<ol type="1" id="doctors"></ol>`);
        for (let i =0; i < count; i++){
          let middleName = "";
          if(response.data[i].profile.middle_name != undefined){
            middleName = response.data[i].profile.middle_name;
          }
          let fullName = response.data[i].profile.first_name + " " + middleName + " " + response.data[i].profile.last_name;
          $("#doctors").append(`<li class="doctor" id="doctor${i}"> <strong>${fullName} ${response.data[i].profile.title}</strong></li>`);

          addProfile(response, i);
        }
      }
    }

    function addProfile(response , i){
      $(`#doctor${i}`).append(`<ul id="profile${i}"></ul>`);

      let fullAddress = response.data[i].practices[0].visit_address.street + ", " + response.data[i].practices[0].visit_address.city + ", " + response.data[i].practices[0].visit_address.state + " " + response.data[i].practices[0].visit_address.zip;
      $(`#profile${i}`).append(`<li><strong>Address:</strong> ${fullAddress}</li>`);

      
      $(`#profile${i}`).append(`<li><strong>Phone:</strong> <a href="tel:${response.data[i].practices[0].phones[0].number}">${formatNumber(response.data[i].practices[0].phones[0].number)}</a></li>`);

      let website = "Not Available.";
      if(response.data[i].practices[0].website != undefined){
        website = response.data[i].practices[0].website;
        $(`#profile${i}`).append(`<li><strong>Practice Site Website:</strong> <a href="${website}">${website}</a></li>`);
      }else{
        $(`#profile${i}`).append(`<li><strong>Practice Site Website:</strong> ${website}</li>`);
      }

      $(`#profile${i}`).append(`<li><strong>Accepting new Patients?</strong> ${response.data[i].practices[0].accepts_new_patients}</li>`);

      let bio = "Not Available.";
      if(response.data[i].profile.bio !=""){
        bio = response.data[i].profile.bio;
      }
      $(`#profile${i}`).append(`<li><strong>Bio:</strong> ${bio}</li>`);
    }

    function formatNumber(phoneNum){
      let area = phoneNum.slice(0,3);
      let first = phoneNum.slice(3,6);
      let end = phoneNum.slice(6);
      return "(" + area + ")" + first + "-" + end;
    }

  });
});
