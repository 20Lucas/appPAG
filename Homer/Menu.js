import React,{usesState}from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home({navigation}){

 return (
    <View style={styles.container}>
 		<TouchableOpacity onPress={() =>navigation.navigate('Sobre')}>
			<Text>Sobre</Text>
		</TouchableOpacity>
		 <TouchableOpacity onPress={() =>navigation.navigate('Curso')}>
			<Text>Curso</Text>
		</TouchableOpacity> 
		 <TouchableOpacity onPress={() =>navigation.navigate('Adm')}>
			<Text>Admnistração</Text>
		</TouchableOpacity> 
	  </View>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		
		
	}
})