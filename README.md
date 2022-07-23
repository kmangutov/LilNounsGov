# Lil Nouns Gov Data

Import and consolidate LilNouns on-chain and off-chain data 

Data Sources
* [On-chain Proposals](https://lilnouns.wtf/vote) - v0 Done
* [Prop House](https://prop.house/lil-nouns) - v0 Done
* [Snapshot](https://snapshot.org/#/al409.eth) - v0 Done
* [Discourse](https://discourse.lilnouns.wtf/) - WIP (Need scraping or API key)


To run:

Install dependencies
```
npm install
```

Run
```
npx tsc
node ./dist/index.js
```

Or run and output to file 'output.csv':
```
sh run.sh
```