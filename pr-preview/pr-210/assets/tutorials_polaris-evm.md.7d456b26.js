import{_ as s,o as a,c as l,X as n}from"./chunks/framework.b73f457c.js";const d=JSON.parse('{"title":"Polaris EVM and Rollkit","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Polaris EVM and Rollkit | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"tutorials/polaris-evm.md","filePath":"tutorials/polaris-evm.md","lastUpdated":1694121484000}'),o={name:"tutorials/polaris-evm.md"},p=n(`<h1 id="polaris-evm-and-rollkit" tabindex="-1">Polaris EVM and Rollkit <a class="header-anchor" href="#polaris-evm-and-rollkit" aria-label="Permalink to &quot;Polaris EVM and Rollkit&quot;">​</a></h1><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><ul><li>Docker running on your machine</li><li>Go version 1.20.2</li></ul><h2 id="clone-the-repo" tabindex="-1">Clone the repo <a class="header-anchor" href="#clone-the-repo" aria-label="Permalink to &quot;Clone the repo&quot;">​</a></h2><p>First, clone the Polaris repository and install Rollkit dependencies:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> $HOME</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/berachain/polaris.git</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">polaris</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rollkit</span></span></code></pre></div><h2 id="run-a-local-celestia-devnet" tabindex="-1">Run a local-celestia-devnet <a class="header-anchor" href="#run-a-local-celestia-devnet" aria-label="Permalink to &quot;Run a local-celestia-devnet&quot;">​</a></h2><p>In a second terminal instance, start the local-celestia-devnet:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--platform</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">linux/amd64</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">36657</span><span style="color:#C3E88D;">:26657</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">36659</span><span style="color:#C3E88D;">:26659</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">36658</span><span style="color:#C3E88D;">:26658</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ghcr.io/rollkit/local-celestia-devnet:v0.11.0-rc8</span></span></code></pre></div><p>When passing the <code>--rollkit.da_config</code> flag later in the tutorial, it will require \`auth_token\`\` to be passed in. The auth token with write permission is required to submit blobs and can be obtained programmatically on the local-celestia-devnet bridge node.</p><p>In your original terminal, you can view the auth token with:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">exec</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> ps -q</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">celestia</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bridge</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--node.store</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/bridge</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">auth</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">admin</span></span></code></pre></div><h2 id="start-the-polaris-evm-using-rollkit" tabindex="-1">Start the Polaris EVM using Rollkit <a class="header-anchor" href="#start-the-polaris-evm-using-rollkit" aria-label="Permalink to &quot;Start the Polaris EVM using Rollkit&quot;">​</a></h2><p>Then start the chain:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">foundryup</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">polaris</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">mage</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span></span></code></pre></div><h2 id="congratulations" tabindex="-1">Congratulations <a class="header-anchor" href="#congratulations" aria-label="Permalink to &quot;Congratulations&quot;">​</a></h2><p>You now have a Polaris EVM Rollkit rollup running! The rollup logs will begin to look similar to this:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight has-focused-lines"><code><span class="line has-focus"><span style="color:#FFCB6B;">7:58PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">submitting</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DA</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">layer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">height=</span><span style="color:#F78C6C;">11</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=BlockManager</span><span style="color:#A6ACCD;"> </span></span>
<span class="line has-focus"><span style="color:#FFCB6B;">7:58PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">successfully</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">submitted</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Rollkit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DA</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">layer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">daHeight=</span><span style="color:#F78C6C;">30</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=BlockManager</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rollkitHeight=</span><span style="color:#F78C6C;">11</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">7:58PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">prune</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">height=</span><span style="color:#F78C6C;">11</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=server</span></span>
<span class="line"><span style="color:#FFCB6B;">7:58PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">prune</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">end</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">height=</span><span style="color:#F78C6C;">11</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=server</span></span>
<span class="line"><span style="color:#FFCB6B;">7:58PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">indexed</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">events</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">height=</span><span style="color:#F78C6C;">11</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=txindex</span></span>
<span class="line has-focus"><span style="color:#FFCB6B;">7:58PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Creating</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">publishing</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">height=</span><span style="color:#F78C6C;">12</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=BlockManager</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">7:58PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">preparing</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">evm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=polaris-geth</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">seal_hash=</span><span style="color:#F78C6C;">0x314b131b1d4117445091b25240eaf420cdbdcf9f653eabd1d95aa0dab3cd1359</span></span>
<span class="line"><span style="color:#FFCB6B;">7:58PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">finalizing</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">evm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block_hash=</span><span style="color:#F78C6C;">0x5207a1ff35540dafe70565d3a95ed07f6c9b1ed9114f93c6c47ee0a1c0d4cc2e</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=polaris-geth</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">num_txs=</span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#FFCB6B;">7:58PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">finalized</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block_app_hash=AC959F089C21DC617275E0AB35E77DC3839C9597ECFDECDAD6C924EC49B1EB07</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">height=</span><span style="color:#F78C6C;">12</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=BlockManager</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">num_txs_res=</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">num_val_updates=</span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#FFCB6B;">7:58PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">executed</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">app_hash=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">���\\b�!�aru��5�}Ã���������$�I��\\a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">height=</span><span style="color:#F78C6C;">12</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=BlockManager</span></span></code></pre></div><h2 id="funds" tabindex="-1">Funds <a class="header-anchor" href="#funds" aria-label="Permalink to &quot;Funds&quot;">​</a></h2><p>The following private key has funds on your Polaris chain:</p><div class="language-terminal"><button title="Copy Code" class="copy"></button><span class="lang">terminal</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Address: 0x20f33CE90A13a4b5E7697E3544c3083B8F8A51D4</span></span>
<span class="line"><span style="color:#A6ACCD;">PrivateKey: 0xfffdbb37105441e14b0ee6330d855d8504ff39e705c3afa8f859ac9865f99306</span></span></code></pre></div>`,21),e=[p];function t(r,c,C,y,i,A){return a(),l("div",null,e)}const h=s(o,[["render",t]]);export{d as __pageData,h as default};
