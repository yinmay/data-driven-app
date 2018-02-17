const apiHost = 'https://bakesaleforgood.com';
export default {
  async fetchInitialDeals(){
        
    try {
      let response = await fetch(
        apiHost + '/api/deals'
      );
      let responseJson = await response.json();
      // console.log(response);
      return responseJson;
    } catch (error) {
      console.error(error);
    }
    
  }
};