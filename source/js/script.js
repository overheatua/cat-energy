var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
var beforeToggle = document.querySelector('.example-range__toggle--before');
var afterToggle = document.querySelector('.example-range__toggle--after');
var divisor = document.getElementById("divisor"),
slider = document.getElementById("slider");
if (beforeToggle) {
  beforeToggle.addEventListener('click', function() {
    divisor.style.width = 0+"%";
    slider.value = 0;
  });
}
if (afterToggle) {
  afterToggle.addEventListener('click', function() {
    divisor.style.width = 100+"%";
    slider.value = 100;
  });
}

function moveDivisor() {
	divisor.style.width = slider.value+"%";
}


var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 50.116477, lng: 30.636405},
    zoom: 17,
    disableDefaultUI: true
  });

  var image = 'img/map-pin.png';
  var beachMarker = new google.maps.Marker({
    position: {lat: 50.116477, lng: 30.636405},
    map: map,
    icon: image
  });
}
