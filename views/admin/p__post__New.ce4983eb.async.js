(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"/dbq":function(e,t,a){"use strict";var n=a("tAuX"),o=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var l=o(a("2/Rp"));a("5Dmo");var i=o(a("3S7+"));a("7Kak");var r=o(a("9yH6"));a("IzEo");var s=o(a("bx4M")),d=o(a("p0pE")),u=o(a("2Taf")),p=o(a("vZ4D")),c=o(a("l4Ni")),f=o(a("ujKo")),m=o(a("rlhR")),h=o(a("MhPg"));a("5NDa");var g=o(a("5rEg"));a("OaEy");var v=o(a("2fM7")),y=a("RBnf"),w=a("0Cfi");a("XlDN");var E=a("Y2fQ"),b=n(a("q1tI")),M=a("Hx5s"),C=a("Hg0r"),L=a("ArA+"),S=o(a("JnQY")),k=o(a("E9ul")),P=o(a("3V0a")),_=w.Form.Item,I=v.default.Option,F=g.default.TextArea,O=function(e){function t(){var e;return(0,u.default)(this,t),e=(0,c.default)(this,(0,f.default)(t).apply(this,arguments)),e.state={visible:!1,currImage:{client_original_mame:"",image_path:void 0}},e.setEditorState=function(){var t=e.props.postModel.detail;e.setState({content:t.content,editorState:b.default.createElement(k.default,{content:t.content,handleEditorChange:e.handleEditorChange,saveEditorContent:e.saveEditorContent,onUploadImage:e.onUploadImage})})},e.onUploadImage=function(t,a){var n=e.props.dispatch;n({type:"postModel/uploadMedia",payload:{data:t},callback:a})},e.handleSubmit=function(t){var a=e.props.form;t.preventDefault(),a.validateFieldsAndScroll(function(t,a){e.saveContent(t,a)})},e.handleSave=function(t){t.preventDefault();var a=e.props.form,n=(0,m.default)(e);a.validateFieldsAndScroll(function(e,t){n.saveContent(e,t)})},e.updateCallback=function(t){var a=e.props.dispatch;t&&"publish"===t.post_status&&a(C.routerRedux.push("/post/list"))},e.saveContent=function(t,a){var n=e.props,o=n.dispatch,l=n.form,i=n.postModel.detail,r=(0,m.default)(e);t||(l.setFieldsValue({id:null===i||void 0===i?void 0:i.id}),i&&i.id>0?o({type:"postModel/update",payload:(0,d.default)({id:null===i||void 0===i?void 0:i.id},a),callback:r.updateCallback}):o({type:"postModel/savePost",payload:(0,d.default)({},a),callback:r.updateCallback}))},e.handleEditorChange=function(t){var a=e.props.form;a.setFieldsValue({content:t})},e.saveEditorContent=function(t){var a=e.props.form;a.setFieldsValue({content:t});var n=a.getFieldsValue();e.saveContent(!1,n)},e.onCloseDrawer=function(){e.setState({visible:!1})},e.showDrawer=function(){e.setState({visible:!0}),e.onLoadImage(10,0,function(){})},e.onChooseImage=function(t){e.setState({currImage:t});var a=e.props.form;a.setFieldsValue({image_id:t.id})},e.onLoadImage=function(t,a,n){var o=e.props.dispatch;o({type:"image/fetch",payload:{pageSize:t,offset:a},callback:n})},e}return(0,h.default)(t,e),(0,p.default)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,a=e.match.params;a&&a.id>0?t({type:"postModel/fetch",payload:{id:a.id},callback:this.setEditorState}):this.setEditorState(),t({type:"category/fetch"}),t({type:"tag/fetch"})}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e({type:"postModel/save",payload:{detail:{}}})}},{key:"render",value:function(){var e=this.props,t=e.submitting,a=e.category.list,n=e.tag.tags,o=e.postModel.detail,d=e.image,u=d.images,p=d.total,c=this.props.form,f=c.getFieldDecorator,m=c.getFieldValue,h=this.state.editorState,C={labelCol:{xs:{span:24},sm:{span:3}},wrapperCol:{xs:{span:24},sm:{span:0},md:{span:20}}},k={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}},O=[],T=[];a.map(function(e,t){O.push(b.default.createElement(I,{key:e.name},e.name))}),n.map(function(e,t){T.push(b.default.createElement(I,{key:e.name},e.name))});var j=[],D=[];return o.categories&&o.categories.map(function(e,t){j.push(e.name)}),o.tags&&o.tags.map(function(e,t){D.push(e.name)}),b.default.createElement(M.PageHeaderWrapper,{content:b.default.createElement(L.Link,{to:"/post/list"},"\u8fd4\u56de")},b.default.createElement(s.default,{bordered:!1},b.default.createElement(w.Form,{onSubmit:this.handleSubmit,hideRequiredMark:!0,style:{marginTop:8}},b.default.createElement(_,Object.assign({},C,{label:b.default.createElement(E.FormattedMessage,{id:"postandnew.title.label"})}),f("title",{initialValue:o.title,rules:[{required:!0,message:(0,E.formatMessage)({id:"postandnew.title.required"})}]})(b.default.createElement(g.default,{placeholder:(0,E.formatMessage)({id:"postandnew.title.placeholder"})}))),b.default.createElement(_,Object.assign({},C,{label:b.default.createElement(E.FormattedMessage,{id:"postandnew.public.label"})}),b.default.createElement("div",null,f("is_markdown",{initialValue:o.is_markdown})(b.default.createElement(r.default.Group,null,b.default.createElement(r.default,{value:!1},b.default.createElement(E.FormattedMessage,{id:"postandnew.radio.editor"})),b.default.createElement(r.default,{value:!0},b.default.createElement(E.FormattedMessage,{id:"postandnew.radio.markdown"})))),b.default.createElement(_,{style:{marginBottom:0}},f("content",{initialValue:o.content})(b.default.createElement("div",{style:{margin:"8px 0"}},!1===m("is_markdown")||void 0===m("is_markdown")?h:b.default.createElement(F,{style:{minHeight:32,height:594},placeholder:(0,E.formatMessage)({id:"postandnew.markdown.placeholder"}),rows:4,defaultValue:o.content})))))),b.default.createElement(_,Object.assign({},C,{label:b.default.createElement(E.FormattedMessage,{id:"postandnew.description.label"})}),f("description",{initialValue:o.description})(b.default.createElement(F,{style:{minHeight:32},placeholder:(0,E.formatMessage)({id:"postandnew.description.placeholder"}),rows:4}))),b.default.createElement(_,Object.assign({},C,{label:b.default.createElement(E.FormattedMessage,{id:"postandnew.category.label"})}),f("categories",{rules:[{required:!0,message:(0,E.formatMessage)({id:"postandnew.title.required"})}],initialValue:j})(b.default.createElement(v.default,{mode:"multiple",style:{width:"100%"},placeholder:"\u8bf7\u9009\u62e9\u5206\u7c7b"},O))),b.default.createElement(_,Object.assign({},C,{label:b.default.createElement("span",null,b.default.createElement(E.FormattedMessage,{id:"postandnew.tag.label"}),b.default.createElement("em",{className:P.default.optional},b.default.createElement(E.FormattedMessage,{id:"postandnew.form.optional"}),b.default.createElement(i.default,{title:b.default.createElement(E.FormattedMessage,{id:"postandnew.tag.label.tooltip"})},b.default.createElement(y.InfoCircleOutlined,{style:{marginRight:4}}))))}),f("tags",{initialValue:D})(b.default.createElement(v.default,{mode:"tags",style:{width:"100%"},placeholder:"\u8bf7\u9009\u62e9\u6807\u7b7e"},T))),b.default.createElement(_,Object.assign({},C,{label:b.default.createElement("span",null,b.default.createElement(E.FormattedMessage,{id:"postandnew.status.label"}))}),f("post_status",{initialValue:o.post_status})(b.default.createElement(r.default.Group,null,b.default.createElement(r.default,{value:"draft"},"\u8349\u7a3f"),b.default.createElement(r.default,{value:"publish"},"\u53d1\u5e03")))),b.default.createElement(_,Object.assign({},C,{label:b.default.createElement("span",null,b.default.createElement(E.FormattedMessage,{id:"postandnew.image.label"}))}),f("image_id",{initialValue:o.images&&o.images.length>0?o.images[0].id:null})(b.default.createElement("div",null,b.default.createElement(l.default,{type:"primary",onClick:this.showDrawer},"\u9009\u62e9\u56fe\u7247"),b.default.createElement("div",null,this.state.currImage&&void 0!==this.state.currImage.image_path?b.default.createElement("img",{alt:this.state.currImage.client_original_mame,width:260,src:"".concat(this.state.currImage.image_path,"?imageView2/2/w/260/interlace/0/q/75|imageslim")}):o.images&&o.images.length>0?b.default.createElement("img",{src:"".concat(o.images[0].image_path,"?imageView2/2/w/260/interlace/0/q/75|imageslim"),alt:o.images[0].image_name,width:260}):"")))),b.default.createElement(_,Object.assign({},k,{style:{marginTop:32}}),b.default.createElement(l.default,{type:"primary",htmlType:"submit",loading:t},b.default.createElement(E.FormattedMessage,{id:"postandnew.form.submit"})),b.default.createElement(l.default,{style:{marginLeft:8},onClick:this.handleSave},b.default.createElement(E.FormattedMessage,{id:"postandnew.form.save"}))))),b.default.createElement(S.default,{images:u,onLoadImage:this.onLoadImage,onCloseDrawer:this.onCloseDrawer,visible:this.state.visible,total:p,onChangeImage:this.onChooseImage}))}}]),t}(b.Component),T=w.Form.create()((0,C.connect)(function(e){var t=e.loading,a=e.category,n=e.tag,o=e.postModel,l=e.image;return{submitting:t.effects["postModel/submitRegularForm"],category:a,tag:n,postModel:o,image:l}})(O));t.default=T},"3V0a":function(e,t,a){e.exports={card:"antd-pro-pages-post-new-style-card",heading:"antd-pro-pages-post-new-style-heading",steps:"antd-pro-pages-post-new-style-steps",errorIcon:"antd-pro-pages-post-new-style-errorIcon",anticon:"antd-pro-pages-post-new-style-anticon",errorPopover:"antd-pro-pages-post-new-style-errorPopover",errorListItem:"antd-pro-pages-post-new-style-errorListItem",errorField:"antd-pro-pages-post-new-style-errorField",editable:"antd-pro-pages-post-new-style-editable",advancedForm:"antd-pro-pages-post-new-style-advancedForm",optional:"antd-pro-pages-post-new-style-optional"}},E9ul:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("miYZ");var o=n(a("tsqr")),l=n(a("d6i3")),i=n(a("1l/V")),r=n(a("2Taf")),s=n(a("vZ4D")),d=n(a("l4Ni")),u=n(a("ujKo")),p=n(a("MhPg")),c=n(a("q1tI")),f=n(a("yEr3"));a("Lzxq");var m=n(a("i+y4")),h=n(a("sy1d")),g=function(e){function t(){var e;return(0,r.default)(this,t),e=(0,d.default)(this,(0,u.default)(t).apply(this,arguments)),e.state={editorState:null},e.submitContent=(0,i.default)(l.default.mark(function t(){var a;return l.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:a=e.props.saveEditorContent,a(e.state.editorState.toHTML());case 2:case"end":return t.stop()}},t)})),e.uploadMedia=function(e){var t=new FormData;t.append("file",e.file),(0,h.default)("/image/upload",{method:"post",data:t,credentials:"include",prefix:"localhost"===window.location.hostname?"http://localhost:8080":"",headers:{mode:"cors",Authorization:localStorage.getItem("Authorization")}}).then(function(t){if(t)if(t.success){var a=t.data[0];e.success({url:a.url,meta:{id:a.id,title:a.filename,alt:a.filename,loop:!1,autoPlay:!1,controls:!0,poster:a.url}})}else o.default.error(t.error);else o.default.error("\u7f51\u7edc\u9519\u8bef")})},e.handleEditorChange=function(t){e.setState({editorState:t});var a=e.props.handleEditorChange;a(t.toHTML())},e}return(0,p.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.content;this.setState({editorState:f.default.createEditorState(e)})}},{key:"render",value:function(){var e=this.props.content,t=this.state.editorState;return c.default.createElement("div",{className:m.default.postContent},c.default.createElement(f.default,{media:{uploadFn:this.uploadMedia},value:t,onChange:this.handleEditorChange,onSave:this.submitContent,defaultValue:e}))}}]),t}(c.default.Component);t.default=g},JnQY:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("T2oS");var o=n(a("W9HT"));a("Mwp2");var l=n(a("VXEj"));a("bbsP");var i=n(a("/wGt"));a("miYZ");var r=n(a("tsqr")),s=n(a("2Taf")),d=n(a("vZ4D")),u=n(a("l4Ni")),p=n(a("ujKo")),c=n(a("MhPg")),f=n(a("q1tI"));a("Lzxq");var m=n(a("RotF")),h=n(a("i+y4")),g=function(e){function t(){var e;return(0,s.default)(this,t),e=(0,u.default)(this,(0,p.default)(t).apply(this,arguments)),e.state={loading:!1,hasMore:!0,data:[]},e.onLoadMore=function(){var t=e.state.data,a=e.props,n=a.total,o=a.onLoadImage;if(e.setState({loading:!0}),t.length>=n)return r.default.info("Infinite List loaded all"),void e.setState({hasMore:!1,loading:!1});e.pageNum+=1,o(10,10*e.pageNum,function(a){a.map(function(e,a){return t.push(e)}),e.setState({loading:!1,data:t})})},e.onChangeImage=function(t,a){t.stopPropagation();var n=e.props.onChangeImage;n(a)},e}return(0,c.default)(t,e),(0,d.default)(t,[{key:"componentDidMount",value:function(){this.pageNum=0}},{key:"componentWillUnmount",value:function(){this.pageNum=0,this.setState({loading:!1,hasMore:!0,data:[]})}},{key:"render",value:function(){var e=this,t=this.props,a=t.visible,n=t.onCloseDrawer,r=t.images,s=this.state.data,d=800,u=document.getElementById("infiniteElement");return u&&a&&(d=u.clientHeight-80),f.default.createElement(i.default,{title:"\u9009\u62e9\u56fe\u7247",width:320,onClose:n,visible:a,id:"infiniteElement",bodyStyle:{padding:0}},f.default.createElement("div",{className:h.default.infiniteContainer,style:{height:d}},f.default.createElement(m.default,{initialLoad:!1,pageStart:0,loadMore:this.onLoadMore,hasMore:!this.state.loading&&this.state.hasMore,useWindow:!1},f.default.createElement(l.default,{dataSource:0===s.length?r:s,renderItem:function(t){return f.default.createElement(l.default.Item,{key:t.id,style:{marginBottom:20},onClick:function(a){return e.onChangeImage(a,t)}},f.default.createElement("img",{alt:t.client_original_mame,width:260,src:"".concat(t.image_path,"?imageView2/2/w/260/interlace/0/q/75|imageslim")}))}},this.state.loading&&this.state.hasMore&&f.default.createElement("div",{className:h.default.loadingContainer},f.default.createElement(o.default,null))))))}}]),t}(f.default.Component),v=g;t.default=v},LSTS:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a("q1tI"),l=s(o),i=a("17x9"),r=s(i);function s(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var f=function(e){function t(e){u(this,t);var a=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.scrollListener=a.scrollListener.bind(a),a.eventListenerOptions=a.eventListenerOptions.bind(a),a.mousewheelListener=a.mousewheelListener.bind(a),a}return c(t,e),n(t,[{key:"componentDidMount",value:function(){this.pageLoaded=this.props.pageStart,this.options=this.eventListenerOptions(),this.attachScrollListener()}},{key:"componentDidUpdate",value:function(){if(this.props.isReverse&&this.loadMore){var e=this.getParentElement(this.scrollComponent);e.scrollTop=e.scrollHeight-this.beforeScrollHeight+this.beforeScrollTop,this.loadMore=!1}this.attachScrollListener()}},{key:"componentWillUnmount",value:function(){this.detachScrollListener(),this.detachMousewheelListener()}},{key:"isPassiveSupported",value:function(){var e=!1,t={get passive(){e=!0}};try{document.addEventListener("test",null,t),document.removeEventListener("test",null,t)}catch(e){}return e}},{key:"eventListenerOptions",value:function(){var e=this.props.useCapture;return this.isPassiveSupported()&&(e={useCapture:this.props.useCapture,passive:!0}),e}},{key:"setDefaultLoader",value:function(e){this.defaultLoader=e}},{key:"detachMousewheelListener",value:function(){var e=window;!1===this.props.useWindow&&(e=this.scrollComponent.parentNode),e.removeEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture)}},{key:"detachScrollListener",value:function(){var e=window;!1===this.props.useWindow&&(e=this.getParentElement(this.scrollComponent)),e.removeEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),e.removeEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture)}},{key:"getParentElement",value:function(e){var t=this.props.getScrollParent&&this.props.getScrollParent();return null!=t?t:e&&e.parentNode}},{key:"filterProps",value:function(e){return e}},{key:"attachScrollListener",value:function(){var e=this.getParentElement(this.scrollComponent);if(this.props.hasMore&&e){var t=window;!1===this.props.useWindow&&(t=e),t.addEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture),t.addEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),t.addEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture),this.props.initialLoad&&this.scrollListener()}}},{key:"mousewheelListener",value:function(e){1!==e.deltaY||this.isPassiveSupported()||e.preventDefault()}},{key:"scrollListener",value:function(){var e=this.scrollComponent,t=window,a=this.getParentElement(e),n=void 0;if(this.props.useWindow){var o=document.documentElement||document.body.parentNode||document.body,l=void 0!==t.pageYOffset?t.pageYOffset:o.scrollTop;n=this.props.isReverse?l:this.calculateOffset(e,l)}else n=this.props.isReverse?a.scrollTop:e.scrollHeight-a.scrollTop-a.clientHeight;n<Number(this.props.threshold)&&e&&null!==e.offsetParent&&(this.detachScrollListener(),this.beforeScrollHeight=a.scrollHeight,this.beforeScrollTop=a.scrollTop,"function"===typeof this.props.loadMore&&(this.props.loadMore(this.pageLoaded+=1),this.loadMore=!0))}},{key:"calculateOffset",value:function(e,t){return e?this.calculateTopPosition(e)+(e.offsetHeight-t-window.innerHeight):0}},{key:"calculateTopPosition",value:function(e){return e?e.offsetTop+this.calculateTopPosition(e.offsetParent):0}},{key:"render",value:function(){var e=this,t=this.filterProps(this.props),a=t.children,n=t.element,o=t.hasMore,i=(t.initialLoad,t.isReverse),r=t.loader,s=(t.loadMore,t.pageStart,t.ref),u=(t.threshold,t.useCapture,t.useWindow,t.getScrollParent,d(t,["children","element","hasMore","initialLoad","isReverse","loader","loadMore","pageStart","ref","threshold","useCapture","useWindow","getScrollParent"]));u.ref=function(t){e.scrollComponent=t,s&&s(t)};var p=[a];return o&&(r?i?p.unshift(r):p.push(r):this.defaultLoader&&(i?p.unshift(this.defaultLoader):p.push(this.defaultLoader))),l.default.createElement(n,u,p)}}]),t}(o.Component);f.propTypes={children:r.default.node.isRequired,element:r.default.node,hasMore:r.default.bool,initialLoad:r.default.bool,isReverse:r.default.bool,loader:r.default.node,loadMore:r.default.func.isRequired,pageStart:r.default.number,ref:r.default.func,getScrollParent:r.default.func,threshold:r.default.number,useCapture:r.default.bool,useWindow:r.default.bool},f.defaultProps={element:"div",hasMore:!1,initialLoad:!0,pageStart:0,ref:null,threshold:250,useWindow:!0,isReverse:!1,useCapture:!1,loader:null,getScrollParent:null},t.default=f,e.exports=t["default"]},RotF:function(e,t,a){e.exports=a("LSTS")},"i+y4":function(e,t,a){e.exports={postContent:"antd-pro-pages-post-new-components-style-postContent",infiniteContainer:"antd-pro-pages-post-new-components-style-infiniteContainer",loadingContainer:"antd-pro-pages-post-new-components-style-loadingContainer"}}}]);