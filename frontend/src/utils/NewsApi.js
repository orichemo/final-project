class NewsApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _processResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }
  // format the date
  arrangeDateData(date) {
    const setDate = date.split('-');
    const day = setDate[2].slice(0, 2);
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const month = monthNames[setDate[1] - 1];

    return [month, day + ',', setDate[0]].join(' ');
  }

  getArticle(search) {
    // find and format the date 7 days ago
    var d = new Date();
    d.setDate(d.getDate() - 7);
    const date = d.toISOString();
    return fetch(
      `${this._baseUrl}q=${search}&from=${date}&pageSize=100&apiKey=a5d3cd4fd33f4dc8a2ee449889c7c6a2`,
      { method: 'GET' }
    )
      .then(this._processResponse)
      .then((res) => {
        const articles = res.articles;
        const articlesData = articles.map((article) => ({
          keyword: search,
          title: article.title,
          text: article.description,
          date: this.arrangeDateData(article.publishedAt),
          source: article.source.name,
          link: article.url,
          image: article.urlToImage,
        }));
        return articlesData;
      });
  }
}

export const newsApi = new NewsApi({
  baseUrl: `https://nomoreparties.co/news/v2/everything?`,
});

// `https://newsapi.org/v2/everything?`
// 'https://nomoreparties.co/news/v2/everything?'
