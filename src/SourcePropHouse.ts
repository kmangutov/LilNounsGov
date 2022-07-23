// Scrape https://prop.house/lil-nouns


const PROPHOUSE_URL = 'https://prod.backend.prop.house/communities/name/lil%20nouns'

class SourcePropHouse {
	public async download() {
		const response = await fetch(<any>PROPHOUSE_URL, {
			  method: "GET",
			  headers: {
			    "Accept": "application/json"
			  }
		})


		const responseObject = JSON.parse(await response.text())
		responseObject['auctions'].forEach((round: any) => {
			round['proposals'].forEach((prop) => {

				const timestamp = parseInt("" + new Date(prop['createdDate']).valueOf() / 1000)
				const url = 'https://prop.house/lil-nouns'
			
				console.log(timestamp + ',prophouse,' + url + ',\"' + prop['title'] + '\"')
			})			
		})

		return ''
	}
}

export = SourcePropHouse;