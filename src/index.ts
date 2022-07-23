
import SourceSnapshot = require('./SourceSnapshot');
import SourceDiscourse = require('./SourceDiscourse');
import SourceProposals = require('./SourceProposals');
import SourcePropHouse = require('./SourcePropHouse');


(async () => {
	// Output: CSV
	// timestamp,source_name,url,title
	
	const prophouse = new SourcePropHouse()
	await prophouse.download()

	const onchain_proposals = new SourceProposals()
	await onchain_proposals.download()

	const snapshot = new SourceSnapshot()
	await snapshot.download()

	// TODO: SourceDiscourse scrape or get API keys

})();


// TODO: Simple dashboard use data from csv

// UI tags:
// 'Needs Attention'
// 'Funded'