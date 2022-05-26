import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {AddItem, Carousel1, ICShoppingCart, Item1} from '../../assets';

const Home = () => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        // backgroundColor: '#F2F2F2',
        backgroundColor: 'yellow',
        flex: 1,
        borderTopRightRadius: 250,
        justifyContent: 'space-between',
      }}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          <Text>Burger</Text>
          <Image source={ICShoppingCart} style={{height: 30, width: 30}} />
          {/* <Text>add to cart</Text> */}
        </View>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginVertical: 20}}>
          Nike App Store
        </Text>
        <View style={{marginHorizontal: -20}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={Carousel1}
                style={{width: 250, height: 100, marginRight: 5}}
              />
              <Image source={Carousel1} style={{width: 250, height: 100}} />
              <Image source={Carousel1} style={{width: 250, height: 100}} />
            </View>
          </ScrollView>
        </View>
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
              <Image source={AddItem} style={{height: 25, width: 25}} />

              <Text style={{marginLeft: 10}}>Nike Vapormax</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>Home</Text>
        <Text>whistlist</Text>
        <Text>Profile</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
