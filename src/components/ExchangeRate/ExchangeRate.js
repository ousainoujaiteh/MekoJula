import React, { Component } from 'react';
import {  graphql, gql }  from 'react-apollo';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body ,Icon,Right} from 'native-base';

export default class ExchangeRate extends Component {

  static navigationOptions = {
    title: 'ExchangeRate',
  };

  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem>
              <Thumbnail square size={80} source={{ uri: 'http://facebook.github.io/react/img/logo_og.png' }} />
              <Body>
                <Text>United States</Text>
                <Text note>1 USD = GMB43</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={{ uri: 'http://facebook.github.io/react/img/logo_og.png' }} />
              <Body>
                <Text>United kingdom</Text>
                <Text note>1 USD = GMB60</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={{ uri: 'http://facebook.github.io/react/img/logo_og.png' }} />
              <Body>
                <Text>European Union</Text>
                <Text note>1 USD = GMB43</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={{ uri: 'http://facebook.github.io/react/img/logo_og.png' }} />
              <Body>
                <Text>Canada</Text>
                <Text note>1 USD = GMB43</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={{ uri: 'http://facebook.github.io/react/img/logo_og.png' }} />
              <Body>
                <Text>Switzerland</Text>
                <Text note>1 USD = GMB60</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={{ uri: 'http://facebook.github.io/react/img/logo_og.png' }} />
              <Body>
                <Text>Japan</Text>
                <Text note>1 USD = GMB43</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
