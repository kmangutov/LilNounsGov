

const LILNOUNS_GRAPHQL: String = 'https://api.thegraph.com/subgraphs/name/lilnounsdao/lil-nouns-subgraph' 
const QUERY_PROPOSALS: String = `
{
  proposals(orderBy: createdTimestamp, orderDirection: desc) {
    id
		description
		status
		votes
    createdTimestamp
  }

}`

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

		for (const proposal of responseObject['data']['proposals']) {
			 

			// Shorten and remove line breaks
			const title = proposal['description'].slice(0, 30).replace(/(\r\n|\n|\r)/gm, "") + '...'
			const url = 'https://lilnouns.wtf/vote/' + proposal['id']

			console.log(proposal['createdTimestamp'] + ',onchain,' + url + ',\"' + title + '\"')
		}
	}
}

export = SourceProposals;
