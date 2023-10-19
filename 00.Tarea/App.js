import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet } from 'react-native';

const FroggyExercise24 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.pond}>
        <View style={styles.Box} />
        <View style={styles.Box} />
        <View style={styles.Box} />
        <View style={styles.Box} />
        <View style={styles.Box} />
        <View style={styles.Box} />
        <View style={styles.Box} />
        {/* para la solucion 23  */}
        {/* <View style={styles.Box} />
        <View style={styles.Box} />
        <View style={styles.Box} />
        <View style={styles.Box} />
        <View style={styles.Box} />
        <View style={styles.Box} />
        <View style={styles.Box} />
        <View style={styles.Box} />
        <View style={styles.Box} />
        <View style={styles.Box} /> */}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  //Esta es la solicion 24
  // pond: {
  //   flex: 1, //debe ocupar todo el espacio disponible
  //   flexDirection: 'row', //dirección principal del elementos en el contenedor como horizontal (en filas).
  //   flexWrap: 'wrap-reverse', //indica que se envolverán en filas, pero el flujo se revertirá, primer elemento estará en la parte inferior de la primera fila.
  //   justifyContent: 'center', //centrar los elementos.
  //   alignContent: 'space-between', //distribuir los elementos de manera uniforme.
  // },
  //Esta es la solucion 23
  // pond: {
  //   flex: 1,
  //   flexWrap: 'wrap',
  //   flexDirection: 'column-reverse',
  //   alignContent: 'center',
  // },
  // //Esta es la solucion 22
  // pond: {
  //   flex: 1,
  //   flexWrap: 'wrap',
  //   alignContent: 'center',
  //   alignItems: 'center',
  //   flexDirection: 'column-reverse'
  // },
  //Esta es la solucion 21
  pond: {
    flex: 1,
    flexWrap: 'wrap',
    alignContent: 'flex-start',
  },
  
  Box: {
    width: 80,
    height: 80,
    backgroundColor: 'black',
    borderWidth: 5,
    borderColor: 'white',
  },

});

export default FroggyExercise24;
