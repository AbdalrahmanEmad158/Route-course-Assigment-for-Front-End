// ^ Write your JavaScript code here
var sections = document.querySelectorAll('section');
var navLinks = document.querySelectorAll('nav a');
// end 1


var theme_toggle_button = document.getElementById("theme-toggle-button")
var htmlDark = document.getElementById('htmlDark')
// var htmlDark2 = document.documentElement
// end 2


var buttononstabs = document.querySelectorAll('button[data-filter]');
var tabContents = document.querySelectorAll('div[data-category]');
// data-filter="design"
 // data-category="app"
 // end 3


 var next_testimonial =document.getElementById("next-testimonial")
  var prev_testimonial =document.getElementById("prev-testimonial")
  var testimonials_carousel =document.getElementById("testimonials-carousel")
  var carousel_indicators =Array.from(document.querySelectorAll(".carousel-indicator"))
  var traslateX=0
   // end 4


   var settings_toggle = document.getElementById("settings-toggle");
var settingsSidebar = document.getElementById("settings-sidebar");
var close_settings = document.getElementById("close-settings")
var buttonsFont = Array.from(document.querySelectorAll('button[data-font]'));
//
var buttonsColor= document.querySelectorAll("#theme-colors-grid button")
console.log(buttonsColor)
console.log(settingsSidebar)
 // end 5



 scroll_to_topBtn = document.getElementById("scroll-to-top")
 // end 6


 //
 //

window.addEventListener('scroll', function(e) {
    var current = '';
    for (let i = 0; i< sections.length; i++) {
        
        var sectop = sections[i].offsetTop
        if(pageYOffset > sectop-89)
        current = sections[i].getAttribute('id')
    console.log(current)
    }
   ;

    navLinks.forEach(function(link) {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});
// end 1

theme_toggle_button.addEventListener("click" , function()

{
   htmlDark.classList.toggle('dark')
   //htmlDar2.classList.toggle('dark')
})
// end 2


for (let i = 0; i < buttononstabs.length; i++)
     {
    buttononstabs[i].addEventListener("click" , function()  
{ 
     buttononstabs.forEach(function(button) {
        button.classList.remove('active', 'bg-linear-to-r', 'from-primary', 'to-secondary', 'text-white');
        button.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-600');  
    }
)
       buttononstabs[i].classList.add('active', 'bg-linear-to-r', 'from-primary', 'to-secondary', 'text-white');
        buttononstabs[i].classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-600'); 

        

    var filter = buttononstabs[i].dataset.filter
    tabContents.forEach(function(div)
{
   if (filter=="all") {
    div.style.display="block"
    console.log("all")
   }
   else
   {
    console.log("not all")
     if (div.dataset.category!=filter) {
       div.style.display="none"
    }
    else
    {
           div.style.display="block"
    }
   }
})
})
    
}
// end 3



prev_testimonial.addEventListener("click",function()
 {
    if (traslateX<1) {
        traslateX = 100
    }
    else
    {
        traslateX-=33.3
    }
    testimonials_carousel.style.transform= `translateX(${traslateX}%)`
})

next_testimonial.addEventListener("click",function()
 {
    if (traslateX>99) {
        traslateX = 0
    }
    else
    {
        traslateX+=33.3
    }
    testimonials_carousel.style.transform= `translateX(${traslateX}%)`
})

for (let index = 0; index < carousel_indicators.length; index++) {
    carousel_indicators[index].addEventListener("click",function()
{
    if (index==0) {
        testimonials_carousel.style.transform= `translateX(0%)`
       carousel_indicators.forEach(function(indicator) 
       {
            indicator.classList.remove('scale-125');
            indicator.classList.add('dark:bg-slate-600');
        });

        carousel_indicators[index].classList.remove('dark:bg-slate-600');
        carousel_indicators[index].classList.add("scale-125")
    }
    else if(index==1)
    {
       testimonials_carousel.style.transform= `translateX(33.333%)`
         carousel_indicators.forEach(function(indicator) 
       {
            indicator.classList.remove('scale-125');
            indicator.classList.add('dark:bg-slate-600');
        });

        carousel_indicators[index].classList.remove('dark:bg-slate-600');
        carousel_indicators[index].classList.add("scale-125")
    }
      else if(index==2)
    {
        testimonials_carousel.style.transform= `translateX(66.666667%)`
         carousel_indicators.forEach(function(indicator) 
       {
            indicator.classList.remove('scale-125');
            indicator.classList.add('dark:bg-slate-600');
        });

        carousel_indicators[index].classList.remove('dark:bg-slate-600');
        carousel_indicators[index].classList.add("scale-125")
        
    }
      else if(index==3)
    {
        testimonials_carousel.style.transform= `translateX(99.9999%)`
         carousel_indicators.forEach(function(indicator) 
       {
            indicator.classList.remove('scale-125');
            indicator.classList.add('dark:bg-slate-600');
        });

        carousel_indicators[index].classList.remove('dark:bg-slate-600');
        carousel_indicators[index].classList.add("scale-125")
        
    }
})
    
}
// end 4

settings_toggle.addEventListener("click",function()
{
    settingsSidebar.classList.remove("translate-x-full")
    settings_toggle.style.right="20rem"
})

close_settings.addEventListener("click",function()
{
    settingsSidebar.classList.add("translate-x-full")
    settings_toggle.style.right="0px"
})


for (let index = 0; index < buttonsFont.length; index++) {
   buttonsFont[index].addEventListener("click",function()
   {
    
   buttonsFont.forEach(function(btn)
{
       document.body.classList.remove(`font-${btn.dataset.font}`);
})


        document.body.classList.add(`font-${buttonsFont[index].dataset.font}`)
      
   }
)
    
}




for (let index = 0; index < buttonsColor.length; index++) {
    buttonsColor[index].addEventListener("click", function() {
        
        
        const primary = this.dataset.primary;
        const secondary = this.dataset.secondary;
        const accent = this.dataset.accent;

        document.documentElement.style.setProperty('--color-primary', primary);
        document.documentElement.style.setProperty('--color-secondary', secondary);
        document.documentElement.style.setProperty('--color-accent', accent);

  
        buttonsColor.forEach(function(btn) {
           
            btn.classList.remove('ring-2','ring-primary','ring-offset-2', 'ring-offset-white', 'scale-110', 'dark:ring-offset-slate-900');
            btn.style.borderColor = "transparent"; 
        });

        
        this.classList.add('ring-2', 'ring-primary', 'ring-offset-2', 'ring-offset-white', 'scale-110', 'dark:ring-offset-slate-900');
       
    });
}
// end 5

scroll_to_topBtn.addEventListener("click",function ()
 {
    
     window.scrollTo({ top: 0, behavior: 'smooth' });
    
})

// end 6