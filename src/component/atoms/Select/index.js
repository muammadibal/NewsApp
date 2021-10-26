import React from 'react';
import {Picker} from '@react-native-picker/picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { gapSize } from '../../../util';

const Select = ({listdata, selectedValue, onValueChange}) => {
  return (
    <>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={{backgroundColor: 'transparent',}}
        dropdownIconColor="#fff">
        {listdata.map((item, index) => {
          return <Picker.Item value={item.id} label={item.name} />;
        })}
      </Picker>
      <MaterialIcons name="tune" color="black" size={20} style={{position: 'absolute', right: gapSize, top:gapSize}} />
    </>
  );
};

export default Select;
