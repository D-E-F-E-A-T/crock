import React, { useState } from 'react';
import { View } from 'react-native';
import { NativeScreen } from 'react-native-screens';

export default function FirstLoad({ navigation }) {

 const[firstAcess, setFirstAcess] = useState(true);

 function callScreen(){
     if(firstAcess === true){
         navigation.navigate('ScreenFirstEnter');
     }
 }
 return (
   <View>
       { callScreen() }
   </View>
  );
}