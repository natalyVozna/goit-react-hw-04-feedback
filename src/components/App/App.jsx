import { Component } from 'react';
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

// export const App = () => {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);
//   const [visible, setVisible] = useState(false);

//   const handlerClick = e => {
//     const { name } = e.target;

//     if (name) {
//       setVisible(true);
//       switch (name) {
//         case 'good':
//           setGood(prev => prev + 1);
//           break;
//         case 'neutral':
//           setNeutral(prev => prev + 1);
//           break;
//         case 'bad':
//           setBad(prev => prev + 1);
//           break;
//         default:
//           throw new Error();
//       }
//     }
//   };

//   const countTotalFeedback = () => {
//     return [good, neutral, bad].reduce(
//       (acc, num) => (typeof num === 'number' && !isNaN(num) ? acc + num : acc),
//       0
//     );
//   };

//   const countPositiveFeedbackPercentage = () => {
//     let rate = 0;

//     if (countTotalFeedback() && good) {
//       rate = (good / countTotalFeedback()) * 100;
//     }

//     return Math.round(rate);
//   };

//   return (
//     <Section title="Please leave feedback">
//       <FeedbackOptions
//         options={['good', 'neutral', 'bad']}
//         onLeaveFeedback={handlerClick}
//       ></FeedbackOptions>

//       <Statistics
//         visible={visible}
//         good={good}
//         neutral={neutral}
//         bad={bad}
//         total={countTotalFeedback()}
//         positivePercentage={countPositiveFeedbackPercentage()}
//       />
//     </Section>
//   );
// };
