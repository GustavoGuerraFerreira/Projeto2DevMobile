import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesPage from '../pages/MoviesPage';
import MoviesDetails from '../pages/MovieDetailsPage';
const Stack = createNativeStackNavigator()

export default function AppRoutes(){
    return (
        <Stack.Navigator >
        <Stack.Screen name = "MoviesPage" component={MoviesPage}/>
        <Stack.Screen name= "MoviesDetails" component={MoviesDetails}/>
    </Stack.Navigator>
    )
}