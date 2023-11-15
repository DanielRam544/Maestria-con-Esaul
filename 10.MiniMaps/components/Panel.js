import React from "react";
import { StyleSheet, View, Button } from "react-native";

export default ({onPressLeft, textLeft, ocultarPuntos }) => {
    return (
        <View style={styles.tablero}>
            <Button title={textLeft} onPress={onPressLeft} />
            <Button title="Mostrat/Ocultar" onPress={ocultarPuntos} />
        </View>
    );
}

const styles = StyleSheet.create({
    tablero: {
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        padding: 10
    }
});