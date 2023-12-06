import { StatusBar } from 'expo-status-bar';
import { useState, useContext, createContext, useEffect } from 'react';
import {StyleSheet,Text,TextInput,View,Dimensions,Alert,TouchableOpacity,
        ActivityIndicator,FlatList, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, { Marker } from 'react-native-maps';
import { AntDesign } from '@expo/vector-icons';


const { width, height } = Dimensions.get('window');
const MyContext = createContext();

function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setGetIsSigned } = useContext(MyContext);
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  const getIsSignedIn = (email, password) => {
    if (validEmail.test(email)) {
      if (password.length >= 5) {
        setGetIsSigned(true);
      } else {
        Alert.alert(
          'Alerta', 
          'Datos Invalidos',
          [{ text: 'Acept' }],
          { cancelable: false } 
        );
      }
    } else {
      Alert.alert(
        'Alerta', 
        'Datos Validos',
        [{ text: 'Acept' }],
        { cancelable: false } 
      );
      setGetIsSigned(true);
    }
  };

  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
          <Text style={styles.titulo}>Bienvenido</Text>
          <Text style={styles.subtitulo}>Inicia Sesión o Registrate</Text>
        <TextInput
          placeholder='Correo'
          onChangeText={(email) => setEmail(email)}
          required
          style={styles.vInput}
          inputMode='email'
          keyboardType={'email-address'}
        />
          <TextInput
            style={styles.vInput}
            placeholder='Contraseña'
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={!showPassword}
          />
          <Icon
          style={styles.vPassword}
            name={showPassword ? 'eye' : 'eye-slash'}
            size={35}
            color='white'
            onPress={toggleShowPassword}
          />
      </View>

        <View style={styles.boton}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Registro')}
          >
            <Text style={styles.subtitulo}>Registrar</Text>
          </TouchableOpacity>
          <Text style={styles.espacio}>      </Text>
          <TouchableOpacity
            onPress={() => getIsSignedIn(email, password)}
          >
            <Text style={styles.subtitulo}>Login</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

function RegistroScreen({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  const registerUser = (nombre, email, password) => {
    if (validEmail.test(email) && nombre !== '') {
      if (password.length >= 5) {
        goAlert();
      } else {
        Alert.alert(
          'Alerta',
          'Datos Invalidos',
          [{ text: 'Acept' }],
          { cancelable: false } 
        );
      }
    } else {
      Alert.alert(
        'Alerta', 
        'Datos Invalidos',
        [{ text: 'Acept' }],
        { cancelable: false } 
      );
    }
  };
  const goAlert = () =>
    navigation.navigate('Alert', {
      nombre: nombre,
      email: email,
      password: password,
    });

  return (
    <View style={styles.maincontainer}>
      <Text style={styles.signtitulo}>Registrate</Text>
        <TextInput
          placeholder='Nombre'
          onChangeText={(nombre) => setNombre(nombre)}
          required
          style={styles.vInput}
        />
        <TextInput
          placeholder='Email'
          onChangeText={(email) => setEmail(email)}
          required
          style={styles.vInput}
          inputMode='email'
          keyboardType={'email-address'}
        />
        <TextInput 
        value={email} 
        style={styles.vInput}
        placeholder='Confirmar Correo' />
        <TextInput
          placeholder='Password'
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={true}
          required
          style={styles.vInput}
        />
        <View style={styles.boton}>
            <Button
          title='Cancel'
          style={styles.boton}
          onPress={()=>navigation.navigate('Signin')}
          />
          <Text>      </Text>
          <Button
          title='Registrar'
          style={styles.boton}
          onPress={() =>registerUser(nombre, email, password)+alert('Te Has Registrado')}
          
          />
        </View>
    </View>
  );
}

function AlertScreen({ route, navigation }) {
  const { nombre, email, password } = route.params;
  const [hidden, setHidden] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const { setGetIsSigned } = useContext(MyContext);

  return (
    <View style={styles.maincontainer}>
        <Text style={styles.titulo1}>Datos</Text>
        <Text>        </Text>
        <Text style={styles.txLabel}>Name: {nombre}</Text>
        <Text style={styles.txLabel}>Email: {email}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.txLabel}>Password:</Text>
          <TextInput
            secureTextEntry={!showPassword}
            placeholder='Password'
            value={password}
            style={styles.txLabel}
          />
          <Icon
            name={showPassword ? 'eye' : 'eye-slash'}
            size={24}
            color='#aaa'
            onPress={toggleShowPassword}
            style={styles.icon}
          />
        </View>
        <View style={styles.boton}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Signin')}
            style={styles.btnTouchable}
          >
            <View style={styles.container}>
              <Text style={styles.subtitulo}>Ok</Text>
            </View>
          </TouchableOpacity>
        </View>
    </View>
)}


function UsuariosScreen({ navigation }) {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setGetIsSigned } = useContext(MyContext);

  useEffect(() => {
    fetch('https://sabee.com.mx/data/data50_2.json') 
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      });
  }, []);
  if (loading) {
    return (
      <View style={styles.carga}>
      <Text style={styles.cargatext}>
          Cargando ...
      </Text>
        <ActivityIndicator size='large' color='white' />
      </View>
    );
  }

  const goDataUser = (item) =>
    navigation.navigate('DataUser', {
      item: item,
    });

  return (
    <View style={styles.tabla}>
      <FlatList
        data={user}
        key={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Text style={styles.item} onPress={() => goDataUser(item)}>
            {item.id} {item.first_name} {item.last_name} : {item.country}
          </Text>
        )}
      />
        <View>
        <Text>      </Text>
          <Button 
            title='Cerrar Sesión'
            style={styles.boton}
            onPress={() => setGetIsSigned(false)} />
        </View>
    </View>
  );
}

