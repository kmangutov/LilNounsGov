
import SourceSnapshot = require('./SourceSnapshot');
import SourceDiscourse = require('./SourceDiscourse');
import SourceProposals = require('./SourceProposals');
import SourcePropHouse = require('./SourcePropHouse');


(async () => {
	// Output: CSV
	// timestamp,source_name,url,title

	let out = []

	const prophouse = new SourcePropHouse()
	out = out.concat(await prophouse.download())

	const onchain_proposals = new SourceProposals()
	out = out.concat(await onchain_proposals.download())

	const snapshot = new SourceSnapshot()
	out = out.concat(await snapshot.download())

	const discourse = new SourceDiscourse()
	out = out.concat(await discourse.download())

	let obj = {'data': out}
	console.log(JSON.stringify(obj))
})();


// TODO: Simple dashboard use data from csv

// UI tags:
// 'Needs Attention'
// 'Funded'