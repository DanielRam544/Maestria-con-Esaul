import { StyleSheet, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

export default ({onLongPress}) => {
  return (
    <View style={styles.container}>
      <MapView 
      style={styles.map}
      onLongPress={onLongPress }
      />
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
