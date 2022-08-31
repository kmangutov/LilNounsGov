
// Discourse list posts API requires Api-Key and Api-Username
// For now just scrape

import fetch from 'cross-fetch';

const IDEAS_URL = 'https://lil-noun-api.fly.dev/ideas?sort=VOTES_DESC'




class SourceIdeas {
	public async download() {
		const response = await fetch(<any>IDEAS_URL, {
			  method: "GET",
			  headers: {
			    "Accept": "application/json"
			  }
		})
		
		const responseObject = JSON.parse(await response.text())
		
		const example = {
		   "id":9,
		   "createdAt":"2022-08-02T12:54:42.371Z",
		   "updatedAt":"2022-08-02T12:54:42.371Z",
		   "title":"The delegation mechanism must work everywhere",
		   "tldr":"We need the delegation mechanism to work everywhere (Prop House, Snapshot, etc.).",
		   "description":"Members choose recognized individuals toward whom they delegate their votes because they are better experienced in determining the DAO's future. \n\nDelegation is now only available for on-chain proposals; thus, we must make it applicable across the range.\n",
		   "creatorId":"0x9e0e9D25a5ED9bc773f91691f0b45599255257B1",
		   "votecount":481,
		   "comments":2
		   /*comments actually looks like "_count":{
		      "comments":2
		   }*/
		}
		const keys = Object.keys(example)
		console.log(keys.join(','))


		for (const idea of responseObject['data']) {

			let result = ''
			for (let attrib of keys) {
	

				if (attrib == 'title' || attrib == 'tldr' || attrib == 'description') {
					const value = idea[attrib]

			 		const title = value.slice(0, 30).replace(/(\r\n|\n|\r)/gm, "").replace('\"', '\'') + '...'
			 		
					result += '\"' + title + '\",'
				} else if (attrib == 'comments') {
					const value = idea['_count']['comments']
					result += value
				} else {
					const value = idea[attrib]
					result += value + ','
				}
			}
			console.log(result)
		}
	}
}

(async () => {
	const onchain_proposals = new SourceIdeas()
	await onchain_proposals.download()
})();


export = SourceIdeas;