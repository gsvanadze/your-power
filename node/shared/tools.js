
const fs = require('fs');


 const fileReader = (filePath, callback) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      try {
        const jsonData = JSON.parse(data);
        callback(null, jsonData);
      } catch (parseErr) {
        callback(parseErr, null);
      }
    }
  });
};

module.exports = fileReader;
