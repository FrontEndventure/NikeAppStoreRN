import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {AddItem, Item1} from '../../../assets';

const ProductItem = ({onPress, title}) => {
  return (
    <View style={{flexDirection: 'row', marginTop: 70}}>
      <View
        style={{
          marginVertical: 50,
          borderColor: 'red',
          borderWidth: 1,
          height: 220,
          width: 150,
          borderRadius: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image source={Item1} style={{height: 170, width: 120}} />
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'red',
            height: 35,
            width: '100%',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            alignItems: 'center',
            paddingHorizontal: 5,
          }}>
          {/* <Text>icon</Text> */}
          <TouchableOpacity onPress={onPress}>
            <Image source={AddItem} style={{height: 25, width: 25}} />
          </TouchableOpacity>

          <Text style={{marginLeft: 10}}>{title}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
