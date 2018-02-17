import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DealList from './src/DealList';
import ajax from './src/ajax';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      deals:[]
    };
  }
  async componentDidMount() {
    const deals =  await ajax.fetchInitialDeals();
    this.setState({deals});
    
   

    
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.deals.length>0 && <DealList deals={this.state.deals}/>} 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
