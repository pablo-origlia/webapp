let eleccion = localStorage.getItem("data-theme");

function init() {
  // inicilizo los link del menu
  document.getElementById("home_navbar").href = "index.html";
  document.getElementById("menu_navbar").href = "menu.html";
  document.getElementById("contact_navbar").href = "contacto.html";
  var theme = document.getElementsByTagName("link")[3];

  if (eleccion == "dark") {
    toggleTheme();
  }
}

function toggleTheme() {
  // tomo la hoja css que voy a tooglear
  var theme = document.getElementsByTagName("link")[3];
  // icono del modo
  var icon = document.getElementById("mode_icon");
  // logo del header
  var logo = document.getElementById("logo_img");
  // navbar de boostrap
  var navbar = document.getElementById("navbarRes");

  var listaEjecutivo = document.getElementById("lista-ejecutivo");
  var listaFestivo = document.getElementById("lista-festivo");
  var listaEspecial = document.getElementById("lista-especial");

  var listaMenu = document.getElementById("lista-menu");

  if (theme.getAttribute("href") == "css/light.css") {
    theme.setAttribute("href", "css/dark.css");
    logo.classList.add("invert_effect");
    navbar.classList.remove("navbar-light");
    navbar.classList.remove("bg-light");
    navbar.classList.add("navbar-dark");
    navbar.classList.add("bg-dark");

    if (listaEjecutivo != undefined) {
      listaEjecutivo.classList.add("bg-dark");
      listaEjecutivo.classList.add("text-white");

      listaEjecutivo.classList.remove("bg-light");
      listaEjecutivo.classList.remove("text-black");
    }
    if (listaFestivo != undefined) {
      listaFestivo.classList.add("bg-dark");
      listaFestivo.classList.add("text-white");

      listaFestivo.classList.remove("bg-light");
      listaFestivo.classList.remove("text-black");
    }
    if (listaEspecial != undefined) {
      listaEspecial.classList.add("bg-dark");
      listaEspecial.classList.add("text-white");

      listaEspecial.classList.remove("bg-light");
      listaEspecial.classList.remove("text-black");
    }
    if (listaMenu != undefined) {
      for (const child of listaMenu.children) {
        child.classList.add("list-group-item-dark");
        child.classList.remove("list-group-item-light");
      }
    }
    // cambio el icono del menu
    icon.innerHTML = "☀️";
    localStorage.setItem("data-theme", "dark");
  } else {
    theme.setAttribute("href", "css/light.css");
    logo.classList.remove("invert_effect");
    navbar.classList.remove("navbar-dark");
    navbar.classList.remove("bg-dark");
    navbar.classList.add("navbar-light");
    navbar.classList.add("bg-light");
    if (listaEjecutivo != undefined) {
      listaEjecutivo.classList.add("bg-light");
      listaEjecutivo.classList.add("text-black");

      listaEjecutivo.classList.remove("bg-dark");
      listaEjecutivo.classList.remove("text-white");
    }
    if (listaFestivo != undefined) {
      listaFestivo.classList.add("bg-light");
      listaFestivo.classList.add("text-black");

      listaFestivo.classList.remove("bg-dark");
      listaFestivo.classList.remove("text-white");
    }
    if (listaEspecial != undefined) {
      listaEspecial.classList.add("bg-light");
      listaEspecial.classList.add("text-black");

      listaEspecial.classList.remove("bg-dark");
      listaEspecial.classList.remove("text-white");
    }
    if (listaMenu != undefined) {
      for (const child of listaMenu.children) {
        child.classList.remove("list-group-item-dark");
        child.classList.add("list-group-item-light");
      }
    }
    // cambio el icono del menu
    icon.innerHTML = "🌑";
    localStorage.setItem("data-theme", "light");
  }
}
