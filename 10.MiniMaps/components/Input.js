import { StyleSheet, Text, View, TextInput } from 'react-native';


export default ({ title, ...rest }) =>  {
  return (
    <View style={styles.input}>
        <Text>{title}</Text>
        <TextInput {...rest} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,

  },
});
