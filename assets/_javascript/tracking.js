function geoIP() {
    var user = {
      first_name: null,
      last_name: null,
      email: null,
      ip: null,
      prefix: null,
      country: null,
      state: null,
      city: null,
      zip: null,
      timezone: null,
      currency: null
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
  
  
  var userData = JSON.parse(localStorage.getItem('user'));
  if(typeof userData === 'undefined' || userData.hasOwnProperty("ip") == false) {
    // We don't know about this user
    geoIP();
    console.log(1);
  } else {
    // We know about this user
    console.log(userData);
  }