import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Modal } from 'react-native';
import {Mapa, MiModal, Panel, Input} from './components';
import { useState } from 'react';

export default function App() {

  const [puntos, setPuntos] = useState([])
  const [name, setName] = useState('')
  const [puntoMap, setPuntoMap] = useState({})//jeson
  const [mostrar, setMostrar] = useState(false)


  const estableceTexto = text => {
    setName(text);

  }
  return (
    <View style={styles.container}>
      <Mapa onLongPress={
        ({nativeEvent}) => {
          let addPuntos = puntos.concat({coordinate: nativeEvent.coordinate});
          setPuntos(addPuntos);
          console.log(puntos);
          
        }
      }/>
      <MiModal mostrar={false}>
        <Input 
        title='Datos' 
        placeholder='Escribeme...'
        onChangeText={estableceTexto}/>
      </MiModal>
      <Panel />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
