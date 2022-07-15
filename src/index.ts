
import SourceSnapshot = require('./SourceSnapshot');
import SourceDiscourse = require('./SourceDiscourse');

console.log('hello');

const snapshot = new SourceSnapshot()
snapshot.download((str) => console.log(str))

const discourse = new SourceDiscourse()
discourse.download((str) => console.log(str)) 

// TODO: Merge data sources and save into csv
// TODO: Simple dashboard use data from csv
// TODO: Use await/async to avoid callbacks