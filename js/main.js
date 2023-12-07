// Add active class to the current nav-item 
document.querySelectorAll(".my-nav-link").forEach((link) =>{
    if(link.href === window.location.href){
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
    }
});
// let contact = document.getElementsByClassName(".nav-contact");
// if(link.href === window.location.href){
//     contact.classList.add("contactActive");
//     link.setAttribute("aria-current", "page");
// }

// number counter
let nums = document.querySelectorAll(".nums .number");
let section = document.getElementById('sec2');
let started = false;

window.onscroll = function(){
    if(!started){
        nums.forEach((num)=> startCount(num));
    }
    started = true ;
}

function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(()=>{
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count)
        }
    }, 20)
}

// language map
function showCountry(e, countryName) {
    let mapPic = document.getElementById("langMap");
    mapPic.setAttribute('src','images/languages/'+countryName+'.png')
}
