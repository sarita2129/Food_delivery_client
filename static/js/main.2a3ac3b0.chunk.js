(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(57)},32:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),o=a.n(l),s=(a(32),a(3)),c=a(4),i=a(6),m=a(5),d=a(7),u=(n.Component,a(59)),p=a(60),h=a(58),f=a(12),v="https://foodserverapp.herokuapp.com/api/",g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e)))._handleEmail=function(e){e.preventDefault(),a.setState({email:e.target.value})},a._handlePassword=function(e){e.preventDefault(),a.setState({password:e.target.value})},a._handleSubmit=function(e){e.preventDefault(),fetch(v+"login",{method:"POST",body:JSON.stringify({email:a.state.email,password:a.state.password}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){console.log(e),e.success?(window.localStorage.setItem("jwt",e.token),window.localStorage.setItem("username",e.username),window.localStorage.setItem("email",e.email),window.localStorage.setItem("userid",e.userid)):a.setState({SignInError:e.message})}).then(function(){return a.props.history.push("/home")}).then(function(){return window.location.reload()}).catch(function(e){console.log("There has been a problem with your fetch operation: ",e.message)})},a.state={username:void 0,email:void 0,password:void 0,signUpError:"",SignInError:"",IsLoading:!0},a._handleSubmit=a._handleSubmit.bind(Object(f.a)(Object(f.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=window.localStorage.getItem("jwt"),a=window.localStorage.getItem("username");window.localStorage.getItem("email");"undefined"!==t&&fetch(v+"verify?token="+t).then(function(e){return e.json}).then(function(n){n.success?e.setState({token:t,username:a,SignInError:n.message}):e.setState({token:t,IsLoading:!1,SignInError:n.message})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{row:"row"},r.a.createElement("div",{className:"col-md-4 offset-md-4"},r.a.createElement("div",{id:"formContent"},r.a.createElement("form",{onSubmit:this._handleSubmit},r.a.createElement("div",{class:"form-group"},"Email",r.a.createElement("input",{type:"text",id:"login",className:"form-control txt",name:"login",placeholder:"login",ref:function(t){e.inputNode1=t},onChange:this._handleEmail.bind(this)})),r.a.createElement("div",{class:"form-group"},"Password",r.a.createElement("input",{type:"password",id:"password",className:"form-control txt",name:"login",placeholder:"password",ref:function(t){e.inputNode2=t},onChange:this._handlePassword.bind(this)})),r.a.createElement("input",{type:"submit",className:"btn btn-primary",value:"Log In"}),r.a.createElement("p",null,this.state.message)),r.a.createElement("div",{id:"formFooter"},r.a.createElement("a",{className:"underlineHover",href:"#"},"Forgot Password?"))))))}}]),t}(n.Component),E=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={username:void 0,user:void 0},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=window.localStorage.getItem("jwt"),a=window.localStorage.getItem("username");window.localStorage.getItem("email"),window.localStorage.getItem("userid");"undefined"!==t&&fetch("https://foodserverapp.herokuapp.com/api/verify?token="+t).then(function(e){return e.json()}).then(function(n){n.success?e.setState({token:t,username:a,user:"Welcome ,".concat(a)}):e.setState({token:t,IsLoading:!1})})}},{key:"signout",value:function(){var e=window.localStorage.getItem("jwt");"undefined"!==e&&fetch("https://foodserverapp.herokuapp.com/api/logout?token="+e).then(function(e){return e.json()}).then(function(e){e.success&&(localStorage.clear(),window.location.hash="home",window.location.reload())})}},{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-dark navbarbg"},r.a.createElement(h.a,{to:"/home",className:"logo"},"Foodie"),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},this.state.user?r.a.createElement("li",{className:"nav-item active link mL10"},r.a.createElement(h.a,{to:"/myorders",className:"navbar-brand nav-margin alinkwhite"},"My Orders")):null),r.a.createElement("span",{className:"navbar-text"},r.a.createElement("img",{style:{width:"30px",height:"30px"},src:"images/user.png"}),this.state.user?this.state.user+"|":null,this.state.user?r.a.createElement("a",{href:"#",onClick:this.signout,className:"navbar-brand link nav-margin pL10 pR10 alinkwhite"},"Logout"):r.a.createElement(h.a,{to:"/login",className:"navbar-brand link nav-margin pL10 pR10 alinkwhite"},"Login")),r.a.createElement(h.a,{to:"/signup",className:"navbar-brand link nav-margin pL10 pR10 alinkwhite"},"SignUp")))}}]),t}(n.Component),b=a(2),w=a.n(b),y=a(24),N=(a(35),[]),S=window.localStorage.getItem("userid"),k="https://foodserverapp.herokuapp.com/api/",j=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={restaurant:[],dishCategory:[],order:[],total:0,deliverycharges:5,params:[],message:"",success:!1};a.props.match.params.restaurant;return fetch(k+"restaurant?id="+a.props.match.params.restaurant).then(function(e){return e.json()}).then(function(e){var t=[e],n=[];w.a.each(t,function(e,t){w.a.each(t,function(e,t){n.push(t)})}),a.setState({restaurant:[].concat(n)}),a.state.restaurant.map(function(e){N=e.Dishes.map(function(e){return e.type}).filter(function(e,t,a){return a.indexOf(e)===t})}),a.setState({dishCategory:N})}),console.log(a.state.restaurant[0]),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"addToCart",value:function(e){console.log(this.state.order.dishid);var t={userid:S,dishid:e._id,cost:e.cost,title:e.title};this.setState({order:[].concat(Object(y.a)(this.state.order),[t])}),this.setState({total:this.state.total+e.cost}),console.log(this.state.order)}},{key:"confirmOrder",value:function(){for(var e=this,t=[],a=[],n=0;n<=this.state.order.length-1;n++)t[n]=this.state.order[n].dishid,a[n]=this.state.order[n].cost;fetch(k+"order",{method:"POST",body:JSON.stringify({order_no:Math.random().toString(36).slice(2).toUpperCase()+Math.round(1e4*Math.random(1e3)),userId:S,restaurant_id:this.props.match.params.restaurant,dishId:t,cost:a,deliverycost:this.state.deliverycharges,deliveryaddress:this.inputNode1.value}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){if(t.success){console.log(t),e.setState({success:!0}),e.setState({order:t.order});var a=[t.order],n=[],r=[],l="",o=0,s="";w.a.each(a,function(e,t){w.a.each(t,function(e,t){l=t.order_no,o=t.deliverycost,s=t.deliveryaddress,r=[t.cost],n=[t.dishId]})}),e.setState({message:"Order placed Succesfully.Your order# is "+l}),console.log(n);var c=[];e.state.restaurant.map(function(e){c=e.Dishes.filter(function(e){return n.some(function(t){return String(e._id)===String(t)})})}),console.log(c);for(var i=[],m=0,d=0;d<=c.length-1;d++){m+=Number(r[d]);var u={_id:c[d]._id,title:c[d].title,cost:r[d]};i.push(u)}e.setState({order:[].concat(i)}),e.setState({deliverycharges:o}),e.setState({deliveryaddress:s}),e.setState({total:m}),console.log(m)}})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},this.state.restaurant.map(function(t){return r.a.createElement("div",{className:"row mT10 mB10"},r.a.createElement("div",{key:t._id+"moviediv",className:"row d-inline-block col-md-8"},r.a.createElement("h1",null,t.name),r.a.createElement("div",{className:"restaurantdiv"},r.a.createElement("p",{className:"ptag"},t.description),r.a.createElement("p",{className:"ptag"},t.Address+t.city)),e.state.dishCategory.map(function(a){return r.a.createElement("div",{className:"dishesdiv mB10",key:a},r.a.createElement("h3",null,a),t.Dishes.filter(function(e){return e.type===a}).map(function(t){return r.a.createElement("div",{className:"row md-offset-1"},r.a.createElement("div",{key:t._id,className:"col-md-8"},r.a.createElement("h5",null,t.title),r.a.createElement("p",null,t.description),r.a.createElement("p",null,t.cost+"$")),r.a.createElement("div",{key:t._id,className:"col-md-2"},r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.addToCart(t)}},"Add")))}))})),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"row"},e.state.restaurant.map(function(e){return r.a.createElement("div",{key:e._id},r.a.createElement("img",{src:e.image,alt:e.name,className:"movieimg",key:"img"+e._id}))})),e.state.order.length>0?r.a.createElement("div",null,r.a.createElement("h3",null,"Order Details"),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",null,"List"),r.a.createElement("th",null,"Cost")),e.state.order.map(function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.title),r.a.createElement("td",null,e.cost+"$"))}),r.a.createElement("tr",null,r.a.createElement("td",null,"Delivery Charges"),r.a.createElement("td",null,e.state.deliverycharges+"$")),r.a.createElement("tr",null,r.a.createElement("td",null,"Total"),r.a.createElement("td",null,e.state.total+Number(e.state.deliverycharges)+"$"))),r.a.createElement("form",{onSubmit:e.confirmOrder.bind(e)},r.a.createElement("label",null,"Enter Delivery Address"),!0===e.state.success?r.a.createElement("p",null,e.state.deliveryaddress):r.a.createElement("input",{type:"textarea",placeholder:"Address",className:"form-control txtarea",ref:function(t){e.inputNode1=t}}),!1===e.state.success?r.a.createElement("button",{className:"btn btn-primary mT10"},"Confirm"):null,r.a.createElement("p",null,e.state.message))):null))}))}}]),t}(n.Component),O=[{text:"Hello",sender:"Jeol"},{text:"How may I help you?",sender:"Jeol"},{text:"Have a nice day.",sender:"Jeol"}],I=(n.Component,"https://foodserverapp.herokuapp.com/api/"),x=!1,C=function(e){function t(){var e;Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).trackScrolling=function(){var t=w()(window);0==t.scrollTop()?(w()(".innerdiv").slideToggle("slow"),e.setState({toggle:"expand"===e.state.toggle?"collapse":"expand"}),x&&(w()("#myAudio").get(0).pause(),x=!1)):t.height()+t.scrollTop()==w()(document).height()&&(w()(".innerdiv").slideToggle("slow"),e.setState({toggle:"expand"===e.state.toggle?"collapse":"expand"}),w()("#myAudio").get(0).play(),x=!0)},e.state={restaurant:[],toggle:"expand"};return fetch(I+"restaurants").then(function(e){return e.json()}).then(function(t){var a=[t],n=[];w.a.each(a,function(e,t){w.a.each(t,function(e,t){n.push(t)})}),e.setState({restaurant:[].concat(n)})}),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){w()(".innerdiv").slideToggle("slow"),document.addEventListener("scroll",this.trackScrolling)}},{key:"toggle",value:function(){w()(".innerdiv").slideToggle("slow"),this.setState({toggle:"expand"===this.state.toggle?"collapse":"expand"})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"banner"},r.a.createElement("div",{className:"overlay"})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("img",{src:"images/weekhot.png",alt:"weekhot",key:"imgweekhot",id:"imgweekhot"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"offset-md-1"},this.state.restaurant.map(function(e){return r.a.createElement("div",{key:e._id+"moviediv",className:"row d-inline-block"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement(h.a,{to:"/restaurantinfo/"+e._id.toString(),className:"btn btn-light"},r.a.createElement("div",{key:e._id,className:"moviediv"},r.a.createElement("img",{src:e.image,alt:e.name,className:"movieimg",key:"img"+e._id}),r.a.createElement("h5",null,e.name)))))})))),r.a.createElement("div",{className:"screen"},r.a.createElement("audio",{id:"myAudio"},r.a.createElement("source",{src:"images/Pling-KevanGC-1485374730.mp3",type:"audio/mpeg"})),r.a.createElement("button",{className:"screen botclose",onClick:this.toggle.bind(this)},r.a.createElement("img",{src:"images/chatbot1.png",alt:"bot",width:"60",height:"60"})),r.a.createElement("div",{className:"innerdiv"},r.a.createElement("iframe",{allow:"microphone;",width:"350",height:"430",src:"https://console.dialogflow.com/api-client/demo/embedded/18e5fe74-c8b1-455c-b697-e3be6743a7ca"}))))}}]),t}(n.Component),_="https://foodserverapp.herokuapp.com/api/",L=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e)))._handleSubmit=function(e){e.preventDefault(),fetch(_+"user",{method:"POST",body:JSON.stringify({firstname:a.inputNode1.value,lastname:a.inputNode2.value,email:a.inputNode3.value,password:a.inputNode4.value}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){e.success&&(console.log("signed up"),fetch(_+"login",{method:"POST",body:JSON.stringify({email:a.inputNode3.value,password:a.inputNode4.value}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return console.log(e),a.setState({username:a.inputNode1.value}),window.localStorage.setItem("jwt",e.token)}))}).catch(function(e){console.log("There has been a problem with your fetch operation: ",e.message)})},a.state={username:void 0,email:void 0,password:void 0,signUpError:"",SignInError:"",IsLoading:!0},a._handleSubmit=a._handleSubmit.bind(Object(f.a)(Object(f.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=window.localStorage.getItem("jwt");"undefined"!==t&&fetch(_+"verify?token="+t).then(function(e){return e.json}).then(function(a){a.success,e.setState({token:t,IsLoading:!1})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"wrapper fadeInDown"},r.a.createElement("div",{id:"formContent"},r.a.createElement("div",{className:"fadeIn first"}),r.a.createElement("form",{onSubmit:this._handleSubmit},r.a.createElement("label",null,"FirstName"),r.a.createElement("input",{type:"text",id:"firstName",className:"fadeIn second",name:"firstName",placeholder:"First name",ref:function(t){e.inputNode1=t}}),r.a.createElement("label",null,"LastName"),r.a.createElement("input",{type:"text",id:"lastName",className:"fadeIn second",name:"lastName",placeholder:"Last name",ref:function(t){e.inputNode2=t}}),r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"text",id:"login",className:"fadeIn second",name:"email",placeholder:"Email",ref:function(t){e.inputNode3=t}}),r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",id:"password",className:"fadeIn third passwordinput",name:"password",placeholder:"password",ref:function(t){e.inputNode4=t}}),r.a.createElement("input",{type:"submit",className:"fadeIn fourth",value:"Log In"})),r.a.createElement("div",{id:"formFooter"},r.a.createElement("a",{className:"underlineHover",href:"#"},"Forgot Password?"))))}}]),t}(n.Component),T=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Order Confirmation",this.props.match.params.order)}}]),t}(n.Component),D=(a(55),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("footer",{class:"container-fluid bg-grey py-5"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-6"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-6 "},r.a.createElement("div",{class:"logo-part"},r.a.createElement(h.a,{to:"/home",className:"logo"},"Foodie"))),r.a.createElement("div",{class:"col-md-6 px-4"},r.a.createElement("a",{href:"#",class:"btn-footer"}," More Info "),r.a.createElement("a",{href:"#",class:"btn-footer"}," Contact Us")))),r.a.createElement("div",{class:"col-md-6"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-6 px-4"},r.a.createElement("div",{class:"row "},r.a.createElement("div",{class:"col-md-6"},r.a.createElement("ul",null,r.a.createElement("li",null," ",r.a.createElement("a",{href:"#"}," Home")," "),r.a.createElement("li",null," ",r.a.createElement("a",{href:"#"}," About")," "),r.a.createElement("li",null," ",r.a.createElement("a",{href:"#"}," Careers")," "),r.a.createElement("li",null," ",r.a.createElement("a",{href:"#"}," Policy")," "),r.a.createElement("li",null," ",r.a.createElement("a",{href:"#"}," Refunds")," "),r.a.createElement("li",null," ",r.a.createElement("a",{href:"#"}," Help")," "),r.a.createElement("li",null," ",r.a.createElement("a",{href:"#"}," Contact")," "))))),r.a.createElement("div",{class:"col-md-6 "},r.a.createElement("h6",null," Newsletter"),r.a.createElement("div",{class:"social"},r.a.createElement("a",{href:"#"},r.a.createElement("img",{style:{width:"50px",height:"50px"},src:"images/facebook.png"})),r.a.createElement("a",{href:"#"},r.a.createElement("img",{style:{width:"40px",height:"40px"},src:"images/instagram.png"})),r.a.createElement("a",{href:"#"},r.a.createElement("img",{style:{width:"40px",height:"40px"},src:"images/googleplus.png"})),r.a.createElement("a",{href:"#"},r.a.createElement("img",{style:{width:"40px",height:"40px"},src:"images/twitter.png"}))),r.a.createElement("form",{class:"form-footer my-3"},r.a.createElement("input",{type:"text",placeholder:"search here....",name:"search"}),r.a.createElement("input",{type:"button",value:"Go"})),r.a.createElement("p",null,"Copyrights Reelsplex 2019"))))))))}}]),t}(n.Component)),A=0,P=window.localStorage.getItem("userid"),M="https://foodserverapp.herokuapp.com/api/",J=function(e){function t(){var e;Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={order:[],dishes:[],orderList:[]};return fetch(M+"myorders?id="+P).then(function(e){return e.json()}).then(function(t){var a=[t],n=[],r=[],l=[];w.a.each(a[0],function(t,a){n.push(a),fetch(M+"orderdetails?id="+a).then(function(e){return e.json()}).then(function(t){var a=[t];w.a.each(a,function(t,n){var o="",s=[];w.a.each(n,function(t,n){"order"===t&&w.a.each(n,function(t,n){o=n._id,s=n.cost;var l={_id:n._id,cost:n.cost,order_no:n.order_no,deliverycost:n.deliverycost,deliveryaddress:n.deliveryaddress,name:a[0].name,description:a[0].description,Address:a[0].Address};r.push(l),e.setState({order:[].concat(r)})}),"dishes"===t&&w.a.each(n,function(t,a){console.log(s);var n={orderid:o,_id:a._id,title:a.title,description:a.description,cost:s[t]};l.push(n),e.setState({dishes:[].concat(l)})})})})})}),e.setState({orderList:n})}),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,this.state.orderList.map(function(t){return r.a.createElement("div",null,e.state.order.map(function(a){return r.a.createElement("div",null,r.a.createElement("p",{className:"var"},A=0),t===a._id?r.a.createElement("div",null,r.a.createElement("h3",null,a.name),r.a.createElement("p",null,a.description),r.a.createElement("p",null,a.Address),r.a.createElement("p",{className:"mL10imp"},"Order No :",a.order_no),r.a.createElement("p",{className:"mL10imp"},"Delivery Address :",a.deliveryaddress),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-2"},r.a.createElement("h5",null,"Items:")),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("h5",null,"Cost:"))),e.state.dishes.map(function(e){return r.a.createElement("div",null,t===e.orderid?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-2"},r.a.createElement("p",{className:"pL10"},e.title)),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("p",{className:"pL10"},"$".concat(e.cost)),r.a.createElement("p",{className:"var"},A+=e.cost))):null)}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-2"},r.a.createElement("p",null,"Delivery Charges")),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("p",null,"$"+a.deliverycost))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-2"},r.a.createElement("p",null,"Total Charges")),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("p",null,"$"+(Number(a.deliverycost)+Number(A)))))):null)}))})))}}]),t}(n.Component),F=r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(p.a,{exact:!0,path:"/home",component:C}),r.a.createElement(p.a,{exact:!0,path:"/login",component:g}),r.a.createElement(p.a,{exact:!0,path:"/signup",component:L}),r.a.createElement(p.a,{path:"/restaurantinfo/:restaurant",component:j}),r.a.createElement(p.a,{path:"/confirmorder/:order",component:T}),r.a.createElement(p.a,{path:"/myorders",component:J}),r.a.createElement(D,null)));o.a.render(F,document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.2a3ac3b0.chunk.js.map