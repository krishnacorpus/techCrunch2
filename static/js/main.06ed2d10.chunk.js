(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{176:function(e,t,a){e.exports=a(322)},181:function(e,t,a){},322:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(31),i=a.n(s),l=(a(181),a(44)),o=a(67),c=a(68),u=a(74),m=a(72),d=a(75),p=a.n(d),h=a(149),f=a.n(h),v=a(328),g=a(330),y=[{key:"pre",text:"Pre_seed",value:"pre_seed"},{key:"early",text:"Early_stage",value:"early_stage"},{key:"growth",text:"Growth_stage",value:"growth_stage"}],E=function(e){return r.a.createElement(g.a,{style:{margin:20,display:"inline-block",maxWidth:400},placeholder:"Filter",fluid:!0,multiple:!0,selection:!0,options:y,onChange:e.dropdownOnChange})},_=a(331),x=function(e){return r.a.createElement(_.a,{disabled:!e.show,onClick:function(){return e.filterListHandler2()}},"Filter")},N=document.createElement("link");N.rel="stylesheet",N.href="https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css",document.head.appendChild(N);var b=function(e){return r.a.createElement(v.a,{style:{margin:20,display:"inline-block",maxWidth:100}},r.a.createElement("span",null,r.a.createElement(x,{filterListHandler2:e.filterListHandler2,show:e.show}),r.a.createElement(E,{dropdownOnChange:e.dropdownOnChange})))},k=a(48),O=a.n(k),S=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onTextChange=function(e){var t=e.target.value,a=n.props.names.map((function(e){return e.name})),r=[];if(t.length>0){var s=new RegExp("^".concat(t),"i");r=a.sort().filter((function(e){return s.test(e)}))}n.setState((function(){return{suggestions:r,text:t}}))},n.renderSuggestions=function(){var e=n.state.suggestions;return 0===e.length?null:r.a.createElement("ul",null,e.map((function(e,t){return r.a.createElement("li",{key:t,onClick:function(){return n.selectedText(e)}},e)})))},n.state={suggestions:[],text:"",refere:""},n}return Object(c.a)(a,[{key:"selectedText",value:function(e){console.log("input box searched[][]"),this.setState((function(){return{text:e,refere:e,suggestions:[]}})),this.props.selectedName(e)}},{key:"render",value:function(){var e=this,t=this.state,a=t.text,n=t.refere,s=n?r.a.createElement("h1",null,"List is rendered for ",r.a.createElement("span",{className:O.a.primary},n)):null;return r.a.createElement("div",{className:O.a.box},r.a.createElement("div",{className:O.a.container},r.a.createElement("div",{className:O.a.query},r.a.createElement("input",{id:"query",type:"text",onChange:this.onTextChange,value:a}),r.a.createElement("h2",null,this.renderSuggestions())),r.a.createElement("button",{onClick:function(){return e.selectedText(a)}},"Search")),s)}}]),a}(n.Component),w=!1,C=[],L=!0,j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={nameList:[],custom_data:[],trimmed_data:[]},e.filterListHandler=function(e,t){C=t.value},e.sortData=function(){console.log("[]Sort Data");var t=(w?Object(l.a)(e.state.trimmed_data):Object(l.a)(e.state.custom_data)).sort((function(e,t){return e.lastName.localeCompare(t.lastName)}));w=!0,e.setState({trimmed_data:t})},e.filterListHandler2=function(){var t=[];t=w?Object(l.a)(e.state.trimmed_data):Object(l.a)(e.state.custom_data);for(var a=[],n=0;n<t.length;n++){e.hasSubArray(t[n].roundTypes,C)&&a.push(t[n]),console.log("show",L,"from filter but"),w=!0,e.setState({trimmed_data:a})}},e.fetchListHandler=function(t){""===t?(w=!1,e.renderListHandler()):w=!0;for(var a=Object(l.a)(e.state.custom_data),n=[],r=0;r<a.length;r++)if(a[r].firstName===t){var s={id:a[r].id,roundTypes:a[r].roundTypes,firstName:a[r].firstName,lastName:a[r].lastName,firmName:a[r].firmName};n.push(s)}e.setState({trimmed_data:n})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("[App] compDid Mount"),f.a.get(" https://develop.techcrunch.com/wp-json/tc/v1/investors-data/all ").then((function(t){for(var a=[],n=t.data.investors,r=[],s=function(){var e=!1,s={name:t.data.investors[i].meta.firstName};a.forEach((function(t){s.name===t.name&&(e=!0)})),0==e&&a.push(s);var l={id:n[i].id,roundTypes:n[i].meta.roundTypes,firstName:n[i].meta.firstName,lastName:n[i].meta.lastName,firmName:n[i].meta.firmName};r.push(l)},i=0;i<t.data.investors.length;i++)s();e.setState({custom_data:r}),e.setState({nameList:a})}))}},{key:"hasSubArray",value:function(e,t){return t.every((a=0,function(t){return a=e.indexOf(t,a)+1}));var a}},{key:"renderListHandler",value:function(){var e=[];return(e=w?this.state.trimmed_data:this.state.custom_data).length?(L=!0,r.a.createElement("div",null,e.map((function(e){return r.a.createElement("div",{key:e.id,className:p.a.item},r.a.createElement("h1",null,e.firstName,"-",r.a.createElement("span",null,e.lastName)),r.a.createElement("span",null,e.roundTypes.map((function(e){return r.a.createElement("h2",{key:e,style:{display:"inline"}},e," |")}))),r.a.createElement("p",null,e.id))})))):(L=!1,r.a.createElement("h2",null,"No Data"))}},{key:"render",value:function(){return r.a.createElement("div",{className:p.a.App},r.a.createElement("h1",null,"Tech CruncH"),r.a.createElement(S,{selectedName:this.fetchListHandler,names:this.state.nameList}),r.a.createElement("span",null,r.a.createElement(b,{show:L,dropdownOnChange:this.filterListHandler,filterListHandler2:this.filterListHandler2})),r.a.createElement("button",{onClick:this.sortData,className:p.a.sort},"Sort"),this.renderListHandler())}}]),a}(n.Component);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))},48:function(e,t,a){e.exports={primary:"SearchBox_primary__2f5hx",box:"SearchBox_box__3lYdW",container:"SearchBox_container__3DxGB"}},75:function(e,t,a){e.exports={App:"App_App__1Nn71",sort:"App_sort__3qax9",item:"App_item__14YZi"}}},[[176,1,2]]]);
//# sourceMappingURL=main.06ed2d10.chunk.js.map