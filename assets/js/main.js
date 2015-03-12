$(document).ready(function() {
    // one page navigation
    $('#main_navigation_menu').onePageNav({
            currentClass: 'active'
    });

    // About Carousel
	var owl = $("#slide");
      owl.owlCarousel({
        slideSpeed: 800,
        paginationSpeed: 400,
        autoPlay: true,
        navigation : false,
        singleItem : true,
        transitionStyle : "goDown"
      });
    // Blog slider
	 $('#blog-slider').owlCarousel({
		navigation: true, // Show next and prev buttons
		slideSpeed: 800,
		paginationSpeed: 400,
		autoPlay: true,
		navigationText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        pagination : false,
		items : 3,
        itemsCustom : false,
        itemsDesktop : [1199,2],
        itemsDesktopSmall : [980,2],
        itemsTablet: [768,2],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
    });
		
	/*=== Clients Logo Slider ====*/
    $('#logo-slider').owlCarousel({
            navigation: false, // Show next and prev buttons
    		slideSpeed: 400,
    		paginationSpeed: 800,
    		autoPlay: true,
			pagination : false,
    		items : 5,
            itemsCustom : false,
            itemsDesktop : [1199,4],
            itemsDesktopSmall : [980,3],
            itemsTablet: [768,3],
            itemsTabletSmall: false,
            itemsMobile : [479,1],
        });
	
    });

//Testimonial Slider
$(document).ready(function(){
	/*=== Testimonial ====*/
    $('#testimonial-slider').owlCarousel({
    navigation: false, // Show next and prev buttons
    slideSpeed: 800,
    paginationSpeed: 400,
    autoPlay: true,
    items : 2,
        itemsCustom : false,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [768,1],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
    });

});

// Mixitup portfolio filter
$(function(){
    $('#portfolio-items').mixItUp();  
});
//WOW Scroll Spy
var wow = new WOW({
    //disabled for mobile
    mobile: false
});
wow.init();

// switcher 
$(document).ready(function(){
    $('#panel-opener').on('click', function(e){
        e.preventDefault();
        if ($('#settings-panel').hasClass('opened')) {
            $('#settings-panel').animate({right: -160 +"px"}, 500).removeClass('opened');
        } else {
            $('#settings-panel').animate({right: 0 +"px"}, 500).addClass('opened');
        }
    });
});


//ScrollTop
/**
    by Nemes Ioan Sorin - not an jQuery big fan 
    therefore this script is for those who love the old clean coding style  
    @id = the id of the element who need to bring  into view
      
    Note : this demo scrolls about 12.700 pixels from Link1 to Link3
*/
(function()
{
      window.setTimeout = window.setTimeout; //
})();

      var smoothScr = {
      iterr : 300, // set timeout miliseconds ..decreased with 1ms for each iteration
        tm : null, //timeout local variable
      stopShow: function()
      {
        clearTimeout(this.tm); // stopp the timeout
        this.iterr = 30; // reset milisec iterator to original value
      },
      getRealTop : function (el) // helper function instead of jQuery
      {
        var elm = el; 
        var realTop = 0;
        do
        {
          realTop += elm.offsetTop;
          elm = elm.offsetParent;
        }
        while(elm);
        return realTop;
      },
      getPageScroll : function()  // helper function instead of jQuery
      {
        var pgYoff = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
        return pgYoff;
      },
      anim : function (id) // the main func
      {
        this.stopShow(); // for click on another button or link
        var eOff, pOff, tOff, scrVal, pos, dir, step;

        eOff = document.getElementById(id).offsetTop; // element offsetTop

        tOff =  this.getRealTop(document.getElementById(id).parentNode); // terminus point 

        pOff = this.getPageScroll(); // page offsetTop

        if (pOff === null || isNaN(pOff) || pOff === 'undefined') pOff = 0;

        scrVal = eOff - pOff; // actual scroll value;

        if (scrVal > tOff) 
        {
          pos = (eOff - tOff - pOff); 
          dir = 1;
        }
        if (scrVal < tOff)
        {
          pos = (pOff + tOff) - eOff;
          dir = -1; 
        }
        if(scrVal !== tOff) 
        {
          step = ~~((pos / 4) +1) * dir;

          if(this.iterr > 1) this.iterr -= 1; 
          else this.itter = 0; // decrease the timeout timer value but not below 0
          window.scrollBy(0, step);
          this.tm = window.setTimeout(function()
          {
             smoothScr.anim(id);  
          }, this.iterr); 
        }  
        if(scrVal === tOff) 
        { 
          this.stopShow(); // reset function values
          return;
        }
    }
 }