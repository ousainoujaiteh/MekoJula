iimport React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';
export default class List extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem>
              <Thumbnail square size={80} source={{ uri: 'http://facebook.github.io/react/img/logo_og.png' }} />
              <Body>
                <Text>KamekoGambia</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={{ uri: 'http://facebook.github.io/react/img/logo_og.png' }} />
              <Body>
                <Text>KamekoGambia</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={{ uri: 'http://facebook.github.io/react/img/logo_og.png' }} />
              <Body>
                <Text>KamekoGambia</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>

    );
  }
}
