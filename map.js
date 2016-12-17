/*global google*/
/*global $ */


function inithuMap(){
    var coordonates = {lat: 40.758896, lng:-73.985130 };
    var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: coordonates
    });
    var marker = new google.maps.Marker({
          position: coordonates,
          map: map
    });
}

if(document.referrer  == 'https://helping-you-jalvarez2016.c9users.io/Notwantedhelper.html') {
  $(".helpfinder").html("finding new helper");
 
 
    setTimeout(function(){ 
        window.location='ProfileName.html'
    }, 5000);
} 


else {
    setTimeout(function(){ 
        window.location='Notwantedhelper.html'
    }, 5000);
}
