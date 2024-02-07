import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

export const Context = createContext({
  isAuthorized: false,
})

export const AppWrapper = () => {

  const [isAuthorized, setIsAuthorize] = useState(false);
  const [user, setUser] = useState({});

  return (
    <Context.Provider value={{
      isAuthorized,
      setIsAuthorize,
      user,
      setUser
    }}
    >
      <App />
    </Context.Provider>
  );

};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
)
