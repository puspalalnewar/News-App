
const img = document.querySelector(".img-src");
const title = document.querySelector(".title");
const description = document.querySelector(".description");
const main = document.querySelector(".main");
const entertainments = document.querySelector(".entertainments");
const sports = document.querySelector(".sports");
const politics = document.querySelector(".politics");

async function fetchNews(category) {
    const API_KEY = "659f0b4b809b49279bead0c1015c98d7";
    const url =`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=659f0b4b809b49279bead0c1015c98d7`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        for (let i = 0; i < data.articles.length; i++) {
            let work = data.articles[i];
            let title = work.title;
            let desc = work.description;
            let readMore = work.url;
            if (desc === null) {
                desc = "Not Available";
            }
            let urlToImg = work.urlToImage;
            if (urlToImg === null) {
                urlToImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQZUYP1nWYaAFpSvhTYPwzO91_T6Sbdiysw-juuJQ5daDmBCjKm3oA_oP2toTI4Ni8Y98&usqp=CAU";
            }
            let newDiv = document.createElement('div');
            newDiv.classList.add("box");
            newDiv.innerHTML = `

                <div class="img">
                    <img class="img-src"
                        src="${urlToImg}"
                        alt="">
                </div>
                <div class="headline">
                    <h2 class="title">${title}</h2>
                    <p class="description">Description : ${desc}</p>
                </div>
                <button onClick = "window.open('${readMore}')" class="read-more btn">Read More</button>
            
            `
            main.appendChild(newDiv)
        }

    } catch (error) {
        console.error('Error fetching the news:', error);
    }
}
fetchNews("politics");

entertainments.addEventListener("click", ()=>{
    main.innerHTML = "";
    fetchNews("entertainment");
});
sports.addEventListener("click", ()=>{
    main.innerHTML = "";
    fetchNews("sport");
});
politics.addEventListener("click", ()=>{
    main.innerHTML = "";
    fetchNews("politics");
});




