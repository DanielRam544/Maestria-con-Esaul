import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Dimensions, TextInput } from 'react-native';
import { useState } from 'react';
import { Text } from 'react-native';

//Obtiene el ancho de la antalla del dispositivo
const { width, height } = Dimensions.get('window')

const Texto = ({style}) => {
  const [ texto, setTexto ] = useState('Texto Inicial')
  
  const actualizaTexto = () => {
    setTexto('Texto Actualizado')
  }

  return (
    <Text
    onPress={actualizaTexto}
    style={[styles.texto, style]}
    >{texto}</Text>
  )
}

const FroggyExercise24 = () => {
  const [ text, setText ] = useState('Texto Inicial')
  return (
    <View style={styles.container}>
      <View style={[ styles.box, {backgroundColor: 'black'}] }>
        <Texto style={styles.tblue}/>
      </View>
      <View style={[ styles.box, {backgroundColor: 'gray'}] }>
      <Texto style={styles.tred}/>
      </View>
      <View style={[ styles.box, {backgroundColor: 'blue'}] }>
      
      <TextInput
        onChangeText={t => setText(t) }
        placeholder="Escribe tu texto"
        style={styles.input}
      />
      
      <Text>texto:{text}</Text>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: 'black',
    alignItems: 'center',
    
    justifyContent: 'space-between',

  }, 
  box: {
    width: width,
    height: 250,
    borderWidth: 3,
    borderColor: 'yellow',
  },
  texto : {
    color: 'white',
    fontSize: 20,
    width: 80,
    height: 80,
  },
  tblue: {
    backgroundColor: 'blue',
  },
  tred: {
    backgroundColor: 'red',
  },
  input: {
    height: 50,
    backgroundColor: 'white',
    borderBottomColor: 'black',
    borderBottomWidth: 2,

  }

});

export default FroggyExercise24;
