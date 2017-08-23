import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { StackNavigator } from 'react-navigation';


export default class BottomNavigation extends Component {

   static navigationOptions = {
     title: 'BottomNavigation'
   }
  render() {
    const  { navigate }  = this.props.navigation;
    return (
      <Container>
        <Content />
        <Footer>
          <FooterTab>
            <Button vertical
              onPress={() => navigate('Main')}
            >
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button vertical
              onPress={() => navigate('ListComponent')}
            >
              <Icon name="grid" />
              <Text>Goods</Text>
            </Button>
            <Button vertical
              onPress={() => navigate('ExchangeRate')}
            >
              <Icon active name="star-half" />
              <Text>Rates</Text>
            </Button>
            <Button vertical
              onPress={() => navigate('Commodities')}
            >
              <Icon name="menu" />
              <Text>Business</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
