import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input, Spinner } from './index';

class LoginForm extends Component {
    state={ email: '', password: '', error: '', loading: false };

    onButtonPress() { 
        this.setState({ error: '', loading: true });
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.loginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(this.loginSuccess.bind(this))   
                .catch(() => {
                        this.setState({ error: 'Authentication failed', loading: false });
                    });
            });
    }
    loginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }
    renderButton() {
        if (this.state.loading) {
            return (
                <Spinner />
            );
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                LOG IN
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder='Enter Email'
                        label='Email'
                        Value={this.state.email}
                        onChangeText={text => { this.setState({ email: text }); }}
                        underlineColorAndroid='transparent'
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder='password'
                        label='Password'
                        value={this.state.password}
                        onChangeText={password => { this.setState({ password }); }}
                        underlineColorAndroid='transparent'
                    />
                </CardSection>
                
                <Text style={styles.errorTextStyle}>{this.state.error}</Text>

                <CardSection>
                    {this.renderButton()}    
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;
