import { useState, createContext, useContext, useEffect } from "react";

export const DataContext = createContext({});

DataContext.displayName = "FunctionContext";

export const DataContextProvider = ({ children }) => {
  const [categoryList, setCategoryList] = useState([]);
  const [userList, setUserList] = useState([]);

  const matchId = (id, list, type) => {
    const result = list.find((item) => {
      if (item.id === id) {
        return item;
      }
    });
    switch (type) {
      case "string":
        return result.name[0].toUpperCase() + result.name.slice(1);
      case "image":
        return result.image;
      default:
        break;
    }
    return result;
  };

  return (
    <DataContext.Provider value={{ matchId, categoryList, userList }}>
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

/*
export const DataContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoryUrl = "http://localhost:3000/categories";
      const response = await fetch(categoryUrl);
      const categoriesArray = await response.json();

      setCategories(categoriesArray);
      console.log("Categories: ", categoriesArray);
    };

    const fetchUsers = async () => {
      const usersUrl = "http://localhost:3000/users";
      const response = await fetch(usersUrl);
      const usersArray = await response.json();

      setUsers(usersArray);
      //console.log("Users: ", usersArray);
    };
    fetchCategories();
    fetchUsers();
  }, []);

  return (
    <DataContext.Provider value={{ categories, users }}>
      {children}
    </DataContext.Provider>
  );
};
*/

/*
export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataContextProvider");
  }
  return context;
};
*/
