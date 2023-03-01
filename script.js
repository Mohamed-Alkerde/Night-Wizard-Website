

/* Système Jour / Nuit */

function jour() {
  localStorage.setItem("darkmod", "no");
    document.getElementById("body").className = "white transition";
    document.getElementById("nw-white").style.opacity = "1";
    document.getElementById("nw-black").style.opacity = "0";
    document.getElementById("jour").style.display = "none";
    document.getElementById("nuit").style.display = "block";
    document.getElementById("jour-nuit").style.border =
      " 2px solid rgb(48, 48, 48)";
    document.getElementById("jour-nuit").style.background = "#fff";
}

function nuit() {
  localStorage.setItem("darkmod", "yes");
    document.getElementById("body").className = "dark transition";
    document.getElementById("nw-white").style.opacity = "0";
    document.getElementById("nw-black").style.opacity = "1";
    document.getElementById("jour").style.display = "block";
    document.getElementById("nuit").style.display = "none";
    document.getElementById("jour-nuit").style.border = " 2px solid #fff";
    document.getElementById("jour-nuit").style.background = "rgb(48, 48, 48)";
}

/* Onload Page */

function load() {
  if (localStorage.getItem("darkmod") === "yes") {
    nuit();
  } else {
    jour();
  }
}
