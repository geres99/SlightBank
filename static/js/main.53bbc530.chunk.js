(this.webpackJsonpreact1st=this.webpackJsonpreact1st||[]).push([[0],{22:function(e,t,a){e.exports=a(42)},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(20),s=a.n(c),r=(a(27),a(28),a(12)),i=a(1),o=(a(29),a(30),a(2));a(31);var m=function(e){var t=Object(o.f)();return l.a.createElement("div",{className:"align-items"},l.a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),l.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap",rel:"stylesheet"}),l.a.createElement("img",{className:"quill"+e.place,src:"/SlightBank/Images/quill.svg",alt:""}),l.a.createElement("div",{onClick:function(){t.push(e.link)},className:"LogoText"+e.place},"Slight Bank"))},u=function(){var e=l.a.useState([]),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(o.f)(),s=function(){c.push("/About"),n([])},r=function(){c.push("/Accounts"),n([])},u=function(){c.push("/Resources"),n([])};return l.a.createElement("div",null,l.a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),l.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap",rel:"stylesheet"}),l.a.createElement("div",{className:"upBar"},l.a.createElement(m,{link:"/",place:"Core"}),l.a.createElement("div",{className:"Desktop"},l.a.createElement("div",{className:"flexButtons"},l.a.createElement("button",{onClick:s,className:"upButtons About"},"About"),l.a.createElement("button",{onClick:r,className:"upButtons Accounts"},"Accounts"),l.a.createElement("button",{onClick:u,className:"upButtons Resources"},"Resources"),l.a.createElement("div",{className:"spaceFiller"}))),l.a.createElement("div",{className:"Mobile"},l.a.createElement("div",{className:"grow"}),l.a.createElement("button",{onClick:function(){0===a.length?n(["x"]):n([])},className:"hamburgerMenu"},l.a.createElement("img",{className:"hamburger",src:"/SlightBank/Images/meat.svg",alt:""})))),l.a.createElement("div",{className:"Mobile"},a.map((function(e){return l.a.createElement("div",{className:"flexButtonsMobile"},l.a.createElement("button",{onClick:s,className:"MobileButton"},"About"),l.a.createElement("button",{onClick:r,className:"MobileButton"},"Accounts"),l.a.createElement("div",null,l.a.createElement("button",{onClick:u,className:"MobileButton"},"Resources")))}))))},d=a(9),g=Object(d.a)({array:[["Marcin","marcin99"],["x","x"]]}).useGlobalState,E=Object(d.a)({account:[]}).useGlobalState,v=Object(d.a)({popUp:[]}).useGlobalState;var h=function(){var e=l.a.useState("eye-closed"),t=Object(i.a)(e,2),a=t[0],c=t[1],s=l.a.useState(""),m=Object(i.a)(s,2),d=m[0],h=m[1],f=l.a.useState(""),p=Object(i.a)(f,2),N=p[0],b=p[1],w=l.a.useState(0),k=Object(i.a)(w,2),x=k[0],y=k[1],B=g("array"),M=Object(i.a)(B,2),S=M[0],T=M[1],C=v("popUp"),O=Object(i.a)(C,2),j=O[0],A=O[1],I=E("account"),L=Object(i.a)(I,2),F=(L[0],L[1]),D=Object(o.f)(),P=[["freedom","Free yourself from any costs with SlightBank",0],["explore","Explore unexplored wtih the system of payments of SlightBank",1],["obstacle","Defeat any obstacles with new saving system with SlightBank",2]],R=Object(n.useCallback)((function(){void 0===P[x-1]?y(P.length-1):y(x-1)}),[x,P]),U=Object(n.useCallback)((function(){void 0===P[x+1]?y(0):y(x+1)}),[x,P]),Y=function(){A([])};return Object(n.useEffect)((function(){var e=setInterval(U,5e3);return function(){clearInterval(e)}}),[U]),l.a.createElement("div",null,l.a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),l.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap",rel:"stylesheet"}),l.a.createElement(u,null),j.map((function(e){return l.a.createElement("div",{className:"CreatedAccount "+e[0]},l.a.createElement("div",null),l.a.createElement("div",null,e[1]),l.a.createElement("button",{onClick:Y,className:"closeButton "+e[0]},"X"))})),l.a.createElement("div",{className:"centre"},l.a.createElement("div",{className:"LoginWindow"},l.a.createElement("img",{className:"LoginQuill",src:"/SlightBank/Images/quilllogin.svg",alt:""}),l.a.createElement("div",{className:"Title"},"Slight Bank"),l.a.createElement("div",{className:"LoginText"},"Username"),l.a.createElement("input",{value:d,onChange:function(e){h(e.target.value)},className:"input"}),l.a.createElement("div",{className:"LoginText"},"Password"),l.a.createElement("input",{type:"eye-open"!==a?"password":"text",value:N,onChange:function(e){b(e.target.value)},className:"input"}),l.a.createElement("img",{onClick:function(){c("eye-open"!==a?"eye-open":"eye-closed")},className:"Eye",src:"/SlightBank/Images/"+a+".svg",alt:""}),l.a.createElement("div",{className:"row"},l.a.createElement("button",{onClick:function(){for(var e=0;e<S.length;e++)if(S[e][0].toLowerCase()===d.toLowerCase()&&S[e][1]===N)return h(""),b(""),F(S[e][0]),void D.push("/MyAccount");A([["red","Incorrect username or password!"]]),setTimeout(Y,5e3),h(""),b("")},className:"ButtonLog"},"Log-in"),l.a.createElement("div",{className:"SpaceButtons"}),l.a.createElement("button",{onClick:function(){if(d.length>=3&&d.length<=12&&N.length>=3&&N.length<=12){for(var e=0;e<S.length;e++)if(S[e][0].toLowerCase()===d.toLowerCase())return A([["yellow","Account with this name already exist!"]]),setTimeout(Y,5e3),h(""),void b("");return T([].concat(Object(r.a)(S),[[d,N]])),h(""),b(""),A([["green","You successfully created an account!"]]),void setTimeout(Y,5e3)}h(""),b(""),A([["red","Account and password need to be 3-12 letters long!"]]),setTimeout(Y,5e3)},className:"ButtonLog"},"Sign-up"))),l.a.createElement("div",{className:"space"}),l.a.createElement("div",null,l.a.createElement("img",{width:"600px",height:"400px",className:"ImageOnSlider",src:"/SlightBank/Images/"+P[x][0]+".jpg",alt:""}),l.a.createElement("div",{className:"GrayScreen"},l.a.createElement("div",{className:"ImageText"},P[x][1]),l.a.createElement("button",{className:"buttonSlider",onClick:R},l.a.createElement("img",{className:"left",width:"32px",height:"32px",src:"/SlightBank/Images/left-arrow.svg",alt:""})),l.a.createElement("button",{className:"buttonSlider",onClick:U},l.a.createElement("img",{className:"right",width:"32px",height:"32px",src:"/SlightBank/Images/right-arrow.svg",alt:""}))),l.a.createElement("div",{className:"myRow"},P.map((function(e){return function(e){return e[2]===x?l.a.createElement("div",{className:"imageCircleDark"}):l.a.createElement("div",{className:"imageCircle"})}(e)}))))))};a(37);var f=function(){var e=l.a.useState([]),t=Object(i.a)(e,2),a=t[0],n=t[1],c=l.a.useState([]),s=Object(i.a)(c,2),r=s[0],o=s[1],m=function(e){return 0===e.length?l.a.createElement("img",{height:"30px",className:"nadropdown",src:"/SlightBank/Images/drop-down-noactive.svg",alt:""}):l.a.createElement("img",{height:"30px",className:"nadropdown",src:"/SlightBank/Images/drop-down-active.svg",alt:""})};return l.a.createElement("div",null,l.a.createElement(u,null),l.a.createElement("button",{className:"showButton",onClick:function(){0===r.length?o(["x"]):o([])}},m(r),"About me:"),r.map((function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"bigText"},"About me:"),l.a.createElement("div",{className:"smallText"},"My name is Marcin M\u0119dryk and im 21 years old front end developer"),l.a.createElement("div",{className:"bigText"},"Education:"),l.a.createElement("div",{className:"smallText"},l.a.createElement("div",null,l.a.createElement("div",null,"High school - CKU1 w Warszawie (Finished)"),l.a.createElement("div",{className:"littleMargins"},"College - SGGW, In\u017cynieria system\xf3w biotechnicznych (Unfinished)"))))})),l.a.createElement("button",{className:"showButton",onClick:function(){0===a.length?n(["x"]):n([])}},m(a),"Technologies used:"),a.map((function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"bigText"},"Github Pages:"),l.a.createElement("div",{className:"smallText"},"for deploying the live version of the app"),l.a.createElement("div",{className:"bigText"},"React:"),l.a.createElement("div",{className:"smallText"},"As the main framework of the app"),l.a.createElement("div",{className:"bigText"},"React-router:"),l.a.createElement("div",{className:"smallText"},"For creating routing in the app"),l.a.createElement("div",{className:"bigText"},"React-global-state:"),l.a.createElement("div",{className:"smallText"},"For creating global states in the app"),l.a.createElement("div",{className:"bigText"},"Reactive Design:"),l.a.createElement("div",{className:"smallText"},"The layout changes based on the device screen-size (Mobile, Desktop)"),l.a.createElement("div",{className:"bigText"},"Figma:"),l.a.createElement("div",{className:"smallText"},"For the design"))})))};a(38);var p=function(){var e=g("array"),t=Object(i.a)(e,2),a=t[0],n=(t[1],a.slice(2)),c=l.a.useState([]),s=Object(i.a)(c,2),r=s[0],o=s[1],m=l.a.useState([]),d=Object(i.a)(m,2),E=d[0],v=d[1],h=function(e){return 0===e.length?l.a.createElement("img",{height:"30px",className:"nadropdown",src:"/SlightBank/Images/drop-down-noactive.svg",alt:""}):l.a.createElement("img",{height:"30px",className:"nadropdown",src:"/SlightBank/Images/drop-down-active.svg",alt:""})};return l.a.createElement("div",null,l.a.createElement(u,null),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){0===r.length?o(["x"]):o([])},className:"showButton"},h(r),"Default accounts:"),r.map((function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"bigText"},"Default accounts:"),l.a.createElement("div",{className:"smallText"},l.a.createElement("div",null,l.a.createElement("div",null,"You can use predetermined accounts from this list:"),l.a.createElement("div",{className:"littleMargins"},"Username: Marcin"),l.a.createElement("div",null," Password: marcin99"),l.a.createElement("div",{className:"littleMargins"},"Username: x"),l.a.createElement("div",null," Password: x"))))})),l.a.createElement("button",{onClick:function(){0===E.length?v(["x"]):v([])},className:"showButton littleMargins"},h(E),"User accounts:"),E.map((function(e){return 0!==n.length?l.a.createElement("div",null,l.a.createElement("div",{className:"bigText"},"User accounts:"),n.map((function(e){return l.a.createElement("div",{className:"columnAccounts"},l.a.createElement("div",{className:"littleMargins centreAccounts"},"There's a list of your accounts:"),l.a.createElement("div",{className:"littleMargins centreAccounts"},"Username: ",e[0]),l.a.createElement("div",{className:"centreAccounts"}," Password: ",e[1]))}))):l.a.createElement("div",null,l.a.createElement("div",{className:"bigText"},"User accounts:"),l.a.createElement("div",{className:"columnAccounts"},l.a.createElement("div",{className:"littleMargins centreAccounts"},"List is empty, please create your account with Sign-up button in home-page")))}))))};var N=function(){var e=l.a.useState([]),t=Object(i.a)(e,2),a=t[0],n=t[1],c=l.a.useState([]),s=Object(i.a)(c,2),r=s[0],o=s[1],m=function(e){return 0===e.length?l.a.createElement("img",{height:"30px",className:"nadropdown",src:"/SlightBank/Images/drop-down-noactive.svg",alt:""}):l.a.createElement("img",{height:"30px",className:"nadropdown",src:"/SlightBank/Images/drop-down-active.svg",alt:""})};return l.a.createElement("div",null,l.a.createElement(u,null),l.a.createElement("button",{className:"showButton",onClick:function(){0===a.length?n(["x"]):n([])}},m(a),"Images used:"),a.map((function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"bigText"},"Images used:"),l.a.createElement("div",{className:"smallText"},l.a.createElement("div",null,l.a.createElement("div",null,"Zdj\u0119cie autorstwa Artem Beliaikin z Pexels"),l.a.createElement("div",{className:"littleMargins"},"Zdj\u0119cie autorstwa Vlada Karpovich z Pexels"),l.a.createElement("div",{className:"littleMargins"},"Zdj\u0119cie autorstwa Pixabay z Pexels"))))})),l.a.createElement("button",{className:"showButton",onClick:function(){0===r.length?o(["x"]):o([])}},m(r),"Icons used:"),r.map((function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"bigText"},"Icons used:"),l.a.createElement("div",{className:"smallText"},l.a.createElement("div",null,l.a.createElement("div",null,"Icons made by"," ",l.a.createElement("a",{href:"https://www.flaticon.com/authors/google",title:"Google"},"Google")," ","from"," ",l.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")),l.a.createElement("div",{className:"littleMargins"},"Icons made by"," ",l.a.createElement("a",{href:"https://www.flaticon.com/authors/pixel-perfect",title:"Pixel perfect"},"Pixel perfect")," ","from"," ",l.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")),l.a.createElement("div",{className:"littleMargins"},l.a.createElement("div",null,"Icons made by"," ",l.a.createElement("a",{href:"https://www.flaticon.com/authors/freepik",title:"Freepik"},"Freepik")," ","from"," ",l.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com"))),l.a.createElement("div",{className:"littleMargins"},l.a.createElement("div",null,"Icons made by"," ",l.a.createElement("a",{href:"https://www.flaticon.com/authors/roundicons",title:"Roundicons"},"Roundicons")," ","from"," ",l.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com"))),l.a.createElement("div",{className:"littleMargins"},l.a.createElement("div",null,"Icons made by"," ",l.a.createElement("a",{href:"https://www.flaticon.com/authors/dmitri13",title:"dmitri13"},"dmitri13")," ","from"," ",l.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com"))))))})))},b=a(8),w=(a(39),a(17)),k=a.n(w);var x=function(){var e=["Netflix:","Amazon:","Google:","Shopping:","Music:","Food:","Clothes:","Traveling:"],t=function(){for(var t=[],a=0,n=Math.ceil(10*Math.random()),l=0;l<n;l++){var c=Math.ceil(50*Math.random()),s=Math.floor(Math.random()*e.length);t.push([c,a+"a",e[s]]),a++}return t},a=E("account"),n=Object(i.a)(a,2),c=n[0],s=n[1],u=l.a.useState(Math.ceil(470*Math.random()+30)),d=Object(i.a)(u,2),g=d[0],h=d[1],f=l.a.useState(t()),p=Object(i.a)(f,2),N=p[0],b=p[1],w=l.a.useState(t()),x=Object(i.a)(w,2),y=x[0],B=x[1],M=l.a.useState(0),S=Object(i.a)(M,2),T=S[0],C=S[1],O=l.a.useState([]),j=Object(i.a)(O,2),A=j[0],I=j[1],L=v("popUp"),F=Object(i.a)(L,2),D=(F[0],F[1]),P=new Date(Date.now()),R=Object(o.f)(),U=function(){D([])},Y=function(){s([]),R.push("/"),setTimeout(U,5e3),D([["green","You successfully logged out from your account!"]])},G=function(e){var t=e.target.attributes[0].value,a=Number(e.target.attributes[1].value);b(N.filter((function(e){return e[1]!==t}))),h(g-a)},z=function(e){var t=e.target.attributes[0].value,a=Number(e.target.attributes[1].value);B(y.filter((function(e){return e[1]!==t}))),h(g+a)};return l.a.createElement("div",{className:void(0===c.length&&(R.push("/"),setTimeout(U,5e3),D([["red","Youre not logged in to any accounts! (GlobalState's reset after refreshing page)"]])))},l.a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),l.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap",rel:"stylesheet"}),l.a.createElement("div",{className:"upBarLogin"},l.a.createElement("button",{onClick:function(){0===A.length?I(["x"]):I([])},className:"MenuButton MobileOnly"},l.a.createElement("img",{className:"ProfileImg",src:"/SlightBank/Images/user.svg",alt:""})),l.a.createElement("button",{className:"AccountButton DesktopOnly"},"Logged as: ",c),l.a.createElement(m,{link:"/MyAccount",place:"Account"}),l.a.createElement("button",{onClick:Y,className:"MenuButton MobileOnly"},l.a.createElement("img",{className:"LogOutImg",src:"/SlightBank/Images/logout.svg",alt:""})),l.a.createElement("button",{onClick:Y,className:"AccountButton DesktopOnly"},"Log-out")),A.map((function(e){return l.a.createElement("div",{className:"profileSettings"},l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"centre littleMargin"},"Logged as: ",c),l.a.createElement("div",{className:"centre littleMargin"},"Account Balance: ",g,"PLN")))})),l.a.createElement("div",{className:"myCentre"},l.a.createElement("div",{className:"longBar"},l.a.createElement("div",{className:"balanceDiv"},l.a.createElement("div",null),l.a.createElement("div",{className:"textDivAcc"},l.a.createElement("div",{className:"balanceStatus"},"Available Balance:"),l.a.createElement("div",{className:"moneyStatus"},g,"PLN")),l.a.createElement("div",null)),l.a.createElement("div",{className:"rowTransaction"},l.a.createElement("div",{className:"transactionBox"},l.a.createElement("div",{className:"endFiller"}),N.map((function(e){return l.a.createElement("div",{className:"centreText"},l.a.createElement("div",{className:"columnTransaction"},l.a.createElement("div",{className:"centreTransaction"},e[2],l.a.createElement("div",{className:"positiveBalance"}," ",e[0],"PLN"),l.a.createElement("button",{transaction:e[1],moneyValue:e[0],onClick:G,className:"deleteButton"},"X")),l.a.createElement("div",{className:"centreTransaction"},l.a.createElement(k.a,{format:"YYYY/MM/DD"},P)),l.a.createElement("div",{className:"line"})))})),l.a.createElement("button",{onClick:function(){var t=Math.ceil(50*Math.random()),a=Math.floor(Math.random()*e.length);b([].concat(Object(r.a)(N),[[t,""+T,e[a]]])),C(T+1),h(g+t)},className:"addButton"},"+"),l.a.createElement("div",{className:"endFiller"})),l.a.createElement("div",{className:"transactionBox"},l.a.createElement("div",{className:"endFiller"}),y.map((function(e){return l.a.createElement("div",{className:"centreText"},l.a.createElement("div",{className:"columnTransaction"},l.a.createElement("div",{className:"centreTransaction"},e[2]," ",l.a.createElement("div",{className:"negativeBalance"},e[0],"PLN"),l.a.createElement("button",{transaction:e[1],moneyValue:e[0],onClick:z,className:"deleteButton"},"X")),l.a.createElement("div",{className:"centreTransaction"},l.a.createElement(k.a,{format:"YYYY/MM/DD"},P)),l.a.createElement("div",{className:"line"})))})),l.a.createElement("button",{onClick:function(){var t=Math.ceil(50*Math.random()),a=Math.floor(Math.random()*e.length);B([].concat(Object(r.a)(y),[[t,""+T,e[a]]])),C(T+1),h(g-t)},className:"addButton"},"+"),l.a.createElement("div",{className:"endFiller"}))),l.a.createElement("div",{className:"endFiller"}))))};var y=function(){return l.a.createElement(b.a,null,l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/Resources"},l.a.createElement(N,null)),l.a.createElement(o.a,{path:"/About"},l.a.createElement(f,null)),l.a.createElement(o.a,{path:"/Accounts"},l.a.createElement(p,null)),l.a.createElement(o.a,{path:"/MyAccount"},l.a.createElement(x,null)),l.a.createElement(o.a,{path:"/"},l.a.createElement(h,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.53bbc530.chunk.js.map