$(window).resize(function () {
    if (this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function () {
        $(this).trigger('resizeEnd');
    }, 500);
});

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

var map;
var myLatlng = new google.maps.LatLng(49.9751544, 20.4217713);
var zoom = 15;

function initialize() {
    var myOptions = {
        zoom: zoom,
        center: myLatlng,
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

    var image = {
        url: 'img/sygnet.png',
        scaledSize: new google.maps.Size(30, 35)
    };

    var marker = new google.maps.Marker({
        position: myLatlng,
        title: "Wytwórnia Pikseli",
        icon: image
    });

    marker.addListener('click', function () {
        window.location = "https://www.google.pl/maps/dir//Wytw%C3%B3rnia+Pikseli,+Karosek+27,+32-700+Bochnia/@49.9753031,20.3519464,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47163b3a3f97e2d9:0x3eca72adb3d94805!2m2!1d20.4219862!2d49.9752138";
    });

    map = new google.maps.Map(document.getElementById('map'), myOptions);
    // To add the marker to the map, call setMap();
    marker.setMap(map);
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
    $('header a[href^="#"]').on('click', function (event) {

        var target = $($(this).attr('href'));
        var headerHeight = $(".menuGorne").height();

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - headerHeight,
            }, 1000);
        }
    });
});

var choosenCategory = "all";


function removeClass() {
    $(".navDolny").css("display", "none");
    $(".navButton").css("display", "none");
    $(".simplyPoland").css("display", "none");
    $(".onglow").css("display", "none");
    $(".locomotiva").css("display", "none");
    $(".kopalnia").css("display", "none");
    $(".jestesmy").css("display", "none");
    $(".solpak").css("display", "none");
    $(".guardian").css("display", "none");
    $(".hcg").css("display", "none");
    $(".helvetica").css("display", "none");
    $(".jakaBox").css("display", "none");
    $(".kete").css("display", "none");
    $(".kitchoo").css("display", "none");
    $(".miloo").css("display", "none");
    $(".jakaBox2").css("display", "none");
    $(".chwilaZapomnienia").css("display", "none");
    // TU usun klasy:

}
$(function () {
    var selectedClass = "";
    $("p").click(function () {
        removeClass();

        selectedClass = $(this).attr("data-rel");

        // $('.portfolioNav p').removeAttr('id');  // usuniety  kolorniebieski z nav
        $('.portfolioNav p').css("background-color", "#fbb900;").css("color", "black").css("font-weight", "normal");//usuniety niebieski z navdolnego

        console.log(selectedClass);
        choosenCategory = selectedClass;


        // $(this).attr("id", "active2"); //dodoanie niebieskiego do nav wybranej kategori nav gorne
        $('.portfolioNav [data-rel~="' + selectedClass + '"]').css("background-color", "#009fe4").css("color", "white").css("font-weight", "bold");
        console.log($(this));

        //dzialanie portfolio
        $("#portfolio").fadeTo(100, 0.1);  //znikaja kwadraty
        $("#portfolio div").not("." + selectedClass).fadeOut(); //pojawiaja sie te ktore maja wybrana klase np allwebsite graphic
        setTimeout(function () {
            $("." + selectedClass).fadeIn();
            $("." + selectedClass + " .content").fadeIn();
            $("#portfolio").fadeTo(500, 1);
        }, 500);
    });

    $(".navDolny").click(function () {

    });

});


