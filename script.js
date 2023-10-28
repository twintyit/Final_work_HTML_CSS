const menuItems = document.querySelectorAll('.item');
const contentBlocks = document.querySelectorAll('.contents');

menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
          
        menuItems.forEach((item) => {
            item.classList.remove('active');
        });
    
        menuItem.classList.add('active');

        const targetId = menuItem.getAttribute('data-target');

        if (targetId === 'content1' | targetId === 'content2') {

        contentBlocks.forEach((block) => {
            block.style.display = 'none';
        });

        document.getElementById(targetId).style.display = 'block';
    }
    });
});

function closeMenu() {
    var menuButton = document.getElementById("menu-button");
    menuButton.checked = false;
}

function changeStyleMenu() {
    var menu = document.querySelector('.left-panel');
    var checkbox = document.getElementById('menu-button');
    var screenWidth = window.innerWidth;

    if (screenWidth > 800 && checkbox.checked) {
        checkbox.checked = false;
    }
}

window.addEventListener('resize', changeStyleMenu);