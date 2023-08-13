document.addEventListener('DOMContentLoaded', async function () {
    const historyList = document.getElementById('history-list');
  
    try {
      const historyItems = await chrome.history.search({text: '', maxResults: 10});
      historyItems.forEach((item) => {
        const historyItem = document.createElement('li');
        historyItem.textContent = `${item.title} (${new Date(item.lastVisitTime).toLocaleString()})`;
        historyList.appendChild(historyItem);
      });
    } catch (error) {
      console.error('Error fetching history:', error);
    }
  });
  