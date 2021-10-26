import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {fonts, gapSize, primaryColor} from '../../../util';

export default function Button({width, height, label, onPress, icon}) {
  return (
    <TouchableOpacity
      style={{
        width: width,
        height: height,
        backgroundColor: primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: height/3,
      }}
      onPress={onPress}>
      {icon ? (
        icon
      ) : (
        <Text style={{fontFamily: fonts.regular, color: 'white'}}>{label}</Text>
      )}
    </TouchableOpacity>
  );
}
