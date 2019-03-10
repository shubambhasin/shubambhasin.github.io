/*top button */





/*main#########################*/
var animationEnd = (function(el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement('div'));

// page load function

function pageLoaded(){

	/*#############################button top#########################*/
	
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});


//section1####################################################################

$('.section1btn').on('click', function(){

	$('.section1').addClass('animated bounce');
	$('.section1').on(animationEnd, removeAni1);
})


$('.section2btn').on('click', function(){

	$('.section2').addClass('animated flash');
	$('.section2').on(animationEnd, removeAni2);
})
$('.section3btn').on('click', function(){

	$('.section3').addClass('animated pulse');
	$('.section3').on(animationEnd, removeAni3);
})

$('.section4btn').on('click', function(){

	$('.section4').addClass('animated rubberBand');
	$('.section4').on(animationEnd, removeAni4);
})

$('.section5btn').on('click', function(){

	$('.section5').addClass('animated shake');
	$('.section5').on(animationEnd, removeAni5);
})

$('.section6btn').on('click', function(){

	$('.section6').addClass('animated swing');
	$('.section6').on(animationEnd, removeAni6);
})

$('.section7btn').on('click', function(){

	$('.section7').addClass('animated tada');
	$('.section7').on(animationEnd, removeAni7);
})

$('.section8btn').on('click', function(){

	$('.section8').addClass('animated wobble');
	$('.section8').on(animationEnd, removeAni8);
})

$('.section9btn').on('click', function(){

	$('.section9').addClass('animated jello');
	$('.section9').on(animationEnd, removeAni9);
})

$('.section10btn').on('click', function(){

	$('.section10').addClass('animated heartBeat');
	$('.section10').on(animationEnd, removeAni10);
})

/*#####################################################################*/

$('.section11btn').on('click', function(){

	$('.section11').addClass('animated bounceIn');
	$('.section11').on(animationEnd, removeAni11);
})

$('.section12btn').on('click', function(){

	$('.section12').addClass('animated bounceInDown');
	$('.section12').on(animationEnd, removeAni12);
})

$('.section13btn').on('click', function(){

	$('.section13').addClass('animated bounceInLeft');
	$('.section13').on(animationEnd, removeAni13);
})

$('.section14btn').on('click', function(){

	$('.section14').addClass('animated bounceInRight');
	$('.section14').on(animationEnd, removeAni14);
})

$('.section15btn').on('click', function(){

	$('.section15').addClass('animated bounceInUp');
	$('.section15').on(animationEnd, removeAni15);
})

$('.section16btn').on('click', function(){

	$('.section16').addClass('animated bounceOut');
	$('.section16').on(animationEnd, removeAni16);
})

$('.section17btn').on('click', function(){

	$('.section17').addClass('animated bounceOutDown');
	$('.section17').on(animationEnd, removeAni17);
})

$('.section18btn').on('click', function(){

	$('.section18').addClass('animated bounceOutLeft');
	$('.section18').on(animationEnd, removeAni18);
})

$('.section19btn').on('click', function(){

	$('.section19').addClass('animated bounceOutRight');
	$('.section19').on(animationEnd, removeAni19);
})

$('.section20btn').on('click', function(){

	$('.section20').addClass('animated bounceOutUp');
	$('.section20').on(animationEnd, removeAni20);
})

