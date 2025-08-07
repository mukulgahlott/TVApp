/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, useColorScheme } from 'react-native';

// Import screens
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import AddCustomerScreen from './src/screens/AddCustomerScreen';

// Import client screens
import ClientHomeScreen from './src/screens/ClientHomeScreen';
import ClientSettingsScreen from './src/screens/ClientSettingsScreen';
import ManualRechargeScreen from './src/screens/ManualRechargeScreen';

// Import context
import { UserProvider } from './src/context/UserContext';

const Stack = createStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <UserProvider>
      <NavigationContainer>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
          }}
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="Notifications" component={NotificationsScreen} />
          <Stack.Screen name="AddCustomer" component={AddCustomerScreen} />
          
          {/* Client Screens */}
          <Stack.Screen name="ClientHome" component={ClientHomeScreen} />
          <Stack.Screen name="ClientSettings" component={ClientSettingsScreen} />
          <Stack.Screen name="ManualRecharge" component={ManualRechargeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

export default App;
