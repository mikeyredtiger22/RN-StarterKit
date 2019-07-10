import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Book from '../components/Book';
import { Button, Layout } from 'react-native-ui-kitten';

export default function IntroScreen(props) {
  return (
    <Layout style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={require('../assets/images/child-avatar.png')} />
        <Text style={styles.avatarText}>Hi Joseph</Text>
      </View>
      <Book style={styles.book}/>
      <Button style={styles.button} size='giant' appearance='outline' onPress={() => props.navigation.navigate('Page')}>
        START?
      </Button>
    </Layout>
  );
}

IntroScreen.navigationOptions = {
  title: 'Home',
  headerStyle: {
    backgroundColor: '#A13BFF',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
};

const styles = StyleSheet.create({
  button: {
    marginTop: 30
  },
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: "center"
  },
  avatarContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  avatar: {
    borderRadius: 50,
    width: 100,
    height: 100
  },
  avatarText: {
    textAlign: "center",
    fontSize: 40
  },
  book: {
    marginTop: 30
  }
});
