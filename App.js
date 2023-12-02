import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Viewdata from './STDNT/Viewdata';
import Adddata from './STDNT/Adddata';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>

     <Stack.Navigator>
      <Stack.Screen name="Adddata" component={ViewData}  options={{ headerShown: false }}  />
      <Stack.Screen name="Viewdata" component={ViewData}  options={{ headerShown: false }}  />

    </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
  flex: 1,
  alignContent: 'center',
   justifyContent: 'center',
    backgroundColor: 'white'
    },
  input:{
      width: '100%'
  }
});