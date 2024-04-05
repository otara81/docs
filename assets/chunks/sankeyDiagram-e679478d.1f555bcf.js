import{c as ot,g as pt,s as mt,a as _t,b as kt,x as xt,v as vt,z as bt,j as wt,u as St,h as Y,i as Lt}from"../app.6ccae514.js";import{o as Et}from"./ordinal.b935e931.js";import"./framework.4ab75e15.js";import"./theme.e93527b2.js";import"./init.77b53fdd.js";function At(t){for(var n=t.length/6|0,i=new Array(n),l=0;l<n;)i[l]="#"+t.slice(l*6,++l*6);return i}const Tt=At("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");function lt(t,n){let i;if(n===void 0)for(const l of t)l!=null&&(i<l||i===void 0&&l>=l)&&(i=l);else{let l=-1;for(let u of t)(u=n(u,++l,t))!=null&&(i<u||i===void 0&&u>=u)&&(i=u)}return i}function yt(t,n){let i;if(n===void 0)for(const l of t)l!=null&&(i>l||i===void 0&&l>=l)&&(i=l);else{let l=-1;for(let u of t)(u=n(u,++l,t))!=null&&(i>u||i===void 0&&u>=u)&&(i=u)}return i}function Z(t,n){let i=0;if(n===void 0)for(let l of t)(l=+l)&&(i+=l);else{let l=-1;for(let u of t)(u=+n(u,++l,t))&&(i+=u)}return i}function Mt(t){return t.target.depth}function Nt(t){return t.depth}function Pt(t,n){return n-1-t.height}function dt(t,n){return t.sourceLinks.length?t.depth:n-1}function Ct(t){return t.targetLinks.length?t.depth:t.sourceLinks.length?yt(t.sourceLinks,Mt)-1:0}function G(t){return function(){return t}}function at(t,n){return H(t.source,n.source)||t.index-n.index}function ct(t,n){return H(t.target,n.target)||t.index-n.index}function H(t,n){return t.y0-n.y0}function J(t){return t.value}function It(t){return t.index}function Ot(t){return t.nodes}function zt(t){return t.links}function ut(t,n){const i=t.get(n);if(!i)throw new Error("missing: "+n);return i}function ht({nodes:t}){for(const n of t){let i=n.y0,l=i;for(const u of n.sourceLinks)u.y0=i+u.width/2,i+=u.width;for(const u of n.targetLinks)u.y1=l+u.width/2,l+=u.width}}function $t(){let t=0,n=0,i=1,l=1,u=24,v=8,_,p=It,s=dt,o,c,g=Ot,b=zt,d=6;function k(){const e={nodes:g.apply(null,arguments),links:b.apply(null,arguments)};return E(e),M(e),P(e),A(e),w(e),ht(e),e}k.update=function(e){return ht(e),e},k.nodeId=function(e){return arguments.length?(p=typeof e=="function"?e:G(e),k):p},k.nodeAlign=function(e){return arguments.length?(s=typeof e=="function"?e:G(e),k):s},k.nodeSort=function(e){return arguments.length?(o=e,k):o},k.nodeWidth=function(e){return arguments.length?(u=+e,k):u},k.nodePadding=function(e){return arguments.length?(v=_=+e,k):v},k.nodes=function(e){return arguments.length?(g=typeof e=="function"?e:G(e),k):g},k.links=function(e){return arguments.length?(b=typeof e=="function"?e:G(e),k):b},k.linkSort=function(e){return arguments.length?(c=e,k):c},k.size=function(e){return arguments.length?(t=n=0,i=+e[0],l=+e[1],k):[i-t,l-n]},k.extent=function(e){return arguments.length?(t=+e[0][0],i=+e[1][0],n=+e[0][1],l=+e[1][1],k):[[t,n],[i,l]]},k.iterations=function(e){return arguments.length?(d=+e,k):d};function E({nodes:e,links:f}){for(const[h,r]of e.entries())r.index=h,r.sourceLinks=[],r.targetLinks=[];const a=new Map(e.map((h,r)=>[p(h,r,e),h]));for(const[h,r]of f.entries()){r.index=h;let{source:m,target:x}=r;typeof m!="object"&&(m=r.source=ut(a,m)),typeof x!="object"&&(x=r.target=ut(a,x)),m.sourceLinks.push(r),x.targetLinks.push(r)}if(c!=null)for(const{sourceLinks:h,targetLinks:r}of e)h.sort(c),r.sort(c)}function M({nodes:e}){for(const f of e)f.value=f.fixedValue===void 0?Math.max(Z(f.sourceLinks,J),Z(f.targetLinks,J)):f.fixedValue}function P({nodes:e}){const f=e.length;let a=new Set(e),h=new Set,r=0;for(;a.size;){for(const m of a){m.depth=r;for(const{target:x}of m.sourceLinks)h.add(x)}if(++r>f)throw new Error("circular link");a=h,h=new Set}}function A({nodes:e}){const f=e.length;let a=new Set(e),h=new Set,r=0;for(;a.size;){for(const m of a){m.height=r;for(const{source:x}of m.targetLinks)h.add(x)}if(++r>f)throw new Error("circular link");a=h,h=new Set}}function N({nodes:e}){const f=lt(e,r=>r.depth)+1,a=(i-t-u)/(f-1),h=new Array(f);for(const r of e){const m=Math.max(0,Math.min(f-1,Math.floor(s.call(null,r,f))));r.layer=m,r.x0=t+m*a,r.x1=r.x0+u,h[m]?h[m].push(r):h[m]=[r]}if(o)for(const r of h)r.sort(o);return h}function C(e){const f=yt(e,a=>(l-n-(a.length-1)*_)/Z(a,J));for(const a of e){let h=n;for(const r of a){r.y0=h,r.y1=h+r.value*f,h=r.y1+_;for(const m of r.sourceLinks)m.width=m.value*f}h=(l-h+_)/(a.length+1);for(let r=0;r<a.length;++r){const m=a[r];m.y0+=h*(r+1),m.y1+=h*(r+1)}I(a)}}function w(e){const f=N(e);_=Math.min(v,(l-n)/(lt(f,a=>a.length)-1)),C(f);for(let a=0;a<d;++a){const h=Math.pow(.99,a),r=Math.max(1-h,(a+1)/d);L(f,h,r),y(f,h,r)}}function y(e,f,a){for(let h=1,r=e.length;h<r;++h){const m=e[h];for(const x of m){let B=0,O=0;for(const{source:F,value:K}of x.targetLinks){let U=K*(x.layer-F.layer);B+=T(F,x)*U,O+=U}if(!(O>0))continue;let R=(B/O-x.y0)*f;x.y0+=R,x.y1+=R,S(x)}o===void 0&&m.sort(H),$(m,a)}}function L(e,f,a){for(let h=e.length,r=h-2;r>=0;--r){const m=e[r];for(const x of m){let B=0,O=0;for(const{target:F,value:K}of x.sourceLinks){let U=K*(F.layer-x.layer);B+=D(x,F)*U,O+=U}if(!(O>0))continue;let R=(B/O-x.y0)*f;x.y0+=R,x.y1+=R,S(x)}o===void 0&&m.sort(H),$(m,a)}}function $(e,f){const a=e.length>>1,h=e[a];V(e,h.y0-_,a-1,f),W(e,h.y1+_,a+1,f),V(e,l,e.length-1,f),W(e,n,0,f)}function W(e,f,a,h){for(;a<e.length;++a){const r=e[a],m=(f-r.y0)*h;m>1e-6&&(r.y0+=m,r.y1+=m),f=r.y1+_}}function V(e,f,a,h){for(;a>=0;--a){const r=e[a],m=(r.y1-f)*h;m>1e-6&&(r.y0-=m,r.y1-=m),f=r.y0-_}}function S({sourceLinks:e,targetLinks:f}){if(c===void 0){for(const{source:{sourceLinks:a}}of f)a.sort(ct);for(const{target:{targetLinks:a}}of e)a.sort(at)}}function I(e){if(c===void 0)for(const{sourceLinks:f,targetLinks:a}of e)f.sort(ct),a.sort(at)}function T(e,f){let a=e.y0-(e.sourceLinks.length-1)*_/2;for(const{target:h,width:r}of e.sourceLinks){if(h===f)break;a+=r+_}for(const{source:h,width:r}of f.targetLinks){if(h===e)break;a-=r}return a}function D(e,f){let a=f.y0-(f.targetLinks.length-1)*_/2;for(const{source:h,width:r}of f.targetLinks){if(h===e)break;a+=r+_}for(const{target:h,width:r}of e.sourceLinks){if(h===f)break;a-=r}return a}return k}var tt=Math.PI,et=2*tt,z=1e-6,jt=et-z;function nt(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function gt(){return new nt}nt.prototype=gt.prototype={constructor:nt,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,i,l){this._+="Q"+ +t+","+ +n+","+(this._x1=+i)+","+(this._y1=+l)},bezierCurveTo:function(t,n,i,l,u,v){this._+="C"+ +t+","+ +n+","+ +i+","+ +l+","+(this._x1=+u)+","+(this._y1=+v)},arcTo:function(t,n,i,l,u){t=+t,n=+n,i=+i,l=+l,u=+u;var v=this._x1,_=this._y1,p=i-t,s=l-n,o=v-t,c=_-n,g=o*o+c*c;if(u<0)throw new Error("negative radius: "+u);if(this._x1===null)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(g>z)if(!(Math.abs(c*p-s*o)>z)||!u)this._+="L"+(this._x1=t)+","+(this._y1=n);else{var b=i-v,d=l-_,k=p*p+s*s,E=b*b+d*d,M=Math.sqrt(k),P=Math.sqrt(g),A=u*Math.tan((tt-Math.acos((k+g-E)/(2*M*P)))/2),N=A/P,C=A/M;Math.abs(N-1)>z&&(this._+="L"+(t+N*o)+","+(n+N*c)),this._+="A"+u+","+u+",0,0,"+ +(c*b>o*d)+","+(this._x1=t+C*p)+","+(this._y1=n+C*s)}},arc:function(t,n,i,l,u,v){t=+t,n=+n,i=+i,v=!!v;var _=i*Math.cos(l),p=i*Math.sin(l),s=t+_,o=n+p,c=1^v,g=v?l-u:u-l;if(i<0)throw new Error("negative radius: "+i);this._x1===null?this._+="M"+s+","+o:(Math.abs(this._x1-s)>z||Math.abs(this._y1-o)>z)&&(this._+="L"+s+","+o),i&&(g<0&&(g=g%et+et),g>jt?this._+="A"+i+","+i+",0,1,"+c+","+(t-_)+","+(n-p)+"A"+i+","+i+",0,1,"+c+","+(this._x1=s)+","+(this._y1=o):g>z&&(this._+="A"+i+","+i+",0,"+ +(g>=tt)+","+c+","+(this._x1=t+i*Math.cos(u))+","+(this._y1=n+i*Math.sin(u))))},rect:function(t,n,i,l){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +i+"v"+ +l+"h"+-i+"Z"},toString:function(){return this._}};function ft(t){return function(){return t}}function Dt(t){return t[0]}function Bt(t){return t[1]}var Rt=Array.prototype.slice;function Ft(t){return t.source}function Ut(t){return t.target}function Wt(t){var n=Ft,i=Ut,l=Dt,u=Bt,v=null;function _(){var p,s=Rt.call(arguments),o=n.apply(this,s),c=i.apply(this,s);if(v||(v=p=gt()),t(v,+l.apply(this,(s[0]=o,s)),+u.apply(this,s),+l.apply(this,(s[0]=c,s)),+u.apply(this,s)),p)return v=null,p+""||null}return _.source=function(p){return arguments.length?(n=p,_):n},_.target=function(p){return arguments.length?(i=p,_):i},_.x=function(p){return arguments.length?(l=typeof p=="function"?p:ft(+p),_):l},_.y=function(p){return arguments.length?(u=typeof p=="function"?p:ft(+p),_):u},_.context=function(p){return arguments.length?(v=p??null,_):v},_}function Vt(t,n,i,l,u){t.moveTo(n,i),t.bezierCurveTo(n=(n+l)/2,i,n,u,l,u)}function Yt(){return Wt(Vt)}function Gt(t){return[t.source.x1,t.y0]}function Ht(t){return[t.target.x0,t.y1]}function Xt(){return Yt().source(Gt).target(Ht)}var it=function(){var t=function(p,s,o,c){for(o=o||{},c=p.length;c--;o[p[c]]=s);return o},n=[1,9],i=[1,10],l=[1,5,10,12],u={trace:function(){},yy:{},symbols_:{error:2,start:3,SANKEY:4,NEWLINE:5,csv:6,opt_eof:7,record:8,csv_tail:9,EOF:10,"field[source]":11,COMMA:12,"field[target]":13,"field[value]":14,field:15,escaped:16,non_escaped:17,DQUOTE:18,ESCAPED_TEXT:19,NON_ESCAPED_TEXT:20,$accept:0,$end:1},terminals_:{2:"error",4:"SANKEY",5:"NEWLINE",10:"EOF",11:"field[source]",12:"COMMA",13:"field[target]",14:"field[value]",18:"DQUOTE",19:"ESCAPED_TEXT",20:"NON_ESCAPED_TEXT"},productions_:[0,[3,4],[6,2],[9,2],[9,0],[7,1],[7,0],[8,5],[15,1],[15,1],[16,3],[17,1]],performAction:function(s,o,c,g,b,d,k){var E=d.length-1;switch(b){case 7:const M=g.findOrCreateNode(d[E-4].trim().replaceAll('""','"')),P=g.findOrCreateNode(d[E-2].trim().replaceAll('""','"')),A=parseFloat(d[E].trim());g.addLink(M,P,A);break;case 8:case 9:case 11:this.$=d[E];break;case 10:this.$=d[E-1];break}},table:[{3:1,4:[1,2]},{1:[3]},{5:[1,3]},{6:4,8:5,15:6,16:7,17:8,18:n,20:i},{1:[2,6],7:11,10:[1,12]},t(i,[2,4],{9:13,5:[1,14]}),{12:[1,15]},t(l,[2,8]),t(l,[2,9]),{19:[1,16]},t(l,[2,11]),{1:[2,1]},{1:[2,5]},t(i,[2,2]),{6:17,8:5,15:6,16:7,17:8,18:n,20:i},{15:18,16:7,17:8,18:n,20:i},{18:[1,19]},t(i,[2,3]),{12:[1,20]},t(l,[2,10]),{15:21,16:7,17:8,18:n,20:i},t([1,5,10],[2,7])],defaultActions:{11:[2,1],12:[2,5]},parseError:function(s,o){if(o.recoverable)this.trace(s);else{var c=new Error(s);throw c.hash=o,c}},parse:function(s){var o=this,c=[0],g=[],b=[null],d=[],k=this.table,E="",M=0,P=0,A=2,N=1,C=d.slice.call(arguments,1),w=Object.create(this.lexer),y={yy:{}};for(var L in this.yy)Object.prototype.hasOwnProperty.call(this.yy,L)&&(y.yy[L]=this.yy[L]);w.setInput(s,y.yy),y.yy.lexer=w,y.yy.parser=this,typeof w.yylloc>"u"&&(w.yylloc={});var $=w.yylloc;d.push($);var W=w.options&&w.options.ranges;typeof y.yy.parseError=="function"?this.parseError=y.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function V(){var x;return x=g.pop()||w.lex()||N,typeof x!="number"&&(x instanceof Array&&(g=x,x=g.pop()),x=o.symbols_[x]||x),x}for(var S,I,T,D,e={},f,a,h,r;;){if(I=c[c.length-1],this.defaultActions[I]?T=this.defaultActions[I]:((S===null||typeof S>"u")&&(S=V()),T=k[I]&&k[I][S]),typeof T>"u"||!T.length||!T[0]){var m="";r=[];for(f in k[I])this.terminals_[f]&&f>A&&r.push("'"+this.terminals_[f]+"'");w.showPosition?m="Parse error on line "+(M+1)+`:
`+w.showPosition()+`
Expecting `+r.join(", ")+", got '"+(this.terminals_[S]||S)+"'":m="Parse error on line "+(M+1)+": Unexpected "+(S==N?"end of input":"'"+(this.terminals_[S]||S)+"'"),this.parseError(m,{text:w.match,token:this.terminals_[S]||S,line:w.yylineno,loc:$,expected:r})}if(T[0]instanceof Array&&T.length>1)throw new Error("Parse Error: multiple actions possible at state: "+I+", token: "+S);switch(T[0]){case 1:c.push(S),b.push(w.yytext),d.push(w.yylloc),c.push(T[1]),S=null,P=w.yyleng,E=w.yytext,M=w.yylineno,$=w.yylloc;break;case 2:if(a=this.productions_[T[1]][1],e.$=b[b.length-a],e._$={first_line:d[d.length-(a||1)].first_line,last_line:d[d.length-1].last_line,first_column:d[d.length-(a||1)].first_column,last_column:d[d.length-1].last_column},W&&(e._$.range=[d[d.length-(a||1)].range[0],d[d.length-1].range[1]]),D=this.performAction.apply(e,[E,P,M,y.yy,T[1],b,d].concat(C)),typeof D<"u")return D;a&&(c=c.slice(0,-1*a*2),b=b.slice(0,-1*a),d=d.slice(0,-1*a)),c.push(this.productions_[T[1]][0]),b.push(e.$),d.push(e._$),h=k[c[c.length-2]][c[c.length-1]],c.push(h);break;case 3:return!0}}return!0}},v=function(){var p={EOF:1,parseError:function(o,c){if(this.yy.parser)this.yy.parser.parseError(o,c);else throw new Error(o)},setInput:function(s,o){return this.yy=o||this.yy||{},this._input=s,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var s=this._input[0];this.yytext+=s,this.yyleng++,this.offset++,this.match+=s,this.matched+=s;var o=s.match(/(?:\r\n?|\n).*/g);return o?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),s},unput:function(s){var o=s.length,c=s.split(/(?:\r\n?|\n)/g);this._input=s+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-o),this.offset-=o;var g=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var b=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===g.length?this.yylloc.first_column:0)+g[g.length-c.length].length-c[0].length:this.yylloc.first_column-o},this.options.ranges&&(this.yylloc.range=[b[0],b[0]+this.yyleng-o]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(s){this.unput(this.match.slice(s))},pastInput:function(){var s=this.matched.substr(0,this.matched.length-this.match.length);return(s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var s=this.match;return s.length<20&&(s+=this._input.substr(0,20-s.length)),(s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var s=this.pastInput(),o=new Array(s.length+1).join("-");return s+this.upcomingInput()+`
`+o+"^"},test_match:function(s,o){var c,g,b;if(this.options.backtrack_lexer&&(b={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(b.yylloc.range=this.yylloc.range.slice(0))),g=s[0].match(/(?:\r\n?|\n).*/g),g&&(this.yylineno+=g.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:g?g[g.length-1].length-g[g.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+s[0].length},this.yytext+=s[0],this.match+=s[0],this.matches=s,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(s[0].length),this.matched+=s[0],c=this.performAction.call(this,this.yy,this,o,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),c)return c;if(this._backtrack){for(var d in b)this[d]=b[d];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var s,o,c,g;this._more||(this.yytext="",this.match="");for(var b=this._currentRules(),d=0;d<b.length;d++)if(c=this._input.match(this.rules[b[d]]),c&&(!o||c[0].length>o[0].length)){if(o=c,g=d,this.options.backtrack_lexer){if(s=this.test_match(c,b[d]),s!==!1)return s;if(this._backtrack){o=!1;continue}else return!1}else if(!this.options.flex)break}return o?(s=this.test_match(o,b[g]),s!==!1?s:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var o=this.next();return o||this.lex()},begin:function(o){this.conditionStack.push(o)},popState:function(){var o=this.conditionStack.length-1;return o>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(o){return o=this.conditionStack.length-1-Math.abs(o||0),o>=0?this.conditionStack[o]:"INITIAL"},pushState:function(o){this.begin(o)},stateStackSize:function(){return this.conditionStack.length},options:{easy_keword_rules:!0},performAction:function(o,c,g,b){switch(g){case 0:return this.pushState("csv"),4;case 1:return 10;case 2:return 5;case 3:return 12;case 4:return this.pushState("escaped_text"),18;case 5:return 20;case 6:return this.popState("escaped_text"),18;case 7:return 19}},rules:[/^(?:sankey-beta\b)/,/^(?:$)/,/^(?:((\u000D\u000A)|(\u000A)))/,/^(?:(\u002C))/,/^(?:(\u0022))/,/^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/,/^(?:(\u0022)(?!(\u0022)))/,/^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/],conditions:{csv:{rules:[1,2,3,4,5,6,7],inclusive:!1},escaped_text:{rules:[6,7],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7],inclusive:!0}}};return p}();u.lexer=v;function _(){this.yy={}}return _.prototype=u,u.Parser=_,new _}();it.parser=it;const X=it;let q=[],Q=[],j={};const qt=()=>{q=[],Q=[],j={},bt()};class Qt{constructor(n,i,l=0){this.source=n,this.target=i,this.value=l}}const Kt=(t,n,i)=>{q.push(new Qt(t,n,i))};class Zt{constructor(n){this.ID=n}}const Jt=t=>(t=wt.sanitizeText(t,ot()),j[t]||(j[t]=new Zt(t),Q.push(j[t])),j[t]),te=()=>Q,ee=()=>q,ne=()=>({nodes:Q.map(t=>({id:t.ID})),links:q.map(t=>({source:t.source.ID,target:t.target.ID,value:t.value}))}),ie={nodesMap:j,getConfig:()=>ot().sankey,getNodes:te,getLinks:ee,getGraph:ne,addLink:Kt,findOrCreateNode:Jt,getAccTitle:pt,setAccTitle:mt,getAccDescription:_t,setAccDescription:kt,getDiagramTitle:xt,setDiagramTitle:vt,clear:qt},st=class{static next(t){return new st(t+ ++st.count)}constructor(t){this.id=t,this.href=`#${t}`}toString(){return"url("+this.href+")"}};let rt=st;rt.count=0;const se={left:Nt,right:Pt,center:Ct,justify:dt},re=function(t,n,i,l){const{securityLevel:u,sankey:v}=ot(),_=St.sankey;let p;u==="sandbox"&&(p=Y("#i"+n));const s=u==="sandbox"?Y(p.nodes()[0].contentDocument.body):Y("body"),o=u==="sandbox"?s.select(`[id="${n}"]`):Y(`[id="${n}"]`),c=(v==null?void 0:v.width)||_.width,g=(v==null?void 0:v.height)||_.width,b=(v==null?void 0:v.useMaxWidth)||_.useMaxWidth,d=(v==null?void 0:v.nodeAlignment)||_.nodeAlignment;Lt(o,g,c,b);const k=l.db.getGraph(),E=se[d],M=10;$t().nodeId(y=>y.id).nodeWidth(M).nodePadding(10).nodeAlign(E).extent([[0,0],[c,g]])(k);const A=Et(Tt);o.append("g").attr("class","nodes").selectAll(".node").data(k.nodes).join("g").attr("class","node").attr("id",y=>(y.uid=rt.next("node-")).id).attr("transform",function(y){return"translate("+y.x0+","+y.y0+")"}).attr("x",y=>y.x0).attr("y",y=>y.y0).append("rect").attr("height",y=>y.y1-y.y0).attr("width",y=>y.x1-y.x0).attr("fill",y=>A(y.id)),o.append("g").attr("class","node-labels").attr("font-family","sans-serif").attr("font-size",14).selectAll("text").data(k.nodes).join("text").attr("x",y=>y.x0<c/2?y.x1+6:y.x0-6).attr("y",y=>(y.y1+y.y0)/2).attr("dy","0.35em").attr("text-anchor",y=>y.x0<c/2?"start":"end").text(y=>y.id);const N=o.append("g").attr("class","links").attr("fill","none").attr("stroke-opacity",.5).selectAll(".link").data(k.links).join("g").attr("class","link").style("mix-blend-mode","multiply"),C=(v==null?void 0:v.linkColor)||"gradient";if(C==="gradient"){const y=N.append("linearGradient").attr("id",L=>(L.uid=rt.next("linearGradient-")).id).attr("gradientUnits","userSpaceOnUse").attr("x1",L=>L.source.x1).attr("x2",L=>L.target.x0);y.append("stop").attr("offset","0%").attr("stop-color",L=>A(L.source.id)),y.append("stop").attr("offset","100%").attr("stop-color",L=>A(L.target.id))}let w;switch(C){case"gradient":w=y=>y.uid;break;case"source":w=y=>A(y.source.id);break;case"target":w=y=>A(y.target.id);break;default:w=C}N.append("path").attr("d",Xt()).attr("stroke",w).attr("stroke-width",y=>Math.max(1,y.width))},oe={draw:re},le=t=>t.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g,"").replaceAll(/([\n\r])+/g,`
`).trim(),ae=X.parse.bind(X);X.parse=t=>ae(le(t));const de={parser:X,db:ie,renderer:oe};export{de as diagram};
