import React from 'react';
import { Button, StyleSheet, Text, View, Dimensions } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.pantalla}>
      <Text>HomeScreen</Text>
      <Button title='Config' onPress={() => navigation.navigate('Config')} />
      <Button title='Other' onPress={() => navigation.navigate('Other')} />
      <Button title='Uses' onPress={() => navigation.navigate('Uses')} />
    </View>
  );
}

function ConfigScreen({ navigation }) {
  return (
    <View style={styles.pantalla}>
      <Text>ConfigScreen</Text>
      <Button title='Llama patras' onPress={() => navigation.goBack()} />
      <Button title='Other' onPress={() => navigation.navigate('Other')} />
      <Button title='Uses' onPress={() => navigation.navigate('Uses')} />
    </View>
  );
}

function OtherScreen({ navigation }) {
  return (
    <View style={styles.pantalla}>
      <Text>OtherScreen</Text>
      <Button title='Llama patras' onPress={() => navigation.goBack()} />
      <Button title='Uses' onPress={() => navigation.navigate('Uses')} />
      <Button title='Config' onPress={() => navigation.navigate('Config')} />
    </View>
  );
}

function UsesScreen({ navigation }) {
  return (
    <View style={styles.pantalla}>
      <Text>OtherScreen2</Text>
      <Button title='Llama patras' onPress={() => navigation.goBack()} />
      <Button title='Config' onPress={() => navigation.navigate('Config')} />
      <Button title='Other' onPress={() => navigation.navigate('Other')} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: 'Inicio' }}
        />
        <Stack.Screen
          name='Config'
          component={ConfigScreen}
          options={{ title: 'Configuración' }}
        />
        <Stack.Screen
          name='Other'
          component={OtherScreen}
          options={{ title: 'Otro' }}
        />
        <Stack.Screen
          name='Uses'
          component={UsesScreen}
          options={{ title: 'Usos' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    padding: 20,
    justifyContent: 'center',
  },
});
