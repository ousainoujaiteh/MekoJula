import React, { Component } from 'react';
import { Image ,View,TouchableHighlight,StyleSheet} from 'react-native';
import { Container, Header, Content, CardItem, Thumbnail, Text, Button, Icon, Left, Body,Right ,List,ListItem,Fab} from 'native-base';
import { Constant , MapView } from 'expo';
import { Card , Rating} from 'react-native-elements';
export default class Main extends Component {

  static navigationOptions = {
    title: 'Main',
  };



  constructor(){
    super();
    this.state = {
      active:'true',
      mapRegion: {
        latitude:  13.443182,longtitude: -15.310138999999936, latitudeDelta: 0.0922,
        longtitudeDelta: 0.0421
      }
    };
  }

_handleMapRegionChange = mapRegion => {
  this.setState({mapRegion});
}


  render() {
    return (
      <Container>
      <View style={ styles.Icontainer }>
         <Image source={{uri: 'http://puu.sh/mJ1ZP/6f167c37e5.png'}} style={styles.backgroundImage} >
           <View style={ styles.loginForm }>
             <Text style={ styles.text }>Name dhdjfdiureiuriugropifuiruiriuriu</Text>
            <Rating
              showRating
              type="star"
              fractions={1}
              startingValue={2}
              imageSize={30}
              onFinishRating={this.ratingCompleted}
              style={{ paddingVertical: 10 }}
            />
           </View>
          </Image>
       </View>
        <Content>
          <Card style={{flex: 1}}>
            <View style={styles.container}>
                 <View style={[styles.box, styles.box1]}>
                      <List>
                        <ListItem itemDivider>
                          <Text style={{fontSize: 20,fontWeight:'bold'}}>Products / Services</Text>
                        </ListItem>
                        <ListItem >
                          <Text>Software Development</Text>
                        </ListItem>
                        <ListItem >
                          <Text>Software Development</Text>
                        </ListItem>
                        <ListItem >
                          <Text>Software Development</Text>
                        </ListItem>
                        <ListItem >
                          <Text>Software Development</Text>
                        </ListItem>
                      </List>
                 </View>
             </View>
            <List style={{marginTop:-50}}>
            <ListItem itemDivider>
              <Text style={{fontSize: 20,fontWeight:'bold'}}>Contact us</Text>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="grid" />
              </Left>
              <Body>
                <Text>Category</Text>
              </Body>
              <Right>
                <Text>Software Development</Text>
              </Right>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Icon name="ios-call" />
                </Left>
                <Body>
                  <Text>Call us</Text>
                </Body>
                <Right>
                  <Text>498404087</Text>
                </Right>
                </ListItem>
                <ListItem icon>
                  <Left>
                    <Icon name="home" />
                  </Left>
                  <Body>
                    <Text>Email</Text>
                  </Body>
                  <Right>
                    <Text>business@gmail.com</Text>
                  </Right>
                  </ListItem>
                </List>

                <MapView
                  style={{alignSelf:'stretch' , height:200}}
                  region={this.state.mapRegion}
                  onRegionChange={this._handleMapRegionChange}
                />
            <Text style={{marginTop:30, fontSize: 20,fontWeight:'bold'}}>Follow us on</Text>
            <View style={{marginTop:55}}>
              <Fab
                active={this.state.active}
                direction="left"
                containerStyle={{ }}
                style={{ backgroundColor: '#5067FF' }}
                position="bottomRight"
                onPress={() => this.setState({ active: !this.state.active })}>
                <Icon name="share" />
                <Button style={{ backgroundColor: '#34A34F' }}>
                  <Icon name="logo-whatsapp" />
                </Button>
                <Button style={{ backgroundColor: '#3B5998' }}>
                  <Icon name="logo-facebook" />
                </Button>
                <Button disabled style={{ backgroundColor: '#DD5144' }}>
                  <Icon name="mail" />
                </Button>
              </Fab>
            </View>
          </Card>
        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between', //replace with flex-end or center
    borderBottomWidth: 1,
    borderBottomColor: '#000'
  },
  box1: {
    flex:1,

  },
  Icontainer: {
     flex: 1,
   },

   backgroundImage: {
     flex: 1,
     resizeMode: 'stretch', // or 'stretch',
     justifyContent: 'center',
   },

   loginForm: {
     backgroundColor: 'transparent',
     alignItems: 'center',
   },

   text: {
     fontSize: 18,
     color: 'white',
     fontWeight:'bold'

   }
});
