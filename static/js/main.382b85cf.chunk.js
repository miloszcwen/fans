(this.webpackJsonpfans=this.webpackJsonpfans||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),s=a.n(c),r=a(5),l=a.n(r),o=(a(19),a(13)),i=a(2),d=a(7),b=a(8),h=a(4),j=a(10),u=a(9),m=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={loaded:!1},n.handleDelete=n.handleDelete.bind(Object(h.a)(n)),n.showImage=n.showImage.bind(Object(h.a)(n)),n}return Object(b.a)(a,[{key:"handleDelete",value:function(){this.props.onDelete(this.props.id)}},{key:"showImage",value:function(){this.setState({loaded:!0})}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"relative tc gold bg-navy dib br3 pa0 ma3 bw2 shadow-5 hover-light-red",children:[Object(n.jsxs)("div",{className:"grow",children:[Object(n.jsx)("div",{className:"placeholder bg-navy flex items-center justify-center ma3",style:this.state.loaded?{display:"none"}:{},children:Object(n.jsx)("p",{children:"Loading an avatar..."})}),Object(n.jsx)("img",{src:"https://robohash.org/".concat(this.props.name,"abc?set=set5"),alt:"avatar",className:"ma3",loading:"lazy",with:300,height:300,onLoad:this.showImage,style:this.state.loaded?{}:{display:"none"}}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{className:"pa0 ma0 ",children:this.props.name}),Object(n.jsx)("p",{className:"pa0 mb4 mt0 ",children:this.props.email})]})]}),Object(n.jsx)("button",{className:"grow absolute top-1 right-1 hover-light-red b f6 bn br3 pa2 dib bg-gold navy",href:"#0",onClick:this.handleDelete,style:{cursor:"pointer"},children:"delete"})]})}}]),a}(s.a.Component),p=function(e){var t=e.fans,a=e.onDelete;return Object(n.jsx)(n.Fragment,{children:t.map((function(e,c){return Object(n.jsx)(m,{id:t[c].id,name:t[c].name,email:t[c].email,onDelete:a},t[c].id)}))})},O=(a(20),function(e){var t=e.onModalOpen;return Object(n.jsx)("div",{className:"relative tc gold bg-navy dib br3 pa0 ma3 bw2 shadow-5 hover-light-red",children:Object(n.jsxs)("div",{className:"grow",children:[Object(n.jsx)("div",{className:"ma3 placeholder relative",children:Object(n.jsx)("button",{onClick:t,display:"none",style:{padding:0,border:"none",background:"none",cursor:"pointer"},children:Object(n.jsx)("div",{className:"circle bg-gold pa0 ma0",children:Object(n.jsx)("div",{className:"add navy pa0 ma0",children:"\u271a"})})})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{className:"pa0 ma0",children:"Click + to add"}),Object(n.jsx)("p",{className:"pa0 mb4 mt0",children:"a new fan card"})]})]})})}),f=a(12),g=a.n(f),v={position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",padding:"50px",zIndex:1e3},x={position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(181, 184, 214, .7)",zIndex:1e3};function y(e){var t=e.open,a=e.setIsOpen,s=e.onClose,r=e.addFan,o=Object(c.useState)(""),d=Object(i.a)(o,2),b=d[0],h=d[1],j=Object(c.useState)(""),u=Object(i.a)(j,2),m=u[0],p=u[1];return t?l.a.createPortal(Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{style:x,onClick:s}),Object(n.jsxs)("div",{style:v,className:"tc gold bg-navy dib br3 pa2 ma2 bw2 shadow-5",children:[Object(n.jsx)("h1",{className:"mt0",children:"Add a new fan:"}),Object(n.jsxs)("form",{className:"ma2 pa2",children:[Object(n.jsx)("input",{className:"ma1",type:"text",value:b,placeholder:"name",label:"name",onChange:function(e){return h(e.target.value)}}),Object(n.jsx)("input",{className:"ma1",type:"text",value:m,placeholder:"email",label:"email",onChange:function(e){return p(e.target.value)}}),Object(n.jsx)("input",{type:"submit",value:"add new fan",onClick:function(e){e.preventDefault(),b&&m?(r({id:g()(),name:b,email:m}),h(""),p(""),a(!1)):alert("You must fill name and valid email!")},className:"grow hover-light-red b f6 bn br3 pa2 ma1 dib bg-gold navy"})]}),Object(n.jsx)("button",{className:"grow hover-light-red b f6 bn br3 pa2 ma2 mt5 dib bg-gold navy",onClick:s,children:"Cancel"})]})]}),document.getElementById("portal")):null}var w=function(e){var t=e.searchField,a=e.searchChange;return Object(n.jsx)("div",{className:"tc pa2 bg-navy",children:Object(n.jsx)("input",{className:"tc navy pa1 mt2",type:"search",placeholder:"filter fans",value:t,onChange:a,"aria-label":"Search"})})},N=function(e){return Object(n.jsx)("div",{style:{overflowX:"none",overflowY:"none",height:"auto"},children:e.children})},C=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={hasError:!1},e}return Object(b.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(n.jsx)("h1",{children:"Ooops. Error"}):this.props.children}}]),a}(c.Component);a(25);var S=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)([]),l=Object(i.a)(r,2),d=l[0],b=l[1],h=Object(c.useState)(""),j=Object(i.a)(h,2),u=j[0],m=j[1];Object(c.useEffect)((function(){window.localStorage.getItem("fans")?b(JSON.parse(window.localStorage.getItem("fans"))):fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return b(e)}))}),[]);var f=d.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())}));return d.length?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{className:"bg-navy ma0 pa2 bw2",children:"My Fanclub"}),Object(n.jsx)(w,{searchField:u,searchChange:function(e){m(e.target.value)}}),Object(n.jsxs)(N,{children:[Object(n.jsx)(O,{onModalOpen:function(){s(!0)}}),Object(n.jsx)(y,{open:a,setIsOpen:s,onClose:function(){s(!1)},addFan:function(e){var t=[].concat(Object(o.a)(d),[e]);b(t),window.localStorage.setItem("fans",JSON.stringify(t))},children:"Fancy Modal"}),Object(n.jsx)(C,{children:Object(n.jsx)(p,{fans:f,onDelete:function(e){var t=d.filter((function(t){return t.id!==e}));b(t),window.localStorage.setItem("fans",JSON.stringify(t)),t.length||(console.log("newFans",t),window.localStorage.removeItem("fans"))}})})]})]}):Object(n.jsx)("h1",{children:"Loading..."})};a(26);l.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)("div",{className:"tc",children:Object(n.jsx)(S,{})})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.382b85cf.chunk.js.map