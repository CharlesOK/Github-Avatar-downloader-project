var request = require('request');
var secrets = require('./secrets.js');

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${secrets.GitHub_Token}`
    }
    };

  request(options, function(err, res, body) {
    cb(err, JSON.parse(body));
  });
}

  function downloadImageByURL(url, filePath) {
        request.get(url)
         .pipe(fs.createWriteStream('./images/' + filePath + '.png'));
    }


getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});

console.log('Welcome to the GitHub Avatar Downloader!');