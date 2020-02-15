export class Lookup{

  async getCoordinates(location){
    try{
      let response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${process.env.GEOCODE_API_KEY}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error){
      console.error("Error handling request: " + error.message);
      alert("Error handling request: " + error.message);
    }
  }

  async getDoctors(location, name, issue){
    try{
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${issue}&location=${location}&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error){
      console.error("Error handling request: " + error.message);
      alert("Error handling request: " + error.message);
    }
  }
  
}