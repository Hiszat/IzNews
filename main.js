
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("cari");
const newsContainer = document.getElementById("news");
const modal = document.getElementById("modal-id");

function displayInitialNews() {
    const initialUrl = "https://newsapi.org/v2/top-headlines?country=us"+
    "&pageSize=9" +
    "&sortBy=popularity" + 
    "&apiKey=72e148dd9cfb4074b7682ea66ef415d4";

    axios
      .get(initialUrl)
      .then(function (response) {
        let card = "";
        const articles = response.data.articles;
        console.log(articles);
        for (let i = 0; i < articles.length; i++) {
          const item = articles[i];
          card += `<div class="card my-4 mx-2" style="width: 18rem;">
                    <img src="${item.urlToImage}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description}</p>
                        <a href="${item.url}" target="_blank" class="btn btn-primary">Go here</a>
                    </div>
                </div>`;
        }
        newsContainer.innerHTML = card;
      })
      .catch(function (error) {
        console.error(error);
      });
  }


   displayInitialNews();

function performSearch(searchTerm) {
  const url = `https://newsapi.org/v2/everything?q=${searchTerm}&pageSize=9&apiKey=72e148dd9cfb4074b7682ea66ef415d4`;

  axios
    .get(url)
    .then(function (response) {
      let card = "";
      const articles = response.data.articles;
      const totalResults = response.data.totalResults;
      if (totalResults === 0) {
        const myModal = new bootstrap.Modal('#notfound', {
            keyboard: true
          })
        modal.innerHTML = `<h1>${searchTerm} not found</h1>`;
        myModal.show();
      } else {
        console.log(articles);
        for (let i = 0; i < articles.length; i++) {
            const item = articles[i];
            card += `<div class="card my-4 mx-2" style="width: 18rem;">
                    <img src="${item.urlToImage}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description}</p>
                        <a href="${item.url}" target="_blank" class="btn btn-primary">Go here</a>
                    </div>
                </div>`;
        }
        newsContainer.innerHTML = card;
        }
    })
    .catch(function (error) {
        console.log(error);
    });
}

// Handle search button click event
searchButton.addEventListener("click", function (e) {
    e.preventDefault();
  performSearch(searchInput.value);
});

// Handle Enter key press in the search input
searchInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    performSearch(searchInput.value);
  }
});


document.getElementById("anime").addEventListener("click", function (e) {
    e.preventDefault();
    performSearch("anime");
  });

  document.getElementById("sport").addEventListener("click", function (e) {
    e.preventDefault();
    performSearch("sports");
  });

  document.getElementById("home").addEventListener("click", function (e) {
    e.preventDefault();
    displayInitialNews();
  });
