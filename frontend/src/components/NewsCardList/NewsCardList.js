import React, { useState, useContext } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';
import { useLocation } from 'react-router-dom';
import { ArticleContext } from '../../contexts/ArticleContext';

function NewsCardList(props) {
  const currentPage = useLocation().pathname;
  // all the search result
  const articles = useContext(ArticleContext);
  // the user's saved card
  const [cards, setCards] = useState(props.savedNewsArticle);
  
  const handleDeleteCard = (cardToDelete) => {
    props.removeCard(cardToDelete);
    cards && setCards(cards.filter((item) => item !== cardToDelete));
  };

  const handleSaveCard = (article) => {
    props.onCardSave(article);
  };

  return (
    // on homepage show only selected number of cards
    // on saved-news show all saved cards.
    <ul className='card-list'>
      {(currentPage === '/'
        ? articles.slice(0, props.articleIndex)
        : cards
        ? cards
        : []
      ).map((article, index) => {
        return (
          <NewsCard
            key={index}
            card={article}
            onCardDelete={handleDeleteCard}
            onCardSave={handleSaveCard}
          />
        );
      })}
    </ul>
  );
}

export default NewsCardList;
