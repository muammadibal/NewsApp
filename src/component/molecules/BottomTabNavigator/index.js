import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {gapSize} from '../../../util';
import BottomTabItems from '../BottomTabItems';

const BottomTabNavigator = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <BottomTabItems
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            isFocused={isFocused}
            label={label}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: gapSize,
    alignItems: 'center',
    backgroundColor: 'red',
    height: 60,
    borderTopLeftRadius: gapSize,
    borderTopRightRadius: gapSize
  },
});

export default BottomTabNavigator;
