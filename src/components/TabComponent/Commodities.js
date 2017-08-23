import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import { Table, TableWraper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { List, ListItem } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';
export default class Commodities extends Component {
  render() {
    const tableHead = ['Commodity', 'Retail Price (GMB)', 'WholeSale (GMB)'];
        const tableData = [
          ['American Rice', '1131', '1102'],
          ['Indian Rice', '960', '975'],
          ['Pakistan Rice', '990', '953'],
          ['Sadam Rice', '1376', '1250'],
          ['Sugar Rice', '1340', '1300'],

        ];

    return (
      <View style={styles.container}>
          <View style={styles.search}>
          <SearchBar
            round
            lightTheme
            placeholder='Type Here...' />
          </View>
          <View>
            <Table>
              <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
              <Rows data={tableData} style={styles.row} textStyle={styles.text}/>
            </Table>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column'
  },
  search:{
    marginBottom:10
  },
  head: { height: 40, backgroundColor: '#A9EAFF' },
  text: { marginLeft: 5 },
  row: { height: 30 }
});
