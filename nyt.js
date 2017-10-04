(function () {
    
        const Client = require('node-rest-client').Client;
        const client = new Client();
    
        const jsonfile = require("jsonfile");
    
        function callAPI(searchTerm) {
          client.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=65d6caa36f7b4ec498f065513a06c2be&q=" + searchTerm, function(body){
            const result = body.response.docs;
            const file = `./${searchTerm}.json`;
            jsonfile.writeFile(file, result, function(err) {
              console.error(err)
            })
          })
        }
    
        callAPI(process.argv[2]);
    
})()
    