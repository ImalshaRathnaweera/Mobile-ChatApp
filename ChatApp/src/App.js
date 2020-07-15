import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigation/AuthNavigator';
import Loader from './component/loader';
import { StoreProvider } from './context/store/store';
import DrawerNavigator from './navigation/DrawerNavigator';
// import AuthContext from './context/AuthContext';
const App = () => {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   setUser({ name: "Imalsha akka", userType: "admin", image: "" })
  // }, [])


  return (
    <StoreProvider>
      {/* <AuthContext.Provider value={{user,setUser}}> */}
        <NavigationContainer>
          {/* {user ? <DrawerNavigator /> : <AuthNavigator />} */}
          <AuthNavigator />
          <Loader />
        </NavigationContainer>
      {/* </AuthContext.Provider> */}
    </StoreProvider>

  );
};

export default App;