/*###########################################*/
$('.section21btn').on('click', function(){

	$('.section21').addClass('animated fadeIn');
	$('.section21').on(animationEnd, removeAni21);
})
$('.section22btn').on('click', function(){

	$('.section22').addClass('animated fadeInDown');
	$('.section22').on(animationEnd, removeAni22);
})
$('.section23btn').on('click', function(){

	$('.section23').addClass('animated fadeInDownBig');
	$('.section23').on(animationEnd, removeAni23);
})
$('.section24btn').on('click', function(){

	$('.section24').addClass('animated fadeInLeft');
	$('.section24').on(animationEnd, removeAni24);
})
$('.section25btn').on('click', function(){

	$('.section25').addClass('animated fadeInLeftBig');
	$('.section25').on(animationEnd, removeAni25);
})
$('.section26btn').on('click', function(){

	$('.section26').addClass('animated fadeInRight');
	$('.section26').on(animationEnd, removeAni26);
})
$('.section27btn').on('click', function(){

	$('.section27').addClass('animated fadeInRightBig');
	$('.section27').on(animationEnd, removeAni27);
})
$('.section28btn').on('click', function(){

	$('.section28').addClass('animated fadeInUp');
	$('.section28').on(animationEnd, removeAni28);
})
$('.section29btn').on('click', function(){

	$('.section29').addClass('animated fadeInUpBig');
	$('.section29').on(animationEnd, removeAni29);
})

/*#################################################*/
$('.section30btn').on('click', function(){

	$('.section30').addClass('animated fadeOut');
	$('.section30').on(animationEnd, removeAni30);
})
$('.section31btn').on('click', function(){

	$('.section31').addClass('animated fadeOutDown');
	$('.section31').on(animationEnd, removeAni31);
})
$('.section32btn').on('click', function(){

	$('.section32').addClass('animated fadeOutDownBig');
	$('.section32').on(animationEnd, removeAni32);
})
$('.section33btn').on('click', function(){

	$('.section33').addClass('animated fadeOutLeft');
	$('.section33').on(animationEnd, removeAni33);
})
$('.section34btn').on('click', function(){

	$('.section34').addClass('animated fadeOutLeftBig');
	$('.section34').on(animationEnd, removeAni34);
})
$('.section35btn').on('click', function(){

	$('.section35').addClass('animated fadeOutRight');
	$('.section35').on(animationEnd, removeAni35);
})
$('.section36btn').on('click', function(){

	$('.section36').addClass('animated fadeOutRightBig');
	$('.section36').on(animationEnd, removeAni36);
})
$('.section37btn').on('click', function(){

	$('.section37').addClass('animated fadeOutUp');
	$('.section37').on(animationEnd, removeAni37);
})
$('.section38btn').on('click', function(){

	$('.section38').addClass('animated fadeOutUpBig');
	$('.section38').on(animationEnd, removeAni38);
})

/*####################################################*/
$('.section39btn').on('click', function(){

	$('.section39').addClass('animated flip');
	$('.section39').on(animationEnd, removeAni39);
})
$('.section40btn').on('click', function(){

	$('.section40').addClass('animated flipInX');
	$('.section40').on(animationEnd, removeAni40);
})
$('.section41btn').on('click', function(){

	$('.section41').addClass('animated flipInY');
	$('.section41').on(animationEnd, removeAni41);
})
$('.section42btn').on('click', function(){

	$('.section42').addClass('animated flipOutX');
	$('.section42').on(animationEnd, removeAni42);
})
$('.section43btn').on('click', function(){

	$('.section43').addClass('animated flipOutY');
	$('.section43').on(animationEnd, removeAni43);
})
/*######################################################*/
$('.section44btn').on('click', function(){

	$('.section44').addClass('animated lightSpeedIn');
	$('.section44').on(animationEnd, removeAni44);
})
$('.section45btn').on('click', function(){

	$('.section45').addClass('animated lightSpeedOut');
	$('.section45').on(animationEnd, removeAni45);
})
$('.section46btn').on('click', function(){

	$('.section46').addClass('animated rotateIn');
	$('.section46').on(animationEnd, removeAni46);
})
$('.section47btn').on('click', function(){

	$('.section47').addClass('animated rotateInDownLeft');
	$('.section47').on(animationEnd, removeAni47);
})
$('.section48btn').on('click', function(){

	$('.section48').addClass('animated rotateInDownRight');
	$('.section48').on(animationEnd, removeAni48);
})
$('.section49btn').on('click', function(){

	$('.section49').addClass('animated rotateInUpLeft');
	$('.section49').on(animationEnd, removeAni49);
})
$('.section50btn').on('click', function(){

	$('.section50').addClass('animated rotateInUpRight');
	$('.section50').on(animationEnd, removeAni50);
})

