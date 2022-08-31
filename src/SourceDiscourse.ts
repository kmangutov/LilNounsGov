
// Discourse list posts API requires Api-Key and Api-Username
// For now just scrape

import fetch from 'cross-fetch';

const DISCOURSE_URL = 'https://discourse.lilnouns.wtf/'


/*
{
   "id":7,
   "title":"Welcome to Lil Nouns Discourse",
   "fancy_title":"Welcome to Lil Nouns Discourse",
   "slug":"welcome-to-lil-nouns-discourse",
   "posts_count":1,
   "reply_count":0,
   "highest_post_number":1,
   "image_url":null,
   "created_at":"2022-05-24T06:42:52.260Z",
   "last_posted_at":"2022-05-24T06:42:52.323Z",
   "bumped":true,
   "bumped_at":"2022-05-25T17:41:43.686Z",
   "archetype":"regular",
   "unseen":false,
   "pinned":true,
   "unpinned":null,
   "excerpt":"Thanks for visiting the Lil Nouns Discourse; we are glad you’re here! \nThis project is better when everyone is thinking about how to make things a lil better. No need to keep those ideas to yourself post them to this Dis&hellip;",
   "visible":true,
   "closed":false,
   "archived":false,
   "liked":null,
   "views":289,
   "like_count":3,
   "has_summary":false,
   "last_poster_username":"system",
   "category_id":1,
   "pinned_globally":true,
   "featured_link":null,
   "has_accepted_answer":false,
}
*/


class SourceDiscourse {
	public async download() {
		const response = await fetch(<any>DISCOURSE_URL, {
			  method: "GET",
			  headers: {
			    "Accept": "application/json"
			  }
		})
		
		const responseObject = JSON.parse(await response.text())
		
		const example = {
		   "id":7,
		   "title":"Welcome to Lil Nouns Discourse",
		   "fancy_title":"Welcome to Lil Nouns Discourse",
		   "slug":"welcome-to-lil-nouns-discourse",
		   "posts_count":1,
		   "reply_count":0,
		   "highest_post_number":1,
		   "image_url":null,
		   "created_at":"2022-05-24T06:42:52.260Z",
		   "last_posted_at":"2022-05-24T06:42:52.323Z",
		   "bumped":true,
		   "bumped_at":"2022-05-25T17:41:43.686Z",
		   "archetype":"regular",
		   "unseen":false,
		   "pinned":true,
		   "unpinned":null,
		   "excerpt":"Thanks for visiting the Lil Nouns Discourse; we are glad you’re here! \nThis project is better when everyone is thinking about how to make things a lil better. No need to keep those ideas to yourself post them to this Dis&hellip;",
		   "visible":true,
		   "closed":false,
		   "archived":false,
		   "liked":null,
		   "views":289,
		   "like_count":3,
		   "has_summary":false,
		   "last_poster_username":"system",
		   "category_id":1,
		   "pinned_globally":true,
		   "featured_link":null,
		   "has_accepted_answer":false,
		}
		const keys = Object.keys(example)
		console.log(keys.join(','))

		for (const topic of responseObject['topic_list']['topics']) {
			let result = ''
			for (let attrib of keys) {
				const value = topic[attrib]

				if (attrib == 'title' || attrib == 'fancy_title' || attrib == 'excerpt') {
					result += '\"' + value + '\",'
				} else if (attrib == 'has_accepted_answer') {
					result += value
				} else {
					result += value + ','
				}
			}
			 console.log(result)
			/*const timestamp = parseInt("" + new Date(topic['created_at']).valueOf() / 1000)
			const title = topic['title']
			const url = 'https://discourse.lilnouns.wtf/t/' + topic['slug'] + '/' + topic['id']
			console.log(timestamp + ',discourse,' + url + ',' + title)*/
		}
	}
}

(async () => {
	const onchain_proposals = new SourceDiscourse()
	await onchain_proposals.download()
})();


export = SourceDiscourse;