// Scrape https://prop.house/lil-nouns


const PROPHOUSE_URL = 'https://prod.backend.prop.house/communities/name/lil%20nouns'

class SourcePropHouse {

	public download(cb) {
		fetch(<any>PROPHOUSE_URL, {
			  method: "GET",
			  headers: {
			    "Accept": "application/json"
			  }
		})
		.then(res => res.text())
		.then(res => console.log('res: ' + res))
		// TODO Parse HTML with cheerio to get text, descriptions

		return "Hello World Source";
	}
}

export = SourcePropHouse;