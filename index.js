module.exports = function NoChatEventHighlight(dispatch) {	 
  
    dispatch.hook('S_ONGOING_HUNTING_EVENT_LIST',  'raw', (event) => {
        return false;
    });   
    
}
