import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { categoryImage } from '../../Assets/Image';
import {useNavigation} from '@react-navigation/native';

export const CATEGORIES = [
    {
        name:'Rice and Flours',
        image:categoryImage.riceAndflour,
        id:1
    },
    {
      
        name:'Pulses and Masalas',
        image:categoryImage.riceAndflour, 
        id:2
    },
    {
        name:'Sugar, Tea and Coffee',
        image:categoryImage.riceAndflour,
        id:3
    },
    {
        name:'Maggies, Noodles and Soups',
        image:categoryImage.riceAndflour,
        id:4
    },
    {
        name:'Chocolates and Health Drink Mix',
        image:categoryImage.riceAndflour,
        id:5
    },
    {
        name:'Juice and Cold Drinks',
        image:categoryImage.riceAndflour,
        id:6
    },
    {
        name:'Baby Care',
        image:categoryImage.riceAndflour,
        id:7
    },
    {
        name:'Oil and Ghee',
        image:categoryImage.riceAndflour,
        id:8
    },
    {
        name:'Ketchups and Honey',
        image:categoryImage.riceAndflour,
        id:9
    },
    {
        name:'Soap and Body Care',
        image:categoryImage.riceAndflour,
        id:10
    },
    {
        name:'Shampoo and Hair Care',
        image:categoryImage.riceAndflour,
        id:11
    },
    {
        name:'Oral Care',
        image:categoryImage.riceAndflour,
        id:12
    },
    {
        name:'Skin and Face Care',
        image:categoryImage.riceAndflour,
        id:13
    },
    {
        name:'Detergents and Untensils Cleaners',
        image:categoryImage.riceAndflour,
        id:14
    },
    {
        name:'Home Cleaners',
        image:categoryImage.riceAndflour,
        id:15
    },

]

const Items = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity 
      style={styles.item} 
      onPress={()=> navigation.navigate('AppNavigator')}
      >
      <View>
        <Image source={item.image} style={styles.itemImage}/>
      </View>
      <View style={{width:wp(26),marginLeft:5 }}>
          <Text style={styles.itemText}>{item.name}</Text>
      </View>
      
    </TouchableOpacity>
  );
};
export const renderCategories = ({item,index})=> <Items item={item} key={index} />;

const styles = StyleSheet.create({
    item:{
        flexDirection:'row',
        alignItems:'center',
        width:wp(46),
        borderWidth:1,
        borderRadius:10,
        borderColor:'#FFCCD2',
        margin:wp(2), 
        paddingVertical:5,
        backgroundColor:'#FEFBF3'
    },
    itemImage:{
        height:hp(8),
         width:hp(8),
         borderRadius:10,
         margin:5
    },
    itemText:{
        fontWeight:'800',
        fontSize:15,
        letterSpacing:1.2,
        lineHeight:21
        
    }
});
