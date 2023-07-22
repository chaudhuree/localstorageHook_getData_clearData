import  { useState } from "react";
// Custom hook for using local storage
const  useLocalStorage = (key, defaultValue) => {
  // Check if local storage is available in the browser
  const isLocalStorageSupported = typeof Storage !== "undefined";

  // Initialize the state with data from local storage or default value
  const [data, setData] = useState(() => {
    if (isLocalStorageSupported) {
      const storedData = localStorage.getItem(key);
      return storedData ? JSON.parse(storedData) : defaultValue;
    } else {
      // If local storage is not available, use the default value
      return defaultValue;
    }
  });

  // Function to update the state and the local storage
  const setDataAndLocalStorage = (newData) => {
    setData(newData);
    if (isLocalStorageSupported) {
      localStorage.setItem(key, JSON.stringify(newData));
    }
  };

  return [data, setDataAndLocalStorage];
};

// Custom hook to clear local storage with a given key
const useClearLocalStorage = () => {
  // Function to clear local storage for the given key
  const clearLocalStorage = (key) => {
    localStorage.removeItem(key);
  };

  return clearLocalStorage;
};

export  {useLocalStorage,useClearLocalStorage};