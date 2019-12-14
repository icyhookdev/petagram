import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [storeValue, setStoreValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const saveToLocalStorage = value => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setStoreValue(value);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    storeValue,
    saveToLocalStorage,
  };
};

export default useLocalStorage;
