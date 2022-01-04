import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {FadeInView} from '../../../../Navigators/Animation';
import {leftIcon, profileBackground} from '../../../../Assets/Image';
import {Data} from '../../../../Assets/itemJson';
import {IconButton} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Autocomplete from 'react-native-autocomplete-input';
import {fetchItems, SelectedItems, SelectedItem} from './swapi';

export default function (props) {
  
  const [allItems, setAllItems] = useState();
  const [query, setQuery] = useState('');
  const queriedItems = allItems?.query(query);
  const isLoading =
    allItems === null ? true : !allItems.length ;
  const placeholder = isLoading ? 'Loading data...' : 'Enter item name';
  
  useEffect(() => {
    (function fetchNames() {
      setAllItems(fetchItems.fetchName());
      
    })();
  }, []);

  

  return (
    <FadeInView>
      <View style={{width: wp(100), height: hp(100)}}>
        <ImageBackground
          style={{width: wp(100), flexDirection: 'row'}}
          source={profileBackground}>
          <IconButton
            icon={leftIcon}
            onPress={() => {
              props.navigation.goBack();
            }}
          />
          <Autocomplete
            editable={!isLoading}
            autoCorrect={false}
            data={
              queriedItems?.length === 1 && queriedItems[0].compareName(query)
                ? []
                : queriedItems
            }
            value={query}
            onChangeText={setQuery}
            placeholder={placeholder}
            flatListProps={{
              keyboardShouldPersistTaps: 'always',
              keyExtractor: (grocItem: SelectedItem) => grocItem.id,
              renderItem: ({item: {name}}: SelectedItem) => (
                <TouchableOpacity onPress={() => setQuery(name)}>
                  <Text style={styles.itemText}>{name}</Text>
                </TouchableOpacity>
              ),
            }}
          />
        </ImageBackground>

        <View style={styles.bottomText}>
          <Text style={{fontWeight: '600', fontSize: 15, margin: 10}}>
            *Add items to your cart and we will deliver them from the nearest
            store to you.
          </Text>
        </View>
      </View>
    </FadeInView>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    height: hp(10),
    padding: hp(1),
    marginLeft: wp(2),
  },

  bottomText: {
    padding: 5,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 10,
  },
});
