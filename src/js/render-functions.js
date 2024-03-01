"use strict"



export function generateMarkup(result) {
    return result.hits.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `<li>
                    <a href="${webformatURL}"><img class="large-image" src="${largeImageURL}" alt="${tags}" width="360px" height="152px" title="${tags}"></a>
                    <div class="image-statistics">

                    <span>
                    <h3>Likes</h3>
                    <p>${likes}</p>                 
                    </span>

                    <span>
                    <h3>Views</h3>
                    <p>${views}</p>
                    </span>

                    <span>
                    <h3>Comments</h3>
                    <p>${comments}</p>
                    </span>

                    <span>
                    <h3>Downloads</h3>
                    <p>${downloads}</p>
                    </span>
                    </div>
                </li>`
                }).join("")
}

