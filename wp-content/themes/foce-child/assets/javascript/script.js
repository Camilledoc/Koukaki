//animation rotating scroll flowers //
const root=document.querySelector(':root');


document.addEventListener('scroll', function(){
root.style.setProperty('--speed', '2s');
})

document.addEventListener('scrollend', function(){
    root.style.setProperty('--speed', '10s');
    })

//animation section title // 
// Create the observer
const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('anim_title');
      }
    });
  },{
    root:null,
    rootMargin:'0px',
    threshold:0.5
  });
  
  observer.observe(document.querySelector('.section_title'));
  observer.observe(document.querySelector('.section_title1'));

  const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('anim_title2');
      }
    });
  });
  observer2.observe(document.querySelector('.section_title2'));

  //swiper characters //
  
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    effect: "coverflow",
    coverflowEffect: {
    rotate: 0,                      
    depth: 200,                     
    stretch: 60,                    
    slideShadows: false,            
    },
    autoplay: isMobile ? false : {
    delay: 5000,
    disableOnInteraction: false,
    },
    breakpoints:{
      0: {
        slidesPerView: 1,
      },
      320:{
        slidesPerView: 2,
      },
      996:{
        slidesPerView: 3,
      }
  }
  });

//animation clouds // 

const bigNuage = document.querySelector('.big_cloud');
const littleNuage = document.querySelector('.little_cloud');
const initialPositionBig = 1052;
const initialPositionLittle = 794; 

//find clouds position  
const positionHorizontaleBig = bigNuage.offsetLeft;
//console.log(positionHorizontaleBig);
const positionHorizontaleLittle = littleNuage.offsetLeft;
//console.log(positionHorizontaleLittle);

document.addEventListener('scroll', () => {
  let scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  //console.log(scrollPercent)
  if ( scrollPercent > 45 ) {
   bigNuage.style.left = (initialPositionBig - ((scrollPercent-45)*14)) + 'px';
  } 
  if ( scrollPercent > 66.5) {
    bigNuage.style.left = '752px';
  }
  if ( scrollPercent > 45 ) {
    littleNuage.style.left = (initialPositionLittle - ((scrollPercent-45)*14)) + 'px';
   }
  if ( scrollPercent > 66.5) {
    littleNuage.style.left = '494px';
  }
 //console.log(bigNuage)
}
)

//menu toggle //
  const theToggle = document.querySelector('.toggle');

// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
	let newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
	let newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

//menu open and close 
theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}

const liens = document.querySelectorAll('#fullscreenmenu a');

//console.log(liens);
liens.forEach(function(lien) {
  lien.addEventListener('click', function() {
    //console.log('on/off');
    toggleClass(document.querySelector('.toggle'), 'on');
  }
  )
})