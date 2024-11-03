import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="home">
      <h1>{t('welcome')}</h1>
      <button>{t('reportIssue')}</button>
      <button>{t('getSupport')}</button>
    </div>
  );
}

export default Home;
