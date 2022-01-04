import React, {useRef, useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {FadeInView} from '../../../Navigators/Animation';
import {searchIcon, myListIcon} from '../../../Assets/Image';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {IconButton} from 'react-native-paper';
import Popover from 'react-native-popover-view';
import {STORE, renderStore} from './renderStore';
import {DATA, renderItems} from './renderCartItems';

const FairBreak = [
  {label:'Total Items', value:'9'},
  {label:'Total Price', value:'120'},
  {label:'Delivery Charge', value:'15'},
  {label:'Discount', value:'12'},
]

const PopOverItem = [
  {label:'Daily',},
  {label:'Weekly',},
  {label:'Monthly',},
]

export default function (props) {
  const [showPopover, setShowPopover] = useState(false);
  const[fairBreak, setFairBreak] = useState(FairBreak)

  const renderFareBreakItems = () => {
    return fairBreak.map((item, index) => {
      return <View style={{flexDirection: 'row', margin: 5}} key={index}> 
      <Text style={{fontSize: 15}}>{item.label}</Text>
      <Text style={styles.fairBreakValue}>
        {item.value}
      </Text>
    </View>
    })
  }

  const renderPopOverItem = () => {
    return PopOverItem.map((item, index) => {
      return (
        <TouchableOpacity 
          onPress={() => setShowPopover(false)} 
          key={index}
          style={styles.popOverLabel}
          >
          <Text style={{fontSize:15, fontWeight:'800'}}>{item.label}</Text>
        </TouchableOpacity>
      )
    })
  }
  return (
    <FadeInView>
      <ScrollView>
        <View style={styles.header}>
          <Text style={{fontWeight: 'bold', fontSize: hp(3)}}>My Cart</Text>
          <IconButton color="red" icon={searchIcon} style={styles.searchIcon} onPress={() => props.navigation.navigate('OrderItems')}/>
          <View style={styles.myListIcon}>
          <Popover
            from={(
              <TouchableOpacity onPress={() => setShowPopover(true)}>
                <IconButton color="red" icon={myListIcon}  />
              </TouchableOpacity>
            )}
            isVisible={showPopover}
            onRequestClose={() => setShowPopover(false)}
          > 
            <View style={{backgroundColor:'#EEEBDD'}}>
              <Text style={styles.popOverHeading}>Add items from your list.</Text>
              {renderPopOverItem()}
            </View>
          </Popover> 
          </View>
             
        </View> 
        <View style={styles.offerBanner}>
          <Text>Add items worth ₹200 to save extra 5% off*</Text>
        </View>
        <View>{renderStore(STORE)}</View>
        <View>
          <FlatList
            data={DATA}
            renderItem={renderItems}
            keyExtractor={item => item.id}
            nestedScrollEnabled={true}
          />
        </View>
        <View>
          <View style={styles.totalFare}>
            <Text style={{fontSize: 20}}>
              Subtotal  
              <Text style={{fontSize: 25, fontWeight: 'bold'}}> ₹500</Text>
            </Text>
          </View>
          <View style={styles.fairBreak}>
            {renderFareBreakItems()}
          </View>
          <TouchableOpacity style={styles.checkOutButton} onPress = {() =>{props.navigation.navigate('SelectAddress')}}>
            <Text style={styles.checkOutText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </FadeInView>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    padding: hp(1),
    marginLeft: wp(2),
    marginTop: hp(1),
  },
  searchIcon: {
    position: 'absolute', 
    right: 10
  },
  myListIcon: {
    position: 'absolute', 
    right: 50
  },
  popOverLabel:{
    padding:10, 
    backgroundColor:'white', 
    marginVertical:5
  },
  popOverHeading:{
    fontSize:15, 
    fontWeight:'600',
    margin:10
  },
  offerBanner: {
    marginTop: hp(3),
    backgroundColor: '#F9E4C8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: hp(1),
  },
  totalFare: {
    elevation: 1,
    flex: 1,
    marginVertical: 8,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  fairBreak: {
    elevation: 1,
    flex: 1,
    marginVertical: 8,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  fairBreakValue:{
    position: 'absolute', 
    right: 15, 
    fontSize: 15
  },
  checkOutButton: {
    padding: 15,
    backgroundColor: 'green',
    width:wp(70),
    alignItems: 'center',
    alignSelf:'center',
    elevation: 5,
    borderRadius:8,
    margin:10
  },
  checkOutText: {
    color: 'white', 
    fontSize: 18, 
    fontWeight: 'bold'
  },
});
