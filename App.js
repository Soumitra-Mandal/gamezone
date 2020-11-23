import {useFonts} from 'expo-font';
import React from 'react';
import Home from './screens/home';
import {AppLoading} from 'expo';


export default function App() {
  const [fontsLoaded] = useFonts({
    'nunito-regular':require('./assets/fonts/Nunito/Nunito-Regular.ttf'),
    'nunito-bold':require('./assets/fonts/Nunito/Nunito-Bold.ttf')
  });

  if(fontsLoaded){
    return (
      <Home/>  
     );  
  }
  else{
    return <AppLoading/>;
  }
  
}
  
  
  
  
  
  