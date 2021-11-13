"use strict";(self.webpackChunkterra_docs=self.webpackChunkterra_docs||[]).push([[486],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return t?a.createElement(h,r(r({ref:n},d),{},{components:t})):a.createElement(h,r({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3243:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),r=["components"],s={},l="stLuna and bLuna tokens",p={unversionedId:"contracts/stLuna_and_bLuna",id:"contracts/stLuna_and_bLuna",isDocsHomePage:!1,title:"stLuna and bLuna tokens",description:"stLuna and bLuna tokens are assets built for the Terra blockchain, their value backed by underlying Luna delegations. stLuna and bLuna tokens follow full compliance with the Cw20 standard, having the potential to be integrated into a wide variety of decentralized finance applications.",source:"@site/docs/contracts/stLuna_and_bLuna.md",sourceDirName:"contracts",slug:"/contracts/stLuna_and_bLuna",permalink:"/terra-docs/contracts/stLuna_and_bLuna",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/contracts/stLuna_and_bLuna.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Airdrop Registry",permalink:"/terra-docs/contracts/airdrop-registry"},next:{title:"Fees",permalink:"/terra-docs/fees"}},d=[{value:"Base",id:"base",children:[{value:"Messages",id:"messages",children:[]},{value:"Queries",id:"queries",children:[]},{value:"Receiver",id:"receiver",children:[]}]},{value:"Allowances",id:"allowances",children:[{value:"Messages",id:"messages-1",children:[]},{value:"Queries",id:"queries-1",children:[]}]},{value:"Mintable",id:"mintable",children:[{value:"Messages",id:"messages-2",children:[]},{value:"Queries",id:"queries-2",children:[]}]},{value:"Enumerable",id:"enumerable",children:[]},{value:"Marketing",id:"marketing",children:[{value:"Messages",id:"messages-3",children:[]},{value:"Queries",id:"queries-3",children:[]},{value:"Queries",id:"queries-4",children:[]}]}],c={toc:d};function u(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"stluna-and-bluna-tokens"},"stLuna and bLuna tokens"),(0,o.kt)("p",null,"stLuna and bLuna tokens are assets built for the Terra blockchain, their value backed by underlying Luna delegations. stLuna and bLuna tokens follow full compliance with the Cw20 standard, having the potential to be integrated into a wide variety of decentralized finance applications."),(0,o.kt)("h2",{id:"base"},"Base"),(0,o.kt)("p",null,"This handles balances and transfers. Note that all amounts are\nhandled as ",(0,o.kt)("inlineCode",{parentName:"p"},"Uint128")," (128 bit integers with JSON string representation).\nHandling decimals is left to the UI and not interpreted"),(0,o.kt)("h3",{id:"messages"},"Messages"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Transfer{recipient, amount}")," - Moves ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," tokens from the\n",(0,o.kt)("inlineCode",{parentName:"p"},"env.sender")," account to the ",(0,o.kt)("inlineCode",{parentName:"p"},"recipient")," account. This is designed to\nsend to an address controlled by a private key and ",(0,o.kt)("em",{parentName:"p"},"does not")," trigger\nany actions on the recipient if it is a contract."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Send{contract, amount, msg}")," - Moves ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," tokens from the\n",(0,o.kt)("inlineCode",{parentName:"p"},"env.sender")," account to the ",(0,o.kt)("inlineCode",{parentName:"p"},"recipient")," account. ",(0,o.kt)("inlineCode",{parentName:"p"},"contract")," must be an\naddress of a contract that implements the ",(0,o.kt)("inlineCode",{parentName:"p"},"Receiver")," interface. The ",(0,o.kt)("inlineCode",{parentName:"p"},"msg"),"\nwill be passed to the recipient contract, along with the amount."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Burn{amount}")," - Remove ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," tokens from the balance of ",(0,o.kt)("inlineCode",{parentName:"p"},"env.sender"),"\nand reduce ",(0,o.kt)("inlineCode",{parentName:"p"},"total_supply")," by the same amount."),(0,o.kt)("h3",{id:"queries"},"Queries"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Balance{address}"),' - Returns the balance of the given address.\nReturns "0" if the address is unknown to the contract. Return type\nis ',(0,o.kt)("inlineCode",{parentName:"p"},"BalanceResponse{balance}"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"TokenInfo{}")," - Returns the token info of the contract. Return type is\n",(0,o.kt)("inlineCode",{parentName:"p"},"TokenInfoResponse{name, symbol, decimal, total_supply}"),"."),(0,o.kt)("h3",{id:"receiver"},"Receiver"),(0,o.kt)("p",null,"The counter-part to ",(0,o.kt)("inlineCode",{parentName:"p"},"Send")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"Receive"),", which must be implemented by\nany contract that wishes to manage CW20 tokens. This is generally ",(0,o.kt)("em",{parentName:"p"},"not"),"\nimplemented by any CW20 contract."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Receive{sender, amount, msg}")," - This is designed to handle ",(0,o.kt)("inlineCode",{parentName:"p"},"Send"),"\nmessages. The address of the contract is stored in ",(0,o.kt)("inlineCode",{parentName:"p"},"env.sender"),"\nso it cannot be faked. The contract should ensure the sender matches\nthe token contract it expects to handle, and not allow arbitrary addresses."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"sender")," is the original account requesting to move the tokens\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"msg")," is a ",(0,o.kt)("inlineCode",{parentName:"p"},"Binary")," data that can be decoded into a contract-specific\nmessage. This can be empty if we have only one default action,\nor it may be a ",(0,o.kt)("inlineCode",{parentName:"p"},"ReceiveMsg")," variant to clarify the intention. For example,\nif I send to a uniswap contract, I can specify which token I want to swap\nagainst using this field."),(0,o.kt)("h2",{id:"allowances"},"Allowances"),(0,o.kt)("p",null,"A contract may allow actors to delegate some of their balance to other\naccounts. This is not as essential as with ERC20 as we use ",(0,o.kt)("inlineCode",{parentName:"p"},"Send"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"Receive"),"\nto send tokens to a contract, not ",(0,o.kt)("inlineCode",{parentName:"p"},"Approve"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"TransferFrom"),". But it\nis still a nice use-case, and you can see how the Cosmos SDK wants to add\npayment allowances to native tokens. This is mainly designed to provide\naccess to other public-key-based accounts."),(0,o.kt)("p",null,"There was an issue with race conditions in the original ERC20 approval spec.\nIf you had an approval of 50 and I then want to reduce it to 20, I submit a\nTx to set the allowance to 20. If you see that and immediately submit a tx\nusing the entire 50, you then get access to the other 20. Not only did you quickly\nspend the 50 before I could reduce it, you get another 20 for free."),(0,o.kt)("p",null,"The solution discussed in the Ethereum community was an ",(0,o.kt)("inlineCode",{parentName:"p"},"IncreaseAllowance"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"DecreaseAllowance")," operator (instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"Approve"),"). To originally set\nan approval, use ",(0,o.kt)("inlineCode",{parentName:"p"},"IncreaseAllowance"),", which works fine with no previous allowance.\n",(0,o.kt)("inlineCode",{parentName:"p"},"DecreaseAllowance")," is meant to be robust, that is if you decrease by more than\nthe current allowance (eg. the user spent some in the middle), it will just round\ndown to 0 and not make any underflow error."),(0,o.kt)("h3",{id:"messages-1"},"Messages"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"IncreaseAllowance{spender, amount, expires}")," - Set or increase the allowance\nsuch that ",(0,o.kt)("inlineCode",{parentName:"p"},"spender")," may access up to ",(0,o.kt)("inlineCode",{parentName:"p"},"amount + current_allowance")," tokens\nfrom the ",(0,o.kt)("inlineCode",{parentName:"p"},"env.sender")," account. This may optionally come with an ",(0,o.kt)("inlineCode",{parentName:"p"},"Expiration"),"\ntime, which if set limits when the approval can be used (by time or height)."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DecreaseAllowance{spender, amount, expires}")," - Decrease or clear the allowance\nsuch that ",(0,o.kt)("inlineCode",{parentName:"p"},"spender")," may access up to ",(0,o.kt)("inlineCode",{parentName:"p"},"current_allowance - amount")," tokens\nfrom the ",(0,o.kt)("inlineCode",{parentName:"p"},"env.sender")," account. This may optionally come with an ",(0,o.kt)("inlineCode",{parentName:"p"},"Expiration"),"\ntime, which if set limits when the approval can be used (by time or height).\nIf ",(0,o.kt)("inlineCode",{parentName:"p"},"amount >= current_allowance"),", this will clear the allowance (delete it)."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"TransferFrom{owner, recipient, amount}")," - This makes use of an allowance\nand if there was a valid, un-expired pre-approval for the ",(0,o.kt)("inlineCode",{parentName:"p"},"env.sender"),",\nthen we move ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," tokens from ",(0,o.kt)("inlineCode",{parentName:"p"},"owner")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"recipient")," and deduct it\nfrom the available allowance."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SendFrom{owner, contract, amount, msg}")," - ",(0,o.kt)("inlineCode",{parentName:"p"},"SendFrom")," is to ",(0,o.kt)("inlineCode",{parentName:"p"},"Send"),", what\n",(0,o.kt)("inlineCode",{parentName:"p"},"TransferFrom")," is to ",(0,o.kt)("inlineCode",{parentName:"p"},"Transfer"),". This allows a pre-approved account to\nnot just transfer the tokens, but to send them to another contract\nto trigger a given action. ",(0,o.kt)("strong",{parentName:"p"},"Note")," ",(0,o.kt)("inlineCode",{parentName:"p"},"SendFrom")," will set the ",(0,o.kt)("inlineCode",{parentName:"p"},"Receive{sender}"),"\nto be the ",(0,o.kt)("inlineCode",{parentName:"p"},"env.sender")," (the account that triggered the transfer)\nrather than the ",(0,o.kt)("inlineCode",{parentName:"p"},"owner")," account (the account the money is coming from).\nThis is an open question whether we should switch this?"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"BurnFrom{owner, amount}")," - This works like ",(0,o.kt)("inlineCode",{parentName:"p"},"TransferFrom"),", but burns\nthe tokens instead of transfering them. This will reduce the owner's\nbalance, ",(0,o.kt)("inlineCode",{parentName:"p"},"total_supply")," and the caller's allowance."),(0,o.kt)("h3",{id:"queries-1"},"Queries"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Allowance{owner, spender}")," - This returns the available allowance\nthat ",(0,o.kt)("inlineCode",{parentName:"p"},"spender")," can access from the ",(0,o.kt)("inlineCode",{parentName:"p"},"owner"),"'s account, along with the\nexpiration info. Return type is ",(0,o.kt)("inlineCode",{parentName:"p"},"AllowanceResponse{balance, expiration}"),"."),(0,o.kt)("h2",{id:"mintable"},"Mintable"),(0,o.kt)("p",null,"This allows another contract to mint new tokens, possibly with a cap.\nThere is only one minter specified here, if you want more complex\naccess management, please use a multisig or other contract as the\nminter address and handle updating the ACL there."),(0,o.kt)("h3",{id:"messages-2"},"Messages"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Mint{recipient, amount}")," - If the ",(0,o.kt)("inlineCode",{parentName:"p"},"env.sender")," is the allowed minter,\nthis will create ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," new tokens (updating total supply) and\nadd them to the balance of ",(0,o.kt)("inlineCode",{parentName:"p"},"recipient"),", as long as it does not exceed the cap."),(0,o.kt)("h3",{id:"queries-2"},"Queries"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Minter{}")," - Returns who and how much can be minted. Return type is\n",(0,o.kt)("inlineCode",{parentName:"p"},"MinterResponse {minter, cap}"),". Cap may be unset."),(0,o.kt)("p",null,"If the cap is set, it defines the maximum ",(0,o.kt)("inlineCode",{parentName:"p"},"total_supply")," that may ever exist.\nIf initial supply is 1000 and cap is ",(0,o.kt)("inlineCode",{parentName:"p"},"Some(2000)"),", you can only mint 1000 more tokens.\nHowever, if someone then burns 500 tokens, the minter can mint those 500 again.\nThis allows for dynamic token supply within a set of parameters, especially when\nthe minter is a smart contract."),(0,o.kt)("h2",{id:"enumerable"},"Enumerable"),(0,o.kt)("p",null,"This should be enabled with all blockchains that have iterator support.\nIt allows us to get lists of results with pagination."),(0,o.kt)("h2",{id:"marketing"},"Marketing"),(0,o.kt)("p",null,"This allows us to attach more metadata on the token to help with displaying the token in\nwallets. When you see a token's website, then see it in a wallet, you know what it is.\nHowever, if you see it in a wallet or a DEX trading pair, there is no clear way to find out\nany more info about it."),(0,o.kt)("p",null,'This extension allows us to attach more "Marketing" metadata, which has no effect on the\non-chain functionality of the token, but is very useful in providing a better client-side\nexperience. Note, that we add a new role ',(0,o.kt)("inlineCode",{parentName:"p"},"marketing"),", which can update such info, but not\naffect on-chain logic."),(0,o.kt)("h3",{id:"messages-3"},"Messages"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"UploadLogo{url | embedded}")," - If the ",(0,o.kt)("inlineCode",{parentName:"p"},"env.sender")," is the allowed marketing account,\nthis will either set a new URL reference where the logo is served, or allow them to upload\na small (less than 5KB) SVG or PNG logo onto the blockchain to be served."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"UpdateMarketing{project, description, marketing}")," - If the ",(0,o.kt)("inlineCode",{parentName:"p"},"env.sender")," is the allowed marketing\naccount, this will update some marketing-related metadata on the contract."),(0,o.kt)("h3",{id:"queries-3"},"Queries"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"MarketingInfo{}")," - Returns marketing-related metadata. Return type is\n",(0,o.kt)("inlineCode",{parentName:"p"},"MarketingInfoResponse {project, description, logo, marketing}"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DownloadLogo{}")," - If the token's logo was previously uploaded to the blockchain\n(see ",(0,o.kt)("inlineCode",{parentName:"p"},"UploadLogo")," message), then it returns the raw data to be displayed in a browser.\nReturn type is ",(0,o.kt)("inlineCode",{parentName:"p"},"DownloadLogoResponse{ mime_type, data }"),"."),(0,o.kt)("h3",{id:"queries-4"},"Queries"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"AllAllowances{owner, start_after, limit}")," - Returns the list of all non-expired allowances\nby the given owner. ",(0,o.kt)("inlineCode",{parentName:"p"},"start_after")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"limit")," provide pagination."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"AllAccounts{start_after, limit}")," - Returns the list of all accounts that have been created on\nthe contract (just the addresses). ",(0,o.kt)("inlineCode",{parentName:"p"},"start_after")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"limit")," provide pagination."))}u.isMDXComponent=!0}}]);