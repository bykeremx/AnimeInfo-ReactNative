import ContainerRouter from './Layout';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import AnimeDetail from '../Screens/AnimeDetail';
import Icon from 'react-native-vector-icons/Ionicons'; // Vector Icons kullanımı

const Stack = createNativeStackNavigator();

const Routers = () => {
  return (
    <ContainerRouter>
      <Stack.Navigator>
        {/* Home Screen */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown:false,
          }}
        />

        {/* Anime Detail Screen */}
        <Stack.Screen
          name="AnimeDetail"
          component={AnimeDetail}
          options={{
            title: 'Anime Detail',
            headerShown: true,
            headerTitleAlign: 'center', // Başlık ortalanır
            headerStyle: {
              backgroundColor: '#34495E', // Gri-mavi tonlarında header
            },
            headerTintColor: '#ECF0F1', // Başlık ve geri ikonu rengi
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 22,
            },
            headerBackTitle: '', // Geri butonunda yazı gösterme
            headerBackImage: () => (
              <Icon name="arrow-back" size={24} color="#ECF0F1" style={{ marginLeft: 10 }} />
            ), // Daha sade bir geri simgesi
          }}
        />
      </Stack.Navigator>
    </ContainerRouter>
  );
};

export default Routers;
