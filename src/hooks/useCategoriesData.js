import { useState, useEffect } from 'react';

const useCategoriesData = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://petgram-server-thienjs.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return { categories, loading };
};

export default useCategoriesData;
