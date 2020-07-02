import * as React from 'react';
import { View, StatusBar, StyleSheet} from 'react-native';
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


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// export function Tabs(){
//   return(
    
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === 'Profile') {
//             iconName = focused
//               ? 'ios-information-circle'
//               : 'ios-information-circle-outline';
//           } else if (route.name === 'Cards') {
//             iconName = focused ? 'ios-list-box' : 'ios-list';
//           }

//           // You can return any component that you like here!
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: 'tomato',
//         inactiveTintColor: 'gray',
//       }}
//     >
//       <Tab.Screen name="Profile" component={Profile} />
//       <Tab.Screen name="Cards" component={Cards} />
//     </Tab.Navigator>
//   );
// }

function App() {
  // console.disableYellowBox=true;
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar backgroundColor="transparent" barStyle="light-content" translucent={true} />
      <Stack.Navigator>
      <Stack.Screen name="FirstLoad" component={FirstLoad} options={{ headerShown: false }} />
        <Stack.Screen name="ScreenFirstEnter" component={ScreenFirstEnter} options={{ headerShown: false }} />
        <Stack.Screen name="ScreenEnpreendedor" component={ScreenEnpreendedor} options={{ headerShown: false }}  />
        <Stack.Screen name="ScreenEmpresa" component={ScreenEmpresa} options={{ headerShown: false }}  />
        
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}  />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
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