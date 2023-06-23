import React, { useState } from 'react';
import { Link } from '@react-navigation/native';
import { View, TextInput, Button, StyleSheet,TouchableOpacity, Text, Image } from 'react-native';

const Cadastro =({navigation}) => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('')


  return (
    <View style={styles.container}>
       <Image
               style={styles.imagem}
               source={require('../../assets/images/combo-mega.png')}
                />
      <TextInput
        style={styles.input}
        placeholder="Novo Usuário"
        value={usuario}
        onChangeText={setUsuario}
      />
        <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />
       <TouchableOpacity
        style={styles.btn}
        onPress={() => {navigation.pop()}}>
            <Text style = {styles.btnText}>Cadastrar</Text>
        </TouchableOpacity>

        <View style= {styles.viewLinks}>
                <Link
                to={{screen: 'Login'}}>
                   Voltar para o Login
                </Link>
                <Link
                to={{screen: 'RecuperarSenha'}}>
                   Esqueceu a senha?
                </Link>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  input: {
    border: '1px solid black',
     width: "70%",
     height: 40,
     padding: 5,
     marginBottom: 10,
     borderRadius: "2px"
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
imagem: {
   
  width: "150px",
  height: "150px",
  marginBottom: 15,
},
viewLinks: {
  marginTop: 10,
  flexDirection: 'row',
  width: '70%',
  justifyContent: 'space-between'
 }
});

export default Cadastro;
