import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Title = ({text}) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>{text}</Text>
    </View>
  );
};

const MyImage = ({source}) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={source} style={styles.image} />
    </View>
  );
};

const Screen = () => {
  const scanner = require('./images/Scanner.png');  
  return (
    <View style={styles.screenContainer}>
      <Title text="Receipt Scanner" />
      <Image source={scanner} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    margin: 16,
  },
  titleText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  imageContainer: {
    margin: 16,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default Screen;
