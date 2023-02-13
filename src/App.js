/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {Header, Item} from './component';
import {PersonFetch} from './assets';
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App: () => Node = () => {
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState([]);
  const [modal, setModal] = useState(false);
  // fetch
  const getDataJson = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    setData(data);
  };

  // axios
  const getDetailDataUser = async id => {
    const resWithAxios = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );
    const data = await resWithAxios.data;
    setDetail(data);
    setModal(true);
  };

  useEffect(() => {
    getDataJson();
  }, []);

  console.log('HASIL SET DATA : ', data);

  // axios
  return (
    <SafeAreaView style={styles.page}>
      <Header />
      <ScrollView vertical style={styles.scroll}>
        {data.map((item, index) => (
          <Item
            image={PersonFetch}
            username={item.username}
            name={item.name}
            onPress={() => getDetailDataUser(item.id)}
          />
        ))}
      </ScrollView>
      {modal && (
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 300,
              height: 300,
              backgroundColor: '#fff',
              borderWidth: 1,
              borderColor: '#44CFCB',
              paddingHorizontal: 15,
              paddingVertical: 15,
              borderRadius: 10,
              elevation: 10,
            }}>
            <TouchableOpacity onPress={() => setModal(false)}>
              <AntDesign name="close" size={24} color={'black'} />
            </TouchableOpacity>
            <Text>{detail.username}</Text>
            <Text>{detail.name}</Text>
            <Text>{detail.email}</Text>
            <Text>{detail.phone}</Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  txt: {
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    color: 'red',
  },
  scroll: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    marginTop: 15,
  },
});

export default App;
