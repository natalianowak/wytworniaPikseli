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




    $("p.button1").click(function () {
        $("div.expand1").animate({
            height: $("div.expand1")[0].scrollHeight
        }, 900);

        $("p.button1").css("display", "none");

        $("p.mniej1").css("display", "block");

    });
    $("p.button2").click(function () {
        $("div.expand2").animate({
            height: $("div.expand2")[0].scrollHeight
        }, 900);

        $("p.button2").css("display", "none");
        $("p.mniej2").css("display", "block");
    });

    $("p.button3").click(function () {
        $("div.expand3").animate({
            height: $("div.expand3")[0].scrollHeight
        }, 900);

        $("p.button3").css("display", "none");
        $("p.mniej3").css("display", "block");
    });

    $("p.button4").click(function () {
        $("div.expand4").animate({
            height: $("div.expand4")[0].scrollHeight
        }, 900);

        $("p.button4").css("display", "none");
        $("p.mniej4").css("display", "block");
    });
    $("p.button5").click(function () {
        $("div.expand5").animate({
            height: $("div.expand5")[0].scrollHeight
        }, 900);

        $("p.button5").css("display", "none");
        $("p.mniej5").css("display", "block");
    });
    $("p.button6").click(function () {
        $("div.expand6").animate({
            height: $("div.expand6")[0].scrollHeight
        }, 900);

        $("p.button6").css("display", "none");
        $("p.mniej6").css("display", "block");
    });


    function createHeight(){
        var hight;
        if($(window).width() > 1100){
           return hight = { height: 129};
        } else {
           return hight = { height: 122};
        }             // The function returns the product of p1 and p2
    }


    $("p.mniej1").click(function () {
        $("div.expand1").animate(createHeight(), 900);
        $("p.mniej1").css("display", "none");
        $("p.button1").css("display", "block");

    });
    $("p.mniej2").click(function () {
        $("div.expand2").animate(createHeight(), 900);
        $("p.mniej2").css("display", "none");
        $("p.button2").css("display", "block");
    });

    $("p.mniej3").click(function () {
        $("div.expand3").animate(createHeight(), 900);
        $("p.mniej3").css("display", "none");
        $("p.button3").css("display", "block");
    });

    $("p.mniej4").click(function () {
        $("div.expand4").animate(createHeight(), 900);
        $("p.mniej4").css("display", "none");
        $("p.button4").css("display", "block");
    });
    $("p.mniej5").click(function () {
        $("div.expand5").animate(createHeight(), 900);
        $("p.mniej5").css("display", "none");
        $("p.button5").css("display", "block");
    });
    $("p.mniej6").click(function () {
        $("div.expand6").animate(createHeight(), 900);
        $("p.mniej6").css("display", "none");
        $("p.button6").css("display", "block");
    });


});