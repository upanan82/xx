import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Content, Form, Item, Label, Input, Text, Button, H1, H3, View,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Loading from './Loading';
import Messages from './Messages';
import { translate } from '../../i18n';
import Header from './Header';
import Spacer from './Spacer';

class Login extends React.Component {
  static propTypes = {
    member: PropTypes.shape({
      email: PropTypes.string,
    }),
    locale: PropTypes.string,
    error: PropTypes.string,
    success: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
  }

  static defaultProps = {
    error: null,
    success: null,
    locale: null,
    member: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (name, val) => {
    this.setState({
      [name]: val,
      error: ''
    });
  }

  // handleSubmit = () => {
  //   const { onFormSubmit } = this.props;
  //   onFormSubmit(this.state)
  //     .then(() => Actions.pop())
  //     .catch(e => console.log(`Error: ${e}`));
  // }

  handleSubmit = () => {
    if (this.state.email === 'test' && this.state.password === 'test') {
      this.setState({
        password: '',
        email: ''
      });
      Actions.tabbar();
    }
    else {
      const x = <Messages message="Invalid credentials" />;
      this.setState({
        error: x
      });
    }
  }

  render() {
    const {
      loading,
      error,
      success,
      locale,
    } = this.props;
    const { email, password } = this.state;

    if (loading) return <Loading />;

    return (
      <Container style={{}}>
        <Content style={{paddingTop: '50%'}}>
          <View padder>
            <H1 style={{textAlign: 'center', marginBottom: '5%'}}>
              Blue Oyster
            </H1>
            {/* { success ? <Messages type="success" message={success} /> : null }
            { error ? <Messages message={error} /> : null } */}
            {this.state.error}
          </View>

          <Form>
            <Item stackedLabel>
              <Label>
                {translate('Username', locale)}

              </Label>
              <Input
                autoCapitalize="none"
                value={email}
                // keyboardType="email-address"
                onChangeText={v => this.handleChange('email', v)}
              />
            </Item>
            <Item stackedLabel>
              <Label>
                {translate('Password', locale)}
              </Label>
              <Input
                secureTextEntry
                value={password}
                onChangeText={v => this.handleChange('password', v)}
              />
            </Item>

            <Spacer size={20} />

            <View padder>
              <Button block onPress={this.handleSubmit}>
                <Text>
                  {translate('Login', locale)}
                </Text>
              </Button>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Login;
