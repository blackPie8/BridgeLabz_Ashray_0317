// An asynchronous iterator in JavaScript is a mechanism that allows you to iterate over data sources that 
// produce results asynchronously, such as API requests, file streams, or other delayed data. 
// It is particularly useful for handling streams of data or large datasets that can't be processed all at 
// once.

async function* fetchChunks() {
  const urls = [
      "https://api.example.com/data1",
      "https://api.example.com/data2",
      "https://api.example.com/data3"
  ];

  for (const url of urls) {
      const response = await fetch(url);
      const data = await response.json();
      yield data;
  }
}

(async () => {
  for await (const chunk of fetchChunks()) {
      console.log(chunk); // Logs data from each URL
  }
})();
