import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  ICFavoriteActive,
  ICFavoriteInActive,
  ICHomeActive,
  ICHomeInActive,
  ICPersonActive,
  ICPersonInActive,
} from '../../../assets';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <ICHomeActive /> : <ICHomeInActive />;
    }
    if (title === 'Favorite') {
      return active ? <ICFavoriteActive /> : <ICFavoriteInActive />;
    }
    if (title === 'Profile') {
      return active ? <ICPersonActive /> : <ICPersonInActive />;
    }
    return <ICHomeActive />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: active => ({
    fontSize: 10,
    marginTop: 4,
    color: active ? 'black' : 'white',
  }),
});
