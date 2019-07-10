import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

export default class WordPrintDelay extends Component {
  constructor(props) {
    super(props);

    this.index = 0;
    this.typing_timer = -1;
    this.state = {text: ''};
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

    if (this.index < this.props.words.length) {
      if (this.refs.animatedText) {
        this.setState({text: this.state.text + this.props.words[this.index] + " "}, () => {
          this.index++;

          this.typing_timer = setTimeout(() => {
            this.typingAnimation();
          }, this.props.typingAnimationDuration);
        });
      }
    }
  };

  render() {
    return (
      <Text ref="animatedText"
        style={{color: this.props.color, fontSize: this.props.textSize,
          textAlign: 'left',
          paddingHorizontal: 10,
          paddingTop: 10
        }}>{this.state.text}
      </Text>
    );
  }
}

WordPrintDelay.propTypes = {
  words: PropTypes.array,
  typingAnimationDuration: PropTypes.number,
};

WordPrintDelay.defaultProps = {
  words: ["Hello", "World", "1", "2", "3."],
  typingAnimationDuration: 500,
};
