let parent = document.querySelectorAll(".parent");
let image = document.querySelector("img");
console.log(parent)

parent.forEach(function(par){
    // console.log(par.childNodes[5].src);
    
    par.addEventListener('mouseenter', function(){
        par.childNodes[5].style.opacity = 1;
    })

    par.addEventListener("mouseleave", function(){
        par.childNodes[5].style.opacity = 0;
    })

    par.addEventListener("mouseover", function(dets){
        par.childNodes[5].style.left = dets.x+'px';
    })
})