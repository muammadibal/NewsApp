import React, {useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ImageBackground,
  FlatList,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  DrawerLayoutAndroid,
  Image,
} from 'react-native';
import TimeAgo from 'react-native-timeago';
import {useDispatch, useSelector} from 'react-redux';
import {Select, ListMenuProfile, Gap} from '../../component/';
import {fetchNews, fetchSources, fetchTrendingNews} from '../../redux/actions';
import {fonts, gapSize, heightSize, primaryColor, widthSize} from '../../util';
import {EmptyImage} from '../../assets';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const drawer = useRef(null);
  const {
    newsSourceLoading,
    newsSourceData,
    newsSourceError,
    newsLoading,
    newsData,
    newsError,
    newsTrendingLoading,
    newsTrendingData,
    newsTrendingError,
  } = useSelector(state => state.newsReducer);
  const [sources, setSources] = useState('');

  // console.log(newsData);
  const changeValue = value => {
    setSources(value);
    dispatch(fetchNews(value));
  };

  const navigationView = () => (
    <View
      style={{
        alignItems: 'center',
        padding: gapSize,
      }}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={{
            uri: 'https://ui-avatars.com/api/?name=John+Doe&background=random&color=fff',
          }}
          style={{height: 100, width: 100, borderRadius: 100}}
        />
        <Gap height={gapSize} />
        <Text
          style={{
            fontSize: 20,
            fontFamily: fonts.bold,
            paddingHorizontal: gapSize,
          }}>
          John Doe
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: fonts.regular,
          }}>
          Senior Trader
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: fonts.light,
          }}>
          johnDoe@mail.com
        </Text>
      </View>
      <Gap height={gapSize} />
      <ListMenuProfile title="Edit Profile" onPress={() => {}} />
      <ListMenuProfile title="Edit Password" onPress={() => {}} />
      <ListMenuProfile title="Adjust Display" onPress={() => {}} />
      <ListMenuProfile
        title="Close Drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );

  const Header = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 16,
          height: 80,
          backgroundColor: 'white',
          elevation: 2,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: primaryColor,
              width: 50,
              height: 50,
              borderRadius: 50,
              marginRight: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
              <MaterialIcons name="sort" size={25} color="white" />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 22,
              textTransform: 'uppercase',
              fontFamily: fonts.bold,
            }}>
            {sources}
          </Text>
        </View>
        <View style={{width: 50}}>
          <Select
            listdata={newsSourceData}
            selectedValue={sources}
            onValueChange={(itemValue, itemIndex) => changeValue(itemValue)}
          />
        </View>
      </View>
    );
  };

  useEffect(() => {
    const getSourceNews = dispatch(fetchSources());
    const getTrendingNews = dispatch(fetchTrendingNews());
    const getNews = dispatch(fetchNews('usa-today'));
    setSources('usa-today');
    return () => {
      getSourceNews;
      getTrendingNews;
      getNews;
    };
  }, []);

  return (
    <>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={widthSize - widthSize * 0.3}
        drawerPosition="left"
        renderNavigationView={navigationView}>
        <StatusBar backgroundColor={primaryColor} barStyle="light-content" />

        <Header />

        <ScrollView style={{backgroundColor: 'white'}}>
          <Text
            style={{
              marginTop: gapSize,
              marginHorizontal: gapSize,
              fontSize: 16,
              fontFamily: fonts.bold,
            }}>
            Trending
          </Text>
          {newsTrendingLoading ? (
            <ActivityIndicator size="large" color={primaryColor} />
          ) : newsTrendingData.length > 0 ? (
            <FlatList
              data={newsTrendingData}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{marginVertical: gapSize}}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Detail', {item})}>
                    <ImageBackground
                      source={
                        item.urlToImage ? {uri: item.urlToImage} : EmptyImage
                      }
                      style={{
                        height: 400,
                        width: widthSize / 1.2,
                        marginLeft: index === 0 ? gapSize : 0,
                        marginRight: gapSize,
                      }}
                      resizeMode="cover"
                      borderRadius={gapSize}>
                      <View
                        style={{
                          position: 'absolute',
                          right: gapSize,
                          top: gapSize,
                          backgroundColor: 'white',
                          justifyContent: 'flex-end',
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
            <Text>{JSON.stringify(newsTrendingError)}</Text>
          )}

          <Text
            style={{
              marginHorizontal: gapSize,
              fontSize: 16,
              fontFamily: fonts.bold,
            }}>
            Today
          </Text>
          {newsLoading ? (
            <ActivityIndicator size="large" color={primaryColor} />
          ) : newsData.length > 0 ? (
            <FlatList
              data={newsData}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Detail', {item})}>
                    <ImageBackground
                      source={
                        item.urlToImage ? {uri: item.urlToImage} : EmptyImage
                      }
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
            <Text>{JSON.stringify(newsError)}</Text>
          )}
          <View style={{height: 60}} />
        </ScrollView>
      </DrawerLayoutAndroid>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
