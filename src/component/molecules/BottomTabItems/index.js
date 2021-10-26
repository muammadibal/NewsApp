import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {CurvePath} from '../../../assets';
import {primaryColor, secondaryColor} from '../../../util';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function BottomTabItems({
  accessibilityRole,
  accessibilityState,
  isFocused,
  label,
  accessibilityLabel,
  testID,
  onPress,
  onLongPress,
  style,
}) {
  const Icon = () => {
    if (label === 'Search') {
      return (
        <CurvePath height={60} width={75} color="white">
          <TouchableOpacity
            style={{
              height: 50,
              width: 50,
              borderRadius: 50,
              backgroundColor: primaryColor,
              position: 'absolute',
              bottom: 30,
              left:0,right:0,
              zIndex: 999,
            }}>
            <FontAwesome name="search" color={secondaryColor} size={25} />
          </TouchableOpacity>
        </CurvePath>
      );
    } else {
      return (
        <FontAwesome
          name={
            label === 'Home'
              ? 'home'
              : label === 'Profile'
              ? 'user-circle'
              : false
          }
          color={isFocused ? primaryColor : secondaryColor}
          size={25}
        />
      );
    }
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />

      <Text style={{color: isFocused ? '#673ab7' : '#222'}}>
        {label == 'Search' ? '' : label}
      </Text>
    </TouchableOpacity>
  );
}
