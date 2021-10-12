import React, { useState } from 'react';

export const SiteContext = React.createContext();

function SiteProvider(props) {
  const [user, setUser] = useState({username: null, password: null});
  const [loading, setLodaing] = useState(false);
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const state = {
    user,
    setUser,
    loading,
    setLodaing,
    token,
    setToken,
    isAuthenticated,
    setIsAuthenticated
  }

  return (
    <SiteContext.Provider value={state}>
      {props.children}
    </SiteContext.Provider>
  )
}

export default SiteProvider;