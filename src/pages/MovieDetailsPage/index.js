import { View, Text } from "react-native-web";

export default function MoviesDetails( {navigation,route}){
    const {filme} = route.params
    return(
        <View>
            <Text>Detalhes do filme</Text>
            <Text>{filme.titulo}</Text>
            <Text>{filme.sinopse}</Text>
        </View>
    )

}