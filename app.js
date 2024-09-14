console.log("Hello!")
document.addEventListener("DOMContentLoaded" , () => {

    const images = document.querySelectorAll("img");
    for (const image of images){
        fetch ("https://dog.ceo/api/breeds/image/random")
        .then(respnse => Response.json())
        .then(data => { 
            image.src = data.message
            image.width = 100;
            image.height = 100;

        })
    }
})