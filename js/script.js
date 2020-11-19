/* Submenu (More) */

const btnMore =  document.querySelector(".more");
const moreSubmenu = document.querySelector(".more ul");


btnMore.addEventListener('click', function() {
    if(moreSubmenu.style.display == 'none' || moreSubmenu.style.display == '') {
        moreSubmenu.style.display = 'block';
    } else {
        moreSubmenu.style.display = 'none';
    }
});