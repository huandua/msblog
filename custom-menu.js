//Begin!
jQuery(document).ready(function(){


/*= jQuery Superfish menu
*************************************************/
    function init_nav(){
        jQuery('ul.nav').superfish({ 
	        delay:       100,                             // one second delay on mouse out 
	        animation:   {opacity:'show',height:'show'},  // fade-in and slide-down animation 
	        speed:       'fast'                           // faster animation speed 
    	});
    }
    init_nav();
    

/*= Response Layout
*************************************************/
    var isSelect = false;


    function response_layout(){
        var newWindowWidth = jQuery(window).width();
        if(newWindowWidth < 960){
            jQuery('.header-ad').hide();        
            jQuery('img').css('max-width','100%').css('height','');
            jQuery('#content-loop img.entry-thumb').css('max-width','80%');
            jQuery('#primary-nav').hide();
            jQuery('.primary-menu').hide();
            jQuery('#news-ticker').hide();
            jQuery('select.select-nav').hide();
            jQuery('.footer-categories').hide();
            jQuery('.entry-bottom-ad').hide();
            jQuery('#featured-content').hide();
            if(!isSelect){
                response_nav();
            }else{
                jQuery('.primary-menu').hide();
                jQuery('select.select-nav').show();
            }
        }else if(newWindowWidth < 960){
            jQuery('.header-ad').hide();                
            jQuery('img').css('max-width','100%').css('height','');
            jQuery('.toggle-inner').css('height','auto');
            jQuery('.primary-menu ul.children').remove();
            jQuery('select.select-nav').hide();
            jQuery('.footer-categories').hide();
            jQuery('.entry-bottom-ad').hide();
            jQuery('#news-ticker').hide();
            jQuery('.primary-menu').show();
            jQuery('#primary-nav').show();
            jQuery('#featured-content').show();
        }else{
            jQuery('img').css('max-width','').css('height','');
            jQuery('select.select-nav').hide();
            jQuery('.primary-menu').show();
            jQuery('#primary-nav').show();
            jQuery('#sidebar').show();
            jQuery('.footer-categories').show();     
        }
    }
    jQuery(window).bind("resize", response_layout);
    response_layout();

    function response_nav(){
        if(!isSelect){
            jQuery('span.sf-sub-indicator').remove();

            var mainNavigate = jQuery('.primary-menu').clone();

            var selectNav = jQuery('<select style="width: 96%; padding: 8px 2%;display: block;margin-bottom: 10px;margin-left: auto;margin-right: auto;margin-top:10px;" class="select-nav"></select>');

            jQuery(selectNav).append('<option value="" href="">Chọn Menu ...</option>');

            jQuery(mainNavigate).children('ul').children('li').each(function(){

                var href = jQuery(this).children('a').attr('href');
                var text = jQuery(this).children('a').text();

                jQuery(selectNav).append('<option value="'+href+'">'+text+'</option>');


                if(jQuery(this).children('ul').length>0){
                    jQuery(this).children('ul').children('li').each(function(){

                        var href2 = jQuery(this).children('a').attr('href');
                        var text2 = jQuery(this).children('a').text();

                        jQuery(selectNav).append('<option value="'+href2+'">--'+text2+'</option>');

                    });
                }

            });

            jQuery('.primary-menu').hide();
            jQuery(selectNav).insertAfter(jQuery('#header'));
            isSelect = true;

            jQuery(selectNav).change(function(){
                window.location.href = this.options[this.selectedIndex].value;
            });
        }
    }


//End ready!

});
