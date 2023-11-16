import{_ as s,o as a,c as l,X as o}from"./chunks/framework.19fa1319.js";const h=JSON.parse('{"title":"Starter Rollup","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Starter Rollup | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"tutorials/starter-rollup.md","filePath":"tutorials/starter-rollup.md","lastUpdated":1700173930000}'),n={name:"tutorials/starter-rollup.md"},e=o(`<h1 id="starter-rollup" tabindex="-1">Starter Rollup <a class="header-anchor" href="#starter-rollup" aria-label="Permalink to &quot;Starter Rollup&quot;">​</a></h1><p>In this tutorial, you will learn how to build a Rollkit rollup that uses a local Celestia devnet for consensus and data availability. This is the first-stop for developers building on Rollkit.</p><p>This is built for MacOS and has been tested on an M1 and M2 Mac.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><ul><li>Docker running on your machine</li></ul><h2 id="clone-the-repo" tabindex="-1">Clone the repo <a class="header-anchor" href="#clone-the-repo" aria-label="Permalink to &quot;Clone the repo&quot;">​</a></h2><p>First, clone the starter repository and change into the <code>$HOME/gm-starter</code> repository:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/rollkit/gm-starter.git</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gm-starter</span></span></code></pre></div><h2 id="run-a-local-celestia-devnet" tabindex="-1">Run a local-celestia-devnet <a class="header-anchor" href="#run-a-local-celestia-devnet" aria-label="Permalink to &quot;Run a local-celestia-devnet&quot;">​</a></h2><p>In a second terminal instance, start the local-celestia-devnet:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--platform</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">linux/amd64</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">26657</span><span style="color:#C3E88D;">:26657</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">26658</span><span style="color:#C3E88D;">:26658</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">26659</span><span style="color:#C3E88D;">:26659</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ghcr.io/rollkit/local-celestia-devnet:v0.11.0</span></span></code></pre></div><p>When passing the <code>--rollkit.da_config</code> flag later in the tutorial, it will require \`auth_token\`\` to be passed in. The auth token with write permission is required to submit blobs and can be obtained from the logs on local-celestia-devnet before the bridge node starts.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight has-focused-lines"><code><span class="line"><span style="color:#FFCB6B;">WARNING:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Keep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">this</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">auth</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">token</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">secret</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">**</span><span style="color:#C3E88D;">DO</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">NOT</span><span style="color:#A6ACCD;">**</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">this</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">auth</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">token</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">outside</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">of</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">development.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">CELESTIA_NODE_AUTH_TOKEN=</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">WARNING:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Celestia</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">custom</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">network</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">specified.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Only</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">this</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">option</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">freshly</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">created</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">initialized.</span></span>
<span class="line"><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;">DO NOT</span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;"> run a custom network over an already-existing node store</span><span style="color:#89DDFF;">!</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#FFCB6B;">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJwdWJsaWMiLCJyZWFkIiwid3JpdGUiLCJhZG1pbiJdfQ.a_-CStbScoe_ot8Z1K9YaccvhngeieiSBdgO4uObuvI</span><span style="color:#A6ACCD;"> </span></span></code></pre></div><p>The auth token is the last string, which you can now set as a variable. (It&#39;s long, so don&#39;t forget to copy the whole thing!):</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> AUTH_TOKEN</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJwdWJsaWMiLCJyZWFkIiwid3JpdGUiLCJhZG1pbiJdfQ.a_-CStbScoe_ot8Z1K9YaccvhngeieiSBdgO4uObuvI</span></span></code></pre></div><h2 id="start-the-starter-rollup" tabindex="-1">Start the Starter Rollup <a class="header-anchor" href="#start-the-starter-rollup" aria-label="Permalink to &quot;Start the Starter Rollup&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init-local.sh</span></span></code></pre></div><p>The rollup logs will begin to look similar to this:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">3:35PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">submitting</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DA</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">layer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">height=</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=BlockManager</span></span>
<span class="line"><span style="color:#FFCB6B;">3:35PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">successfully</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">submitted</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Rollkit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DA</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">layer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">daHeight=</span><span style="color:#F78C6C;">148</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=BlockManager</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rollkitHeight=</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#FFCB6B;">3:35PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">synced</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit=</span><span style="color:#F78C6C;">436</span><span style="color:#C3E88D;">F6D6D697449447B5B3230302031373020313933203836203730203334203139302031353220383220313432203133342034382032333520343920363220313720323131203133312032343720313133203634203933203134372032332031353920323435203931203133342031342031333520323138203138355D3A317D</span></span>
<span class="line"><span style="color:#FFCB6B;">3:35PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">indexed</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">height=</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=txindex</span></span></code></pre></div><h2 id="next-steps" tabindex="-1">Next steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to &quot;Next steps&quot;">​</a></h2><p>In the next tutorial, you&#39;ll learn how to build the GM World rollup using Ignite CLI.</p>`,21),p=[e];function t(r,c,C,i,y,D){return a(),l("div",null,p)}const d=s(n,[["render",t]]);export{h as __pageData,d as default};
