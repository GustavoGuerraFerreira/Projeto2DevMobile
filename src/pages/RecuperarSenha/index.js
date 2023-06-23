import { Link } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';

export default function RecuperarSenha({navigation}){

const [email, setEmail] = useState('')

return(
    <View style= {styles.container}>
       
         <Image
               style={styles.imagem}
               source={require('../../assets/images/combo-mega.png')}
                />
       

         <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
     
      
        <TouchableOpacity
        style={styles.btn}
        onPress={() => {navigation.push('Login')}}>
        <Text style = {styles.btnText}>Recuperar</Text>
        </TouchableOpacity>
       
        <View style= {styles.viewLinks}>
                <Link
                to={{screen: 'Login'}}>
                   Voltar Para o Login
                </Link>
                <Link
                to={{screen: 'Cadastro'}}>
                   Cadastrar-se
                </Link>
        </View>
    </View>
    
)


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      },
    input: {
     border: '1px solid black',
     width: "70%",
     height: 40,
     padding: 5,
     marginBottom: 10,
     borderRadius: "2px"
    },
    imagem: {
   
      width: "150px",
      height: "150px",
      marginBottom: 15,
    },
    btn : {
       border: '2px solid black',
       width: '70%',
       height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      backgroundColor: 'black'
    },
    btnText : {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        color: 'white'
    },
    viewLinks: {
     marginTop: 10,
     flexDirection: 'row',
     width: '70%',
     justifyContent: 'space-between'
    }
  });