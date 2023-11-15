import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Modal, Button, Alert } from 'react-native';
import {Mapa, MiModal, Panel, Input, Lista} from './components';
import { useState } from 'react';

export default function App() {

  const [puntos, setPuntos] = useState([])
  const [name, setName] = useState('')
  const [puntoMap, setPuntoMap] = useState({})//jeson
  const [mostrar, setMostrar] = useState(false)
  const [showList, setShowList] = useState('Agregar')

  const [texto, setTexto] = useState('Hola soy el texto')

  const [verPunto, setVerPunto] = useState(true)
  

  const ocultarPuntos = () => setVerPunto(!verPunto);

  

  const guardar = () => {
    const nuevoPunto = {coordinate: puntoMap, name: name};
    setPuntos(puntos.concat(nuevoPunto));
    setMostrar(false);
    setName('');
    
  }

  const estableceTexto = text => {
    setName(text);
    }

  const pressList = () => {
    setShowList('Lista');
    setMostrar(true);

  }
  // console.log(puntos);
  
  return (
    <View style={styles.container}>
      <Mapa onLongPress={
        ({nativeEvent}) => {
          setPuntoMap(nativeEvent.coordinate);
          setMostrar(true);
          setShowList('Agregar');

          //console.log(puntoMap);
          // let addPuntos = puntos.concat({coordinate: nativeEvent.coordinate});
          // setPuntos(addPuntos);
          //console.log(puntos);
          
        }
      }
      puntos={puntos}
      verPunto={verPunto}
      />
      <MiModal mostrar={mostrar}>
        
        {showList === 'Agregar' ? <>
        <Input     
        title='Datos' 
        placeholder='Text Me...'
        onChangeText={estableceTexto}
        /> 
        <Button title='Save' onPress={guardar}  />
        </> : <Lista
        puntos={puntos}
        cerrarModal={() => setMostrar(false)}
        />
        }

          
      </MiModal>
      <Panel textLeft={'Lista'} onPressLeft={pressList} ocultarPuntos={ocultarPuntos}/>
      <StatusBar style="auto" />
      <View>
        <Text onPress={() => {
          Alert.alert(texto, 'Descripcion', [
          {text: 'Cancelar',
          style: 'cancel'},
          {
            text: 'Aceptar',
          }
          ])
        }}>Hola texto original</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 35,
  },
});
