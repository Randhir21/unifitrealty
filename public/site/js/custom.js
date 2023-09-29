$('.owl-carousel1').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    smartSpeed :900,
    autoplayTimeout:3000, 
    nav:false,
    responsive:{
        0:{
            items:1
        },
        575:{
            items:2
        },
        991:{
            items:4
        },
        1280:{
            items:5
        },
        1366:{
            items:6
        },
        1400:{
            items:8
        }
    }
})




$('.owl-carousel2').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    smartSpeed :900,
    autoplayHoverPause:true,
    autoplayTimeout:3000, 
    nav:true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        575:{
            items:1
        },
        991:{
            items:2
        },
        1280:{
            items:3
        },
        1366:{
            items:3
        },
        1400:{
            items:3
        }
    }
})


