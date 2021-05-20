import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import foto from './assets/foto.png';
import { MaterialIcon } from './components/Icon';
import { } from './components/IconButton';
import { Text } from './components/Text';
import Card from './components/Card';

const App: React.FC = () => {
  return (
    <>
      <ScrollView>
        <View style={style.page}>

          <View style={style.container_cabecalho}>
            <Image source={foto} style={style.photo} />
            <Text style={style.name}>Gerson Dantas</Text>
            <Text style={style.funcao}>Desenvolvedor Mobile</Text>
            <View style={style.socialNetworks}>
              <MaterialIcon size="extraLarge" color="black" name="github" />
              <MaterialIcon size="extraLarge" color="#0576e8" name="facebook" />
              <MaterialIcon size="extraLarge" color="#0a66c2" name="linkedin" />
            </View>
          </View>

          <Card title="Formação Acadêmica">
            <Text style={style.cardContentText}>Tecnologia Em Sistemas p. Internet</Text>
            <Text style={style.cardContentText}>4Linux</Text>
            <Text style={style.cardContentText}>Udemy</Text>
          </Card>

          <Card title="experiência profissional">
            <Text style={style.cardContentText}>MKvex</Text>
            <Text style={style.cardContentText}>Veloznet</Text>
            <Text style={style.cardContentText}>Vnet</Text>
          </Card>

          <Card title="Soft-skill">
            <Text style={style.cardContentText}>Criativo</Text>
            <Text style={style.cardContentText}>Comunicativo</Text>
            <Text style={style.cardContentText}>Louco</Text>
          </Card>

          <Card title="Hard-Skill">
            <Text style={style.cardContentText}>React-nativet</Text>
            <Text style={style.cardContentText}>HTML</Text>
            <Text style={style.cardContentText}>CSS</Text>
          </Card>

        </View>
      </ScrollView>
    </>
  );
}

const style = StyleSheet.create({
  page: {
    backgroundColor: '#e7e7e7',
    flex: 1,
    justifyContent: 'center'
  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    backgroundColor: '#f55',
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  name: {
    fontSize: 30,
    marginTop: 10,
    fontFamily: 'Roboto-Black',
  },
  funcao: {
    fontSize: 15,
    color: '#939393',
    marginTop: 10,
  },
  socialNetworks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
    marginTop: 20
  },
  cardContentText: {
    textAlign: 'center',
    paddingBottom: 1,
    borderBottomWidth: 0.8,
    color: '#888',
    fontFamily: 'Roboto-Medium'
  }
});

export default App;