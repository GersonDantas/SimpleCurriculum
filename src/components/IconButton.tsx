import React from 'react';
import FontAwessomeIcon from 'react-native-vector-icons/FontAwesome';
import { Text } from 'react-native';
import { IconSizes, IconProps } from './Icon';

// import { Container } from './styles';

type IconButtonProps = IconProps & {
    text: string;
    onPress: () => void;
};

export const IconButton = ({
    onPress,
    size,
    name,
    color,
    text
}: IconButtonProps) => (
    <FontAwessomeIcon.Button
        onPress={onPress}
        name={name}
        size={IconSizes[size]}
        color={color}
    >
        <Text>{text}</Text>
    </FontAwessomeIcon.Button>
);