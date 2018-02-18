import React, { Component } from 'react';
import {  View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import ajax from './ajax';

export default class DealDetail extends Component {
    static propTypes={
      initialDealData: PropTypes.object.isRequire
    }

    state={
      deal:this.props.initialDealData,
    };
    
    async componentDidMount(){
      const fullDeal = await ajax.fetchDealDeals(this.state.deal.key);
      //   console.log(fullDea);
      this.setState({deal:fullDeal});
    }

    _price(price){
      return `$${price/100}`;
    }
    handlePress=()=>{
      this.props.onPress(this.props.deal.key);
    }

    render() {
      const {deal} = this.state;
      return (
        <View style={styles.deal} onPress={this.handlePress}>
          
          <Image source={{uri:deal.media[0]}}
            style={styles.image}
          />
          <Text style={styles.title}> {deal.title} </Text>
          <View style={styles.info}>
            
            <View style={styles.footer}>
              <Text style={styles.price}> {this._price(deal.price)} </Text>
              <Text style={styles.cause}> {deal.cause.name} </Text>
              
             
            </View>
            {deal.user && ( <View style={styles.user}>
              <Image source={{uri:deal.user.avatar}} style={styles.avatar} />
              <Text>
                {deal.user.name}
              </Text>

            </View>)}
          </View>
          
          <View style={styles.description}>
            <Text>
              {deal.description}
            </Text>
            
          </View>
        </View>

      );
    }
}
const styles=StyleSheet.create({
  deal:{
    marginHorizontal: 12,
    marginTop:50,
    borderColor:'#bbb',
    borderWidth: 1,
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
    flexDirection: 'row',
    justifyContent:'space-around',
  },
  title:{
    width:'100%',
    fontSize:16,
    padding:10,
    fontWeight:'bold',
    backgroundColor:'rgba(237,149,45,0.4)'
  },
  footer:{
    justifyContent:'space-around',
    alignItems: 'center',
    marginTop: 15,
    flex:1,     
  },
  price:{
    textAlign:'center',
    fontWeight:'bold',
  },
  user:{
    flex:1,
    alignItems: 'center',
  },
  avatar:{
    width:60,
    height:60,
   
  },
  description:{
    padding:20
  }
});

