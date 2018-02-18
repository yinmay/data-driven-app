import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DealList from './src/DealList';
import DealDetail from './src/DealDetail';
import ajax from './src/ajax';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      deals:[],
      currentDealId:null,
    };
  }
  async componentDidMount() {
    const deals =  await ajax.fetchInitialDeals();
    this.setState({deals});
       
  }
  setCurrentDeal=(dealId)=>{
    this.setState({currentDealId:dealId});
  }
  currentDeal=()=>{
    return this.state.deals.find(
      (deal)=>deal.key === this.state.currentDealId
    );
  }
  render() {
    if(this.state.currentDealId){
      return <DealDetail initialDealData={this.currentDeal()} />;
    }
    if(this.state.deals.length>0){
      return <DealList deals={this.state.deals}
        onItemPress={this.setCurrentDeal}
      />;
    }
    return (
      <View style={styles.container}>
        {/* {'data-driven-app'} */}
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
