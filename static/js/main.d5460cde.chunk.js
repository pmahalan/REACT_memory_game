(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"./assets/1.jpg"},{"id":2,"image":"./assets/2.jpg"},{"id":3,"image":"./assets/3.jpg"},{"id":4,"image":"./assets/4.jpg"},{"id":5,"image":"./assets/5.jpg"},{"id":6,"image":"./assets/6.jpg"},{"id":7,"image":"./assets/7.jpg"},{"id":8,"image":"./assets/8.jpg"},{"id":9,"image":"./assets/9.jpg"},{"id":10,"image":"./assets/10.jpg"},{"id":11,"image":"./assets/11.jpg"},{"id":12,"image":"./assets/12.jpg"}]')},,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),i=a(2),n=a.n(i),r=(a(15),a(7)),o=a(3),l=a(4),m=a(8),g=a(5),u=a(9),p=(a(16),a(6));var d=function(e){return c.a.createElement("div",{className:"card col-sm-3"},c.a.createElement("img",{src:e.image,onClick:function(){return e.clickImage(e.id)}}))},f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(c)))).state={pictures:p,clickedPics:[],score:0},a.clickImage=function(e){console.log(e),1==a.state.clickedPics.includes(e)?(console.log("Oops, You lost!"),a.setState({clickedPics:[],score:0})):(console.log("good job!"),a.setState({clickedPics:[].concat(Object(r.a)(a.state.clickedPics),[e]),score:a.state.score+1}));var t=a.shuffle(a.state.pictures);a.setState({pictures:t})},a.shuffle=function(e){var t,a,s;for(s=e.length-1;s>0;s--)t=Math.floor(Math.random()*(s+1)),a=e[s],e[s]=e[t],e[t]=a;return e},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Priya's Clicky game"),c.a.createElement("h2",null," Try to click on each of the 12 images below only once!"),c.a.createElement("div",null,"Score:",this.state.score),c.a.createElement("div",{className:"row"},this.state.pictures.map((function(t){return c.a.createElement(d,{id:t.id,image:t.image,clickImage:e.clickImage})}))))}}]),t}(s.Component);n.a.render(c.a.createElement(f,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.d5460cde.chunk.js.map