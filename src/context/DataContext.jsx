import { useState, createContext, useContext, useEffect } from "react";

export const DataContext = createContext(null);

DataContext.displayName = "DataContext";

export const DataContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoryUrl = "http://localhost:3000/categories";
      const response = await fetch(categoryUrl);
      const categories = await response.json();
      //console.log("Categories: ", categories);
      setCategories(categories);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersUrl = "http://localhost:3000/users";
      const response = await fetch(usersUrl);
      const users = await response.json();
      //console.log("Users: ", users);
      setUsers(users);
    };
    fetchUsers();
  }, []);

  return (
    <DataContext.Provider value={{ categories, users }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataContextProvider");
  }
  return context;
};
