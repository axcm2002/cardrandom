/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const palo = ["♦", "♥", "♣", "♠"];
  const valor = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  const pal = Math.floor(Math.random() * palo.length);
  const val = Math.floor(Math.random() * valor.length);

  document.querySelector(".numero").innerHTML = valor[val];
  document.querySelector(".palo").innerHTML = palo[pal];
  document.querySelector(".gominola").innerHTML = palo[pal];

  const nu = document.getElementsByClassName("numero");
  const he = document.getElementsByClassName("palo");
  const pi = document.getElementsByClassName("gominola");

  if (palo[pal] == "♦" || palo[pal] == "♥") {
    nu[0].style.color = "red";
    he[0].style.color = "red";
    pi[0].style.color = "red";
  }
};
