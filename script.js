//TABS
const tabsBtns = document.querySelectorAll(".tabs_nav button");
const tabsItems = document.querySelectorAll(".tabs_item");

// Функция скрывает табы и убирает active у кнопок
function hideTabs() {
    tabsItems.forEach(item => {
        item.classList.add("hide");
    });
    tabsBtns.forEach(item => item.classList.remove("active"));
}

// Функция показывает переданный номер таба и делает соответствующую ему кнопку активной
function showTab(index) {
    tabsItems[index].classList.remove("hide");
    tabsBtns[index].classList.add("active");
}

hideTabs();
showTab(0);

tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
}))
//Anchors
const Anchors = document.querySelectorAll(".header_nav a");

Anchors.forEach(anc => {
    anc.addEventListener("click", function (event) {
        event.preventDefault();

        const id = anc.getAttribute("href");
        const elem = document.querySelector(id);

        window.scroll({
            top: elem.offsetTop - 80,
            behavior: 'smooth'
        });

    });
});