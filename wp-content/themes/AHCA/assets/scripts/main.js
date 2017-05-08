/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */

(function($) {

  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Sage = {
    // All pages
    'common': {
      init: function() {
        // JavaScript to be fired on all pages
        var logo = $("#logo");
        var mobile = 767;
        
        function checkNavbar(){
            if ($(window).width() > mobile){
                logo.attr("src", templateDir + "/dist/images/newlogo.png");
            }else{
                logo.attr("src", templateDir + "/dist/images/mobileLogo.png");
            }
        }
        checkNavbar();
        
        $(window).resize(function(){
            checkNavbar(); 
        });
      },
      finalize: function() {
        //google analytics 
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-83715289-1', 'auto');
        ga('send', 'pageview');

      }
    },
    // Home page
    'home': {
      init: function() {
        // JavaScript to be fired on the home page
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    // About us page, note the change from about-us to about_us.
    'about_us': {
      init: function() {
        // JavaScript to be fired on the about us page
      }
    },
    // Events Page
    'group_events_page': {
      init: function() {
        
      },
      finalize: function() {
        // DYNAMIC TAB FEATURE

        //variables 
        var upcomingBtn = $('#upcomingBtn');
        var pastBtn = $('#pastBtn');
        var upcomingRow = $('.upcomingRow');
        var pastRow = $('.pastRow');
        //declare functions 
        function toggleBtn(button1, button2){
            if (!(button1.hasClass("activeBtn"))){
                button1.removeClass("deactiveBtn");
                button1.addClass("activeBtn");
                button2.removeClass('activeBtn');
                button2.addClass('deactiveBtn');
                
            } 
        }
        
        function toggleRow(row1, row2){
            if (row1.hasClass('deactiveRow')){
                row1.removeClass('deactiveRow');
                row2.addClass('deactiveRow');
            }
        }
        
        // listening event 
        upcomingBtn.on('click', function(){
            toggleBtn(upcomingBtn, pastBtn);
            toggleRow(upcomingRow, pastRow);
        });
        
        pastBtn.on('click', function(){
            toggleBtn(pastBtn, upcomingBtn);
            toggleRow(pastRow, upcomingRow);
        });
      }
    },
    // Awards page
    'awards_page': {
      init: function() {
        
      },
      finalize: function() {
        //get year on house awards & get year buttons 
        var firstYear = $('li.yrBtnHa').last();
        var yearBtns = $('li.yrBtnHa');
        //get homes for all years and parent container 
        var showContainer = $('.carousel-inner');
        var homes2015 = $('.img2015');
        var homes2013 = $('.img2013');
        var homes2011 = $('.img2011');
        //placeholder for btn with class active and class yrBtnHa
        var activeYearBtn;
        //placeholder for div with class item
        var activeHomeYear;
        var clickedOnYear;


        //add active classes to first image in year collection
        function addActiveClass(homeYear){
          homeYear.first().addClass("active");
        }
        //hide home
        function hideHome(home){
          home.removeClass('item');
          home.addClass('hidden');
        }
        //show home
        function showHome(home){
          home.removeClass('hidden');
          home.addClass('item');
        }
        //hide ALL homes 
        function hideHomes(homeYear){
          homeYear.each(function(){
            hideHome($(this));
          });
        }
        //show ALL homes 
        function showHomes(homeYear){
          homeYear.each(function(){
            showHome($(this));
          });
        }
        function toggleBtnYear(newBtn, oldBtn){
          newBtn.addClass('active');
          oldBtn.removeClass('active');
        }
        function toggleHomeYear(newYear, oldYear){
          showHomes(newYear);
          hideHomes(oldYear);
        }

        //add active class to latest year button
        firstYear.addClass("active");

        //add active class to first img in year collections 
        if (showContainer.has('.img2015').length){
          addActiveClass(homes2015);
        }
        if (showContainer.has('.img2013').length){
          addActiveClass(homes2013);
        }
        if (showContainer.has('.img2011').length){
          addActiveClass(homes2011);
        }

        //hide all house images except for the latest year houses
        if(showContainer.has('.img2015').length){
          hideHomes(homes2013);
          hideHomes(homes2011);
        }else if (showContainer.has('.img2013').length){
          hideHomes(homes2011);
        }

        //1 ON CLICK: reassign activeYearBtn to new element with classes
        //2 ON CLICK: get text of year that user has clicked on
        //3 ON CLICK: IF clicked on year is NOT equal to active year, do something 
        //            ELSE do nothing 
        //4 ON CLICK: remove active class to current Year
        //5 ON CLICK: add active class to Year selected
        //6 ON CLICK: reassign activeHomeYear to new element with classes
        //7 ON CLICK: remove current year homes 
        //8 ON CLICK: show clicked on homes 
        yearBtns.on('click', function(){
          //1 
          activeYearBtn = $('li.yrBtnHa.active');
          //2
          clickedOnYear = $(this).text();
          //3
          if (activeYearBtn.text() != clickedOnYear){
            //4 & 5
            toggleBtnYear($(this), activeYearBtn);
            //6
            activeHomeYear = $('.myCarousel .item');
            //7 & 8
            toggleHomeYear($('.img'+ clickedOnYear ), activeHomeYear);
          }
          

          
          
          
        });
   

      }
    },

  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function(func, funcname, args) {
      var fire;
      var namespace = Sage;
      funcname = (funcname === undefined) ? 'init' : funcname;
      fire = func !== '';
      fire = fire && namespace[func];
      fire = fire && typeof namespace[func][funcname] === 'function';

      if (fire) {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      // Fire common init JS
      UTIL.fire('common');

      // Fire page-specific init JS, and then finalize JS
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
        UTIL.fire(classnm);
        UTIL.fire(classnm, 'finalize');
      });

      // Fire common finalize JS
      UTIL.fire('common', 'finalize');
    }
  };

  // Load Events
  $(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.
