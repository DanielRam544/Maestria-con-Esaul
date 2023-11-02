import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import MapView, {Marker} from 'react-native-maps';

const { height, width } = Dimensions.get('window');

const abrirDialogo = () => {
  Alert.alert(
    'Bienvenido a Mapas',//Titulo
    '¿Desea continuar? \n esta alerta es personalizada bla bla bla', //Contenido
    [{text: 'Cancelar', onPress: ()=>{},
      style: 'cancel'},

      { text: 'Aceptar', onPress: ()=>{ console.log('Aceptas los terminos y condiciones')}, 
    }], 

    {cancelable: true} 

  )}

export default function App() {
  
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [existe, setExiste] = useState(false);

  useEffect(()=> {
    (
      async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permiso denegado');
          return;
        }
        const data = await Location.getCurrentPositionAsync();
        setLocation(data);
        if (data.coords) {
          setExiste(true);
        }
      }
    ) () 
  }, [])

  let text = 'Esperando permiso...';

  if (errorMsg) {
    text = errorMsg;
  }else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <MapView
      style={styles.mapa}
      >
        {existe ? <Marker coordinate={location.coords} title='Aquitoy' description='Ontabebe'/>:null}
      </MapView>
      
      <Text>Bienvenido a maps!</Text>
      {/* <Text>{text}</Text>  */}
      <Button
        title='Alerta'
        onPress={abrirDialogo}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  mapa: {
    width: width,
    height: height - 30,
  }
});
