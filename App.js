import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import DealList from './src/DealList';
import DealDetail from './src/DealDetail';
import SearchBar from './src/SearchBar';
import ajax from './src/ajax';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      deals:[],
      dealsFormSearch:[],
      currentDealId:null,
    };
  }
  async componentDidMount() {
    const deals =  await ajax.fetchInitialDeals();
    this.setState({deals});
  }
  searchDeals = async (searchTerm)=>{
    let dealsFormSearch = [];
    if(searchTerm){
      dealsFormSearch =  await ajax.fetchDealsSearchResults(searchTerm);
    }
    this.setState({dealsFormSearch});
  }

  setCurrentDeal=(dealId)=>{
    this.setState({currentDealId:dealId});
  }
  unsetCurrentDeal=(dealId)=>{
    this.setState({currentDealId:null});
  }
  currentDeal=()=>{
    return this.state.deals.find(
      (deal)=>deal.key === this.state.currentDealId
    );
  }
 
  render() {

    if(this.state.currentDealId){
      return <DealDetail 
        initialDealData={this.currentDeal()}
        onBack={this.unsetCurrentDeal}
      />;
    }
    const dealsToDisplay = 
    this.state.dealsFormSearch.length>0?
      this.state.dealsFormSearch:this.state.deals;

    if(dealsToDisplay.length>0){
      return (
        <View style={styles.main}>
          <SearchBar searchDeals = {this.searchDeals}/>
          <DealList deals={dealsToDisplay}
            onItemPress={this.setCurrentDeal}
          />
        </View>
        
      );
    }
    return (
      <View style={styles.container}>
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
  main:{
    marginTop: 40,
  }
});
