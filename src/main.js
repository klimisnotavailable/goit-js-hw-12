"use strict"




const form = document.querySelector(".search-form");
const formInput = document.querySelector(".search-input");
const formBtn = document.querySelector(".form-button");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

const KEY = '42543604-e9bb6c6b12fe7ca69b0735960';
const q = formInput.value;
const image_type = "photo";
const ORIENATION = "horizontal";
const SAFESEARCH = true;
const BASE_URL = "https://pixabay.com/api/";

import { checkForm, createURL } from "./js/pixabay-api";
import { generateMarkup } from "./js/render-functions";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


form.addEventListener("input", (event) => {
    checkForm(formInput)
})


form.addEventListener("submit", (event) => {
    event.preventDefault()
    loader.classList.remove("visually-hidden")

    gallery.innerHTML = "";


    fetch(createURL())
    .then(result => result.json())
    .then(data => {

        if (data.hits.length == 0) {
            throw new Error("No such images!")
        }

        gallery.insertAdjacentHTML("beforeend", generateMarkup(data))

        const ligthbox = new SimpleLightbox(".gallery  a")

        ligthbox.refresh()
    })
    .catch(error => {
        iziToast.error({
            message:"Sorry, there are no images matching your search query. Please try again!",
        })
    })
        .finally(() => {
        loader.classList.add("visually-hidden")
    })
    
})


