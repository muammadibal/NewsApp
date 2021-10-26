import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TimeAgo from 'react-native-timeago';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {EmptyImage, EmptySearch} from '../../assets';
import {Button, Gap, Input} from '../../component/';
import {fetchSearchNews} from '../../redux/actions';
import {gapSize, heightSize, primaryColor, widthSize} from '../../util';

const Search = ({navigation}) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  // console.log(query);

  const {newsSearchLoading, newsSearchData, newsSearchError} = useSelector(
    state => state.newsReducer,
  );

  const onSubmit = () => {
    if (query.length >= 3) {
      dispatch(fetchSearchNews(query));
    }
  };

  return (
    <>
      <View
        style={{
          height: 80,
          backgroundColor: 'white',
          paddingHorizontal: gapSize,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          elevation: 2,
        }}>
        <Input
          height={50}
          width={widthSize - 50 - 3 * gapSize}
          value={query}
          onChangeText={e => setQuery(e)}
        />
        <Gap width={gapSize} />
        <Button
          height={50}
          width={50}
          onPress={() => onSubmit()}
          icon={<MaterialIcons name="search" size={25} color="white" />}
        />
      </View>
      {newsSearchLoading ? (
        <ActivityIndicator size="large" color={primaryColor} />
      ) : newsSearchData.length > 0 ? (
        <FlatList
          data={newsSearchData}
          keyExtractor={item => item.id}
          ListFooterComponent={<Gap height={60} />}
          style={{backgroundColor: 'white'}}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('Detail', {item})}>
                <ImageBackground
                  source={item.urlToImage ? {uri: item.urlToImage} : EmptyImage}
                  style={{
                    height: 200,
                    width: widthSize - 2 * gapSize,
                    marginTop: index === 0 ? gapSize : 0,
                    marginBottom: gapSize,
                    marginHorizontal: gapSize,
                  }}
                  resizeMode="cover"
                  borderRadius={gapSize}>
                  <View
                    style={{
                      position: 'absolute',
                      right: gapSize,
                      top: gapSize,
                      justifyContent: 'flex-end',
                      backgroundColor: 'white',
                      padding: 5,
                      borderRadius: 5,
                    }}>
                    <TimeAgo time={item.publishedAt} />
                  </View>
                  <View style={{flex: 1}} />
                  <LinearGradient
                    colors={[
                      'rgba(0,0,0,0)',
                      'rgba(0,0,0,0.5)',
                      'rgba(0,0,0,1)',
                    ]}
                    style={{
                      padding: gapSize,
                      overflow: 'hidden',
                      borderBottomLeftRadius: gapSize,
                      borderBottomRightRadius: gapSize,
                    }}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontFamily: fonts.bold,
                        color: 'white',
                      }}
                      numberOfLines={1}>
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: fonts.light,
                        color: 'white',
                      }}>
                      {item.author}
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: fonts.regular,
                        color: 'white',
                      }}
                      numberOfLines={3}>
                      {item.description}
                    </Text>
                  </LinearGradient>
                </ImageBackground>
              </TouchableOpacity>
            );
          }}
        />
      ) : (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
          }}>
          <Image
            source={EmptySearch}
            style={{
              height: heightSize / 2 - 120,
              width: widthSize,
            }}
          />
        </View>
      )}
    </>
  );
};

export default Search;

const styles = StyleSheet.create({});
