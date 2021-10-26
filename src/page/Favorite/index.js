import React, {useEffect} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchNews} from '../../redux/actions';
import {primaryColor} from '../../util';

const Favorite = () => {


  return (
    <View>
      <Text>Favorite</Text>
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({});