/*#####################rotating exits#########################################*/
$('.section51btn').on('click', function(){

	$('.section51').addClass('animated rotateOut');
	$('.section51').on(animationEnd, removeAni51);
})
$('.section52btn').on('click', function(){

	$('.section52').addClass('animated rotateOutDownLeft');
	$('.section52').on(animationEnd, removeAni52);
})
$('.section53btn').on('click', function(){

	$('.section53').addClass('animated rotateOutDownRight');
	$('.section53').on(animationEnd, removeAni53);
})
$('.section54btn').on('click', function(){

	$('.section54').addClass('animated rotateOutUpLeft');
	$('.section54').on(animationEnd, removeAni54);
})
$('.section55btn').on('click', function(){

	$('.section55').addClass('animated rotateOutUpRight');
	$('.section55').on(animationEnd, removeAni55);
})
/*#######################Sliding entrances#######################*/
$('.section56btn').on('click', function(){

	$('.section56').addClass('animated slideInUp');
	$('.section56').on(animationEnd, removeAni56);
})
$('.section57btn').on('click', function(){

	$('.section57').addClass('animated slideInDown');
	$('.section57').on(animationEnd, removeAni57);
})
$('.section58btn').on('click', function(){

	$('.section58').addClass('animated slideInLeft');
	$('.section58').on(animationEnd, removeAni58);
})
$('.section59btn').on('click', function(){

	$('.section59').addClass('animated slideInRight');
	$('.section59').on(animationEnd, removeAni59);
})
/*#############################sliding exits###############################*/
$('.section60btn').on('click', function(){

	$('.section60').addClass('animated slideOutUp');
	$('.section60').on(animationEnd, removeAni60);
})
$('.section61btn').on('click', function(){

	$('.section61').addClass('animated slideOutDown');
	$('.section61').on(animationEnd, removeAni61);
})
$('.section62btn').on('click', function(){

	$('.section62').addClass('animated slideOutLeft');
	$('.section62').on(animationEnd, removeAni62);
})
$('.section63btn').on('click', function(){

	$('.section63').addClass('animated slideOutRight');
	$('.section63').on(animationEnd, removeAni63);
})
/*###################ZOmm entrances###############################*/
$('.section64btn').on('click', function(){

	$('.section64').addClass('animated zoomIn');
	$('.section64').on(animationEnd, removeAni64);
})
$('.section65btn').on('click', function(){

	$('.section65').addClass('animated zoomInDown');
	$('.section65').on(animationEnd, removeAni65);
})
$('.section66btn').on('click', function(){

	$('.section66').addClass('animated zoomInLeft');
	$('.section66').on(animationEnd, removeAni66);
})
$('.section67btn').on('click', function(){

	$('.section67').addClass('animated zoomInRight');
	$('.section67').on(animationEnd, removeAni67);
})
$('.section68btn').on('click', function(){

	$('.section68').addClass('animated zoomInUp');
	$('.section68').on(animationEnd, removeAni68);
})
/*#####################Zoom Exits###############################*/
$('.section69btn').on('click', function(){

	$('.section69').addClass('animated zoomOut');
	$('.section69').on(animationEnd, removeAni69);
})
$('.section70btn').on('click', function(){

	$('.section70').addClass('animated zoomOutDown');
	$('.section70').on(animationEnd, removeAni70);
})
$('.section71btn').on('click', function(){

	$('.section71').addClass('animated zoomOutLeft');
	$('.section71').on(animationEnd, removeAni71);
})

