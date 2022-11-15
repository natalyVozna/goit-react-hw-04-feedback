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
    let rate = 0;
    const total = this.countTotalFeedback();
    if (total && this.state.good) rate = (this.state.good / total) * 100;

    return Math.round(rate);
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handlerClick}
        ></FeedbackOptions>
        <Statistics
          visible={this.state.visible}
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  }
}
