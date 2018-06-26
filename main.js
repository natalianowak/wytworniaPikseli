$(window).resize(function () {
    if (this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function () {
        $(this).trigger('resizeEnd');
    }, 500);
});

var map;
var myLatlng = new google.maps.LatLng(49.9751544, 20.4217713);
// var lat = 49.9751544;
// var lng = 20.4217713;
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
    // console.log($(".expand1").height());
    // console.log($(".expand1")[0].firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.classList);
    // console.log($(".expand2").height());
    // console.log($(".expand3").height());
    // console.log($(".expand4").height());
    // console.log($(".expand5").height());
    // console.log($(".expand6").height());


    // if ($(".expand1").height() >= 159) {
    //     $(".expand1")[0].firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.classList.remove("hidden");
    //     $(".expand1").css(createHeight());
    // }
    // if ($(".expand2").height() >= 159) {
    //     $(".expand2")[0].firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.classList.remove("hidden");
    //     $(".expand2").css(createHeight());
    // }
    // if ($(".expand3").height() >= 159) {
    //     $(".expand3")[0].firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.classList.remove("hidden");
    //     $(".expand3").css(createHeight());
    // }
    // if ($(".expand4").height() >= 159) {
    //     $(".expand4")[0].firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.classList.remove("hidden");
    //     $(".expand4").css(createHeight());
    // }
    // if ($(".expand5").height() >= 159) {
    //     $(".expand5")[0].firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.classList.remove("hidden");
    //     $(".expand5").css(createHeight());
    // }
    // if ($(".expand6").height() >= 159) {
    //     $(".expand6")[0].firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.classList.remove("hidden");
    //     $(".expand6").css(createHeight());
    // }

    // $(window).bind('resizeEnd', function() {
    //     if($(".expand1").height() >= 159){
    //         $(".expand1")[0].firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.classList.remove("hidden");
    //         $(".expand1").css( createHeight());
    //     }
    //     if($(".expand2").height() >= 159){
    //         $(".expand2")[0].firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.classList.remove("hidden");
    //         $(".expand2").css(createHeight());
    //     }
    //     if($(".expand3").height() >= 159){
    //         $(".expand3")[0].firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.classList.remove("hidden");
    //         $(".expand3").css(createHeight());
    //     }
    //     if($(".expand4").height() >= 159){
    //         $(".expand4")[0].firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.classList.remove("hidden");
    //         $(".expand4").css(createHeight());
    //     }
    //     if($(".expand5").height() >= 159){
    //         $(".expand5")[0].firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.classList.remove("hidden");
    //         $(".expand5").css(createHeight());
    //     }
    //     if($(".expand6").height() >= 159){
    //         $(".expand6")[0].firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.classList.remove("hidden");
    //         $(".expand6").css(createHeight());
    //     }
    // });


    // $(".button1").click(function () {
    //
    //     $(".expand1").animate({
    //         height: $(".expand1")[0].scrollHeight
    //     }, 900);
    //
    //     $(".button1").css("display", "none");
    //     $(".mniej1").css("display", "block");
    //
    // });
    // $("p.button2").click(function () {
    //     $("div.expand2").animate({
    //         height: $("div.expand2")[0].scrollHeight
    //     }, 900);
    //
    //     $("p.button2").css("display", "none");
    //     $("p.mniej2").css("display", "block");
    // });
    //
    // $("p.button3").click(function () {
    //     $("div.expand3").animate({
    //         height: $("div.expand3")[0].scrollHeight
    //     }, 900);
    //
    //     $("p.button3").css("display", "none");
    //     $("p.mniej3").css("display", "block");
    // });
    //
    // $("p.button4").click(function () {
    //     $("div.expand4").animate({
    //         height: $("div.expand4")[0].scrollHeight
    //     }, 900);
    //
    //     $("p.button4").css("display", "none");
    //     $("p.mniej4").css("display", "block");
    // });
    // $("p.button5").click(function () {
    //     $("div.expand5").animate({
    //         height: $("div.expand5")[0].scrollHeight
    //     }, 900);
    //
    //     $("p.button5").css("display", "none");
    //     $("p.mniej5").css("display", "block");
    // });
    // $("p.button6").click(function () {
    //     $("div.expand6").animate({
    //         height: $("div.expand6")[0].scrollHeight
    //     }, 900);
    //
    //     $("p.button6").css("display", "none");
    //     $("p.mniej6").css("display", "block");
    // });


    // function createHeight() {
    //     var hight;
    //     if($(window).width() < 700) {
    //         return  hight = {height: 111};
    //     }
    //     if ($(window).width() > 1100) {
    //         return hight = {height: 126};
    //     }
    //     else{
    //         return hight = {height: 122};
    //     }
    // }


    // $(".mniej1").click(function () {
    //     $(".expand1").animate(createHeight(), 900);
    //     $(".mniej1").css("display", "none");
    //     $(".button1").css("display", "block");
    //
    // });
    // $("p.mniej2").click(function () {
    //     $("div.expand2").animate(createHeight(), 900);
    //     $("p.mniej2").css("display", "none");
    //     $("p.button2").css("display", "block");
    // });
    //
    // $("p.mniej3").click(function () {
    //     $("div.expand3").animate(createHeight(), 900);
    //     $("p.mniej3").css("display", "none");
    //     $("p.button3").css("display", "block");
    // });
    //
    // $("p.mniej4").click(function () {
    //     $("div.expand4").animate(createHeight(), 900);
    //     $("p.mniej4").css("display", "none");
    //     $("p.button4").css("display", "block");
    // });
    // $("p.mniej5").click(function () {
    //     $("div.expand5").animate(createHeight(), 900);
    //     $("p.mniej5").css("display", "none");
    //     $("p.button5").css("display", "block");
    // });
    // $("p.mniej6").click(function () {
    //     $("div.expand6").animate(createHeight(), 900);
    //     $("p.mniej6").css("display", "none");
    //     $("p.button6").css("display", "block");
    // });


});
var choosenCategory = "all";

