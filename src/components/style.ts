import { StyleSheet } from 'react-native';

const style = StyleSheet.create({

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

export default style;