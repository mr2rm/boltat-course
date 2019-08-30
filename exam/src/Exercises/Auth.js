import React from 'react';

const AuthContext = React.createContext();

export const useAuth = () => {
  const auth = React.useContext(AuthContext);
  return auth;
};

const tokenName = 'accesstoken';
const Auth = ({ children }) => {
  const [token, setToken] = React.useState(localStorage.getItem(tokenName));
  React.useEffect(() => {
    if (token) {
      localStorage.setItem(tokenName, token);
    } else {
      localStorage.removeItem(tokenName);
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        login: token => setToken(token),
        logout: () => setToken(undefined)
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Auth;
