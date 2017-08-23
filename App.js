

/* import React, { Component } from 'react';

import { View, Text, Image, StyleSheet ,Button} from 'react-native';

import HeaderComponent from './src/components/HeaderComponent/HeaderComponent';

import BottomNavigation from './src/components/BottomNavigation/BottomNavigation';

import ListComponent from './src/components/ListComponent/ListComponent';

import ExchangeRate from './src/components/ExchangeRate/ExchangeRate';

import Commodities from './src/components/Commodities/Commodities';

import Main from './src/components/main/Main';

import SideBar from './src/components/SideBar/SideBar';

import TabComponent from './src/components/TabComponent/TabComponent';

import { StackNavigator } from 'react-navigation';

import { SideMenu, List, ListItem } from 'react-native-elements';



import { SearchBar } from 'react-native-elements';
export default class App extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <HeaderComponent/>
        </View>
        <View style={styles.content}>
        <Main />
        </View>
        <BottomNavigation />
        <SimpleApp />
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  ListComponent: {screen: ListComponent},
  ExchangeRate: { screen: ExchangeRate},
  Commodities:  {screen: Commodities}
});


const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column'
    },
    content:{
      flex:10,
      marginTop:50
    }
});
*/

class BNavigation extends Component {

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







import ListComponent from './src/components/ListComponent/ListComponent';
import Commodities from './src/components/Commodities/Commodities';
import BottomNavigation from './src/components/BottomNavigation/BottomNavigation';
import ExchangeRate from './src/components/ExchangeRate/ExchangeRate';
import Main from './src/components/main/Main';
import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Icon} from 'native-base';

import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

 class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          onPress={() => navigate('BottomNavigation')}
          title="Navigation"
        />
      </View>
    );
  }
}

const  SimpleAppNavigator = StackNavigator({
  Home:{screen: HomeScreen},
  ListComponent: { screen: ListComponent },
  Commodities: {screen: Commodities},
  BottomNavigation: {screen: BottomNavigation},
  ExchangeRate: {screen: ExchangeRate},
  Main:{ screen: Main},
  BNavigation:{screen: BNavigation}
});

const AppNavigation = () => (
  <SimpleAppNavigator  />
);

export default class App extends React.Component {
  render() {
    return (
        <AppNavigation/>
    );
  }
}
