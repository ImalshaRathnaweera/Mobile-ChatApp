import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigation/AuthNavigator';
import Loader from './component/loader';
import { StoreProvider } from './context/store/store';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <StoreProvider>
        <NavigationContainer>
          <AuthNavigator />
          <Loader />
        </NavigationContainer>
    </StoreProvider>

  );
};

export default App;
