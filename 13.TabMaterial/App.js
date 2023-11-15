import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

function HomeScreen() {
  return (
    <View style={styles.vHome}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
}

function UsersScreen() {
  return (
    <View style={styles.vHome}>
      <Text style={styles.text}>Usesrs Screen</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      initialRouteName='Home'
      activeColor='#48A98F'
      inactiveColor='#906090'
      barStyle={{backgroundColor: '#85929E'}}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Users" component={UsersScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  vHome: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D7DBDD',
    padding: 35,
  },
  text: {
    fontSize: 30,
    color: '#6C3483',

  }
  
});
