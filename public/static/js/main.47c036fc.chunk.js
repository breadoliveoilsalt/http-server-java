(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,r,t){e.exports=t(47)},37:function(e,r,t){},47:function(e,r,t){"use strict";t.r(r);var a=t(0),n=t.n(a),s=t(15),o=t.n(s),u=(t(37),t(18)),l=t(12),c=function(){return n.a.createElement("div",{id:"header"},"Birch")},i=function(){return n.a.createElement("div",{className:"navbar"},n.a.createElement(l.b,{className:"navlink",to:"/"},"Book ",n.a.createElement("span",{className:"strikethrough"},"Sirch")," Search"),n.a.createElement(l.b,{className:"navlink",to:"/about"},"About"))},h=t(10),m=t(7),p=t(13),d=t(19),f=t(17),b=t(11),g=t(20),E="LOAD_ERROR",S="DELETE_ERROR",v="BEGIN_BOOK_API_REQUEST",y="END_BOOK_API_REQUEST",R="LOAD_SEARCH_TERMS",k="INCREASE_SEARCH_STARTING_ID",I="LOAD_SEARCH_RESULTS",O="LOAD_RESULT_NUMBER",T="CLEAR_PRIOR_SEARCH",P="RESET_SEARCH";function N(e){return{type:E,payload:e}}function A(){return{type:y}}function j(e){return function(r){return e().then(function(e){if(e.error)throw Error(e.message);if(!e.resultsNumber||!e.results)throw new Error("Sorry, the data returned from the server was incomplete. Please try again.");var t,a;r(A()),r((a=e.resultsNumber,{type:O,payload:a})),r((t=e.results,{type:I,payload:t}))}).catch(function(e){r(A());var t=e.message?e.message:"Sorry, something went wrong. Please try again.";r(N(t))})}}t(43);var L=function e(r){Object(m.a)(this,e),this.fetch=fetch,this.searchTerms=r.searchTerms||null},w=function e(r){Object(m.a)(this,e),this.imageURL=r.imageURL||null,this.title=r.title||null,this.authors=r.authors||null,this.publisher=r.publisher||null,this.additionalInfoURL=r.additionalInfoURL||null},B=function(){function e(){Object(m.a)(this,e)}return Object(p.a)(e,[{key:"setImageURL",value:function(e){return this.imageURL=e,this}},{key:"setTitle",value:function(e){return this.title=e,this}},{key:"setAuthors",value:function(e){return this.authors=e,this}},{key:"setPublisher",value:function(e){return this.publisher=e,this}},{key:"setAdditionalInfoURL",value:function(e){return this.additionalInfoURL=e,this}},{key:"build",value:function(){return new w(this)}}]),e}();var D=function(e){function r(e){var t;return Object(m.a)(this,r),(t=Object(d.a)(this,Object(f.a)(r).call(this,e))).apiKey=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_GOOGLE_BOOKS_API_KEY,t.searchStartingID=e.searchStartingID||0,t.resultsPerSearch=e.resultsPerSearch||20,t}return Object(g.a)(r,e),Object(p.a)(r,[{key:"basicSearchWithAPIKey",value:function(){var e="https://www.googleapis.com/books/v1/volumes?key=".concat(this.apiKey)+"&q="+this.searchTerms+"&startIndex="+this.searchStartingID+"&maxResults="+this.resultsPerSearch,r=this.fetch;return function(){return r(e).then(function(e){var r=function(e){var r={error:!1},t=Math.floor(e.status/100);4===t?(r.error=!0,r.message="Sorry, there was an error with the search terms. Please try again."):5===t&&(r.error=!0,r.message="Sorry, there appears to be a server error. Please try again in a bit.");return r}(e);if(r.error)throw r;return e.json()}).then(function(e){var r=function(e){var r={error:!1};if(e.error)try{var t=e.error.errors[0].message+"//"+e.error.errors[0].reason;r.error=!0,r.message=t}catch(a){r.error=!0,r.message="Sorry, there appears to be a data error. Please try again."}return r}(e);if(r.error)throw r;return e}).then(function(e){var r=function(e){var r={error:!1};e.hasOwnProperty("totalItems")&&0!==e.totalItems||(r.error=!0,r.message="Sorry, there were no results. Please try another search.");return r}(e);if(r.error)throw r;return e}).then(function(e){var r=function(e){return e.items.map(function(e){var r={},t=e.volumeInfo;try{var a=t.imageLinks.thumbnail,n=a.replace("http://","https://");r.imageURL=n}catch(u){r.imageURL=null}try{r.title=t.title}catch(l){r.title=null}try{for(var s=t.authors[0],o=1;o<t.authors.length;o++)s+=" & ".concat(t.authors[o]);r.authors=s}catch(c){r.authors=null}try{r.publisher=t.publisher}catch(i){r.publisher=null}try{r.additionalInfoURL=t.infoLink}catch(h){r.additionalInfoURL=null}return r})}(e),t=r.map(function(e){return(new B).setImageURL(e.imageURL).setTitle(e.title).setAuthors(e.authors).setPublisher(e.publisher).setAdditionalInfoURL(e.additionalInfoURL).build()});return{resultsNumber:e.totalItems,results:t}}).catch(function(e){return e})}}}]),r}(L),_=function(e){var r=e.handleSearchSubmit,t=e.loadSearchTerms,a=e.userSearchTerms;return n.a.createElement("form",null,n.a.createElement("input",{id:"search-input",type:"text",value:a,onChange:function(e){return t(e.target.value)}}),n.a.createElement("input",{type:"submit",onClick:r,value:"Search"}))},U=function(e){var r=e.handleClearSearch;return n.a.createElement("input",{id:"clear-search-button",type:"submit",onClick:r,value:"Clear Search"})},C=function(e){var r=e.errorMessage;return r?n.a.createElement("div",{className:"error-display"},r):null},q=function(){return n.a.createElement("div",{className:"big-divider"})},M=function(e){var r=e.resultsNumber;return 0!==r?n.a.createElement("div",{id:"search-results-header"},n.a.createElement(q,null),r," potential result(s)",n.a.createElement(q,null)):null},x=function(e){var r=e.bookInfo,t=e.number;return n.a.createElement("div",{className:"book-record"},n.a.createElement("p",null," ",n.a.createElement("span",{className:"bold-text"}," # ",t," ")),r.imageURL?n.a.createElement("img",{className:"book-thumbnail",alt:"",src:r.imageURL}):n.a.createElement("p",null," ",n.a.createElement("span",{className:"bold-text"},"(No image Available)")),n.a.createElement("p",null," ",n.a.createElement("span",{className:"bold-text"},"Title: ")," ",r.title?r.title:"Not Available"," "),n.a.createElement("p",null," ",n.a.createElement("span",{className:"bold-text"},"Author(s): ")," ",r.authors?r.authors:"Not Available"," "),n.a.createElement("p",null," ",n.a.createElement("span",{className:"bold-text"},"Publisher: ")," ",r.publisher?r.publisher:"Not Available"," "),r.additionalInfoURL?n.a.createElement("p",null,n.a.createElement("a",{className:"bold-text",href:r.additionalInfoURL,target:"_blank",rel:"noopener noreferrer"},"Click here",n.a.createElement("br",null),"for more info!")):null)},K=function(){return n.a.createElement("div",{className:"loader"})},G=function(e){var r=e.handleLoadMoreResults;return n.a.createElement("input",{type:"submit",onClick:r,value:"Load More Results"})},H=function(e){var r=e.makingBookAPIRequest,t=e.resultsDisplayed,a=e.resultsNumber,s=e.handleLoadMoreResults,o=n.a.createElement("p",null," Use the Search Bar above to begin! "),u=t<a,l=a>0&&t>=a;return r?o=n.a.createElement(K,null):u?o=n.a.createElement(G,{handleLoadMoreResults:s}):l&&(o=n.a.createElement("p",null,"End of results.")),n.a.createElement("div",{className:"search-results-footer"},o)},W=function(e){var r=e.results,t=e.resultsNumber,a=e.makingBookAPIRequest,s=e.handleLoadMoreResults,o=(e.jumpToTopOfResults,r.length),u=r.map(function(e,r){return n.a.createElement(x,{key:r,number:r+1,bookInfo:e})});return n.a.createElement("div",{className:"search-results-container"},n.a.createElement(M,{resultsNumber:t}),u,n.a.createElement(H,{makingBookAPIRequest:a,resultsNumber:t,resultsDisplayed:o,handleLoadMoreResults:s}))},J=function(e){var r=e.resultsNumber,t=e.jumpToTop;return r>0?n.a.createElement("input",{id:"jump-to-top-button",type:"submit",onClick:t,value:"Jump To Top"}):null},Q=function(e){function r(e){var t;return Object(m.a)(this,r),(t=Object(d.a)(this,Object(f.a)(r).call(this,e))).handleSearchSubmit=t.handleSearchSubmit.bind(Object(b.a)(t)),t.handleClearSearch=t.handleClearSearch.bind(Object(b.a)(t)),t.handleLoadMoreResults=t.handleLoadMoreResults.bind(Object(b.a)(t)),t.jumpToTop=t.jumpToTop.bind(Object(b.a)(t)),t}return Object(g.a)(r,e),Object(p.a)(r,[{key:"handleSearchSubmit",value:function(e){e.preventDefault(),this.props.deleteError(),this.props.clearPriorSearch(),this.props.beginBookAPIRequest();var r=this.escapeSearchTerms(this.props.userSearchTerms);if(""===r)return this.props.endBookAPIRequest(),void this.props.loadError("Please enter a search term and try again.");var t={searchTerms:r,serachStartingID:this.props.searchStartingID,resultsPerSearch:this.props.resultsPerSearch};this.props.getBookRecords(this.apiRequest(t))}},{key:"escapeSearchTerms",value:function(e){return e.trim()}},{key:"handleClearSearch",value:function(e){e.preventDefault(),this.props.deleteError(),this.props.resetSearch()}},{key:"handleLoadMoreResults",value:function(e){e.preventDefault(),this.props.beginBookAPIRequest();var r={searchTerms:this.escapeSearchTerms(this.props.userSearchTerms),searchStartingID:this.props.searchStartingID+this.props.resultsPerSearch,resultsPerSearch:this.props.resultsPerSearch};this.props.getBookRecords(this.apiRequest(r)),this.props.increaseSearchStartingID()}},{key:"apiRequest",value:function(e){return new D(e).basicSearchWithAPIKey()}},{key:"jumpToTop",value:function(e){e.preventDefault(),document.getElementById("header").scrollIntoView(!0)}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(_,{handleSearchSubmit:this.handleSearchSubmit,loadSearchTerms:this.props.loadSearchTerms,userSearchTerms:this.props.userSearchTerms}),n.a.createElement(U,{handleClearSearch:this.handleClearSearch}),n.a.createElement(C,{errorMessage:this.props.currentError}),n.a.createElement(W,{results:this.props.results,resultsNumber:this.props.resultsNumber,makingBookAPIRequest:this.props.makingBookAPIRequest,handleLoadMoreResults:this.handleLoadMoreResults}),n.a.createElement(J,{resultsNumber:this.props.resultsNumber,jumpToTop:this.jumpToTop}))}}]),r}(a.Component),V=Object(u.b)(function(e){return{makingBookAPIRequest:e.appStatus.makingBookAPIRequest,currentError:e.appStatus.currentError,userSearchTerms:e.currentSearch.userSearchTerms,resultsPerSearch:e.currentSearch.resultsPerSearch,searchStartingID:e.currentSearch.searchStartingID,results:e.currentSearch.results,resultsNumber:e.currentSearch.resultsNumber}},function(e){return{loadError:function(r){return e(N(r))},deleteError:function(){return e({type:S})},beginBookAPIRequest:function(){return e({type:v})},endBookAPIRequest:function(){return e(A())},loadSearchTerms:function(r){return e(function(e){return{type:R,payload:e}}(r))},increaseSearchStartingID:function(){return e({type:k})},clearPriorSearch:function(){return e({type:T})},resetSearch:function(){return e({type:P})},getBookRecords:function(r){return e(j(r))}}})(Q),Y=function(){return n.a.createElement("div",{className:"info-page"},n.a.createElement("p",null,"Thanks for visiting Birch, a tool to search for your next favorite book!"),n.a.createElement("p",null,'On the search page, simply type in a search term, click "Search," and browse the results.  Click "Clear Search" to start again.'),n.a.createElement("p",null,"Birch's search functionality is thanks to the ",n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://developers.google.com/books/"}," Google Books API"),'. Its name comes from imagining how to combine the the words "book" and "search."'),n.a.createElement("p",null,"Enjoy!"))},$=function(){return n.a.createElement("div",{className:"info-page"},n.a.createElement("p",null,"Sorry, the page you were looking for does not exist.  Please use one of the links above to navigage to another page."))},z=function(){return n.a.createElement(h.c,null,n.a.createElement(h.a,{path:"/",exact:!0,component:V}),n.a.createElement(h.a,{path:"/about",exact:!0,component:Y}),n.a.createElement(h.a,{component:$}))},F=function(){return n.a.createElement(l.a,null,n.a.createElement("div",{className:"app-container"},n.a.createElement(c,null),n.a.createElement(i,null),n.a.createElement(z,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=t(8),Z=t(30),ee=t(31),re=function(e){return function(r,t,a){return e(function(e,t){var a,n=performance.now(),s=r(e,t),o=performance.now(),u=(a=o-n,Math.round(100*a)/100);return console.log("reducer process time:",u),s},t,a)}},te=function(e){return function(r){return function(t){console.group(t.type),console.info("dispatching",t);var a=r(t);return console.log("next state",e.getState()),console.groupEnd(),a}}},ae={makingBookAPIRequest:!1,currentError:null};var ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case E:return Object.assign({},e,{currentError:r.payload});case S:return Object.assign({},e,{currentError:null});case v:return Object.assign({},e,{makingBookAPIRequest:!0});case y:return Object.assign({},e,{makingBookAPIRequest:!1});default:return e}},se=t(26),oe={userSearchTerms:"",resultsPerSearch:20,searchStartingID:0,results:[],resultsNumber:0};var ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case R:return Object.assign({},e,{userSearchTerms:r.payload});case k:return Object.assign({},e,{searchStartingID:e.searchStartingID+e.resultsPerSearch});case I:return Object.assign({},e,{results:[].concat(Object(se.a)(e.results),Object(se.a)(r.payload))});case O:return Object.assign({},e,{resultsNumber:r.payload});case T:return Object.assign({},e,{searchStartingID:0,results:[],resultsNumber:0});case P:return Object.assign({},oe);default:return e}},le=Object(X.combineReducers)({appStatus:ne,currentSearch:ue});var ce=function(e){var r=[te,Z.a],t=[X.applyMiddleware.apply(void 0,r),re],a=ee.composeWithDevTools.apply(void 0,t);return Object(X.createStore)(le,e,a)}();o.a.render(n.a.createElement(u.a,{store:ce},n.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.47c036fc.chunk.js.map