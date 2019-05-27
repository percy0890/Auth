import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null };
  
  componentWillMount() {
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: 'AIzaSyCo9d_DibVWqhUSRZj4o1wsde0lAjL1jc0',
      authDomain: 'auth-c42b1.firebaseapp.com',
      databaseURL: 'https://auth-c42b1.firebaseio.com',
      projectId: 'auth-c42b1',
      storageBucket: 'auth-c42b1.appspot.com',
      messagingSenderId: '160792416639',
      appId: '1:160792416639:web:d75b7341f6108ac3'
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size={'large'} />;  

    }
  }

  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        <View>
          {this.renderContent()}
        </View>
      </View>
    );
  }
}

export default App;
