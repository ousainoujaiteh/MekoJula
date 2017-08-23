import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import Commodities from './Commodities';
import ExchangeRate from './ExchangeRate';
//import ListComponent from './ListComponent';
 class TabComponent extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs/>
        <Tabs>
          <Tab heading={ <TabHeading><Icon name="home" /><Text>Home</Text></TabHeading>}>
            <Commodities />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="grid" /><Text>Goods</Text></TabHeading>}>
            <ExchangeRate />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="home" /><Text>Rates</Text></TabHeading>}>
            <ListComponent />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="menu" /><Text>Business</Text></TabHeading>}>
            <ListComponent />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
