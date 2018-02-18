import React, { Component } from 'react';
import {  View, Text,TextInput , StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

export default class SearchBar extends Component {
    static propTypes={
      searchDeals:PropTypes.func.isRequired,
    }
    state={
      searchTerm:''
    }
    debounceSearchDeals = debounce(this.props.searchDeals, 300)
    handleChange=(searchTerm)=>{
      this.setState({searchTerm},()=>{
        this.debounceSearchDeals(this.state.searchTerm);
      });
    }
    render() {
      return (
    
        <TextInput 
          onChangeText={this.handleChange}
          placeholder="search"
          style={styles.input}
        />
     
      );
    }
}
const styles=StyleSheet.create({
  input:{
    height:40,
    marginHorizontal: 12,
  }
});
