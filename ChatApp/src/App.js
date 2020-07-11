import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigation/AuthNavigator';
import Loader from './component/loader';
import { StoreProvider } from './context/store/store';

const App = () => {
  return (
    <StoreProvider>
    <NavigationContainer>
     <AuthNavigator/>
      <Loader/>
    </NavigationContainer>
    </StoreProvider>

  );
};

export default App;
