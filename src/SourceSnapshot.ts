
import fetch from 'cross-fetch';
// Graphql api https://docs.snapshot.org/graphql-api
// al409.eth

const LILNOUNS_GRAPHQL: String = 'https://hub.snapshot.org/graphql' //'https://api.thegraph.com/subgraphs/name/lilnounsdao/lil-nouns-subgraph'
const QUERY_PROPOSALS: String = `
query Proposals {
  proposals(
    first: 20,
    skip: 0,
    where: {
      space_in: ["al409.eth"],
      state: "closed"
    },
    orderBy: "created",
    orderDirection: desc
  ) {
    id
    title
    body
    choices
    start
    end
    snapshot
    state
    author
    space {
      id
      name
    }
  }
}`

class SourceSnapshot {
	public async download() {
		const response = await fetch(<any>LILNOUNS_GRAPHQL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				query: QUERY_PROPOSALS 
			})
		})
		const responseObject = await response.json()


    for(const proposal of responseObject['data']['proposals']) {
      const url = 'https://snapshot.org/#/al409.eth/proposal/' + proposal['id']
      console.log(proposal['start'] + ',snapshot,' + url + ',\"' + proposal['title'] + '\"')
    }
	}
}

export = SourceSnapshot;

/*
Request:

query Proposals {
  proposals(
    first: 20,
    skip: 0,
    where: {
      space_in: ["al409.eth"],
      state: "closed"
    },
    orderBy: "created",
    orderDirection: desc
  ) {
    id
    title
    body
    choices
    start
    end
    snapshot
    state
    author
    space {
      id
      name
    }
  }
}


Response: 


{
  "data": {
    "proposals": [
      {
        "id": "0xb27f92ee180843ba0651e3aecb8279761a51a01c9f88c9094b88486d82f3a41a",
        "title": "Raffle for voter engagement",
        "body": "As we all know we want to drive voter engagement . this is simply a heat check on overall thinking on what we should raffle / if we should raffle. \n\n(it is also an attempt to test snapshot engagement (gasless))\n\nSee babablake and brunnes voting dashboard, we only get about 30 unique wallets voting. I am unsure if this is delegation factored in, but it would be nice t strive for 30% not 30 total! \n\nhttps://dune.com/brnunes/lilnounsvotes\n\nDO YOU WANT A RAFFLE? \n\nand \n\nIF SO, WHAT SHOULD IT BE?\n\n--------\n\nTHIS VOTE IS NOT BINDING. ",
        "choices": [
          "NO RAFFLE",
          "YES , Lil Nouns",
          "YES, ETH",
          "YES , OTHER"
        ],
        "start": 1657215174,
        "end": 1657818000,
        "snapshot": "15096788",
        "state": "closed",
        "author": "0x2eE0485f71764bcD2062A84d9455688c581B90f8",
        "space": {
          "id": "al409.eth",
          "name": "Lil Nouns DAO"
        }
      },
      {
        "id": "0x826419f658756973034c4bf74503234e7a3f5587793bf0103d6ed3d9b268e087",
        "title": "Test proposal using Collective API",
        "body": "signing and poll",
        "choices": [
          "yo"
        ],
        "start": 1656633600,
        "end": 1657497600,
        "snapshot": "15058553",
        "state": "closed",
        "author": "0x8d028DC71B347268d439432349B55Bc27989851E",
        "space": {
          "id": "al409.eth",
          "name": "Lil Nouns DAO"
        }
      },
    ]}
}
*/