import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';


function HomeScreen({ navigation }) {
  return (
    <View style={styles.vHome}>
      <Text style={styles.text}>Home Screen</Text>
      <Button title='Vete a Users' onPress={() => {navigation.navigate('Users')}}/>
      <Button title='Vete a Material' onPress={() => {navigation.navigate('Material')}}/>
    </View>
  );
}

function UsersScreen({ navigation }) {
  return (
    <View style={styles.vHome}>
      <Text style={styles.text}>Usesrs Screen</Text>
      <Button title='Vete a Home' onPress={() => {navigation.navigate('Home')}}/>
      <Button title='Vete a Material' onPress={() => {navigation.navigate('Material')}}/>
    </View>
  );
}

function MaterialScreen({ navigation }) {
  return (
    <View style={styles.vHome}>
      <Text style={styles.text}>Material Screen</Text>
      <Button title='Vete a Users' onPress={() => {navigation.navigate('Users')}}/>
      <Button title='Vete a Home' onPress={() => {navigation.navigate('Home')}}/>
    </View>
  );
}


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return(
    <Drawer.Navigator>
      <Drawer.Screen 
        name="Home" 
        component={HomeScreen} />
      <Drawer.Screen 
        name="Users" 
        component={UsersScreen} />
      <Drawer.Screen 
        name="Material" 
        component={MaterialScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  vHome: {
    flex: 1,
    backgroundColor: '#737EDF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  bton: {
    marginTop: 20,
  }
});
