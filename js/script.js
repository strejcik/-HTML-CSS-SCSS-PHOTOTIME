$(document).ready(function (){$('.design-gallery').slick({dots:false,arrows:true,variableWidth:true,centerMode:true,});$('.gallery-carousel').slick({dots:false,infinite:false,speed:300,slidesToShow:3,slidesToScroll:3,nextArrow:$('.next'),prevArrow:$('.prev'),responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2,infinite:true,dots:true}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]})})