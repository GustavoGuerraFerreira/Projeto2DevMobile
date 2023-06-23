import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/LoginPage';
import Cadastro from '../pages/CadastroPage';
import RecuperarSenha from '../pages/RecuperarSenha';

const Stack = createNativeStackNavigator()

export default function AuthRoutes(){
    return(
    <Stack.Navigator initialRouteName ='Login' screenOptions={{headerShown: false}} >
        <Stack.Screen name = "Login" component={Login}/>
        <Stack.Screen name = "Cadastro" component={Cadastro}/>
        <Stack.Screen name= "RecuperarSenha" component={RecuperarSenha}/>
    </Stack.Navigator>
    )
}