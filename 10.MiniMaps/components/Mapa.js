import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

export default ({onLongPress, puntos, verPunto}) => {
  return (
    <View style={styles.container}>
      <MapView 
      style={styles.map}
      onLongPress={onLongPress }
      >
      {verPunto &&
      puntos.map(x => 
      <Marker 
      key={x.name}
      title={x.name} 
      coordinate={x.coordinate}/>)}
      </MapView>
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
});
