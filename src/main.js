"use strict"




const form = document.querySelector(".search-form");
const formInput = document.querySelector(".search-input");
const loadBtn = document.querySelector(".load-button")
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

const KEY = '42543604-e9bb6c6b12fe7ca69b0735960';
const BASE_URL = "https://pixabay.com/api/";

const searchParams = new URLSearchParams({
    orientation: "horizontal",
    safesearch: true,
    image_type: "photo",
    per_page:15,
})


import { checkForm } from "./js/pixabay-api";
import { generateMarkup } from "./js/render-functions";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from "axios"

let page = 1;
const ligthbox = new SimpleLightbox(".gallery  a")


function createURL() {
    return `${BASE_URL}?key=${KEY}&q=${formInput.value}&${searchParams}&page=${page++}`
}

form.addEventListener("input", (event) => {
    checkForm(formInput)
})


form.addEventListener("submit", async (event) => {
    event.preventDefault()
    loader.classList.remove("visually-hidden")
    page = 1

    gallery.innerHTML = "";

    async function getGallery() {
        try {
            return await axios.get(createURL())
        }
        catch {
            throw new Error("Promblems with the fetch!")
        }
    }

    getGallery().then(data => {

        if (data.data.hits.length == 0) {
            throw new Error("No such images!")
        }

        gallery.insertAdjacentHTML("beforeend", generateMarkup(data.data))

        ligthbox.refresh()

        loadBtn.classList.remove("visually-hidden")

    })
        
    .catch(error => {
        
        iziToast.error({
            message:"Sorry, there are no images matching your search query. Please try again!",
        })
        
        loadBtn.classList.add("visually-hidden")

    })
        
    .finally(() => {
        
        loader.classList.add("visually-hidden")

    })
    
})


loadBtn.addEventListener("click", (event) => {
    loader.classList.remove("visually-hidden")
    loadBtn.classList.add("visually-hidden")

    async function getGallery() {
        try {
            return await axios.get(createURL())
        }
        catch {
            throw new Error("We're sorry, but you've reached the end of search results.")
        }
    }

    getGallery().then((data) => {

        if (data.data.hits.length === 0) {
            throw new Error("No such images!")
        }

        gallery.insertAdjacentHTML("beforeend", generateMarkup(data.data))

        const elHeight = gallery.firstChild.getBoundingClientRect()
        window.scrollBy(0, elHeight.height * 2)

        if (data.data.hits.length < searchParams.get("per_page")) {
            loadBtn.classList.add("visually-hidden")
        }
        
        loadBtn.classList.remove("visually-hidden")

    ligthbox.refresh()


    }).catch((error) => {

        iziToast.error({
            message:"We're sorry, but you've reached the end of search results.",
        })

        loadBtn.classList.add("visually-hidden")

    }).finally(() => {
        
        loader.classList.add("visually-hidden")

    })

})