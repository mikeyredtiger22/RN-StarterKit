import React from 'react';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';
import WordPrintDelay from '../components/WordPrintDelay';

const words1 = "Emma rips off tape.";
const words2 = "Emma likes to...";

export default function IntroScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.coverImage} resizeMode={'cover'} source={require('../assets/images/tape.jpg')} />
      <View style = {styles.typingTextBg}>
        <WordPrintDelay
          words={[words1.split(" "), words2.split(" ")]} // Text which will be displayed as typed text.
          highlightWord={"vape"}
          color="black" // Color of the text and blinking cursor.
          textSize={30} // Font size of text and blinking cursor.
          typingAnimationDuration={500} // Duration between previous and newly typed character.
          blinkingCursorAnimationDuration={1000} // Duration of blinking animation for cursor.
        />
      </View>
    </View>
  );
}

IntroScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  coverImage: {
    alignItems: 'stretch',
    width: '100%',
    height: 200
  },
  typingTextBg: {
    paddingHorizontal: 10,
    paddingTop: 10
  },
});
