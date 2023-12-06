import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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

function MaterialScreen() {
  return (
    <View style={styles.vHome}>
      <Text style={styles.text}>Material Screen</Text>
    </View>
  );
}

function MyTab() {
  return (
    <Tab.Navigator 
      initialRouteName='Home'
      activeColor='#E74C3C'
      inactiveColor='#6C3483'
      barStyle={{backgroundColor: '#85929E'}}
      >
        <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarLabel: 'Home', tabBarIcon: ({color})=> (
          <MaterialCommunityIcons 
          name='alien' 
          color={color} 
          size={24} />
        ), }}/>
        <Tab.Screen 
        name="Users" 
        component={UsersScreen} 
        options={{
          tabBarLabel: 'Users', tabBarIcon: ({color})=> (
          <MaterialCommunityIcons 
          name='account-cowboy-hat'
          color={color} 
          size={24} />
        ), }}/>
        <Tab.Screen 
        name="Material" 
        component={MaterialScreen} 
        options={{
          tabBarLabel: 'Material', tabBarIcon: ({color})=> (
          <MaterialCommunityIcons 
          name='allergy'
          color={color} 
          size={24} />
        ), }}/>
      </Tab.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MyTab/>
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
