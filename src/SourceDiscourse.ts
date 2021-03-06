
// Discourse list posts API requires Api-Key and Api-Username
// For now just scrape

import cheerio from "cheerio";

const DISCOURSE_URL = 'https://discourse.lilnouns.wtf/'

class SourceDiscourse {
	public async download() {
		const response = await fetch(<any>DISCOURSE_URL, {
			  method: "GET",
			  headers: {
			    "Accept": "application/json"
			  }
		})
		
		const responseObject = JSON.parse(await response.text())
		

		for (const topic of responseObject['topic_list']['topics']) {
			const timestamp = parseInt("" + new Date(topic['created_at']).valueOf() / 1000)
			const title = topic['title']
			const url = 'https://discourse.lilnouns.wtf/t/' + topic['slug'] + '/' + topic['id']
			console.log(timestamp + ',discourse,' + url + ',' + title)
		}
	}
}

export = SourceDiscourse;