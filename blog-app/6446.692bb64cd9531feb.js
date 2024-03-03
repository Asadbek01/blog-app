"use strict";(self.webpackChunkblog_app=self.webpackChunkblog_app||[]).push([[6446],{6446:(E,g,l)=>{l.r(g),l.d(g,{BlogPageModule:()=>F});var i=l(6814),m=l(95),h=l(6761),a=l(4765),e=l(5879),p=l(586),d=l(6593),f=l(9195),u=l(6380),x=l(7913),b=l(6471),B=l(4532);function O(o,s){if(1&o&&(e.TgZ(0,"a",1)(1,"div",2),e._uU(2),e.qZA(),e.TgZ(3,"div",3),e._uU(4),e.qZA(),e.TgZ(5,"div",4)(6,"span",5),e._uU(7),e.qZA(),e.TgZ(8,"span",6),e._uU(9),e.qZA(),e.TgZ(10,"div",7)(11,"span"),e._uU(12),e.qZA()()()()),2&o){const n=s.$implicit,t=e.oxw();e.MGl("href","blog/",n.slug,"",e.LSH),e.xp6(2),e.Oqu(n.title),e.xp6(2),e.Oqu(n.summary),e.xp6(3),e.Oqu(t.utilService.getMonthDay(null==n?null:n.createdAt)),e.xp6(2),e.Oqu(t.utilService.getReadTime(null==n?null:n.content)),e.xp6(3),e.Oqu(n.category)}}let C=(()=>{var o;class s{constructor(t,r){this.platformId=t,this.utilService=r}ngOnInit(){}ionViewDidEnter(){(0,i.NF)(this.platformId)&&new p.z}}return(o=s).\u0275fac=function(t){return new(t||o)(e.Y36(e.Lbi),e.Y36(B.F))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-blog-box"]],inputs:{blogs:"blogs"},decls:1,vars:1,consts:[["class","blogs__container",3,"href",4,"ngFor","ngForOf"],[1,"blogs__container",3,"href"],[1,"blogs__title"],[1,"blogs__sub-title"],[1,"blogs__desc-container"],[1,"desc-date"],[1,"desc-time"],[1,"desc-category"]],template:function(t,r){1&t&&e.YNc(0,O,13,6,"a",0),2&t&&e.Q6J("ngForOf",r.blogs)},dependencies:[i.sg]}),s})();function Z(o,s){if(1&o&&(e.TgZ(0,"div",4)(1,"div",5)(2,"a",6),e._uU(3),e.qZA()()()),2&o){const n=s.$implicit;e.xp6(2),e.Q6J("href","/tag/"+n.category.toLowerCase(),e.LSH),e.xp6(1),e.Oqu(n.category)}}let y=(()=>{var o;class s{constructor(t){this.apiService=t,this.categories=[]}ngOnInit(){this.getObservableData()}getObservableData(){this.apiService.getAllCategories().subscribe(t=>{[...new Set(t.map(c=>c.category))].forEach(c=>{this.categories.push({category:c})}),console.log(this.categories)},t=>{console.log(t)})}}return(o=s).\u0275fac=function(t){return new(t||o)(e.Y36(u.s))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-dicover-more-box"]],decls:5,vars:1,consts:[[1,"discover__container"],[1,"text"],[1,"discover__topics"],["class","discover__contents",4,"ngFor","ngForOf"],[1,"discover__contents"],[1,"topic"],[3,"href"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"p",1),e._uU(2,"Discover more of what matters to you"),e.qZA(),e.TgZ(3,"div",2),e.YNc(4,Z,4,2,"div",3),e.qZA()()),2&t&&(e.xp6(4),e.Q6J("ngForOf",r.categories))},dependencies:[i.sg],styles:[".discover[_ngcontent-%COMP%]{position:relative}.discover[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{letter-spacing:0px;font-weight:500;font-size:16px;color:#242424}.discover__topics[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:8px}.discover__topics[_ngcontent-%COMP%]   .discover__contents[_ngcontent-%COMP%]{flex:0 0 calc(33.33% - 16px);max-width:calc(33.33% - 16px);box-sizing:border-box}.discover__topics[_ngcontent-%COMP%]   .topic[_ngcontent-%COMP%]{background-color:#e2e1e1;border-radius:100px;padding:8px 16px;font-size:14px;line-height:20px;font-weight:400;text-align:center;color:#242424;white-space:nowrap}.discover__topics[_ngcontent-%COMP%]   .topic[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;font-weight:400}"]}),s})();var M=l(1243),P=l(1799);const S=[{path:"",component:(()=>{var o;class s{constructor(t,r,c,_,D,U,w){this.routerOutletService=t,this.elRef=r,this.renderer=c,this.platformId=_,this.apiService=D,this.route=U,this.transferState=w,this.blogs=[],this.handleScroll=Y=>{if((0,i.NF)(this.platformId)){this.scrollingNumbers=Y.target.scrollTop;const v=document.querySelector("app-header");this.scrollingNumbers>10?v?.classList.add("show-bg"):v?.classList.remove("show-bg")}}}ngOnInit(){this.getDataFromResolver()}getDataFromResolver(){let t=(0,d.Cb)("blogs"),r=this.route.snapshot.data;r&&(this.blogs=r.blogs,this.transferState.set(t,this.blogs))}ionViewDidEnter(){(0,i.NF)(this.platformId)&&(this.routerOutletElement=this.routerOutletService.getRouterOutlet(),this.elRef&&this.elRef.nativeElement.querySelectorAll("#scroller_up, #scroller_down").forEach(t=>t.style.display="none"),this.routerOutletElement&&this.routerOutletElement.nativeElement.addEventListener("scroll",this.handleScroll),new p.z)}}return(o=s).\u0275fac=function(t){return new(t||o)(e.Y36(f.k),e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(e.Lbi),e.Y36(u.s),e.Y36(a.gz),e.Y36(d.ki))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-blog"]],decls:14,vars:1,consts:[[1,"container","center--blogs"],[1,"sticky-header","header__line"],[1,"row"],[1,"col-lg-8","col-md-12","col-sm-12"],[1,"blogs-container"],[3,"blogs"],[1,"col-lg-4","col-md-12","col-sm-12"],[1,"mobile-app-scroller"]],template:function(t,r){1&t&&(e._UZ(0,"app-header")(1,"app-scroller"),e.TgZ(2,"section",0)(3,"div",1),e._uU(4,"Blogs"),e.qZA(),e.TgZ(5,"div",2)(6,"div",3)(7,"div",4),e._UZ(8,"app-blog-box",5),e.qZA()(),e.TgZ(9,"div",6),e._UZ(10,"app-dicover-more-box"),e.qZA()()(),e._UZ(11,"app-footer"),e.TgZ(12,"section",7),e._UZ(13,"app-scroller-mobile"),e.qZA()),2&t&&(e.xp6(8),e.Q6J("blogs",r.blogs))},dependencies:[x.c,b.G,C,y,M.L,P.i]}),s})()}];let T=(()=>{var o;class s{}return(o=s).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[a.Bz.forChild(S),a.Bz]}),s})();var A=l(822);let F=(()=>{var o;class s{}return(o=s).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[i.ez,m.u5,h.Pc,T,A.K]}),s})()}}]);