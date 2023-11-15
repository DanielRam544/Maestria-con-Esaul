import { StyleSheet, Text, View, Dimensions, Modal } from 'react-native';

export default ({children, mostrar}) =>  {
  return (
      <Modal animationType='slide' transparent={true} visible={mostrar}>
        <View style={styles.vmodal}>
          <View style={styles.cmodal}>
            {children}
          </View>
        </View>
      </Modal>
  );
}

const styles = StyleSheet.create({
  vmodal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.4)',
  },
  cmodal: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 3},
  }
});
