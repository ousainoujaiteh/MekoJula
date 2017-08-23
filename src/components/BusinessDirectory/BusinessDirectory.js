
import React, { Component } from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';

import HeaderComponent from './HeaderComponent';

import BottomNavigation from './BottomNavigation';

import ListComponent from './ListComponent';

import { ApolloProvider, creatNetworkInterface, ApolloClient } from 'react-apollo';


//const networkInterface = creatNetworkInterface ({uri: 'https://api.graph.cool/simple/v1/cj69r3xxs0bd80138szew1ach'});
//const client = new ApolloClient({networkInterface});


export default class App extends Component {

  render() {
    return(
      <View style={styles.container}>
        <View  style={styles.header}>
          <HeaderComponent/>
        </View>
        <View  style={styles.content}>
        <ListComponent />
        </View>
        <BottomNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column'
    },
    content:{
      flex:10,
    }
});
