import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
//No funciona
function Demo () {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <Text>Area segura</Text>
      <Text>Texto de abajo</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
          <Stack.Screen name='Home'>
            {() => (
              <Tab.Navigator initialRouteName='Detiles' tabBar={() => null} screenOptions={{headerShown: false}}>
                <Tab.Screen name='Detiles' component={Demo}/>
                <Tab.Screen name='Map' component={Demo}/>
              </Tab.Navigator>
            )}
          </Stack.Screen>
          <Stack.Screen name='Lista' component={Demo}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
  },

});
