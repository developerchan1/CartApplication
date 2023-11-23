import React from 'react';
import {Pressable, Text} from 'react-native';
import globalStyles from '../decorations/globalStyles';

const Button = ({
  customButtonStyle = globalStyles.button,
  customButtonTextStyle = globalStyles.buttonText,
  buttonText = '',
  disabled,
  onPress = () => {},
}) => {
  return (
    <Pressable disabled={disabled} style={customButtonStyle} onPress={onPress}>
      <Text style={customButtonTextStyle}>{buttonText}</Text>
    </Pressable>
  );
};

export default Button;
