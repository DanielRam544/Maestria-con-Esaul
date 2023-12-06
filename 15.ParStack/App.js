import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.vHome}>
      <Text style={styles.text}>Home Screen</Text>
      <Button title='Vete a la Users' onPress={() => {navigation.navigate('Users',{
        user: 'Daniel'
      })}}/>
      <Button title='Vete a Material' onPress={() => {navigation.navigate('Material')}}/>
    </View>
  );
}

function UsersScreen({ route, navigation }) {
  const { user } = route.params;
  return (
    <View style={styles.vHome}>
      <Text style={styles.text}>Usesrs Screen</Text>
      <Text styl={styles.text}>El usuario es : {JSON.stringify(user)}</Text>
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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} />
        <Stack.Screen 
          name="Users" 
          component={UsersScreen} />
        <Stack.Screen 
          name="Material" 
          component={MaterialScreen} />
      </Stack.Navigator>
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
    // height: Dimensions.get('window').height - 100,
    width: Dimensions.get('window').width - 40,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  
});
