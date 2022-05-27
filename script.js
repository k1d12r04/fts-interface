"use strict";

const signupEl = document.querySelector(".sign-up");
const signinEl = document.querySelector(".sign-in");


const signuppageEl = document.querySelector(".sign-up-page");
const signinpageEl = document.querySelector(".sign-in-page");


const ctaBtnsEl = document.querySelector(".cta-btns");
const signupBtnEl = document.querySelector(".signup-btn");
const signinBtnEl = document.querySelector(".signin-btn");

const nameField = document.getElementById("name");







nameField.addEventListener("input", e => {
  signupEl.textContent = `${nameField.value}`;
});
