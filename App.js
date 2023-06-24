// In App.js in a new project

// In App.js in a new project

import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Homer/Menu.js';
import Sobre from './Homer/Sobre.js';
import Curso from './Homer/Curso.js';
import Adm from './Homer/Adm.js';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
		  initialRouteName="Home"
		 screenOptions={{
		  headerTintColor: 'white',
		  headerStyle: { backgroundColor: '#000000'}
		  }}
		  >
		  <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Etec',
        }}
      />
        <Stack.Screen name="Menu" component={Home} />
		<Stack.Screen name="Sobre" component={Sobre} />
		<Stack.Screen name="Curso" component={Curso} />
		<Stack.Screen name="Adm" component={Adm} />
      </Stack.Navigator>
    </NavigationContainer>
	  
  );
}

export default App;
