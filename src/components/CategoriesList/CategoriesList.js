import React, { useEffect, useState } from 'react';
import StyledCategoriesList from './CategoriesList.style';
import Category from '../Category/Category';
import useCategoriesData from '../../hooks/useCategoriesData';
import LoadingCategory from '../LoadingCategory/LoadingCategory';

const CategoriesList = () => {
  const [showFixed, setShowFixed] = useState(false);

  const { categories, loading } = useCategoriesData();

  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed]);

  const renderList = fixed => (
    <StyledCategoriesList fixed={fixed}>
      {loading
        ? [1, 2, 3, 4, 5, 6].map(i => (
          <li className="category-item" key={i}>
            <LoadingCategory />
          </li>
        ))
        : categories.map(category => (
          <li className="category-item" key={category.id}>
            <Category
              cover={category.cover}
              emoji={category.emoji}
              path={`/pet/${category.id}`}
            />
          </li>
        ))}
    </StyledCategoriesList>
  );

  return (
    categories.length > 0 && (
      <>
        {renderList()}
        {showFixed && renderList(true)}
      </>
    )
  );
};

export default React.memo(CategoriesList);
