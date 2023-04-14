import React, { useState } from 'react';
import { View, Text, ScrollView,Image} from 'react-native';
import { styles } from './styles';
 
 function Img(){
    let img = 'https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/32817981_10211527007637411_3036310955060363264_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=_-AL1dG7vFgAX9kgCln&_nc_ht=scontent-gru2-2.xx&oh=00_AfC6iyXYDCq6DBAGN0fQUhi1eizQnwBSxBmg1npOzsk0ng&oe=64605297'; 


    return(
      <View>  
        <Image
        source={{ uri: img }}
        style={{ width: 150, height: 150, marginLeft:'26%', borderRadius:200/2}}
        />
      </View>
    )
}

export default function App(){
  const [nome] = useState('Pedro Henrique Burghi')
  const [idade] = useState('19 anos')
  const [formacao] = useState('Estudante da FATEC em ADS.')
  const [experiencia]=useState('Java, APIs, PHP, React')
  const [projeto] =useState('Monografia de Tecnologia') 
 
  return(
    <ScrollView>
      <View style={styles.container}>
      <Text style={styles.titulo}>
      Meu perfil</Text>

       <Img/>

      <Text style={styles.subtitulo}>
      Dados pessoais:</Text>
      <Text style={styles.texto}>Nome: {nome}</Text>
      <Text style={styles.texto}>Idade: {idade}</Text>
    
      <Text style={styles.subtitulo}>
      Formação:</Text>
      <Text style={styles.texto}>{formacao}</Text>
      
      <Text style={styles.subtitulo}>
      Experiencia:</Text>
      <Text style={styles.texto}>{experiencia}</Text>

      <Text style={styles.subtitulo}>
      Projetos:</Text>
      <Text style={styles.texto}>{projeto}</Text>
      
      </View>
  
    </ScrollView>
  );
}
