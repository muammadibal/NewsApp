import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {EmptyImage} from '../../assets';
import {Button, Gap} from '../../component';
import {
  fonts,
  gapSize,
  widthSize,
  heightSize,
  secondaryColor,
} from '../../util';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Detail = ({navigation, route}) => {
  const {item} = route.params;
  console.log(item);

  return (
    <ScrollView>
      <ImageBackground
        source={item.urlToImage ? {uri: item.urlToImage} : EmptyImage}
        style={{height: 300, width: widthSize}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: gapSize,
            paddingTop: gapSize,
          }}>
          <Button
            height={40}
            width={40}
            icon={
              <MaterialIcons
                name="arrow-back-ios"
                size={20}
                color="white"
                style={{marginLeft: 5}}
              />
            }
            onPress={() => navigation.goBack()}
          />

          <Button
            height={40}
            width={40}
            icon={<MaterialIcons name="favorite" size={20} color="white" />}
            onPress={() => navigation.goBack()}
          />
        </View>
      </ImageBackground>
      <View
        style={{
          borderTopLeftRadius: gapSize,
          borderTopRightRadius: gapSize,
          backgroundColor: 'white',
          marginTop: -gapSize,
          padding: gapSize,
          height: heightSize - 300,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: fonts.bold,
            marginBottom: gapSize,
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: fonts.light,
            marginBottom: gapSize,
          }}>
          {item.author}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: fonts.regular,
            marginBottom: gapSize,
          }}>
          {item.description ? item.description : item.content}
          <Gap height={gapSize} />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore,
          qui earum. Nobis veritatis tenetur ut facilis inventore a, quaerat
          nulla qui dignissimos eum aliquam, maiores alias? Quam laboriosam
          provident culpa.
          <Gap height={gapSize} />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore,
          qui earum. Nobis veritatis tenetur ut facilis inventore a, quaerat
          nulla qui dignissimos eum aliquam, maiores alias? Quam laboriosam
          provident culpa.
          <Gap height={gapSize} />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore,
          qui earum. Nobis veritatis tenetur ut facilis inventore a, quaerat
          nulla qui dignissimos eum aliquam, maiores alias? Quam laboriosam
          provident culpa.
          <Gap height={gapSize} />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore,
          qui earum. Nobis veritatis tenetur ut facilis inventore a, quaerat
          nulla qui dignissimos eum aliquam, maiores alias? Quam laboriosam
          provident culpa.
          <Gap height={gapSize} />
        </Text>
      </View>
    </ScrollView>
  );
};

export default Detail;

const styles = StyleSheet.create({});
