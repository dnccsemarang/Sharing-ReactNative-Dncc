import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Header = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="rocket1" size={36} color="#FFB865" />
      <Text style={styles.txt}>Sharing With Dncc</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E8E9ED',
  },
  txt: {
    fontSize: 20,
    color: 'black',
    marginLeft: 10,
  },
});
