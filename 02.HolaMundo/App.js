import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


const MiTexto = () => {
  return (
    <Text>Hola mundo!👀</Text>
  )
}

const NuevoComponente = (props) => {
  const {texto} = props;
  return(
    <Text style={styles.sTexto}>{texto}</Text>
  )
}

const ComponenteConHijo = (props) => {
  const {children} = props;
  return (
    <Text style={styles.sTexto}>{children}</Text>
  )
}

const UseComponent = (props) => {
  const [texto, setText] = useState("Valor Inicial")
  const actualizaTexto = () => {
   setText("Valor Actualizado") 
  }
  return (
    <Text style={styles.stail} onPress={actualizaTexto}>{texto}</Text>
      
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <MiTexto />
      <NuevoComponente texto="Desde NuevoComponente"/>
      <NuevoComponente texto="Worale Ctr+c sin sileccionar"/>
      <ComponenteConHijo>Componente con Hijo/Children</ComponenteConHijo>
      <ComponenteConHijo>Otra cosa</ComponenteConHijo>
      <UseComponent />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    fountSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sTexto: {
    color: 'red',
    fontSize: 24,
  },
  stail:{
    color: '#0af',
    fontSize: 24,
  },
});
