import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Aplicacion de botones!</Text>
      <Button
      onPress={() => {alert('Pinchaste el boton')} }
      title='Hola Boton'
      />
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor={'#ccc'}
        onPress={ () => {alert('Desde Touch')} }>
          <Text style={styles.tx}>Boton de TouchableHighlight</Text>
      </TouchableHighlight>

      <TouchableNativeFeedback
        background={ TouchableNativeFeedback.Ripple('#B913F2', true, 200) }
        onPress={ () => {alert('Desde Feedback')} }>

          <View style={styles.btn}>
          <Text style={styles.tx}>Boton de TouchableHighlight</Text>
          </View>

      </TouchableNativeFeedback>


      <TouchableOpacity
        onPress={ () => {alert('Desde Feedback')} }>
          <View style={styles.btn}>
            <Text style={styles.tx}>Boton de TouchableHighlight</Text>
          </View>
      </TouchableOpacity>

      <TouchableWithoutFeedback
        onPress={ () => {alert('Desde Feedback')} }>
          <View style={styles.btn}>
            <Text style={styles.tx}>Boton de TouchableHighlight</Text>
          </View>
      </TouchableWithoutFeedback>

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
  tx: {
    color: 'blue',
    fontSize: 25,
    fontWeight: 'bold'
  },
  btn: {
    height: 100,
    width: 200,
    alignContent: 'center',
    justifyContent: 'center',
    
  }
});
