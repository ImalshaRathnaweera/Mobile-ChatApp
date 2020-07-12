import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigation/AuthNavigator';
import Loader from './component/loader';
import { StoreProvider } from './context/store/store';
import DrawerNavigator from './navigation/DrawerNavigator';

const App = () => {
  return (
    <StoreProvider>
    <NavigationContainer>
     <AuthNavigator/>
      <Loader/>
      
    </NavigationContainer>
    {/* <DrawerNavigator/> */}
    </StoreProvider>

  );
};

export default App;
