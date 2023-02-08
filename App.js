import React, {useState, useEffect} from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Home from './src/screens/Home';
import { firebase }  from './config';

const Stack = createNativeStackNavigator();

function App() {
  const [user, setUser] = useState('')
  const [initializing, setInitializing] = useState(true)

  const onAuthStateChanged = (user) =>  {
    setUser(user);
    if(initializing) setInitializing(false);
  }

  useEffect(() => {
   const subscribe = firebase.auth().onAuthStateChanged(onAuthStateChanged)
   return subscribe
  }, [])

  if(initializing) return null;

  if(user) return (
    <NavigationContainer>
       <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
       </Stack.Navigator>
    </NavigationContainer>
  )
  
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown: false}} name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App

