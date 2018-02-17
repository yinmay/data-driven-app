import React, { Component } from 'react';
import {  View, Text,StyleSheet, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import DealItem from './DealItem';


class DealList extends Component {
  static PropTypes={
    deals:PropTypes.array.isRequired
  }
  render() {
    return (
      <View style={styles.list}>

        <FlatList
          data={this.props.deals}
          renderItem={({item}) => <DealItem deal={item}/>}
        />
      </View>
    );
  }
}
export default DealList;

const styles = StyleSheet.create({
  list:{
    backgroundColor:'#eee',
    flex:1,
    width:'100%',
    paddingTop:50,
  }
});