$('.section72btn').on('click', function(){

	$('.section72').addClass('animated zoomOutRight');
	$('.section72').on(animationEnd, removeAni72);
})
$('.section73btn').on('click', function(){

	$('.section73').addClass('animated zoomOutUp');
	$('.section73').on(animationEnd, removeAni73);
})
/*#########################Specials###########################*/
$('.section74btn').on('click', function(){

	$('.section74').addClass('animated hinge');
	$('.section74').on(animationEnd, removeAni74);
})
$('.section75btn').on('click', function(){

	$('.section75').addClass('animated jackInTheBox');
	$('.section75').on(animationEnd, removeAni75);
})
$('.section76btn').on('click', function(){

	$('.section76').addClass('animated rollIn');
	$('.section76').on(animationEnd, removeAni76);
})
$('.section77btn').on('click', function(){

	$('.section77').addClass('animated rollOut');
	$('.section77').on(animationEnd, removeAni77);
})



}


//*********Animation repeat*************

//*****************************************
function removeAni1(){
	$('.section1').removeClass('animated bounce');
}
function removeAni2(){
	$('.section2').removeClass('animated flash');
}
function removeAni3(){
	$('.section3').removeClass('animated pulse');
}
function removeAni4(){
	$('.section4').removeClass('animated rubberBand');
}
function removeAni5(){
	$('.section5').removeClass('animated shake');
}
function removeAni6(){
	$('.section6').removeClass('animated swing');
}
function removeAni7(){
	$('.section7').removeClass('animated tada');
}
function removeAni8(){
	$('.section8').removeClass('animated wobble');
}
function removeAni9(){
	$('.section9').removeClass('animated jello');
}
function removeAni10(){
	$('.section10').removeClass('animated heartBeat');
}

/*##############################################################*/
function removeAni11(){
	$('.section11').removeClass('animated bounceIn');
}
function removeAni12(){
	$('.section12').removeClass('animated bounceInDown');
}
function removeAni13(){
	$('.section13').removeClass('animated bounceInLeft');
}
function removeAni14(){
	$('.section14').removeClass('animated bounceInRight');
}
function removeAni15(){
	$('.section15').removeClass('animated bounceInUp');
}
function removeAni16(){
	$('.section16').removeClass('animated bounceOut');
}
function removeAni17(){
	$('.section17').removeClass('animated bounceOutDown');
}
function removeAni18(){
	$('.section18').removeClass('animated bounceOutLeft');
}
function removeAni19(){
	$('.section19').removeClass('animated bounceOutRight');
}
function removeAni20(){
	$('.section20').removeClass('animated bounceOutUp');
}
/*####################################################################*/
function removeAni21(){
	$('.section21').removeClass('animated fadeIn');
}
function removeAni22(){
	$('.section22').removeClass('animated fadeInDown');
}
function removeAni23(){
	$('.section23').removeClass('animated fadeInDownBig');
}
function removeAni24(){
	$('.section24').removeClass('animated fadeInLeft');
}
function removeAni25(){
	$('.section25').removeClass('animated fadeInLeftBig');
}
function removeAni26(){
	$('.section26').removeClass('animated fadeInRight');
}
function removeAni27(){
	$('.section27').removeClass('animated fadeInRightBig');
}
function removeAni28(){
	$('.section28').removeClass('animated fadeInUp');
}
function removeAni29(){
	$('.section29').removeClass('animated fadeInUpBig');
}
/*########################################################*/
function removeAni30(){
	$('.section30').removeClass('animated fadeOut');
}
function removeAni31(){
	$('.section31').removeClass('animated fadeOutDown');
}
function removeAni32(){
	$('.section32').removeClass('animated fadeOutDownBig');
}
function removeAni33(){
	$('.section33').removeClass('animated fadeOutLeft');
}
function removeAni34(){
	$('.section34').removeClass('animated fadeOutLeftBig');
}
function removeAni35(){
	$('.section35').removeClass('animated fadeOutRight');
}
function removeAni36(){
	$('.section36').removeClass('animated fadeOutRightBig');
}
function removeAni37(){
	$('.section37').removeClass('animated fadeOutUp');
}
function removeAni38(){
	$('.section38').removeClass('animated fadeOutUpBig');
}

