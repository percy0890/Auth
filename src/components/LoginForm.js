import React, { Component } from 'react';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={(enteredEmail) => this.setState({ email: enteredEmail })} 
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="*******"
            label="Password"
            value={this.state.password}
            onChangeText={(enteredPwd) => this.setState({ password: enteredPwd })} 
          />
        </CardSection>
        <CardSection>
          <Button>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
