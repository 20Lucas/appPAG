// In App.js in a new project

// In App.js in a new project

import React,{usesState}from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home({navigation}){

  return (
    <View style={styles.container}>
      <Text>Desenvolvimento de Sistemas</Text>
 	<Text>O TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS é o profissional que analisa e projeta sistemas. Constrói, documenta, realiza testes e mantém sistemas de informação. Utiliza ambientes de desenvolvimento e linguagens de programação específica. Modela, implementa e mantém bancos de dados.</Text>
		 <TouchableOpacity onPress={() =>navigation.navigate('Adm')}>
			<Text>Admnistração</Text>
		</TouchableOpacity>  
		  <TouchableOpacity onPress={() =>navigation.navigate('Sobre')}>
			<Text>Sobre</Text>
		</TouchableOpacity>
		 
	  </View>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		textAlign: 'center',
		backgroundColor: '#ffffff',
	}
})