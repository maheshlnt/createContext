-----------------------------------------------auth-context.js--------------------------------------------------
import React from "react";
const AuthContext= React.createContext({
    isLoggedIn:false
})
export default AuthContext;

-----------------------------------------------app.js-----------------------------------------------------------
HERE NEED TO ADD AS PROVIDER ie.,AuthContext.Provider

  <AuthContext.Provider value={{isLoggedIn:isLoggedIn}}>
      <MainHeader onLogout={logoutHandler} />
      {/*1 <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} /> */}
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </AuthContext.Provider>

----------------------------------------------Navigation.js-----------------------------------------------------
HERE NEED TO ADD AS CONSUMER    ie.,  <AuthContext.Consumer>
const Navigation = (props) => {
  return (
    <AuthContext.Consumer>
      {(ctx)=>{
        return (<nav className={classes.nav}>
          <ul>
            {ctx.isLoggedIn && (
              <li>
                <a href="/">Users</a>
              </li>
            )}
            {/* {props.isLoggedIn && ( */}
            {ctx.isLoggedIn && (
              <li>
                <a href="/">Admin</a>
              </li>
            )}
            {ctx.isLoggedIn && (
              <li>
                <button onClick={props.onLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>)
      }}  
      {/* will get data of auth context comp */}
    
    </AuthContext.Consumer>
  );
};
