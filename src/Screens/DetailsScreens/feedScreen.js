import React from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {renderItems,DATA} from './renderItems';

const listButtons = [
  {label: 'Daily', navigateTo: ''},
  {label: 'Weekly', navigateTo: ''},
  {label: 'Monthly', navigateTo: ''},
];

export default function OrderScreen(props) {

  const renderListButtons = Data => {
    return Data.map((item, index) => {
      return (
        <TouchableOpacity style={styles.myListButton} key={index}>
          <Text style={styles.myListButtonText}>{item.label}</Text>
        </TouchableOpacity>
      );
    });
  };

  return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={{margin: 25}}>
          <Text style={styles.heading}>Order from your list</Text>
          <View style={{alignSelf: 'center', flexDirection: 'row'}}>
            {renderListButtons(listButtons)}
          </View>
        </View>
        <View style={{marginHorizontal:25,marginVertical:10}}>
            <Text style={styles.heading}>Add Items</Text>
        </View>
        <View>
        <FlatList
            data={DATA}
            renderItem={renderItems}
            keyExtractor={item => item.id}
            nestedScrollEnabled={true}
          />
        </View> 
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  myListButton: {
    borderColor: 'green',
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp(5),
  },
  myListButtonText: {
    fontSize: 18,
    color: 'green',
    margin: 2,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});
