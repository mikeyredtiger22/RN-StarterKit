import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';
import WordPrintDelay from '../components/WordPrintDelay';

const book = [
  { sentence: "Mike rides a bike and flies a",        word: "kite", phonics: "K igh t"},
  { sentence: "The kite flies high in the",           word: "sky",  phonics: "s k igh"},
  { sentence: "He rides with his kite above his",     word: "bike", phonics: "b igh k"},
  { sentence: "And never knew his kite could fly s",  word: "high", phonics: "h igh"}];


export default function IntroScreen(props) {
  const [page, setPage] = useState(0);

  function nextPage() {
    if (page < book.length) {
      setPage(page + 1);
    }
  }

  function prevPage() {
    if (page > 0) {
      setPage(page - 1);
    }
  }

  return (
    <View style={styles.container}>
      <Image style={styles.coverImage} resizeMode={'cover'} source={require('../assets/images/tape.jpg')} />
      <View style = {styles.typingTextBg}>
        <WordPrintDelay
          key={book[page].word}
          {...book[page]}
          nextPage={nextPage}
          prevPage={prevPage}
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
