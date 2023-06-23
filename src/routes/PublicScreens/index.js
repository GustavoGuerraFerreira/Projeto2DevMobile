
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../pages/LoginPage';
import Cadastro from '../../pages/CadastroPage';
import RecuperarSenha from '../../pages/RecuperarSenha';
import MoviesPage from '../../pages/MoviesPage';
import MoviesDetails from '../../pages/MovieDetailsPage';
const Stack = createNativeStackNavigator()
export default function PublicScreens(){
    return(
    <Stack.Navigator initialRouteName ='Login' screenOptions={{headerShown: false}} >
        <Stack.Screen name = "Login" component={Login}/>
        <Stack.Screen name = "MoviesPage" component={MoviesPage}/>
        <Stack.Screen name = "Cadastro" component={Cadastro}/>
        <Stack.Screen name= "RecuperarSenha" component={RecuperarSenha}/>
        <Stack.Screen name= "MoviesDetails" component={MoviesDetails}/>
    </Stack.Navigator>
    )

}