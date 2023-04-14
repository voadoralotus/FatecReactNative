import React, { useState } from 'react';
import { View, Text, ScrollView,Image} from 'react-native';
import { styles } from './styles';
 
 function Img(){
    let img = 'https://scontent-gru1-1.cdninstagram.com/v/t51.2885-19/314331385_5338521849592849_9168842344428966789_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-gru1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=gfsWzsQd8KgAX_QiOW7&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfD-RxpHwAmUmFObeX81mxFG_iMGY_xCFm8yHovAtYantw&oe=643E3D85&_nc_sid=1527a3'; 


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
  const [nome] = useState('Yohan Gabriel Eduardo Queiroz dos Santos Ferreira Aquino')
  const [idade] = useState('21 anos')
  const [formacao] = useState('Estudante da FATEC em ADS.')
  const [experiencia]=useState('Documentação de projeto, java,APIs,PHP,React')
  const [projeto] =useState('Criação de um site e commerce para venda de jogos') 
 
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
