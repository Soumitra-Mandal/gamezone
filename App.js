import {useFonts} from 'expo-font';
import React from 'react';
import {AppLoading} from 'expo';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/home';
import ReviewDetails from './screens/reviewDetails';
import About from './screens/about';
import {globalStyles} from './styles/globals';
import {AntDesign} from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 



const Stack = createStackNavigator(); 
const Drawer = createDrawerNavigator();

function A1({navigation}){
  return(
<Stack.Navigator initialRouteName='Home'>
<Stack.Screen name="Home" component={Home}
  options={
    {
    title:"Game Zone",
    headerLeft:()=>(
      <MaterialIcons name="menu" size={32} color="black" style={{paddingHorizontal:20}} onPress={()=>navigation.openDrawer()} />
    ),
    headerTitleAlign:'center',
    headerTitleStyle:{
    fontFamily:'nunito-bold',
    color:'#666',
  
}
    }
  }
/>
<Stack.Screen name="Review Details" component={ReviewDetails} 
  options={
    { 
      headerTitleAlign:'center',
      headerTitleStyle:{
      fontFamily:'nunito-bold',
      color:'#666'
      }
    }
  }
/>
</Stack.Navigator>
  );

}  

function A2({navigation}) {
  return (<Stack.Navigator>
<Stack.Screen name="About" component={About} 
options={{
  headerLeft:()=>(
      <MaterialIcons name="menu" size={32} color="black" style={{paddingHorizontal:20}} onPress={()=>navigation.openDrawer()} />
    ),
headerTitleAlign:'center',
headerTitleStyle:{
fontFamily:'nunito-bold',
color:'#666'
}
}}

/>
</Stack.Navigator>);}

export default function App() {
  const [fontsLoaded] = useFonts({
    'nunito-regular':require('./assets/fonts/Nunito/Nunito-Regular.ttf'),
    'nunito-bold':require('./assets/fonts/Nunito/Nunito-Bold.ttf')
  });

  if(fontsLoaded){
    return (
      
      <NavigationContainer>
      <Drawer.Navigator initialRouteName = "Home" drawerStyle={globalStyles.drawer} drawerType="front">
      <Drawer.Screen name="Home" component={A1} 
        options={{
          drawerIcon: () => (
            <AntDesign name="home" size={24} color="black" />
          )
        }}
      />
        <Drawer.Screen name="About" component={A2}
        options={{
          drawerIcon: () => (
<AntDesign name="infocirlceo" size={24} color="black" />          )

        }} />
      </Drawer.Navigator>
      </NavigationContainer>
     
     );  
  }
  else{
    return <AppLoading/>;
  }
  
}
  
  
  
  
  
  