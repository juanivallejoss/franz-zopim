module.exports = (Franz, options) => {
  const selector = 'react_meshim_dashboard_components_navBar_ServeButton span';
  const noChatRequests = 'No Chat Requests';
  
  function getChatRequestNumber() {
    let count = 0;
    let selectorValue = document.querySelector(`.${selector}`).textContent;
    
    if (selectorValue !== noChatRequests) {
      const splitText = selectorValue.split(' ');
      
      if (Array.isArray(splitText) && splitText.length === 3) {
        count = splitText.filter(text => Number(text))[0];
      };
    }
    
    Franz.setBadge(count);
  }
  
  Franz.loop(getChatRequestNumber);
}