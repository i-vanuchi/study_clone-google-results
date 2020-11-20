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

/* Submenu (Settings) */

const btnSettings = document.querySelector(".settings");
const settingsSubmenu = document.querySelector(".settings ul");

btnSettings.addEventListener('click', function() {
    if(settingsSubmenu.style.display == 'none' || settingsSubmenu.style.display == '') {
        settingsSubmenu.style.display = 'block';
    } else {
        settingsSubmenu.style.display = 'none';
    }
});