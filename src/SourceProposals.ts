import fetch from 'cross-fetch';

const LILNOUNS_GRAPHQL: String = 'https://api.thegraph.com/subgraphs/name/lilnounsdao/lil-nouns-subgraph' 
const QUERY_PROPOSALS: String = `{
  proposals(orderBy: createdTimestamp, orderDirection: desc) {
    id
    description
    status
    createdTimestamp
    abstainVotes
    againstVotes
    executionETA
    forVotes
    proposalThreshold
    targets
    values
  }
}`

/*`
{
  proposals(orderBy: createdTimestamp, orderDirection: desc) {
    id
		description
		status
		votes
    createdTimestamp
  }

}`*/


/*
{
  "data": {
    "proposals": [
      {
        "id": "40",
        "description": "# Lil Nouns @...ty.com\t",
        "status": "CANCELLED",
        "createdTimestamp": "1661809485",
        "abstainVotes": "0",
        "againstVotes": "0",
        "executionETA": null,
        "forVotes": "0",
        "proposalThreshold": "5",
        "targets": [
          "0x6b1461c960ced057247808e72ede56a42d7b501e"
        ],
        "values": [
          "25000000000000000000"
        ]
      }, ...
*/


class SourceProposals {
	public async download() {
		const response = await fetch(<any>LILNOUNS_GRAPHQL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				query: QUERY_PROPOSALS 
			})
		})

		const responseObject = await response.json()

		const attribs = [
			'id',
			'status',
			'createdTimestamp',
			'forVotes',
			'againstVotes',
			'abstainVotes',
			'executionETA',
			'proposalThreshold',
			'values',
			'description'
		]

		//console.log('id,status,createdTimestamp,forVotes,againstVotes,abstainVotes,executionETA,proposalThreshold,values,description')
		console.log(attribs.join(','))

		for (const p of responseObject['data']['proposals']) {
			 //console.log(p['id'] + '')

			 let result = ''
			 for (let attrib of attribs) {
			 	const value = p[attrib]

			 	if (attrib == 'description') {
			 		// Shorten it to avoid having quotation marks/commas to not blow up csv
			 		const title = value.slice(0, 30).replace(/(\r\n|\n|\r)/gm, "") + '...'
			 		result += '\"' + title + '\"'
			 	} else if (attrib == 'values') {
			 		// Can be an array of I assume minimum eth denominations
			 		let sum = 0
			 		for (let txn_value of value) {
			 			sum += parseInt(txn_value)
			 		} 
			 		result += sum + ','
			 	} else {
			 		result += value + ','
			 	}
			 }
			 console.log(result)
			 // return

			// Shorten and remove line breaks
			// const title = proposal['description'].slice(0, 30).replace(/(\r\n|\n|\r)/gm, "") + '...'
			//const url = 'https://lilnouns.wtf/vote/' + proposal['id']

			//console.log(proposal['createdTimestamp'] + ',onchain,' + url + ',\"' + title + '\"')
		}
	}
}



(async () => {
	const onchain_proposals = new SourceProposals()
	await onchain_proposals.download()
})();

export = SourceProposals;
