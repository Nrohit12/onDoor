import React from 'react';
import {ScrollView, StyleSheet, Text, View, FlatList} from 'react-native';
import {FadeInView} from '../../../../Navigators/Animation';
import {leftIcon} from '../../../../Assets/Image';
import {IconButton} from 'react-native-paper';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Notifications, renderNotification} from './renderNotifications';

export default function (props) {
  return (
    <FadeInView>
      <ScrollView>
        <View style={styles.header}>
          <IconButton
            icon={leftIcon}
            onPress={() => {
              props.navigation.goBack();
            }}
          />
          <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 50}}>
            Recent Notifications
          </Text>
        </View>
        <View>
          <FlatList
            data={Notifications}
            renderItem={renderNotification}
            keyExtractor={item => item.id}
            nestedScrollEnabled={true}
          />
        </View>
      </ScrollView>
    </FadeInView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    padding: 5,
    width: wp(100),
  },
});
