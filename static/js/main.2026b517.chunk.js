(this.webpackJsonphero_admin_panel=this.webpackJsonphero_admin_panel||[]).push([[0],{35:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(8),s=n.n(c),i=n(4),l=n(21),o=n(24),u=n(9),d=n(42),b=n(44),j=n(22),h=n(5),m=Object(j.a)({reducerPath:"api",baseQuery:Object(h.d)({baseUrl:"http://localhost:3001"}),tagTypes:["Heroes"],endpoints:function(e){return{getHeroes:e.query({query:function(){return"/heroes"},providesTags:["Heroes"]}),createHero:e.mutation({query:function(e){return{url:"/heroes",method:"POST",body:e}},invalidatesTags:["Heroes"]}),deleteHero:e.mutation({query:function(e){return{url:"/heroes/".concat(e),method:"DELETE"}},invalidatesTags:["Heroes"]})}}}),f=m.useGetHeroesQuery,O=m.useCreateHeroMutation,p=m.useDeleteHeroMutation,x=n(2),g=function(e){var t,n=e.name,r=e.description,a=e.element,c=e.onDelete;switch(a){case"fire":t="bg-danger bg-gradient";break;case"water":t="bg-primary bg-gradient";break;case"wind":t="bg-success bg-gradient";break;case"earth":t="bg-secondary bg-gradient";break;default:t="bg-warning bg-gradient"}return Object(x.jsxs)("li",{className:"card flex-row mb-4 shadow-lg text-white ".concat(t),children:[Object(x.jsx)("img",{src:"http://www.stpaulsteinbach.org/wp-content/uploads/2014/09/unknown-hero.jpg",className:"img-fluid w-25 d-inline",alt:"unknown hero",style:{objectFit:"cover"}}),Object(x.jsxs)("div",{className:"card-body",children:[Object(x.jsx)("h3",{className:"card-title",children:n}),Object(x.jsx)("p",{className:"card-text",children:r})]}),Object(x.jsx)("span",{onClick:c,className:"position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light",children:Object(x.jsx)("button",{type:"button",className:"btn-close btn-close","aria-label":"Close"})})]})},v=function(){return Object(x.jsx)("div",{className:"spinner-border mx-auto mt-5",role:"status",children:Object(x.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},N=(n(35),function(){var e=f(),t=e.data,n=void 0===t?[]:t,a=e.isLoading,c=e.isError,s=p(),j=Object(u.a)(s,1)[0],h=Object(i.e)((function(e){return e.filters.activeFilter})),m=Object(r.useMemo)((function(){var e=n.slice();return"all"===h?e:e.filter((function(e){return e.element===h}))}),[n,h]),O=Object(r.useCallback)((function(e){j(e)}),[]);if(a)return Object(x.jsx)(v,{});if(c)return Object(x.jsx)("h5",{className:"text-center mt-5",children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"});var N,w=0===(N=m).length?Object(x.jsx)(d.a,{timeout:0,classNames:"hero",children:Object(x.jsx)("h5",{className:"text-center mt-5",children:"\u0413\u0435\u0440\u043e\u0435\u0432 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442"})}):N.map((function(e){var t=e.id,n=Object(o.a)(e,["id"]);return Object(x.jsx)(d.a,{timeout:500,classNames:"hero",children:Object(x.jsx)(g,Object(l.a)(Object(l.a)({},n),{},{onDelete:function(){return O(t)}}))},t)}));return Object(x.jsx)(b.a,{component:"ul",children:w})}),w=n(43),y=n(15),S=n(1),C=n(13),k=n.n(C),F=n(17),q=function(){return{request:function(){var e=Object(F.a)(k.a.mark((function e(t){var n,r,a,c,s,i=arguments;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"GET",r=i.length>2&&void 0!==i[2]?i[2]:null,a=i.length>3&&void 0!==i[3]?i[3]:{"Content-Type":"application/json"},e.prev=3,e.next=6,fetch(t,{method:n,body:r,headers:a});case 6:if((c=e.sent).ok){e.next=9;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(c.status));case 9:return e.next=11,c.json();case 11:return s=e.sent,e.abrupt("return",s);case 15:throw e.prev=15,e.t0=e.catch(3),e.t0;case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}()}},H=Object(S.d)(),E=H.getInitialState({filtersLoadingStatus:"idle",activeFilter:"all"}),L=Object(S.c)("filters/fetchFilters",Object(F.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=q(),n=t.request,e.next=3,n("http://localhost:3001/filters");case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))),T=Object(S.e)({name:"filters",initialState:E,reducers:{filtersChanged:function(e,t){e.activeFilter=t.payload}},extraReducers:function(e){e.addCase(L.pending,(function(e){e.filtersLoadingStatus="loading"})).addCase(L.fulfilled,(function(e,t){e.filtersLoadingStatus="idle",H.setAll(e,t.payload)})).addCase(L.rejected,(function(e){e.filtersLoadingStatus="error"})).addDefaultCase((function(){}))}}),D=T.actions,_=T.reducer,M=H.getSelectors((function(e){return e.filters})).selectAll,P=(D.filtersFetching,D.filtersFetched,D.filtersFetchingError,D.filtersChanged),A=function(){return function(e){return function(t){return e("string"===typeof t?{type:t}:t)}}},G=Object(S.a)({reducer:Object(y.a)({filters:_},m.reducerPath,m.reducer),middleware:function(e){return e().concat(A,m.middleware)},devTools:!1}),I=function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(u.a)(c,2),l=s[0],o=s[1],d=Object(r.useState)(""),b=Object(u.a)(d,2),j=b[0],h=b[1],m=O(),f=Object(u.a)(m,1)[0],p=Object(i.e)((function(e){return e.filters})).filtersLoadingStatus,g=M(G.getState());return Object(x.jsxs)("form",{className:"border p-4 shadow-lg rounded",onSubmit:function(e){e.preventDefault();var t={id:Object(w.a)(),name:n,description:l,element:j};f(t).unwrap(),a(""),o(""),h("")},children:[Object(x.jsxs)("div",{className:"mb-3",children:[Object(x.jsx)("label",{htmlFor:"name",className:"form-label fs-4",children:"\u0418\u043c\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u0433\u0435\u0440\u043e\u044f"}),Object(x.jsx)("input",{required:!0,type:"text",name:"name",className:"form-control",id:"name",placeholder:"\u041a\u0430\u043a \u043c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442?",value:n,onChange:function(e){return a(e.target.value)}})]}),Object(x.jsxs)("div",{className:"mb-3",children:[Object(x.jsx)("label",{htmlFor:"text",className:"form-label fs-4",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(x.jsx)("textarea",{required:!0,name:"text",className:"form-control",id:"text",placeholder:"\u0427\u0442\u043e \u044f \u0443\u043c\u0435\u044e?",style:{height:"130px"},value:l,onChange:function(e){return o(e.target.value)}})]}),Object(x.jsxs)("div",{className:"mb-3",children:[Object(x.jsx)("label",{htmlFor:"element",className:"form-label",children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0433\u0435\u0440\u043e\u044f"}),Object(x.jsxs)("select",{required:!0,className:"form-select",id:"element",name:"element",value:j,onChange:function(e){return h(e.target.value)},children:[Object(x.jsx)("option",{value:"",children:"\u042f \u0432\u043b\u0430\u0434\u0435\u044e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u043c..."}),function(e,t){return"loading"===t?Object(x.jsx)("option",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432"}):"error"===t?Object(x.jsx)("option",{children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}):e&&e.length>0?e.map((function(e){var t=e.name,n=e.label;if("all"!==t)return Object(x.jsx)("option",{value:t,children:n},t)})):void 0}(g,p)]})]}),Object(x.jsx)("button",{type:"submit",className:"btn btn-primary",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})},J=n(23),Q=n.n(J),B=function(){var e=Object(i.e)((function(e){return e.filters})),t=e.filtersLoadingStatus,n=e.activeFilter,a=M(G.getState()),c=Object(i.d)(),s=q().request;if(Object(r.useEffect)((function(){c(L(s))}),[]),"loading"===t)return Object(x.jsx)(v,{});if("error"===t)return Object(x.jsx)("h5",{className:"text-center mt-5",children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"});var l,o=0===(l=a).length?Object(x.jsx)("h5",{className:"text-center mt-5",children:"\u0424\u0438\u043b\u044c\u0442\u0440\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b"}):l.map((function(e){var t=e.name,r=e.className,a=e.label,s=Q()("btn",r,{active:t===n});return Object(x.jsx)("button",{id:t,className:s,onClick:function(){return c(P(t))},children:a},t)}));return Object(x.jsx)("div",{className:"card shadow-lg mt-4",children:Object(x.jsxs)("div",{className:"card-body",children:[Object(x.jsx)("p",{className:"card-text",children:"\u041e\u0442\u0444\u0438\u043b\u044c\u0442\u0440\u0443\u0439\u0442\u0435 \u0433\u0435\u0440\u043e\u0435\u0432 \u043f\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c"}),Object(x.jsx)("div",{className:"btn-group",children:o})]})})},R=(n(37),function(){return Object(x.jsx)("main",{className:"app",children:Object(x.jsxs)("div",{className:"content",children:[Object(x.jsx)(N,{}),Object(x.jsxs)("div",{className:"content__interactive",children:[Object(x.jsx)(I,{}),Object(x.jsx)(B,{})]})]})})});n(38);s.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(i.a,{store:G,children:Object(x.jsx)(R,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.2026b517.chunk.js.map