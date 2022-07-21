

const LILNOUNS_GRAPHQL: String = 'https://api.thegraph.com/subgraphs/name/lilnounsdao/lil-nouns-subgraph' 
const QUERY_PROPOSALS: String = `
{
  proposals(first: 5, orderBy: createdTimestamp, orderDirection: desc) {
    id
	description
    createdTimestamp
  }

}`

class SourceProposals {
	public download(cb) {
		fetch(<any>LILNOUNS_GRAPHQL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				query: QUERY_PROPOSALS 
			})
		})
		.then(res => res.json())
		.then(res =>  {console.log(res.data); cb(res);})


		return "Hello World Source";
	}
}

export = SourceProposals;
