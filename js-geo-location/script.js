let geo = document.getElementById('geo');

function get(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(show);
  } else {
    geo.innerHTML = "Geolocation is not supported"
  }
}
function show(position){
  geo.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
  let here = position.coords.latitude + "," + position.coords.longitude;
  let map = 'http://maps.googleapis.com/maps/api/staticmap?center='
            + here + '&zoom=14&size=400x300&sensor=false';
  document.getElementById('geo').innerHTML = `<img src="${map}" />`;
}
get();