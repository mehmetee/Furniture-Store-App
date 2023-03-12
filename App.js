import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailPage from './src/Screen/Detail_Folder/Detail_pages';
import HomePage from './src/Screen/Home_Folder/Home_pages'


const Stack=createNativeStackNavigator();
const theme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    border:'transparent',  }
}


 function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={'Home'}>
          <Stack.Screen name='Home' component={HomePage}/>
          <Stack.Screen  name='Detail' component={DetailPage}/>
        </Stack.Navigator>
    </NavigationContainer>
       );
      
}

export default App;


