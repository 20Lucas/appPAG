// In App.js in a new project

// In App.js in a new project

import React,{usesState}from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home({navigation}){

  return (
    <View style={styles.container}>
      <Text>Sobre</Text>
		<Text>A ETEC de Itanhaém iniciou suas atividades em 01/08/2006, como Classe Descentralizada da ETEC “Adolpho Berezin” de Mongaguá, através de um convênio do Governo do Estado de São Paulo com a atual administração da Prefeitura Municipal de Itanhaém.</Text>
			 <TouchableOpacity onPress={() =>navigation.navigate('Adm')}>
			<Text>Admnistração</Text>
		</TouchableOpacity>  		
		 <TouchableOpacity onPress={() =>navigation.navigate('Curso')}>
			<Text>Curso</Text>
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