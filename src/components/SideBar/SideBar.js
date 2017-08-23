/*
import React, { Component } from 'react';
import { Drawer } from 'native-base';
//import SideBar from './yourPathToSideBar';
export default class DrawerExample extends Component {
  render() {
    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()} >
      // Main View
      </Drawer>
    );
  }
}



class SideBar extends Component{
        constructor() {
            super();
        }
        render()
        {
            return(
                <View>
                    <Text>Home</Text>
                    <Text>Business</Text>
                    <Text>Featured</Text>
                    <Text>Commodities</Text>
                </View>
            );
        }
    }
*/


import React, { Component } from 'react';
import { View  } from 'react-native';
import { SideMenu, List, ListItem } from 'react-native-elements'
export default class SideBar extends Component{

constructor () {
  super()
  this.state = {
    isOpen: false
  }
  this.toggleSideMenu = this.toggleSideMenu.bind(this)
}

onSideMenuChange (isOpen: boolean) {
  this.setState({
    isOpen: isOpen
  })
}

toggleSideMenu () {
  this.setState({
    isOpen: !this.state.isOpen
  })
}

render () {

  const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  ]

  const MenuComponent = (
    <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 50}}>
      <List containerStyle={{marginBottom: 20}}>
      {
        list.map((l, i) => (
          <ListItem
            roundAvatar
            onPress={() => console.log('Pressed')}
            avatar={l.avatar_url}
            key={i}
            title={l.name}
            subtitle={l.subtitle}
          />
        ))
      }
      </List>
    </View>
  )

  return (
    <SideMenu
      isOpen={this.state.isOpen}
      onChange={this.onSideMenuChange.bind(this)}
      menu={MenuComponent}>
      <App toggleSideMenu={this.toggleSideMenu.bind(this)} />
    </SideMenu>
  )
}

}
