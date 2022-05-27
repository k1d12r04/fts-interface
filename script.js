"use strict";

const signupEl = document.querySelector(".sign-up");
const signinEl = document.querySelector(".sign-in");

const closebtnupEl = document.querySelector(".close-btn-up");
const closebtninEl = document.querySelector(".close-btn-in");

const signuppageEl = document.querySelector(".sign-up-page");
const signinpageEl = document.querySelector(".sign-in-page");

const overlayEl = document.querySelector(".overlay");

const ctaBtnsEl = document.querySelector(".cta-btns");
const signupBtnEl = document.querySelector(".signup-btn");
const signinBtnEl = document.querySelector(".signin-btn");

const nameField = document.getElementById("name");

const openSignup = function () {
  signuppageEl.classList.remove("hidden");
};

const openSignin = function () {
  signinpageEl.classList.remove("hidden");
};

const closeSignup = function () {
  signuppageEl.classList.add("hidden");
}

const closeSignin = function () {
  signinpageEl.classList.add("hidden");
}

const overlayPage = function () {
  overlayEl.classList.remove("hidden");
}

const closeoverlay = function () {
  overlayEl.classList.add("hidden");
}

signupEl.addEventListener("click", openSignup);
signupEl.addEventListener("click", overlayPage);
signinEl.addEventListener("click", openSignin);
signinEl.addEventListener("click", overlayPage);

closebtnupEl.addEventListener("click", closeSignup);
closebtnupEl.addEventListener("click", closeoverlay);
closebtninEl.addEventListener("click", closeSignin);
closebtninEl.addEventListener("click", closeoverlay);

overlayEl.addEventListener("click", closeSignup);
overlayEl.addEventListener("click", closeoverlay);
overlayEl.addEventListener("click", closeSignin);
overlayEl.addEventListener("click", closeoverlay);

signupBtnEl.addEventListener("click", closeSignup);
signupBtnEl.addEventListener("click", closeoverlay);
signupBtnEl.addEventListener("click", function (e) {
  signupEl.style.display = "none";
  signinEl.style.display = "none";
});

signinBtnEl.addEventListener("click", closeSignin);
signinBtnEl.addEventListener("click", closeoverlay);
signinBtnEl.addEventListener("click", function (e) {
  signupEl.style.display = "none";
  signinEl.style.display = "none";
});

nameField.addEventListener("input", e => {
  signupEl.textContent = `${nameField.value}`;
});


const rmCheckSignup = document.getElementById("rememberMeSignup"),
  emailInput = document.getElementById("signup-email");

if (localStorage.checkbox && localStorage.checkbox !== "") {
  rmCheckSignup.setAttribute("checked", "checked");
  emailInput.value = localStorage.username;
} else {
  rmCheckSignup.removeAttribute("checked");
  emailInput.value = "";
}

function lsRememberMe() {
  if (rmCheckSignup.checked && emailInput.value !== "") {
    localStorage.username = emailInput.value;
    localStorage.checkbox = rmCheckSignup.value;
  } else {
    localStorage.username = "";
    localStorage.checkbox = "";
  }
}

const rmCheckSignin = document.getElementById("rememberMeSignin"),
  emailinput = document.getElementById("email");

if (localStorage.checkbox && localStorage.checkbox !== "") {
  rmCheckSignin.setAttribute("checked", "checked");
  emailinput.value = localStorage.username;
} else {
  rmCheckSignin.removeAttribute("checked");
  emailinput.value = "";
}

function lsRememberMe() {
  if (rmCheckSignin.checked && emailinput.value !== "") {
    localStorage.username = emailinput.value;
    localStorage.checkbox = rmCheckSignin.value;
  } else {
    localStorage.username = "";
    localStorage.checkbox = "";
  }
}