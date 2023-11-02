import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Modal } from 'react-native';
import MapView from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}/>
      <Modal animationType='slide' transparent={true} visible={true}>
        <View style={styles.vmodal}>
          <View style={styles.cmodal}>
            <Text>Mi modal</Text>
          </View>
        </View>
      </Modal>
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
  map: {
      flex:1,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
  },
  vmodal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cmodal: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 3},
    
  }
});
