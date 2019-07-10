import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Button } from 'react-native-ui-kitten';

export default function Book(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image style={styles.bookImage} source={require('../assets/images/scooter.jpg')} />
      <Text style={styles.bookText}>{`Emma's\nScooter`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "grey",
    elevation: 10
  },
  avatarContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  bookImage: {
    width: 150,
    height: 200
  },
  bookText: {
    textAlign: "center",
    fontSize: 30,
    padding: 12
  },
});
