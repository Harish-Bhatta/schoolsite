/* ==========================================================
                    PSBS PORTAL
                    Version 2.1
                    Developer : Harish
========================================================== */


/* ==========================================================
                    SELECT ELEMENTS
========================================================== */

const menuButton = document.querySelector(".menu-btn");

const sidebar = document.querySelector(".sidebar");

const themeButton = document.querySelector(".theme-btn");

const profileButton = document.querySelector(".profile-btn");

const body = document.body;


/* ==========================================================
                    SIDEBAR
========================================================== */

function openSidebar() {

  sidebar.classList.add("active");

}

function closeSidebar() {

  sidebar.classList.remove("active");

}

menuButton.addEventListener("click", () => {

  if (sidebar.classList.contains("active")) {

    closeSidebar();

  }

  else {

    openSidebar();

  }

});


/* ==========================================================
                    DARK MODE
========================================================== */

themeButton.addEventListener("click", () => {

  body.classList.toggle("dark");

});


/* ==========================================================
                    PROFILE BUTTON
========================================================== */

profileButton.addEventListener("click", () => {

  alert("Student Login Coming Soon.");

});


/* ==========================================================
                    ESC KEY
========================================================== */

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    closeSidebar();

  }

});


/* ==========================================================
                    CLICK OUTSIDE SIDEBAR
========================================================== */

document.addEventListener("click", (event) => {

  if (

    sidebar.classList.contains("active")

    &&

    !sidebar.contains(event.target)

    &&

    !menuButton.contains(event.target)

  ) {

    closeSidebar();

  }

});