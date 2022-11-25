import React, { Component } from 'react';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    visible: false,
  };

  handlerClick = e => {
    const { textContent } = e.target;
    const nameBtn = textContent.toLowerCase();

    if (nameBtn) {
      this.setState(prevState => {
        return {
          [nameBtn]: prevState[nameBtn] + 1,
          visible: true,
        };
      });
    }
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (acc, num) => (typeof num === 'number' && !isNaN(num) ? acc + num : acc),
      0
    );
  };
  // ckdc

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    let rate = 0;

    if (this.countTotalFeedback() && good) {
      rate = (good / this.countTotalFeedback()) * 100;
    }

    return Math.round(rate);
  };

  render() {
    const { good, neutral, bad, visible } = this.state;

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handlerClick}
        ></FeedbackOptions>

        <Statistics
          visible={visible}
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  }
}
