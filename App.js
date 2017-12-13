import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './src/components/index';
import LoginForm from './src/components/LoginForm';

class App extends Component {

  state={ loggedIn: null };

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBlDO0xlCJIn20HcLEHt5AfevJA16USuHk',
      authDomain: 'rnauth-55bf9.firebaseapp.com',
      databaseURL: 'https://rnauth-55bf9.firebaseio.com',
      projectId: 'rnauth-55bf9',
      storageBucket: '',
      messagingSenderId: '202633739790'
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => { firebase.auth().signOut(); }}>Log out</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }
  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
