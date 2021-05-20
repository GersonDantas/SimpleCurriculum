import React from 'react';
import { View } from 'react-native';
import { Text } from './Text';
import style from './style';

interface Props {
  title: string;
}

const Card: React.FC<Props> = ({ title, children}) => {
  return (
    <View style={style.cardContainer}>
      <View style={style.card}>
        <View style={style.cardHeader}>
          <Text style={style.cardHeaderText}>{title}</Text>
        </View>
        <View style={style.cardContent}>
          {children}
        </View>
      </View>
    </View>
  );
}

export default Card;