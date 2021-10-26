import React from 'react';
import {
  Image,
  ScrollView, StyleSheet,
  Text,
  View
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Gap, ListMenuProfile } from '../../component';
import { fonts, gapSize, heightSize } from '../../util';

const Profile = () => {
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
        <Text
          style={{
            fontSize: 20,
            fontFamily: fonts.bold,
            paddingHorizontal: gapSize,
          }}>
          Profile
        </Text>
      </View>

      <ScrollView style={{backgroundColor: 'white', height: heightSize}}>
        <Gap height={gapSize} />
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

        <Text
          style={{
            fontSize: 20,
            fontFamily: fonts.bold,
            paddingHorizontal: gapSize,
          }}>
          Account Settings
        </Text>

        <ListMenuProfile
          title="Your Profile"
          subtitle="Edit and view your profile"
          icon={<FontAwesome name="user-o" size={20} color="white" />}
        />

        <ListMenuProfile
          title="Your Password"
          subtitle="Edit and secure your account"
          icon={<FontAwesome name="key" size={20} color="white" />}
        />

        <ListMenuProfile
          title="Privacy"
          subtitle="Read our policy and privacy"
          icon={<MaterialIcons name="privacy-tip" size={20} color="white" />}
        />

        <Gap height={gapSize} />

        <Text
          style={{
            fontSize: 20,
            fontFamily: fonts.bold,
            paddingHorizontal: gapSize,
          }}>
          App Settings
        </Text>

        <ListMenuProfile
          title="Display"
          subtitle="Adjust your display"
          icon={<FontAwesome name="gear" size={20} color="white" />}
        />
        <ListMenuProfile
          title="Notification"
          subtitle="On/Off your notifications"
          icon={<FontAwesome name="bell-o" size={20} color="white" />}
        />
        <ListMenuProfile
          title="Help"
          subtitle="Find more you want to know"
          icon={
            <FontAwesome name="question-circle-o" size={20} color="white" />
          }
        />
        <Gap height={60} />
      </ScrollView>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({});
