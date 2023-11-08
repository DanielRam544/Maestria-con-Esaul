import React from "react";
import { StyleSheet, View, Button } from "react-native";

export default () => {
    return (
        <View style={styles.tablero}>
            <Button title="Abrir modal" onPress={() => {}} />
            <Button title="Cerrar modal" onPress={() => {}} />
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