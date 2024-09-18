alert("Welcome To Portfolio Website");

$(document).ready(function(){
    $(window).scroll(function(){
      
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
  
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
  
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
  
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
  
  
  
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
    
    function Edits() {
  
      //get the editable element
      var editElem = document.getElementById("Edit");
      
      //get the edited element content
      var userVersion = editElem.innerHTML;
      
      //save the content to local storage
      localStorage.userEdits = userVersion;
      
      //write a confirmation to the user
      document.getElementById("update").innerHTML="Edits saved!";
      
    }
      
      function checkEdits() {   //find out if the user has previously saved edits
        if(localStorage.userEdits!=null)
        document.getElementById("Edit").innerHTML = localStorage.userEdits;
        }
        var editElem = document.getElementById("Edit");
       editElem.contentEditable="false"
      
      
  });