import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';


export default ({ title, ...rest }) =>  {
  return (
    <View style={styles.input}>
        <Text style={styles.titulo}>{title}</Text>
        <TextInput {...rest} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 100,
    minWidth: Dimensions.get('window').width - 80,
    padding: 10,
  },
  titulo: {
    alignSelf: 'center',
    padding: 10,
  }
});
