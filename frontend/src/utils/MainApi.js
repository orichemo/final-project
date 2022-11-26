class MainApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }
  _processResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }

  _request(url, token, method) {
    return fetch(`${this._baseUrl}${url}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    }).then(this._processResponse);
  }

  getUserInfo(token) {
    return this._request('/users/me', token, 'GET');
  }

  getInitialCards(token) {
    return this._request('/articles', token, 'GET');
  }

  deleteCard(id, token) {
    return this._request(`/articles/${id}`, token, 'DELETE');
  }

  createCard({ keyword, title, text, date, source, link, image }, token) {
    return fetch(`${this._baseUrl}/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        keyword: keyword,
        title: title,
        text: text,
        date: date,
        source: source,
        link: link,
        image: image,
      }),
    }).then(this._processResponse);
  }
}

export const api = new MainApi({
  baseUrl: 'https://api.ori-hemo.students.nomoredomainssbs.ru',
});

// http://localhost:3000
// https://api.ori-hemo.students.nomoredomainssbs.ru
