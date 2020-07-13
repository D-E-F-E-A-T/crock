import * as React from 'react';
import { View, StatusBar, StyleSheet, Text,} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import SignUp from './src/Pages/SignUp/SignUp';
import SignIn from './src/Pages/SignIn/SignIn';
import ScreenEnpreendedor from './src/Pages/ScreenEnpreendedor/';
import FirstLoad from './src/components/FirstLoad';
import ScreenFirstEnter from './src/components/ScreenFirstEnter/';
import ScreenEmpresa from './src/Pages/ScreenEmpresa/';
import Preload from './src/components/Preload/';
import Products from './src/Pages/Products';
import Profile from './src/Pages/Profile/Profile';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export function Tabs(){
  return(
    
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Profile') {
            iconName = focused
              ? 'home'
              : 'home';
          } else if (route.name === 'Products') {
            iconName = focused ? 'fast-food' : 'fast-food';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
          tabBarLabel: "Perfil"
        }}
      />
      <Tab.Screen 
        name="Products"
        component={Products}
        options={{
          tabBarLabel: "Produtos"
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  // console.disableYellowBox=true;
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar backgroundColor="transparent" barStyle="light-content" translucent={true} />
      <Stack.Navigator>
        <Stack.Screen name="Preload" component={Preload} options={{ headerShown: false }}  />
        <Stack.Screen name="FirstLoad" component={FirstLoad} options={{ headerShown: false }} />
        <Stack.Screen name="ScreenFirstEnter" component={ScreenFirstEnter} options={{ headerShown: false }} />
        <Stack.Screen name="ScreenEnpreendedor" component={ScreenEnpreendedor} options={{ headerShown: false }}  />
        <Stack.Screen name="ScreenEmpresa" component={ScreenEmpresa} options={{ headerShown: false }}  />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}  />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
      </Stack.Navigator>

    </NavigationContainer>
    

    
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 0 + getStatusBarHeight,
  }
});

export default App;