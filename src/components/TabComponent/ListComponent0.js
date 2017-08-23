import React, { Component } from 'react';
import { View ,ListView, StyleSheet,ScrollView} from 'react-native';
import { List, ListItem,SearchBar} from 'react-native-elements';

export default class ListComponent extends Component{

  render(){

    const list = [
    {
      name: 'KamekoGambia',
      avatar_url: 'http://facebook.github.io/react/img/logo_og.png',
      subtitle: 'Software Development'
    },
    {
      name: 'KamekoGambia',
      avatar_url: 'http://facebook.github.io/react/img/logo_og.png',
      subtitle: 'Software Development'
    },
    {
      name: 'KamekoGambia',
      avatar_url: 'http://facebook.github.io/react/img/logo_og.png',
      subtitle: 'Software Development'
    },
    {
      name: 'KamekoGambia',
      avatar_url: 'http://facebook.github.io/react/img/logo_og.png',
      subtitle: 'Software Development'
    },
    {
      name: 'KamekoGambia',
      avatar_url: 'http://facebook.github.io/react/img/logo_og.png',
      subtitle: 'Software Development'
    },
    {
      name: 'KamekoGambia',
      avatar_url: 'http://facebook.github.io/react/img/logo_og.png',
      subtitle: 'Software Development'
    },
    {
      name: 'KamekoGambia',
      avatar_url: 'http://facebook.github.io/react/img/logo_og.png',
      subtitle: 'Software Development'
    },
    {
      name: 'KamekoGambia',
      avatar_url: 'http://facebook.github.io/react/img/logo_og.png',
      subtitle: 'Software Development'
    },
    {
      name: 'KamekoGambia',
      avatar_url: 'http://facebook.github.io/react/img/logo_og.png',
      subtitle: 'Software Development'
    },
    {
      name: 'KamekoGambia',
      avatar_url: 'http://facebook.github.io/react/img/logo_og.png',
      subtitle: 'Software Development'
    },
  ]
    return(
      <View>
      <View style={styles.search}>
      <SearchBar
        round
        lightTheme
        placeholder='search' />
      </View>
      <ScrollView>
      <List containerStyle={{marginBottom: 20}}>
       {
        list.map((l, i) => (
          <ListItem
            roundAvatar
            avatar={{uri:l.avatar_url}}
            key={i}
            title={l.name}
            subtitle={l.subtitle}
          />
        ))
      }
    </List>
    </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  search:{
    marginBottom:10
  }
});
