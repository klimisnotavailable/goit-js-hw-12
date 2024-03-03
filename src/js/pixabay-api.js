"use strict"


const form = document.querySelector(".search-form")
const formInput = document.querySelector(".search-input")
const formBtn = document.querySelector(".form-button")

const KEY = '42543604-e9bb6c6b12fe7ca69b0735960';
const q = formInput.value;
const image_type = "photo";
const orientation = "horizontal";
const safesearch = true;
const BASE_URL = "https://pixabay.com/api/"


export const checkForm = function checkForm(formInput) {
    if (formInput.value.trim() == "") {
        formBtn.setAttribute("disabled", "disabled")
    } else {
    formBtn.removeAttribute("disabled", "disabled")
    }
}



