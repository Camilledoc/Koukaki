const root=document.querySelector(':root');


document.addEventListener('scroll', function(){
root.style.setProperty('--speed', '2s');
})

document.addEventListener('scrollend', function(){
    root.style.setProperty('--speed', '10s');
    })
