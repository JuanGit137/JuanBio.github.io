fetch('https://newsapi.org/v2/top-headlines?category=science&apiKey=8f9e668b6f4e45a4a9c0d93acfb43dda')
  .then(response => response.json())
  .then(data => {
    const newsContainer = document.getElementById('newsContainer')
    newsContainer.classList.add('news-container');
    if (data.totalResults != 0){
        data.articles.forEach(article => {
          const articleElement = document.createElement('a');
          articleElement.classList.add('list-group-item');
          articleElement.textContent = article.title;
          articleElement.href = article.url;
          newsContainer.appendChild(articleElement);
        });
    } else {
        newsContainer.innerHTML="no hay noticias"
    }
    console.log(data)
  })
  .catch(error => console.error('Error fetching news:', error));