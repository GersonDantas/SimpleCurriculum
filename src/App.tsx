import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import foto from './assets/foto.png';
import { MaterialIcon } from './components/Icon';
import { } from './components/IconButton';
import { Text } from './components/Text';

const App: React.FC = () => {
  return (
    <>
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

        <View style={style.cardContainer}>
          <View style={style.card}>
            <View style={style.cardHeader}>
              <Text style={style.cardHeaderText}>Experiência profissional</Text>
            </View>
            <View style={style.cardContent}>
              <Text style={style.cardContentText}>MKvex Parelhas</Text>
              <Text style={style.cardContentText}>VelozNet Parelhas</Text>
              <Text style={style.cardContentText}>Vnet Acari</Text>
            </View>
          </View>
        </View>

        <View style={style.cardContainer}>
          <View style={style.card}>
            <View style={style.cardHeader}>
              <Text style={style.cardHeaderText}>Formação Acadêmica</Text>
            </View>
            <View style={style.cardContent}>
              <Text style={style.cardContentText}>Tecnologia Em Sistemas p. Internet</Text>
              <Text style={style.cardContentText}>4Linux</Text>
              <Text style={style.cardContentText}>Udemy</Text>
            </View>
          </View>
        </View>

      </View>
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
  cardContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    margin: 10,
    padding: 4,
    width: '60%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#939393',
    alignItems: 'center',
    backgroundColor: '#ffa'
  },
  cardHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    width: '100%',
    height: 25,
  },
  cardHeaderText: {
    fontSize: 15,
    fontFamily: 'Roboto-Bold'
  },
  cardContent: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
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