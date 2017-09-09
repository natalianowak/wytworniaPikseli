var map;
var lat = 49.9751544;
var lng = 20.4217713;
var zoom = 15;

function initialize() {
    var myOptions = {
        zoom: zoom,
        center: new google.maps.LatLng(lat, lng),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#444444"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#878787"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            }
        ]
    };
    map = new google.maps.Map(document.getElementById('map'), myOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);

var wow = new WOW(
    {
        boxClass: 'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0,          // distance to the element when triggering the animation (default is 0)
        mobile: true,       // trigger animations on mobile devices (default is true)
        live: true,       // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    }
);
wow.init();


$(document).ready(function () {
    $(".losiuYellow").on({
        "mouseover": function () {
            this.src = 'img/yellowLosiu.png';
        },
        "mouseout": function () {
            this.src = 'img/kolkoLosiu.png';
        }
    });
    $(".dankaYellow").on({
        "mouseover": function () {
            this.src = 'img/yellowDanka.png';
        },
        "mouseout": function () {
            this.src = 'img/kolkoDanka.png';
        }
    });
    $(".stodiYellow").on({
        "mouseover": function () {
            this.src = 'img/yellowStodi.png';
        },
        "mouseout": function () {
            this.src = 'img/kolkoStodi.png';
        }
    });



    $("p.button1").click(function () {
        $("div.expand1").animate({
            height: $("div.expand1")[0].scrollHeight
        }, 1000);
        // $("p.button1").css("padding-bottom", "15px");
        $("p.button1").css("display", "none");

    });
    $("p.button2").click(function () {
        $("div.expand2").animate({
            height: $("div.expand2")[0].scrollHeight
        }, 1000);
        // $("p.button2").css("padding-bottom", "15px");
        $("p.button2").css("display", "none");
    });

    $("p.button3").click(function () {
        $("div.expand3").animate({
            height: $("div.expand3")[0].scrollHeight
        }, 1000);
        // $("p.button3").css("padding-bottom", "15px");
        $("p.button3").css("display", "none");
    });

    $("p.button4").click(function () {
        $("div.expand4").animate({
            height: $("div.expand4")[0].scrollHeight
        }, 1000);
        // $("p.button4").css("padding-bottom", "15px");
        $("p.button4").css("display", "none");
    });
    $("p.button5").click(function () {
        $("div.expand5").animate({
            height: $("div.expand5")[0].scrollHeight
        }, 1000);
        // $("p.button5").css("padding-bottom", "15px");
        $("p.button5").css("display", "none");
    });
    $("p.button6").click(function () {
        $("div.expand6").animate({
            height: $("div.expand6")[0].scrollHeight
        }, 1000);
        // $("p.button6").css("padding-bottom", "15px");
        $("p.button6").css("display", "none");
    });


});