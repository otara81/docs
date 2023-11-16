import{_ as e,o,c as t,X as a}from"./chunks/framework.523c4d54.js";const r="/pr-preview/pr-272/introducing-rollkit/rollkit-blog-cover.png",i="/pr-preview/pr-272/introducing-rollkit/comparison-table.png",l="/pr-preview/pr-272/introducing-rollkit/rollkit-lego.png",b=JSON.parse('{"title":"Introducing Rollkit: a modular rollup framework","description":"Neutral and independent from Celestia, Rollkit serves as a community-led public good that empowers developers with the freedom to deploy throughout the modular stack and accelerate innovation","frontmatter":{"head":[["meta",{"name":"title","content":"Introducing Rollkit: a modular rollup framework"}],["meta",{"name":"description","content":"Neutral and independent from Celestia, Rollkit serves as a community-led public good that empowers developers with the freedom to deploy throughout the modular stack and accelerate innovation"}],["meta",{"name":"keywords","content":"Rollkit, Celestia"}],["meta",{"name":"og:image","content":"/introducing-rollkit/rollkit-blog-cover.png"}],["meta",{"name":"og:title","content":"Introducing Rollkit: a modular rollup framework | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"blog/introducing-rollkit.md","filePath":"blog/introducing-rollkit.md","lastUpdated":1700151283000}'),n={name:"blog/introducing-rollkit.md"},s=a('<h1 id="introducing-rollkit-a-modular-rollup-framework" tabindex="-1">Introducing Rollkit: a modular rollup framework <a class="header-anchor" href="#introducing-rollkit-a-modular-rollup-framework" aria-label="Permalink to &quot;Introducing Rollkit: a modular rollup framework&quot;">​</a></h1><p>By Alex Beckett and Joseph Al-Chami</p><p><em>The original version of this blog post can be found on the <a href="https://blog.celestia.org/introducing-rollkit-a-modular-rollup-framework/" target="_blank" rel="noreferrer">Celestia blog</a>.</em></p><p><img src="'+r+'" alt="Rollkit blog cover"><em>Originally published on 21 February 2023</em></p><p>Today, we’re pleased to introduce Rollkit, previously known as Rollmint. Rollkit is a modular rollup framework that gives developers the freedom to deploy rollups throughout the modular stack, opening new possibilities for rapid experimentation and innovation.</p><p>Rollkit provides a modular node for running rollups on top of a data availability layer. It exposes an ABCI-compatible client interface that can be used as a replacement for CometBFT for any <a href="https://github.com/cometbft/cometbft/tree/main/abci" target="_blank" rel="noreferrer">ABCI</a>-compatible blockchain app, including Cosmos chains.</p><p>In development since 2021, Rollkit is now emerging as neutral and independent from the Celestia blockchain. Rollkit will serve as a community-led public good for the modular ecosystem going forward, with its own docs site at <a href="/pr-preview/pr-272/">rollkit.dev</a>.</p><h2 id="tl-dr" tabindex="-1">Tl;dr: <a class="header-anchor" href="#tl-dr" aria-label="Permalink to &quot;Tl;dr:&quot;">​</a></h2><ul><li>You can now <a href="/pr-preview/pr-272/">build with Rollkit</a> on Celestia’s Mocha testnet. Check out the <a href="/pr-preview/pr-272/">docs</a></li><li>You can customize rollups and plug-in arbitrary data availability and execution layers by leveraging Rollkit’s modular framework</li><li>Join our Rollkit developer calls that begin in April to help guide its development</li></ul><h2 id="deploying-a-new-chain-is-hard" tabindex="-1">Deploying a new chain is hard <a class="header-anchor" href="#deploying-a-new-chain-is-hard" aria-label="Permalink to &quot;Deploying a new chain is hard&quot;">​</a></h2><p>Deploying your decentralized application as a smart contract on a shared blockchain means it will share computational resources and is restricted to that blockchain&#39;s execution environment. This limits your application&#39;s scalability and flexibility.</p><p>For that reason, many developers have turned to launching their own layer 1 chains using tools like CometBFT and the Cosmos SDK. However, deploying a new layer 1 chain presents its own set of complex challenges and trade-offs.</p><p>In order to deploy a new layer 1 chain, a developer must gather a set of validators to secure the chain, issue a token to compensate these validators, and continuously maintain the network infrastructure. This represents a huge cost in social coordination, time, capital and expertise. This cost prevents many developers from launching their own chains and innovation from progressing as quickly as it could.</p><h2 id="freedom-to-deploy" tabindex="-1">Freedom to deploy <a class="header-anchor" href="#freedom-to-deploy" aria-label="Permalink to &quot;Freedom to deploy&quot;">​</a></h2><p>Rollups are the answer to this problem. Rollups provide similar advantages as a layer 1 blockchain but reduce the overhead of deploying and maintaining your own chain.</p><p><img src="'+i+'" alt="Rollkit comparison table"></p><p>Rollups provide similar benefits to blockchain developers that cloud infrastructure provides for traditional web developers. Deploying a new layer 1 blockchain is like maintaining a physical server, slow and expensive. Rollups remove the need for blockchain developers to launch and maintain their own layer 1s to deploy their own chain.</p><p>With Rollkit, developers no longer have to worry about the complex challenges of deploying a new blockchain. Rollkit will do for rollup chains what CometBFT did for layer 1 chains. The way it works is that rollups leverage an underlying layer for consensus, so that developers don’t need to build their own consensus networks. Rollkit rollups inherit security from the data availability layer, eliminating the need for a full set of validators and reducing the technical barrier for developers.</p><h2 id="vision-for-rollkit" tabindex="-1">Vision for Rollkit <a class="header-anchor" href="#vision-for-rollkit" aria-label="Permalink to &quot;Vision for Rollkit&quot;">​</a></h2><p>In the spirit of modularity, Rollkit’s long-term vision is to give developers a variety of options to choose from so that they can easily plug-in, switch or replace features in Rollkit.</p><p>In a rapidly evolving industry like blockchain, time to market and the ability to rapidly experiment and innovate are critical. Rollkit’s customizable stack will enable developers to bring their products to market faster and with more flexibility.</p><p><img src="'+l+'" alt="Rollkit lego image"></p><h3 id="execution-environments" tabindex="-1">Execution environments <a class="header-anchor" href="#execution-environments" aria-label="Permalink to &quot;Execution environments&quot;">​</a></h3><p>Rollkit will allow you to easily swap in different execution environments. Not fond of the Cosmos SDK? Try Rust with CosmWasm. Still like Solidity? Plug in the EVM. None of the options suit your needs? Modify or add your own execution environment without needing to rebuild your entire chain from scratch.</p><h3 id="sequencers" tabindex="-1">Sequencers <a class="header-anchor" href="#sequencers" aria-label="Permalink to &quot;Sequencers&quot;">​</a></h3><p>Rollkit will support multiple sequencing modes to suit your specific use case. A single sequencer might be all you need. If your application requires stronger liveness, you can opt for multiple sequencers using your own set or leverage a set of shared sequencers.</p><h3 id="proof-schemes" tabindex="-1">Proof schemes <a class="header-anchor" href="#proof-schemes" aria-label="Permalink to &quot;Proof schemes&quot;">​</a></h3><p>Rollkit will support a multitude of proof schemes to ensure the execution of your rollup. Run your application in zk mode, optimistic mode with fraud proofs, or pessimistic mode without any proofs.</p><h3 id="rollup-types" tabindex="-1">Rollup types <a class="header-anchor" href="#rollup-types" aria-label="Permalink to &quot;Rollup types&quot;">​</a></h3><p>Rollkit will allow you to build a diverse range of rollups, including sovereign rollups, settlement rollups and settled rollups.</p><p>Rollkit is in an early stage of development and many features remain to be built to reach this vision. In its <a href="/pr-preview/pr-272/learn/stack">current state</a>, Rollkit rollups are <a href="https://blog.celestia.org/sovereign-rollup-chains" target="_blank" rel="noreferrer">sovereign rollups</a> with single sequencers, with support for a pessimistic mode and a <a href="https://github.com/rollkit/rollkit/blob/manav/state_fraud_proofs_adr/docs/lazy-adr/adr-009-state-fraud-proofs.md" target="_blank" rel="noreferrer">work-in-progress optimistic mode</a>. <a href="/pr-preview/pr-272/learn/intro">Integration tutorials</a> are ready and available with Cosmos SDK, Ethermint, and CosmWasm.</p><p>We invite the community to collaborate with us to build new features. Each new team that joins the growing Rollkit community brings more firepower to ship new features that we all benefit from. This is the power of modularity in action.</p><h2 id="rollkit-is-neutral" tabindex="-1">Rollkit is neutral <a class="header-anchor" href="#rollkit-is-neutral" aria-label="Permalink to &quot;Rollkit is neutral&quot;">​</a></h2><p>Celestia Labs originally started developing Rollkit in 2021, when the modular ecosystem was nascent and general-purpose rollup software did not exist. We started building Rollkit out of necessity, because having general-purpose software for rollup chains was critical to the Celestia mission of making deploying a new chain as easy as deploying a smart contract.</p><p>Since 2021 several projects have also started building general-purpose execution layer rollup software for various use cases. This includes <a href="https://twitter.com/EclipseFND" target="_blank" rel="noreferrer">Eclipse</a> (Solana VM rollups), <a href="https://twitter.com/dymensionXYZ" target="_blank" rel="noreferrer">Dymension</a> (settled Cosmos rollups), <a href="https://twitter.com/sovereign_labs" target="_blank" rel="noreferrer">Sovereign Labs</a> (sovereign ZK rollups), and <a href="https://twitter.com/optimismFND" target="_blank" rel="noreferrer">Optimism</a> (EVM rollups).</p><p>To ensure Celestia remains a decentralized and credibly neutral data availability layer that treats all rollup software as first class citizens, we decided to spin out Rollkit from Celestia Labs into its own project with its own GitHub org and docs site.</p><p>This also means that Rollkit aims to be neutral to the underlying data availability layer. Rollkit is designed to allow developers to integrate other data availability layers besides Celestia via the <a href="https://github.com/rollkit/rollkit/blob/567b9f500db8055289365ea63450cefe4b135077/da/da.go#L60" target="_blank" rel="noreferrer">data availability interface</a>.</p><p>The Celestia Labs Execution Environments team is currently contributing to the initial and necessary components of Rollkit, and is calling for all developers to contribute to it.</p><p>Spinning out Rollkit will enable both Celestia and Rollkit to serve the entire modular ecosystem as public goods that are neutral and independent from each other, and not favor each other in the modular stack.</p><p>We believe that to create a positive-sum crypto ecosystem where modularism thrives over maximalism, it’s important that developers have access to neutral rollup frameworks that are treated as public goods. In order for crypto to move into mainstream adoption, the industry needs to work together to create foundational developer tooling that will help crypto to level up.</p><h2 id="next-steps" tabindex="-1">Next steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to &quot;Next steps&quot;">​</a></h2><p>Moving towards a community-led project means increased visibility, transparency and inclusivity. That’s why the Rollkit team will soon release a roadmap blog post to detail ongoing work and its purpose. The team will also hold regular public calls with community members to showcase recent developments, discuss the roadmap and gather feedback from developers building with Rollkit. Keep an eye out for a new announcement from Rollkit.</p><p>Learn more about how Rollkit works <a href="/pr-preview/pr-272/">on the new Rollkit website</a> (you&#39;re already on it!). And don’t forget to check out the <a href="https://github.com/rollkit" target="_blank" rel="noreferrer">Rollkit repo</a> too.</p><p>Let’s build modular together.</p>',44),p=[s];function d(c,u,h,m,f,g){return o(),t("div",null,p)}const y=e(n,[["render",d]]);export{b as __pageData,y as default};
