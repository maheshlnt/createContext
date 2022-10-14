---------------------------------------------CODE 1 -----------with usecontext hook---------------------------------------------
import React, {useContext} from 'react';
import AuthContext from '../../store/auth-context'; 

import classes from './Navigation.module.css';

const Navigation = (props) => {
 const ctx=  useContext(AuthContext);  //changes: newly added this and imported useContext
  return (
    // <AuthContext.Consumer>   //Removed these 3 lines
    //   {(ctx)=>{
    //     return (
        <nav className={classes.nav}>
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
        </nav>
    //     )
    //   }}  
    //   {/* will get data of auth context comp */}
    
    // </AuthContext.Consumer>
  );
};

export default Navigation;

----------------------------------------CODE 2 dont use--without usecontext hook-----------------------------------
import React from 'react';
import AuthContext from '../../store/auth-context';

import classes from './Navigation.module.css';

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

export default Navigation;
