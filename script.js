"use strict";

const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");

const navArr = [nav1, nav2, nav3, nav4, nav5];

function addAnimation(arr, direction1 = "out", direction2 = "in") {
  arr.forEach((item, idx) =>
    item.classList.replace(
      `slide-${direction1}-${idx + 1}`,
      `slide-${direction2}-${idx + 1}`
    )
  );
  return;
}

function toggleNav() {
  menuBars.classList.toggle("change");

  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    // overlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");

    // nav items in
    addAnimation(navArr);
  } else {
    // overlay
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    // nav items out
    addAnimation(navArr, "in", "out");
  }
}

menuBars.addEventListener("click", toggleNav);
navArr.forEach((item) => item.addEventListener("click", toggleNav));