function removeClass() {
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
        $('.portfolio-content img').imgPreload();
        $(".simplyPoland").css("display", "block");
        choosenProjectClass = $(".simplyPolandClick");
        console.log(choosenProjectClass);
        checkIfThereIsNextClass();
        checkIfThereIsPrevClass();
    });

    $(".onglowClick").click(function () {
        $("#portfolio").css("display", "none");
        $(".navButton").css("display", "block");
        $('.portfolio-content img').imgPreload();
        $(".onglow").css("display", "block");
        choosenProjectClass = $(".onglowClick");
        console.log(choosenProjectClass);
        checkIfThereIsNextClass();
        checkIfThereIsPrevClass();
    });


    $(".locomotivaClick").click(function () {
        $("#portfolio").css("display", "none");
        $(".navButton").css("display", "block");
        $('.portfolio-content img').imgPreload();
        $(".locomotiva").css("display", "block");
        choosenProjectClass = $(".locomotivaClick");
        console.log(choosenProjectClass);
        checkIfThereIsNextClass();
        checkIfThereIsPrevClass();
    });


    $(".kopalniaClick").click(function () {
        $("#portfolio").css("display", "none");
        $(".navButton").css("display", "block");
        $('.portfolio-content img').imgPreload();
        $(".kopalnia").css("display", "block");
        choosenProjectClass = $(".kopalniaClick");
        console.log(choosenProjectClass + "kopalniaCkick on  to jest ");
        console.log(choosenProjectClass + "to jestwybrna klasa object jquery");
        checkIfThereIsNextClass();
        checkIfThereIsPrevClass();
    });

    $(".jestesmyClick").click(function () {
        $("#portfolio").css("display", "none");
        $(".navButton").css("display", "block");
        $('.portfolio-content img').imgPreload();
        $(".jestesmy").css("display", "block");
        choosenProjectClass = $(".jestesmyClick");
        console.log(choosenProjectClass );
        console.log(choosenProjectClass);
        checkIfThereIsNextClass();
        checkIfThereIsPrevClass();
    });
    $(".solpakClick").click(function () {
        $("#portfolio").css("display", "none");
        $(".navButton").css("display", "block");
        $('.portfolio-content img').imgPreload();
        $(".solpak").css("display", "block");
        choosenProjectClass = $(".solpakClick");
        console.log(choosenProjectClass );
        console.log(choosenProjectClass);
        checkIfThereIsNextClass();
        checkIfThereIsPrevClass();
    });

    $(".guardianClick").click(function () {
        $("#portfolio").css("display", "none");
        $(".navButton").css("display", "block");
        $('.portfolio-content img').imgPreload();
        $(".guardian").css("display", "block");
        choosenProjectClass = $(".guardianClick");
        console.log(choosenProjectClass );
        console.log(choosenProjectClass);
        checkIfThereIsNextClass();
        checkIfThereIsPrevClass();
    });

    $(".hcgClick").click(function () {
        $("#portfolio").css("display", "none");
        $(".navButton").css("display", "block");
        $('.portfolio-content img').imgPreload();
        $(".hcg").css("display", "block");
        choosenProjectClass = $(".hcgClick");
        console.log(choosenProjectClass );
        console.log(choosenProjectClass);
        checkIfThereIsNextClass();
        checkIfThereIsPrevClass();
    });

    $(".helveticaClick").click(function () {
        $("#portfolio").css("display", "none");
        $(".navButton").css("display", "block");
        $('.portfolio-content img').imgPreload();
        $(".helvetica").css("display", "block");
        choosenProjectClass = $(".helveticaClick");
        console.log(choosenProjectClass );
        console.log(choosenProjectClass);
        checkIfThereIsNextClass();
        checkIfThereIsPrevClass();
    });

    $(".jakaBoxClick").click(function () {
        $("#portfolio").css("display", "none");
        $(".navButton").css("display", "block");
        $('.portfolio-content img').imgPreload();
        $(".jakaBox").css("display", "block");
        choosenProjectClass = $(".jakaBoxClick");
        console.log(choosenProjectClass );
        console.log(choosenProjectClass);
        checkIfThereIsNextClass();
        checkIfThereIsPrevClass();
    });

    $(".keteClick").click(function () {
        $("#portfolio").css("display", "none");
        $(".navButton").css("display", "block");
        $('.portfolio-content img').imgPreload();
        $(".kete").css("display", "block");
        choosenProjectClass = $(".keteClick");
        console.log(choosenProjectClass );
        console.log(choosenProjectClass);
        checkIfThereIsNextClass();
        checkIfThereIsPrevClass();
    });

    $(".kitchooClick").click(function () {
        $("#portfolio").css("display", "none");
        $(".navButton").css("display", "block");
        $('.portfolio-content img').imgPreload();
        $(".kitchoo").css("display", "block");
        choosenProjectClass = $(".kitchooClick");
        console.log(choosenProjectClass );
        console.log(choosenProjectClass);
        checkIfThereIsNextClass();
        checkIfThereIsPrevClass();
    });
    $(".milooClick").click(function () {
        $("#portfolio").css("display", "none");
        $(".navButton").css("display", "block");
        $('.portfolio-content img').imgPreload();
        $(".miloo").css("display", "block");
        choosenProjectClass = $(".milooClick");
        console.log(choosenProjectClass );
        console.log(choosenProjectClass);
        checkIfThereIsNextClass();
        checkIfThereIsPrevClass();
    });

    $(".jakaBox2Click").click(function () {
        $("#portfolio").css("display", "none");
        $(".navButton").css("display", "block");
        $('.portfolio-content img').imgPreload();
        $(".jakaBox2").css("display", "block");
        choosenProjectClass = $(".jakaBox2Click");
        console.log(choosenProjectClass );
        console.log(choosenProjectClass);
        checkIfThereIsNextClass();
        checkIfThereIsPrevClass();
    });

    function checkIfThereIsPrevClass() {
        var prevClass = $("." + choosenCategory).eq($("." + choosenCategory).index(choosenProjectClass) - 1);
        if(prevClass[0].classList[3] === undefined){
            $(".prevButton").css("color","red");
        }else {
            $(".prevButton").css("color","black");
        }
    }
    function checkIfThereIsNextClass() {
        var nextClass = $("." + choosenCategory).eq($("." + choosenCategory).index(choosenProjectClass) + 1);
        if(nextClass[0].classList[3] === undefined){
            $(".nextButton").css("color","red");
        }else {
            $(".nextButton").css("color","black");
        }
    }

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
        $('.logoTop').css("width", "100px");


    } else {
        $('.logoTop').css("width", "121px");
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