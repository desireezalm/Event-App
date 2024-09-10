import { createContext, useContext } from "react";

export const DataContext = createContext({});

DataContext.displayName = "DataContext";

export const DataContextProvider = ({ children }) => {
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
    <DataContext.Provider
      value={{
        matchId,
      }}
    >
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
