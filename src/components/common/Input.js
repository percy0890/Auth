import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { containerStyle, labelStyle, inputStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>
        {label}
      </Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect="false"
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    flex: 1,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 10,
    flex: 1,
    color: '#000'
  },
  inputStyle: {
    fontSize: 16,
    paddingLeft: 5,
    paddingRight: 5,
    flex: 2
  }
};


export { Input };
