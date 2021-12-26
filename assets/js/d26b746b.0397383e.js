"use strict";(self.webpackChunkterra_docs=self.webpackChunkterra_docs||[]).push([[833],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,o(o({ref:e},u),{},{components:n})):r.createElement(f,o({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},724:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={},l="Stake Distribution",c={unversionedId:"introduction/stake-distribution",id:"introduction/stake-distribution",isDocsHomePage:!1,title:"Stake Distribution",description:'Lido tries to distribute the stake evenly across all validators. Given a single delegation, the exact number of validators that will receive delegations and the amount that they will receive depends on the current distribution of stake. We take a sorted (ASC) list of validators, calculate the desired amount that each validator should have targetstake = (total delegated + delegationamount) / numvalidators and begin adding stake up to the desired amount, starting from the validator with the least stake. The exact amount of a single delegation is calculated as targetstake - validatorstake, and you\'ll have as many delegations as it takes to "drain" the delegationamount.',source:"@site/docs/introduction/stake-distribution.md",sourceDirName:"introduction",slug:"/introduction/stake-distribution",permalink:"/introduction/stake-distribution",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/introduction/stake-distribution.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Slashing",permalink:"/introduction/slashing"},next:{title:"Security",permalink:"/introduction/security"}},u=[],d={toc:u};function p(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"stake-distribution"},"Stake Distribution"),(0,i.kt)("p",null,"Lido tries to distribute the stake evenly across all validators. Given a single delegation, the exact number of validators that will receive delegations and the amount that they will receive depends on the current distribution of stake. We take a sorted (ASC) list of validators, calculate the desired amount that each validator should have ",(0,i.kt)("inlineCode",{parentName:"p"},"target_stake = (total delegated + delegation_amount) / num_validators")," and begin adding stake up to the desired amount, starting from the validator with the least stake. The exact amount of a single delegation is calculated as ",(0,i.kt)("inlineCode",{parentName:"p"},"target_stake - validator_stake"),', and you\'ll have as many delegations as it takes to "drain" the delegation_amount.'),(0,i.kt)("p",null,"You can check out the implementation of this algorithm ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/lido-terra-contracts/blob/main/contracts/lido_terra_validators_registry/src/common.rs#L19"},"here"),"."))}p.isMDXComponent=!0}}]);