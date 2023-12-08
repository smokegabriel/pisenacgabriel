const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

const darkModeBtn = document.querySelector('.dark-mode');
const changeThemeBtn = document.querySelector('.changeThemeBtn');

function loadTheme() {
    const isDarkMode = localStorage.getItem("dark-mode-variables");

    if (isDarkMode === "1") {
        toggleDarkMode();
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode-variables');
    darkModeBtn.querySelector('span:nth-child(1)').classList.toggle('active');
    darkModeBtn.querySelector('span:nth-child(2)').classList.toggle('active');
}

darkModeBtn.addEventListener('click', () => {
    toggleDarkMode();

    if (document.body.classList.contains("dark-mode-variables")) {
        localStorage.setItem("dark-mode-variables", "1");
    } else {
        localStorage.removeItem("dark-mode-variables");
    }
});

loadTheme();

changeThemeBtn.addEventListener('click', function () { 
    toggleDarkMode();

    if (document.body.classList.contains("dark-mode-variables")) {
        localStorage.setItem("dark-mode-variables", "1");
    } else {
        localStorage.removeItem("dark-mode-variables");
    }
});
