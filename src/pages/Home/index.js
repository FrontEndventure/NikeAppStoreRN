import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {AddItem, Carousel1, ICShoppingCart, Item1} from '../../assets';
import {ProductItem} from '../../components/molecules';

const Home = () => {
  // State to store count value
  const [count, setCount] = useState(0);
  const [title, Settitle] = useState('');

  // Function to increment count by 1
  const incrementCount = () => {
    // Update state with incremented value
    setCount(count + 1);
    ToastAndroid.show(`${count + 1} Nike Vapormax  Added!`, ToastAndroid.SHORT);

    console.log('ini dihitung', count);
  };
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
          <View style={{borderWidth: 2}}>
            {count > 0 && (
              <View
                style={{
                  backgroundColor: 'red',
                  width: 20,
                  alignItems: 'center',
                  position: 'absolute',
                  left: 25,
                  borderRadius: 20 / 2,
                }}>
                <Text>{count}</Text>
              </View>
            )}

            <Image source={ICShoppingCart} style={{height: 30, width: 30}} />
          </View>
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

        <ProductItem title="Nike Product" onPress={incrementCount} />
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