var choosenProjectClass = "";
$(function () {

    $(".simplyPolandClick").click(function () {
        $("#portfolio").css("display", "none");
        $(".navButton").css("display", "block");
        $(".navDolny").css("display", "flex");
        $('.portfolio-content img').imgPreload();
        $(".simplyPoland").css("display", "block");
        choosenProjectClass = $(".simplyPolandClick");
        console.log(choosenProjectClass);
        // checkIfThereIsNextClass();
        // checkIfThereIsPrevClass();
    });

    $(".onglowClick").click(function () {
        $("#portfolio").css("display", "none");
        $(".navButton").css("display", "block");
        $(".navDolny").css("display", "flex");
        $('.portfolio-content img').imgPreload();
        $(".onglow").css("display", "block");
        choosenProjectClass = $(".onglowClick");
        console.log(choosenProjectClass);
        // checkIfThereIsNextClass();
        // checkIfThereIsPrevClass();
    });


    $(".locomotivaClick").click(function () {
        $("#portfolio").css("display", "none");
        $(".navButton").css("display", "block");
        $(".navDolny").css("display", "flex");
        $('.portfolio-content img').imgPreload();
        $(".locomotiva").css("display", "block");
        choosenProjectClass = $(".locomotivaClick");
        console.log(choosenProjectClass);
        // checkIfThereIsNextClass();
        // checkIfThereIsPrevClass();
    });


    $(".kopalniaClick").click(function () {
        $("#portfolio").css("display", "none");
        $(".navButton").css("display", "block");
        $(".navDolny").css("display", "flex");
        $('.portfolio-content img').imgPreload();
        $(".kopalnia").css("display", "block");
        choosenProjectClass = $(".kopalniaClick");
        console.log(choosenProjectClass + "kopalniaCkick on  to jest ");
        console.log(choosenProjectClass + "to jestwybrna klasa object jquery");
        // checkIfThereIsNextClass();
        // checkIfThereIsPrevClass();
    });

    $(".jestesmyClick").click(function () {
        $("#portfolio").css("display", "none");
        $(".navButton").css("display", "block");
        $(".navDolny").css("display", "flex");
        $('.portfolio-content img').imgPreload();
        $(".jestesmy").css("display", "block");
        choosenProjectClass = $(".jestesmyClick");
        console.log(choosenProjectClass);
        console.log(choosenProjectClass);
        // checkIfThereIsNextClass();
        // checkIfThereIsPrevClass();
    });
    $(".solpakClick").click(function () {
        $("#portfolio").css("display", "none");
        $(".navButton").css("display", "block");
        $(".navDolny").css("display", "flex");
        $('.portfolio-content img').imgPreload();
        $(".solpak").css("display", "block");
        choosenProjectClass = $(".solpakClick");
        console.log(choosenProjectClass);
        console.log(choosenProjectClass);
        // checkIfThereIsNextClass();
        // checkIfThereIsPrevClass();
    });

    $(".guardianClick").click(function () {
        $("#portfolio").css("display", "none");
        $(".navButton").css("display", "block");
        $(".navDolny").css("display", "flex");
        $('.portfolio-content img').imgPreload();
        $(".guardian").css("display", "block");
        choosenProjectClass = $(".guardianClick");
        console.log(choosenProjectClass);
        console.log(choosenProjectClass);
        // checkIfThereIsNextClass();
        // checkIfThereIsPrevClass();
    });

    $(".hcgClick").click(function () {
        $("#portfolio").css("display", "none");
        $(".navButton").css("display", "block");
        $(".navDolny").css("display", "flex");
        $('.portfolio-content img').imgPreload();
        $(".hcg").css("display", "block");
        choosenProjectClass = $(".hcgClick");
        console.log(choosenProjectClass);
        console.log(choosenProjectClass);
        // checkIfThereIsNextClass();
        // checkIfThereIsPrevClass();
    });

    $(".helveticaClick").click(function () {
        $("#portfolio").css("display", "none");
        $(".navButton").css("display", "block");
        $(".navDolny").css("display", "flex");
        $('.portfolio-content img').imgPreload();
        $(".helvetica").css("display", "block");
        choosenProjectClass = $(".helveticaClick");
        console.log(choosenProjectClass);
        console.log(choosenProjectClass);
        // checkIfThereIsNextClass();
        // checkIfThereIsPrevClass();
    });

    $(".jakaBoxClick").click(function () {
        $("#portfolio").css("display", "none");
        $(".navButton").css("display", "block");
        $(".navDolny").css("display", "flex");
        $('.portfolio-content img').imgPreload();
        $(".jakaBox").css("display", "block");
        choosenProjectClass = $(".jakaBoxClick");
        console.log(choosenProjectClass);
        console.log(choosenProjectClass);
        // checkIfThereIsNextClass();
        // checkIfThereIsPrevClass();
    });

    $(".keteClick").click(function () {
        $("#portfolio").css("display", "none");
        $(".navButton").css("display", "block");
        $(".navDolny").css("display", "flex");
        $('.portfolio-content img').imgPreload();
        $(".kete").css("display", "block");
        choosenProjectClass = $(".keteClick");
        console.log(choosenProjectClass);
        console.log(choosenProjectClass);
        // checkIfThereIsNextClass();
        // checkIfThereIsPrevClass();
    });

    $(".kitchooClick").click(function () {
        $("#portfolio").css("display", "none");
        $(".navButton").css("display", "block");
        $(".navDolny").css("display", "flex");
        $('.portfolio-content img').imgPreload();
        $(".kitchoo").css("display", "block");
        choosenProjectClass = $(".kitchooClick");
        console.log(choosenProjectClass);
        console.log(choosenProjectClass);
        // checkIfThereIsNextClass();
        // checkIfThereIsPrevClass();
    });
    $(".milooClick").click(function () {
        $("#portfolio").css("display", "none");
        $(".navButton").css("display", "block");
        $(".navDolny").css("display", "flex");
        $('.portfolio-content img').imgPreload();
        $(".miloo").css("display", "block");
        choosenProjectClass = $(".milooClick");
        console.log(choosenProjectClass);
        console.log(choosenProjectClass);
        // checkIfThereIsNextClass();
        // checkIfThereIsPrevClass();
    });

    $(".jakaBox2Click").click(function () {
        $("#portfolio").css("display", "none");
        $(".navButton").css("display", "block");
        $(".navDolny").css("display", "flex");
        $('.portfolio-content img').imgPreload();
        $(".jakaBox2").css("display", "block");
        choosenProjectClass = $(".jakaBox2Click");
        console.log(choosenProjectClass);
        console.log(choosenProjectClass);
        // checkIfThereIsNextClass();
        // checkIfThereIsPrevClass();
    });
    $(".chwilaZapomnieniaClick").click(function () {
        $("#portfolio").css("display", "none");
        $(".navButton").css("display", "block");
        $(".navDolny").css("display", "flex");
        $('.portfolio-content img').imgPreload();
        $(".chwilaZapomnienia").css("display", "block");
        choosenProjectClass = $(".chwilaZapomnieniaClick");
        console.log(choosenProjectClass);
        console.log(choosenProjectClass);
        // checkIfThereIsNextClass();
        // checkIfThereIsPrevClass();
    });

    // TU dodaj kolejne reALIZAJIE:


    // function checkIfThereIsPrevClass() {
    //     var prevClass = $("." + choosenCategory).eq($("." + choosenCategory).index(choosenProjectClass) - 1);
    //     if(prevClass[0].classList[3] === undefined){
    //         $(".prevButton").css("cursor","not-allowed");
    //     }else {
    //         $(".prevButton").css("cursor","pointer");
    //     }
    // }
    // function checkIfThereIsNextClass() {
    //     var nextClass = $("." + choosenCategory).eq($("." + choosenCategory).index(choosenProjectClass) + 1);
    //     if(nextClass[0].classList[3] === undefined){
    //         $(".nextButton img").css("cursor","not-allowed");
    //     }else {
    //         $(".nextButton img").css("cursor","pointer");
    //     }
    // }

    $(".closeButton").click(function () {
        removeClass();
        $("#portfolio").fadeTo(100, 0.1);
        $("#portfolio div").not("." + choosenCategory).fadeOut();
        setTimeout(function () {
            $("." + choosenCategory).fadeIn();
            $("." + choosenCategory + " .content").fadeIn();
            $("#portfolio").fadeTo(500, 1);
        }, 500);
    });


    $(".prevButton").click(function () {
        console.log("nacisnietyPrev");
        var prevClass = $("." + choosenCategory).eq($("." + choosenCategory).index(choosenProjectClass) - 1);
        console.log(prevClass + " taka jest poprzednia klasa");
        if (prevClass[0].classList[3] === undefined) {
            $(".prevButton").css("color", "red");
        } else {
            var prevClassFunction = prevClass[0].classList[3].slice(0, -5);
            console.log(prevClassFunction + " taka klasa bedzie odpalona");
            removeClass();
            $("#portfolio").css("display", "none");
            $(".navButton").css("display", "block");
            $(".navDolny").css("display", "flex");
            $("." + prevClassFunction).css("display", "block");
            choosenProjectClass = $("." + prevClassFunction + "Click");
            checkIfThereIsNextClass();
            checkIfThereIsPrevClass();
        }

    });

    $(".nextButton").click(function () {
        console.log("nacisnietyNext");
        var nextClass = $("." + choosenCategory).eq($("." + choosenCategory).index(choosenProjectClass) + 1);
        console.log(nextClass + " taka jest nastepna klasa");
        console.log(nextClass[0].classList[3]);
        if (nextClass[0].classList[3] === undefined) {
            $(".nextButton").css("color", "red");
        } else {
            var nextClassfunction = nextClass[0].classList[3].slice(0, -5);
            console.log(nextClassfunction + " taka klasa bedzie odpalona");
            removeClass();
            $("#portfolio").css("display", "none");
            $(".navButton").css("display", "block");
            $(".navDolny").css("display", "flex");
            $("." + nextClassfunction).css("display", "block");
            choosenProjectClass = $("." + nextClassfunction + "Click");
            checkIfThereIsNextClass();
            checkIfThereIsPrevClass();
        }
    });


    jQuery(document).ready(function () {
        jQuery('#menuToggle').click(function () {
            jQuery('#menuToggle').toggleClass('open');
            if (jQuery('#menuToggle').hasClass('open')) {
                jQuery('.nav').addClass('open');
            } else {
                jQuery('.nav').removeClass('open');
            }
        });
    });
});


// zmiana koloru nav na bialy + zmiejsznie logo
$(window).scroll(function () {
    if ($(window).scrollTop() >= 10) {
        $('.menuGorne').css('background', 'white');
        // $('.logoTop').css("width", "100px");
    } else {
        // $('.logoTop').css("width", "121px");
        $('.menuGorne').css('background', 'transparent');
    }
});

// obsluga buttonow close nextprev w portfolio

// obsluga preloader strona glowna
(function ($) {
    $(window).load(function () { // czekamy, aż załaduje się cała strona
        $('#status').fadeOut(); // efekt zanikania animowanej grafiki
        $('#preloader').delay(200).fadeOut('slow'); // efekt zanikania warstwy zakrywającej stronę
        $('body').delay(200).css({'overflow': 'visible'}); // dopóki nasz div#preloader jest widoczny nie ma możliwości przewijania strony
    });
})(jQuery);

(function ($) {
    $(function() {
        if (isMobile.any() || window.innerWidth<700) {
            return;
        }

        var video = '<video class="video normal" autoplay muted loop>' +
            '<source class="videofilm" src="img/wytwornia_pikseli_film_naglowek_720p_max19.mp4">' +
        '</video>';

        $('#video-container').html(video);
    });
})(jQuery);