import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-ui-kitten';


export default class WordPrintDelay extends Component {
  constructor(props) {
    super(props);

    this.index = 0;
    this.typing_timer = -1;
    this.state = {
      text: '',
      finished: false,
      highlightWordColor: 'black',
      showNext: false
    };
    this.words = props.sentence.split(" ");
  }

  componentDidMount() {
    this.typingAnimation();
  }

  componentWillUnmount() {
    clearTimeout(this.typing_timer);
    this.typing_timer = -1;
  }

  typingAnimation = () => {
    clearTimeout(this.typing_timer);

    this.typing_timer = -1;

    if (this.index < this.words.length) {
      if (this.refs.animatedText) {
        this.setState({text: this.state.text + this.words[this.index] + " "}, () => {
          this.index++;

          this.typing_timer = setTimeout(() => {
            this.typingAnimation();
          }, this.props.typingAnimationDuration);
        });
      }
    } else {
      this.showHighlightWord();
    }
  };

  showHighlightWord = () => {
    setTimeout(() => {
      this.setState({finished: true});
    }, this.props.typingAnimationDuration);
    setTimeout(() => {
      this.setState({highlightWordColor: '#00c807'})
    }, 1500);
    setTimeout(() => {
      this.setState({showNext: true})
    }, 2000);
  };

  render() {
    return (
      <View>
        <Text ref="animatedText" style={styles.text}>
          {this.state.text}
        </Text>
        {this.state.finished && (
          <Text style={[styles.highlightText, {color: this.state.highlightWordColor}]}>{this.props.word}</Text>
        )}
        {this.state.showNext && (
          <View>
            <Button style={styles.button} size='giant' appearance='outline' onPress={this.props.prevPage}>
              Prev
            </Button>
            <Button style={styles.button} size='giant' appearance='outline' onPress={this.props.nextPage}>
              Next
            </Button>
          </View>
        )}
      </View>
    );
  }
}

WordPrintDelay.propTypes = {
  sentence: PropTypes.string,
  word: PropTypes.string,
  phonic: PropTypes.string,
  typingAnimationDuration: PropTypes.number,
  nextPage: PropTypes.func,
  prevPage: () => {}
};

WordPrintDelay.defaultProps = {
  sentence: "Hello World",
  word: "words",
  phonic: "w ur d",
  typingAnimationDuration: 500,
  nextPage: () => {},
  prevPage: () => {}
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'left',
    paddingHorizontal: 10,
    paddingTop: 10
  },
  highlightText: {
    fontSize: 80,
    textAlign: 'center',
    paddingTop: 50
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
  button: {
    marginTop: 40
  }
});
