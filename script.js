var container=document.querySelector('.container')
var loader=document.querySelector('.loader')
document.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{
        loader.style.display='none'
        container.style.display='flex'
        
    },1000);
})