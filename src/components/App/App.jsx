import React from 'react';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';

export class App extends React.Component {
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
    const values = Object.values(this.state);
    const total = values.reduce((acc, num) => acc + num, 0);

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    let rate = 0;
    const total = this.countTotalFeedback();
    if (total && good) {
      rate = (good / total) * 100;
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
