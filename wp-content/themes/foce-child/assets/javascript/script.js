//animation fleurs en rotation au scroll 
const root=document.querySelector(':root');


document.addEventListener('scroll', function(){
root.style.setProperty('--speed', '2s');
})

document.addEventListener('scrollend', function(){
    root.style.setProperty('--speed', '10s');
    })

//animaiton titres section 
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

  