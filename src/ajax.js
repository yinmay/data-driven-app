const apiHost = 'https://bakesaleforgood.com';
export default {
  async fetchInitialDeals(){
        
    try {
      const response = await fetch(
        apiHost + '/api/deals'
      );
      const responseJson = await response.json();
      // console.log(response);
      return responseJson;
    } catch (error) {
      console.error(error);
    }
    
  },
  async fetchDealDeals(dealId){
    try {
      const response = await fetch(
        apiHost + '/api/deals/'+dealId
      );
      const responseJson = await response.json();
      // console.log(response);
      return responseJson;
    } catch (error) {
      console.error(error);
    }
    
  }
};