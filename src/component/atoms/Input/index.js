import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {gapSize, primaryColor, secondaryColor} from '../../../util';

const Input = ({width, height, value, onChangeText}) => {
  const [active, setActive] = useState(false);
  const onFocus = e => {
    // console.log(e);
    setActive(true);
  };
  const onBlur = e => {
    // console.log(e);
    setActive(false);
  };
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: active ? primaryColor : secondaryColor,
        borderRadius: gapSize,
        width,
        height,
      }}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={{paddingHorizontal: gapSize}}
        onFocus={e => onFocus(e)}
        onBlur={e => onBlur(e)}
        placeholder="Type Here..."
        placeholderTextColor={active ? primaryColor : secondaryColor}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
