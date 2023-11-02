import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react'


const { width, height } = Dimensions.get('window')

export default function App() {
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch('https://sabee.com.mx/data/usersmock.json')//petición a la api
      .then(res => res.json())
      .then(data => {
        setUser(data)
        setTimeout(() => {
          setLoading(false)
        }, 5000)//5 segundos
      })
  }, [])

  if (loading) {
    return (
    <View style={styles.container}>
      <Text>Cargando...</Text>
      <ActivityIndicator
        size='large'
        color='#00a'
      />
        
    </View>)
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data = {user}
        keyExtractor = {item => String(item.id)}
        renderItem = {({item}) => (
            <Text style={styles.item}>{item.first_name} {item.last_name} </Text>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  item: {
    fontSize: 18,
    color: 'white',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    height: 50,
    backgroundColor: '#108081',
    padding: 5,
  },
  
});