/*######################################################*/

function removeAni39(){
	$('.section39').removeClass('animated flip');
}
function removeAni40(){
	$('.section40').removeClass('animated flipInX');
}
function removeAni41(){
	$('.section41').removeClass('animated flipInY');
}
function removeAni42(){
	$('.section42').removeClass('animated flipOutX');
}
function removeAni43(){
	$('.section43').removeClass('animated flipOutY');
}


/*@@@@@@@@@@@@@@@@@@@@@lightspeed@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/


function removeAni44(){
	$('.section44').removeClass('animated lightSpeedIn');
}
function removeAni45(){
	$('.section45').removeClass('animated lightSpeedOut');
}

/*#####################rotating entrances###############################*/
function removeAni46(){
	$('.section46').removeClass('animated rotateIn');
}
function removeAni47(){
	$('.section47').removeClass('animated rotateInDownLeft');
}
function removeAni48(){
	$('.section48').removeClass('animated rotateInDownRight');
}
function removeAni49(){
	$('.section49').removeClass('animated rotateInUpLeft');
}
function removeAni50(){
	$('.section50').removeClass('animated rotateInUpRight');
}
/*######################Rotating exits#######################################################*/
function removeAni51(){
	$('.section51').removeClass('animated rotateOut');
}
function removeAni52(){
	$('.section52').removeClass('animated rotateOutDownLeft');
}
function removeAni53(){
	$('.section53').removeClass('animated rotateOutDownRight');
}
function removeAni54(){
	$('.section54').removeClass('animated rotateOutUpLeft');
}
function removeAni55(){
	$('.section55').removeClass('animated rotateOutUpRight');
}
/*###################sliding entrances############################################*/
function removeAni56(){
	$('.section56').removeClass('animated slideInUp');
}
function removeAni57(){
	$('.section57').removeClass('animated slideInDown');
}
function removeAni58(){
	$('.section58').removeClass('animated slideInLeft');
}
function removeAni59(){
	$('.section59').removeClass('animated slideInRight');
}

/*#############Sliding exits##################################################*/
function removeAni60(){
	$('.section60').removeClass('animated slideOutUp');
}
function removeAni61(){
	$('.section61').removeClass('animated slideOutDown');
}
function removeAni62(){
	$('.section62').removeClass('animated slideOutLeft');
}
function removeAni63(){
	$('.section63').removeClass('animated slideOutRight');
}
/*################Zoom Entrances##############################*/
function removeAni64(){
	$('.section64').removeClass('animated zoomIn');
}
function removeAni65(){
	$('.section65').removeClass('animated zoomInDown');
}
function removeAni66(){
	$('.section66').removeClass('animated zoomInLeft');
}
function removeAni67(){
	$('.section60').removeClass('animated zoomInRight');
}
function removeAni68(){
	$('.section68').removeClass('animated zoomInUp');
}
/*##################Zoom Exits##################################*/
function removeAni69(){
	$('.section69').removeClass('animated zoomOut');
}
function removeAni70(){
	$('.section70').removeClass('animated zoomOutDown');
}
function removeAni71(){
	$('.section71').removeClass('animated zoomOutLeft');
}
function removeAni72(){
	$('.section72').removeClass('animated zoomOutRight');
}
function removeAni73(){
	$('.section73').removeClass('animated zoomOutUp');
}
/*########################Specials#######################################*/
function removeAni74(){
	$('.section74').removeClass('animated hinge');
}
function removeAni75(){
	$('.section75').removeClass('animated jackInTheBox');
}
function removeAni76(){
	$('.section76').removeClass('animated rollIn');
}
function removeAni77(){
	$('.section77').removeClass('animated rollOut');
}
