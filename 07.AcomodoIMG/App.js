import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Modal,
  TextInput,
} from 'react-native';

const { height, width } = Dimensions.get('window');

export default function App() {
  const [modal, setModal] = useState(false)

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.font}
        source={require('./assets/cancha.jpg')}
      >
      
      <Modal animationType='slide' transparent={true} visible={modal}>
        <View style={styles.vmodal}>
          <View style={styles.vcontent}>
            <Text>Apuesta almacenada!</Text>
            <Button title='Regresa a Apostar' onPress={() => setModal(!modal)} />
          </View>
        </View>
      </Modal>

      <Text style={styles.texto}>Caliente MX</Text>

        <View style={styles.acomodo}>
          <View style={styles.partido}>
            <TextInput style={styles.textInput} keyboardType='numeric' maxLength={1}/>
          <Image style={styles.logo} source={require('./assets/America.png')}/>
            <Text style={styles.texto}>America     </Text>

            <Text style={styles.texto}>Chivas</Text>
            <Image style={styles.logo} source={require('./assets/Chivas.png')}/>
            <TextInput style={styles.textInput} keyboardType='numeric' maxLength={1}/>
          </View>
        </View>


          <View style={styles.acomodo}>
              <View  style={styles.vtext}>
                <Image style={styles.logo} source={require('./assets/America.png')}/>
                <Text style={styles.texto}>  America      </Text>
              </View>
              
              <View  style={styles.vtext}>
                <Text style={styles.texto}>      Chivas  </Text>
                <Image style={styles.logo} source={require('./assets/Chivas.png')}/>
              </View>
          </View>

          <View style={styles.acomodo}>
              <View  style={styles.vtext}>
                <Image style={styles.logo} source={require('./assets/Tigres.png')}/>
                <Text style={styles.texto}>  Tigres      </Text>
              </View>
              
              <View  style={styles.vtext}>
                <Text style={styles.texto}>      CruzAzul  </Text>
                <Image style={styles.logo} source={require('./assets/CruzAzul.png')}/>
              </View>
          </View>

          <View style={styles.acomodo}>
              <View  style={styles.vtext}>
                <Image style={styles.logo} source={require('./assets/Tijuana.png')}/>
                <Text style={styles.texto}>  Tijuana      </Text>
              </View>
              
              <View  style={styles.vtext}>
                <Text style={styles.texto}>  Monterrey  </Text>
                <Image style={styles.logo} source={require('./assets/Monterrey.png')}/>
              </View>
          </View>

          <View style={styles.acomodo}>
              <View  style={styles.vtext}>
                <Image style={styles.logo} source={require('./assets/Leon.png')}/>
                <Text style={styles.texto}>      Leon      </Text>
              </View>
              
              <View  style={styles.vtext}>
                <Text style={styles.texto}>      Puma      </Text>
                <Image style={styles.logo} source={require('./assets/Pumas.png')}/>
              </View>
          </View>

          <View>
          <Button title='Apuesta ahora!' onPress={() => setModal(!modal)}></Button>
          </View>

      </ImageBackground>
      <StatusBar style='auto' />
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
  font: {
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vtext: {
    alignItems: 'center',
    justifyContent: 'space-aroun',
    flexDirection: 'row-reverse',
    backgroundColor: '#1B8A12',
    padding: 5,
  },
  logo: {
    width: 50,
    height: 50,
  },
  acomodo: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: '#24F213',
    padding: 3,
    marginTop: 5,
  },
  texto: {
    fontSize: 20,
    color: 'white',
  },
  tabler: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 30,
    alignItems: 'stretch',
    backgroundColor: 'black',
  },
  partido: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 30,
    alignItems: 'stretch',
    backgroundColor: 'black',
  },
  vmodal: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  vcontent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
    margin: 50,
  },
  textInput: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 20,
  }
});
