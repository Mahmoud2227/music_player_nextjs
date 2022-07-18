import {createContext,useState} from 'react';

export const MusicPlayerContext = createContext({
	token: "",
	setToken: () => {},
});

export const MusicPlayerProvider = ({children}) => {
  let storedToken
  if (typeof window !== "undefined") {
		storedToken = localStorage.getItem("token");
	}
  const [token, setToken] = useState(storedToken);
  return (
    <MusicPlayerContext.Provider value={{token, setToken}}>
      {children}
    </MusicPlayerContext.Provider>
  );
} 