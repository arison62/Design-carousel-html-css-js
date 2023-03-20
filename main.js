//Javascript for tab navigation horizontal scroll buttons

//Javascript to make the tab navigation draggable

//Javascript to view tab contents on click tab buttons

const btnLeft = document.querySelector(".left-btn");
const btnRight = document.querySelector(".right-btn");
const tabMenu = document.querySelector(".tab-menu");

const IconVisibility = () =>{
    let scrollLeftValue = Math.round(tabMenu.scrollLeft);

    let scrollableWidth = tabMenu.scrollWidth - tabMenu.clientWidth;

    btnLeft.style.display = scrollLeftValue > 0 ? "block": "none";
    btnRight.style.display = scrollableWidth > scrollLeftValue ? "block" : "none";
   
};


btnLeft.addEventListener('click', () => {
    tabMenu.scrollLeft -= 150;
    setTimeout(IconVisibility, 50);
  
});

btnRight.addEventListener('click', ()=>{
    tabMenu.scrollLeft += 150;
    setTimeout(IconVisibility, 50);
});

window.onload = function(){
    btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? "block": "none";
    btnLeft.style.display = tabMenu.scrollWidth > window.innerWidth ? "": "none";
}


window.onsize = function(){
    btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? "block": "none";
    btnLeft.style.display = tabMenu.scrollWidth > window.innerWidth ? "block": "none";

    let scrollLeftValue = Math.round(tabMenu.scrollLeft);
    btnLeft.style.display = scrollLeftValue > 0 ? "block": "none";
}

// Javascript for tabMenu draggable
let activeDrag = false;

tabMenu.addEventListener('mousemove', (drag)=>{
    if(!activeDrag) return;
    tabMenu.scrollLeft -= drag.movementX;
    IconVisibility();
}, true);

document.addEventListener('mousedown', () =>{
    activeDrag = true;
    tabMenu.classList.add("dragging");
});

document.addEventListener('mouseup', () => {
    activeDrag= false;
    tabMenu.classList.remove("dragging");
});


// javascript to view tab contents on click tab buttons

const tabs = document.querySelectorAll('.tab');
const tabBtns = document.querySelectorAll(".tab-btn");
const tab_Nav = function(tabBtnClick){
    tabBtns[tabBtnClick].classList.add("active");
    tabs[tabBtnClick].classList.add("active");
};

tabBtns.forEach((tabBtn, i) => {
    tabBtn.addEventListener('click', (e) =>{
        tabBtns.forEach((e)=>{
            e.classList.remove("active");
        });
        tabs.forEach((e)=>{
            e.classList.remove("active");
        });
        tab_Nav(i);
    },true);
    console.log(tabBtn);
});

function test(){console.log("hello");}