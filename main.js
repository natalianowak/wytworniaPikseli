$(window).resize(function () {
    if (this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function () {
        $(this).trigger('resizeEnd');
    }, 500);
});

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

    marker.addListener('click', function() {
        window.location = "https://www.google.pl/maps/dir/''/wytwornia+pikseli/@49.9751927,20.3519466,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47163b3a3f97e2d9:0x3eca72adb3d94805!2m2!1d20.4219862!2d49.9752138";
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

// window.mobilecheck = function() {
//     var check = false;
//     (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
//     return check;
//     }
//
// if (window.mobilecheck()) {
//     $("video").remove();
//     // $('#wrapper nav').remove();
// }

// zjezdanie do sekcji kontakt

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

        $('.portfolioNav p').removeAttr('id');  // usuniety  kolorniebieski z nav

        console.log(selectedClass);
        choosenCategory = selectedClass;
       $(this).attr("id","active2"); //dodoanie niebieskiego donavwybranej kategori
    // $(".navDolny p"+"[rel='+selectedClass+']").attr("id","active22"); //dodaj activ do navdolengo
    //     console.log("to jest this" + selectedClass);
        $("#portfolio").fadeTo(100, 0.1);  //znikaja kwadraty
        $("#portfolio div").not("." + selectedClass).fadeOut(); //pojawiaja sie te ktore maja wybrana klase np allwebsite graphic
        setTimeout(function () {
            $("." + selectedClass).fadeIn();
            $("." + selectedClass + " .content").fadeIn();
            $("#portfolio").fadeTo(500, 1);
        }, 500);
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
        console.log(choosenProjectClass );
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
        console.log(choosenProjectClass );
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
        console.log(choosenProjectClass );
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
        console.log(choosenProjectClass );
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
        console.log(choosenProjectClass );
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
        console.log(choosenProjectClass );
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
        console.log(choosenProjectClass );
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
        console.log(choosenProjectClass );
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
        console.log(choosenProjectClass );
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
        console.log(choosenProjectClass );
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
        console.log(choosenProjectClass );
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
        if(prevClass[0].classList[3] === undefined){
            $(".prevButton").css("color","red");
        }else{
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
        if(nextClass[0].classList[3] === undefined){
            $(".nextButton").css("color","red");
        }else {
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





    jQuery(document).ready(function() {
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
(function($) {
    $(window).load(function() { // czekamy, aż załaduje się cała strona
        $('#status').fadeOut(); // efekt zanikania animowanej grafiki
        $('#preloader').delay(200).fadeOut('slow'); // efekt zanikania warstwy zakrywającej stronę
        $('body').delay(200).css({'overflow':'visible'}); // dopóki nasz div#preloader jest widoczny nie ma możliwości przewijania strony
    });
})(jQuery);


// preloader image

// $(function(){
//
//     $('img').imgPreload();
//
// });
