$(document).ready( function () {
	
	// Main navigation, circles navigation
	$('.page-navigation').find('a').click( function (){
		var scrollId = $(this).attr('href');
		$(this).find('a').removeClass('active');
		$(window).scrollTo(scrollId, 1000, {'margin': 'true'});
    return false;
	});	

	$('nav.circles').find('.out-border').click( function (){
		var scrollId = $(this).find('a').attr('href');
		$(this).find('a').parents('out-border').removeClass('active');
		$(window).scrollTo(scrollId, 1000, {'margin': 'true'});
    return false;
	});	

	// Send a message btn hendler
	$('.top-line').find('.message-btn').click( function (){
		$(window).scrollTo('#contact-us', 1000, {'margin': 'true'});	
	});

	// Lang switcher functional
	$('.lang-switcher').click( function (){
		$(this).toggleClass('active');
	});

	$(document).click( function (event) {
		if ($(event.target).closest(".lang-switcher").length) return;
  		$('.lang-switcher').removeClass('active');
    	event.stopPropagation();	
	});
	
	//Section positions
	var sectionsPositions = {
		'about' : 0,
		'projects' : 883,
		'reviews' : 1790,
		'wwd' : 2606,
		'process' : 3146,
		'team' : 4299,
		'contacts' : 4578
	}

	// Function for getting scrolltop 
	function getScrollTop(){
    if(typeof pageYOffset!= 'undefined'){
      return pageYOffset;
    }
    else{
      var B= document.body; 
      var D= document.documentElement;
      D= (D.clientHeight)? D: B;
      return D.scrollTop;
    }
  }

	$(window).scroll( function () {
		currentScrollPosition = getScrollTop();	

		if (currentScrollPosition >= sectionsPositions.about &&
				currentScrollPosition < sectionsPositions.projects){
			hightlightActive('about');
		}
		
		if (currentScrollPosition >= sectionsPositions.projects &&
				currentScrollPosition < sectionsPositions.reviews){
			hightlightActive('projects');
		}

		if (currentScrollPosition >= sectionsPositions.reviews &&
				currentScrollPosition < sectionsPositions.wwd){
			hightlightActive('reviews');
		}

		if (currentScrollPosition >= sectionsPositions.wwd &&
				currentScrollPosition < sectionsPositions.process){
			hightlightActive('wwd');
		}

		if (currentScrollPosition >= sectionsPositions.process &&
				currentScrollPosition < sectionsPositions.team){
			hightlightActive('process');
		}

		if (currentScrollPosition >= sectionsPositions.team &&
				currentScrollPosition < sectionsPositions.contacts){
			hightlightActive('team');
		}

		if (currentScrollPosition >= sectionsPositions.contacts){
			hightlightActive('contacts');
		}
	});
	
	function hightlightActive (categoryId){
		categoryId = "." + categoryId;
		$('.page-navigation').find('a').removeClass('active');
		$('.page-navigation').find(categoryId).addClass('active');
		
		$('nav.circles').find('.out-border').removeClass('active');
		$('nav.circles').find(categoryId).parents('.out-border').addClass('active');
	}

	// Portfolio navigation
	$('#identity, #blogs, #online-stores, #lp').hide();

	$('.pf-nav-item').click( function () {
		var currentId = $(this).attr('data-href');
		$('.pf-nav-item').removeClass('active');
		$(this).addClass('active');
		$('.portfolio-works').fadeOut(600);
		setTimeout(function() { 
			$(currentId).fadeIn(800);
		}, 600);		
	});
});