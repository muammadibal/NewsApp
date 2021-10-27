import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gap} from '../..';
import {fonts, gapSize, randomColor} from '../../../util';

const ListMenuProfile = ({title, subtitle, icon, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{flexDirection: 'row', alignItems: 'center', padding: gapSize}}>
        {icon && (
          <>
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 40,
                backgroundColor: randomColor(),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {icon}
            </View>
            <Gap width={gapSize} />
          </>
        )}
        <View>
          <Text
            style={{
              fontSize: 16,
              fontFamily: fonts.regular,
            }}>
            {title}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: fonts.light,
            }}>
            {subtitle}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListMenuProfile;

const styles = StyleSheet.create({});
