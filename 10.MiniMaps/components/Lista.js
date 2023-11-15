import { StyleSheet, View, Button, Dimensions, FlatList, Text, Alert } from "react-native";

const { width, height } = Dimensions.get("window");

const mostrarAlerta = nombre => {
      Alert.alert("Alert!", `Hola ${nombre}`);
};


export default ({ puntos, cerrarModal }) => {
    return (
        <>
            <View style={styles.lista}>
                <FlatList
                    data={puntos.map(x => x.name)}
                    keyExtractor={item => item}
                    renderItem={({ item }) => 
                    <Text style={styles.item} onPress={() => mostrarAlerta(item)}>{item}</Text>}

                />

            </View>
            <View style={styles.boton}>
            <Button title='Cerrar' onPress={cerrarModal} />
            </View>
            
        </>
    );
}

const styles = StyleSheet.create({
    lista: {
        width: width -150,
        height: height - 300,
    },
    item: {
        borderBottomWidth: 2,
        borderBottomColor: '#03f',
        height: 50,
        justifyContent: 'center',
        padding: 10,
        fontSize: 20,
    },
    boton: {
        padding: 15,
    }
});
