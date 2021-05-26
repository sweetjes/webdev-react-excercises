import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import PhoneInput from './components/PhoneInput';
import Input from './components/Input';
import Button from './components/Button';

class App extends React.Component {
  state = {
    isNumberValid: false,
    isSent: false
  };

  verifyNumber = isValid => {
    this.setState({ isNumberValid: isValid });
  };

  render() {
    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          if (this.state.isNumberValid) {
            this.setState({ isSent: true });
          }
        }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '250px',
          margin: '0 auto'
        }}
      >
        <PhoneInput
          verifyNumber={this.verifyNumber}
          isSent={this.state.isSent}
        />
        {this.state.isSent ? (
          <React.Fragment>
            <Input placeholder="SMS" />
            <Button text="Подтвердить" />
          </React.Fragment>
        ) : (
            <Button text="Отправить" />
          )}
      </form>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
