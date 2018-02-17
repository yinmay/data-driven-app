import React, { Component } from 'react';
import {  View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class DealItem extends Component {
    static propTypes={
      deal: PropTypes.object.isRequired,
    }

    _price(price){
      return `$${price/100}`;
    }
    render() {
      const {deal} = this.props;
      return (
        <View style={styles.deal}>
          
          <Image source={{uri:deal.media[0]}}
            style={styles.image}
          />
          <View style={styles.info}>
            <Text style={styles.title}> {deal.title} </Text>
            <View style={styles.footer}>
              <Text style={styles.price}> {this._price(deal.price)} </Text>
              <Text style={styles.cause}> {deal.cause.name} </Text>
            </View>
          </View>
        </View>

      );
    }
}
const styles=StyleSheet.create({
  deal:{
    marginHorizontal: 12,
    marginTop: 12,
  },
  image:{
    width:'100%',
    height:150,
    backgroundColor:'#ccc'
  },
  info:{
    padding:10,
    backgroundColor:'#fff',
    borderColor:'#bbb',
    borderWidth: 1,
    borderTopWidth: 0,
  },
  title:{
    fontSize:16,
    fontWeight:'bold',
    marginBottom:5,
  },
  footer:{
    flexDirection: 'row',
      
  },
  cause:{
    flex:2
  },
  price:{
    flex:1,
    textAlign:'right'
  }
});
