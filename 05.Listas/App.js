import { StatusBar } from 'expo-status-bar';
import { Dimensions, SectionList, StyleSheet, Text, SectionListt, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <SectionList 
          style={styles.scroll}
          sections={[
            {
              title: 'Grupo 1',
              data: [
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
              ],
            },
            {
              title: 'Grupo 2',
              data: [
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
              ],
            },
            {
              title: 'Grupo 3',
              data: [
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
              ],
            },
          ]}

          renderSectionHeader={({section}) => <Text style={styles.section}>{section.title}</Text>}
          renderItem={({item}) => <Text style={styles.text}>{item.key}.- {item.nombre}</Text>}

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
  section: {
    fontSize: 22,
    color: 'green',
    padding: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
    fontWeight: 'bold',
    backgroundColor: '#00aaff'
  },
});
