import React,{usesState}from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home({navigation}){

  return (
    <View style={styles.container}>
 	  <Text>Admnistração</Text>
		<Text>O TÉCNICO EM ADMINISTRAÇÃO é o profissional que adota postura ética 
		na execução da rotina administrativa, na elaboração do planejamento da produção
		e materiais, recursos humanos, financeiros e mercadológicos. 
		Realiza atividades de controle e auxilia nos processos de direção, 
		utilizando ferramentas da informática. Fomenta ideias e práticas 
		empreendedoras. Desempenha suas atividades observando as normas de segurança,
		saúde e higiene do trabalho, bem como as de preservação ambiental.</Text>	  
		 <TouchableOpacity onPress={() =>navigation.navigate('Curso')}>
			<Text>Curso</Text>
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