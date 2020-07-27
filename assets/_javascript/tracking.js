function displayMX() {
  var cols = document.getElementsByClassName('onlyMX');
  for(i = 0; i < cols.length; i++) {
    cols[i].style.display = 'block';
  }
}

function geoIP() {
    var user = {
      first_name: undefined,
      last_name: undefined,
      email: undefined,
      ip: undefined,
      prefix: undefined,
      country: undefined,
      state: undefined,
      city: undefined,
      zip: undefined,
      timezone: undefined,
      currency: undefined
    };
  
    var req = new XMLHttpRequest();
    req.overrideMimeType("application/json");
    req.open('GET', 'https://ipapi.co/json/', true);
    req.onload  = function() {
      response = JSON.parse(req.responseText);
      user.ip = response.ip;
      user.prefix = response.country_calling_code;
      user.country = response.country_code;
      user.state = response.region;
      user.city = response.city;
      user.zip = response.postal;
      user.timezone = response.timezone;
      user.currency = response.currency;
      localStorage.setItem('user', JSON.stringify(user));
    };
    req.send(null);
  }
  
// Get Stored UserData, if any
var userData = JSON.parse(localStorage.getItem('user'));

// Get the userIP, if we don't know, run GEOIP
var userIP = userData ? userData.ip : "unknown";
if ( userIP == "unknown" ) {
  geoIP();
}

// Check UserLocation
var userLocation = userData ? userData.country : "unknown";
if ( userLocation = "MX" ) {
  displayMX();
}