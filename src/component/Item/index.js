import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Item = ({username, name, image, onPress}) => {
  return (
    <TouchableOpacity style={styles.content} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <View>
        <Text style={styles.txt}>{username}</Text>
        <Text style={styles.txt2}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 80,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e2e2',
    borderRadius: 5,
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 50,
  },
  txt: {
    fontSize: 16,
    color: '#1D2132',
    fontFamily: 'Poppins-bold',
  },
  txt2: {
    fontSize: 12,
    color: '#8A899C',
    fontFamily: 'Poppins-bold',
  },
});
