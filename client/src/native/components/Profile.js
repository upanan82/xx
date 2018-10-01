import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import {
  Container, Content, List, ListItem, Body, Left, Text, Icon,
} from 'native-base';
import { Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from './Header';

const Profile = ({ member, logout }) => (
  <Container>
    <Content>
      <List>
        {(member && member.email)
          ? (
            <View>
              <Content padder>
                <Header
                  title={`Test`}
                  content={`Admin`}
                />
              </Content>

              <ListItem onPress={Actions.updateProfile} icon>
                <Left>
                  <Icon name="person-add" />
                </Left>
                <Body>
                  <Text>
                    Update My Profile
                  </Text>
                </Body>
              </ListItem>
              <ListItem onPress={logout} icon>
                <Left>
                  <Icon name="power" />
                </Left>
                <Body>
                  <Text>
                    Logout
                  </Text>
                </Body>
              </ListItem>
            </View>
          )
          : (
            <View>
              <Content padder>
              <Image
                source={{ uri: 'https://static.thenounproject.com/png/630729-200.png' }}
                style={{
                  height: 120,
                  width: 120,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  borderRadius: 120,
                  flex: 1
                }}
              />
                <Header
                  title="Test"
                  content="(Admin)"
                />
              </Content>

              <ListItem onPress={Actions.home11} icon>
                <Left>
                  <Icon name="power" />
                </Left>
                <Body>
                  <Text>
                    Logout
                  </Text>
                </Body>
              </ListItem>
              {/* <ListItem onPress={Actions.signUp} icon>
                <Left>
                  <Icon name="add-circle" />
                </Left>
                <Body>
                  <Text>
                    Sign Up
                  </Text>
                </Body>
              </ListItem>
              <ListItem onPress={Actions.forgotPassword} icon>
                <Left>
                  <Icon name="help-buoy" />
                </Left>
                <Body>
                  <Text>
                    Forgot Password
                  </Text>
                </Body>
              </ListItem> */}
            </View>
          )
        }
        <ListItem onPress={Actions.locale} icon>
          <Left>
            <Icon name="ios-flag" />
          </Left>
          <Body>
            <Text>
              Change Language
            </Text>
          </Body>
        </ListItem>
      </List>
    </Content>
  </Container>
);

Profile.propTypes = {
  member: PropTypes.shape({}),
  logout: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  member: {},
};

export default Profile;
