import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import React, {useEffect, useState} from 'react';
import { Camera, CameraType } from 'expo-camera';

const {height, width} = Dimensions.get('window');

export default function App() {
  
  const [tipo, setTipo] = useState(CameraType.back);
  const [permiso, setPermiso] = Camera.useCameraPermissions();

  const permisoCamara = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setPermiso(status === 'granted');
    console.log(status);
  }

  // function cambiaTipo(){
    
  //   setTipo(
  //     tipo === CameraType.back ? CameraType.front : CameraType.back
  //   );
  // }

  useEffect(()=> {
    permisoCamara();
  }, [])

  if (!permiso) {
    return <View style={styles.container}>
      <Text>Esperando permiso de camara...</Text>
    </View>
  }
  
  if (!permiso.granted) {
    return <View style={styles.container}>
      <Text>No tienes permiso para la camara...</Text>
    </View>
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camara} type={tipo}> 
        <Button title='Back' 
        onPress={
          () => {
          const {front, back} = CameraType;  
          setTipo(tipo => (tipo === back ? front:back)); }}

        />
      </Camera>
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
    paddingTop: 35,
  },
  camara: {
    width: width,
    height: height - 250,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
  
});
