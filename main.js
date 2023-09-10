console.log("mamamia!");

const URL = "https://api.thecatapi.com/v1/images/search";

fetch(URL)
    .then(res => res.json())
    .then(data => {
        let img = document.querySelector("img");
        img.src = data[0].url;
    });

    const URLdog = "https://api.thedogapi.com/v1/images/search";

fetch(URLdog)
    .then(res => res.json())
    .then(data => {
        let img = document.getElementById("dog");
        img.src = data[0].url;
    });