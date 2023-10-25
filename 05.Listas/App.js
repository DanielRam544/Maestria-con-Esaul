import { StatusBar } from 'expo-status-bar';
import { Dimensions, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.mitad}>
      <ScrollView style={styles.scroll}>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      <Text>App de listas!</Text>
      </ScrollView>
      </View>
      <View style={styles.mitad}>
        <FlatList style={styles.scroll}
        // quita rendimiento del equipo
          data={[
            {key:1, nombre:'Dan'},
            {key:2, nombre:'Dominic'},
            {key:3, nombre:'Devin'},
            {key:4, nombre:'Jackson'},
            {key:5, nombre:'James'},
            {key:6, nombre:'Joel'},
            {key:7, nombre:'John'},
            {key:8, nombre:'Jillian'},
            {key:9, nombre:'Jimmy'},
            {key:10, nombre:'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.text}>{item.key}.- {item.nombre}</Text>}
        />
      </View>
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
    paddingTop: 35,
  },
  mitad: {
    flex: 1,
  },
  scroll: {
    width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
  },
  text: {
    fontSize: 22,
    color: 'blue',
    padding: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
  },
});
