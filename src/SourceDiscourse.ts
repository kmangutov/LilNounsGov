
// Discourse list posts API requires Api-Key and Api-Username
// For now just scrape

const DISCOURSE_URL = 'https://discourse.lilnouns.wtf/'

class SourceDiscourse {
	public download(cb) {
		fetch(<any>DISCOURSE_URL, {
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

export = SourceDiscourse;