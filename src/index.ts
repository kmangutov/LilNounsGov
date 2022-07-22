
import SourceSnapshot = require('./SourceSnapshot');
import SourceDiscourse = require('./SourceDiscourse');
import SourceProposals = require('./SourceProposals');
import SourcePropHouse = require('./SourcePropHouse');


console.log('hello');

const snapshot = new SourceSnapshot()
snapshot.download((str) => console.log(str))

const discourse = new SourceDiscourse()
discourse.download((str) => console.log(str))


const proposals = new SourceProposals()
proposals.download((str) => console.log(str))


const prophouse = new SourcePropHouse()
prophouse.download((str) => console.log(str))


// TODO: Merge data sources and save into csv
// Data structure [{title: '', description: '', created: DateTime, type: Discourse/PropHouse/Proposals/Snapshot}]
// TODO: Simple dashboard use data from csv
// TODO: Use await/async to avoid callbacks