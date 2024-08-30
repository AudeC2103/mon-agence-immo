import React, { useState } from 'react';
import { useArticles } from '../../hooks/useArticles';
import MainBanner from '../../containers/MainBanner/MainBanner';
import TeamOverView from '../../containers/TeamOverview/TeamOverView';
import ArticleCard from './../../components/ArticleCard/ArticleCard';
import ContactOverView from '../../containers/ContactOverview/ContactOverView';
import s from './style.module.scss';

const ArticlesListPage = () => {
  const { articles, loading, error } = useArticles(); // Utilisation du hook
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading articles</div>;

  // Calcul des indices des articles à afficher
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  return (
    <div className={s.page}>
      <MainBanner categorie="Advice" />
      <div className={s.articles}>
        {currentArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      <div className={s.pagination}>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={s.prevButton}
        >
          Précédent
        </button>
        <span className={s.pageIndicator}>
          Page {currentPage} sur {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={s.nextButton}
        >
          Suivant
        </button>
      </div>
      <TeamOverView />
      <ContactOverView />
    </div>
  );
};

export default ArticlesListPage;