function DataUserScreen({ route, navigation }) {
  const { item } = route.params;
  const { setGetIsSigned } = useContext(MyContext);

  const goMap = () =>
    navigation.navigate('Mapa', {
      name: item.first_name,
      lat: item.latitud,
      lon: item.longitud,
      item: item,
    });

  return (
    <View style={styles.maincontainer}>
        <Text style={styles.signtitulo}>Datos del usuario</Text>
        <Text style={styles.txLabel}>
          Name: {item.first_name} {item.last_name}
        </Text>
        <Text style={styles.txLabel}>Age: {item.age}</Text>
        <Text style={styles.txLabel}>Email: {item.email}</Text>
        <Text style={styles.txLabel}>Country: {item.country}</Text>

        <View style={styles.boton}>
          <Button 
            title='Mapa'
            style={styles.boton}
            onPress={() => goMap()}/>
        </View>
          
          <View style={styles.boton}>
            <TouchableOpacity
              onPress={() => setGetIsSigned(false)}
              style={styles.btnTouchable}>
              <View style={styles.container}>
                <Text style={styles.subtitulo2}>Cerrar Sesión</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.espacio}>            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Usuarios')}
              style={styles.btnTouchable}>
              <View style={styles.container}>
                <Text style={styles.btnAlert}>
              <AntDesign
                name={'back'}
                size={25}
                color='white'
                style={styles.icon}
              />
                </Text>
              </View>
            </TouchableOpacity>
          </View> 
      
    </View>
  );
}

function MapaScreen({ route, navigation }) {
  const { name, lat, lon, item } = route.params;
  const newPoint = { latitude: lat, longitude: lon };
  console.log(newPoint);

  const goDataUser = () =>
    navigation.navigate('DataUser', {
      item: item,
    });

  return (
    <View style={styles.maincontainer}>
      <MapView style={styles.map}>
        <Marker
          coordinate={newPoint}
          title={name}
          description='Aqui estoy'
        />
      </MapView>

      <View>
        <TouchableOpacity
          onPress={() => goDataUser()}
          style={styles.boton2}

        >
          <Text style={styles.btnMap}>
            <AntDesign
              name={'back'}
              size={50}
              color='white'
            />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  const [getIsSigned, setGetIsSigned] = useState(false);
  return (
    <MyContext.Provider value={{ setGetIsSigned }}>
      <NavigationContainer>
        <Stack.Navigator
        screenOptions= {{headerShown: false}}>
          {getIsSigned ? (
            <>
              <Stack.Screen name='Usuarios'component={UsuariosScreen} options={{ title: 'Usuarios' }}
              />
              <Stack.Screen name='DataUser' component={DataUserScreen} options={{ title: 'Data User List' }}
              />
              <Stack.Screen name='Mapa' component={MapaScreen} options={{ title: 'Map' }}
              />
            </>
          ) : (
            <>
              <Stack.Screen name='Signin' component={SignInScreen} options={{ title: 'My SignIn' }}
              />
              <Stack.Screen name='Registro' component={RegistroScreen} options={{ title: 'Registro' }}
              />
              <Stack.Screen name='Alert' component={AlertScreen} options={{ title: 'Alert' }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </MyContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1a1a1a',
  },
  vPassword: {
    margin: 10,
    alignItems: 'center',
  },
  maincontainer: {
    flex: 1,
    backgroundColor: '#121212',
  },
  vInput: {
    width: '90%',
    height: 50,
    paddingHorizontal: 15,
    marginTop: 20,
    borderRadius: 25,
    backgroundColor: '#292929',
    alignItems: 'center',
    alignSelf: 'center',
    color: '#fff',
    backgroundColor: 'gray'
  },
  tabla: {
    width: '100%',
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    padding: 20,
    fontSize: 12,
    color: '#fff',
  },
  item: {
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#292929',
    paddingVertical: 10,
    color: '#fff',
    width: '100%',
  },
  map: {
    width: '100%',
    height: '70%',
    marginTop: 20,
    backgroundColor: '#000',
  },
  fondo: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#121212',
  },
  titulo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'right',
    marginTop: 30,
    paddingHorizontal: 15,
  },
  subtitulo: {
    fontSize: 20,
    color: '#ccc',
    marginTop: 25,
  },
  subtitulo2: {
    fontSize: 40,
    color: '#fff',
    borderRadius: 25,
    backgroundColor: '#444',
  },
  boton: {
    paddingVertical: 15,
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 25,
    justifyContent: 'center',
  },
  boton2: {
    width: '100%',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#344340',
    backgroundColor: '#444',
  },
  espacio: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signtitulo: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
    marginTop: 5,
    padding: 20,
  },
  titulo1: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
    marginTop: 50,
    paddingHorizontal: 20,
  },
  carga: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  cargatext: {
    color: '#fff',
  },
  txLabel: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 15,
  },
  btnMap: {
    fontSize: 40,
    color: '#fff',
    backgroundColor: '#444',
  },
});




