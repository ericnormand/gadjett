goog.provide("gadjett.core$macros");
(function (){
gadjett.core$macros.dbg = (function gadjett$core$macros$dbg(_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23115__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__17__auto__","x__17__auto__",(-66793607),null)),(function (){var x__23115__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","println","cljs.core/println",(-331834442),null)),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null)),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23115__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,": "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__17__auto__","x__17__auto__",(-66793607),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__17__auto__","x__17__auto__",(-66793607),null))));
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return gadjett.core$macros.dbg;},new cljs.core.Symbol("gadjett.core$macros","dbg","gadjett.core$macros/dbg",(40877676),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.core$macros","gadjett.core$macros",(1327646013),null),new cljs.core.Symbol(null,"dbg","dbg",(1843299081),null),"gadjett/core.clj",(14),(1),(6),true,(6),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(gadjett.core$macros.dbg)?gadjett.core$macros.dbg.cljs$lang$test:null)])));})()
;

gadjett.core$macros.dbg.cljs$lang$macro = true;
(function (){
gadjett.core$macros.breakpoint = (function gadjett$core$macros$breakpoint(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,"do","do",(1686842252),null),cljs.core.list(new cljs.core.Symbol(null,"js*","js*",(-1134233646),null),"debugger;"),null);
}); return (
new cljs.core.Var(function(){return gadjett.core$macros.breakpoint;},new cljs.core.Symbol("gadjett.core$macros","breakpoint","gadjett.core$macros/breakpoint",(1105227628),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.core$macros","gadjett.core$macros",(1327646013),null),new cljs.core.Symbol(null,"breakpoint","breakpoint",(-1471057329),null),"gadjett/core.clj",(21),(1),(12),true,(12),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(gadjett.core$macros.breakpoint)?gadjett.core$macros.breakpoint.cljs$lang$test:null)])));})()
;

gadjett.core$macros.breakpoint.cljs$lang$macro = true;
(function (){
gadjett.core$macros.log_with_msg = (function gadjett$core$macros$log_with_msg(_AMPERSAND_form,_AMPERSAND_env,message,x){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23115__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__18__auto__","x__18__auto__",(-2003375780),null)),(function (){var x__23115__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","println","cljs.core/println",(-331834442),null)),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null)),(function (){var x__23115__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,": "),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23115__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," => "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__18__auto__","x__18__auto__",(-2003375780),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__18__auto__","x__18__auto__",(-2003375780),null))));
}); return (
new cljs.core.Var(function(){return gadjett.core$macros.log_with_msg;},new cljs.core.Symbol("gadjett.core$macros","log-with-msg","gadjett.core$macros/log-with-msg",(-1697890176),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.core$macros","gadjett.core$macros",(1327646013),null),new cljs.core.Symbol(null,"log-with-msg","log-with-msg",(-1568844291),null),"gadjett/core.clj",(23),(1),(16),true,(16),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",(1234475525),null),new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(gadjett.core$macros.log_with_msg)?gadjett.core$macros.log_with_msg.cljs$lang$test:null)])));})()
;

gadjett.core$macros.log_with_msg.cljs$lang$macro = true;
(function (){
gadjett.core$macros.log = (function gadjett$core$macros$log(var_args){
var args__23374__auto__ = [];
var len__23372__auto___452 = arguments.length;
var i__23373__auto___453 = (0);
while(true){
if((i__23373__auto___453 < len__23372__auto___452)){
args__23374__auto__.push((arguments[i__23373__auto___453]));

var G__454 = (i__23373__auto___453 + (1));
i__23373__auto___453 = G__454;
continue;
} else {
}
break;
}

var argseq__23375__auto__ = ((((2) < args__23374__auto__.length))?(new cljs.core.IndexedSeq(args__23374__auto__.slice((2)),(0),null)):null);
return gadjett.core$macros.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23375__auto__);
}); return (
new cljs.core.Var(function(){return gadjett.core$macros.log;},new cljs.core.Symbol("gadjett.core$macros","log","gadjett.core$macros/log",(759165568),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.core$macros","gadjett.core$macros",(1327646013),null),new cljs.core.Symbol(null,"log","log",(45015523),null),"gadjett/core.clj",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(22),true,(22),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),null,(cljs.core.truth_(gadjett.core$macros.log)?gadjett.core$macros.log.cljs$lang$test:null)])));})()
;

gadjett.core$macros.log.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("the macro `log` is allowed only inside `deflog`"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});

gadjett.core$macros.log.cljs$lang$maxFixedArity = (2);

gadjett.core$macros.log.cljs$lang$applyTo = (function (seq449){
var G__450 = cljs.core.first.call(null,seq449);
var seq449__$1 = cljs.core.next.call(null,seq449);
var G__451 = cljs.core.first.call(null,seq449__$1);
var seq449__$2 = cljs.core.next.call(null,seq449__$1);
return gadjett.core$macros.log.cljs$core$IFn$_invoke$arity$variadic(G__450,G__451,seq449__$2);
});

new cljs.core.Var(function(){return gadjett.core$macros.log;},new cljs.core.Symbol("gadjett.core$macros","log","gadjett.core$macros/log",(759165568),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.core$macros","gadjett.core$macros",(1327646013),null),new cljs.core.Symbol(null,"log","log",(45015523),null),"gadjett/core.clj",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(22),true,(22),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),null,(cljs.core.truth_(gadjett.core$macros.log)?gadjett.core$macros.log.cljs$lang$test:null)]));

gadjett.core$macros.log.cljs$lang$macro = true;
/**
 * thank you Herwig Hochleitner! https://groups.google.com/forum/#!topic/clojurescript/-iVx1UQRNSE
 */
(function (){
gadjett.core$macros.defprint = (function gadjett$core$macros$defprint(var_args){
var args__23374__auto__ = [];
var len__23372__auto___460 = arguments.length;
var i__23373__auto___461 = (0);
while(true){
if((i__23373__auto___461 < len__23372__auto___460)){
args__23374__auto__.push((arguments[i__23373__auto___461]));

var G__462 = (i__23373__auto___461 + (1));
i__23373__auto___461 = G__462;
continue;
} else {
}
break;
}

var argseq__23375__auto__ = ((((4) < args__23374__auto__.length))?(new cljs.core.IndexedSeq(args__23374__auto__.slice((4)),(0),null)):null);
return gadjett.core$macros.defprint.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23375__auto__);
}); return (
new cljs.core.Var(function(){return gadjett.core$macros.defprint;},new cljs.core.Symbol("gadjett.core$macros","defprint","gadjett.core$macros/defprint",(-608848448),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.core$macros","gadjett.core$macros",(1327646013),null),new cljs.core.Symbol(null,"defprint","defprint",(-1406761181),null),"gadjett/core.clj",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"func-name","func-name",(-690076933),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"func-name","func-name",(-690076933),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(24),true,(24),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"func-name","func-name",(-690076933),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"thank you Herwig Hochleitner! https://groups.google.com/forum/#!topic/clojurescript/-iVx1UQRNSE",(cljs.core.truth_(gadjett.core$macros.defprint)?gadjett.core$macros.defprint.cljs$lang$test:null)])));})()
;

gadjett.core$macros.defprint.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,func_name,args,body){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",(-1606493717),null)),(function (){var x__23115__auto__ = func_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),(function (){var x__23115__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"&","&",(-2144855648),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__19__auto__","args__19__auto__",(161416253),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","println","cljs.core/println",(-331834442),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"args: "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__19__auto__","args__19__auto__",(161416253),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23115__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23115__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__19__auto__","args__19__auto__",(161416253),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})()));
});

gadjett.core$macros.defprint.cljs$lang$maxFixedArity = (4);

gadjett.core$macros.defprint.cljs$lang$applyTo = (function (seq455){
var G__456 = cljs.core.first.call(null,seq455);
var seq455__$1 = cljs.core.next.call(null,seq455);
var G__457 = cljs.core.first.call(null,seq455__$1);
var seq455__$2 = cljs.core.next.call(null,seq455__$1);
var G__458 = cljs.core.first.call(null,seq455__$2);
var seq455__$3 = cljs.core.next.call(null,seq455__$2);
var G__459 = cljs.core.first.call(null,seq455__$3);
var seq455__$4 = cljs.core.next.call(null,seq455__$3);
return gadjett.core$macros.defprint.cljs$core$IFn$_invoke$arity$variadic(G__456,G__457,G__458,G__459,seq455__$4);
});

new cljs.core.Var(function(){return gadjett.core$macros.defprint;},new cljs.core.Symbol("gadjett.core$macros","defprint","gadjett.core$macros/defprint",(-608848448),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.core$macros","gadjett.core$macros",(1327646013),null),new cljs.core.Symbol(null,"defprint","defprint",(-1406761181),null),"gadjett/core.clj",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"func-name","func-name",(-690076933),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"func-name","func-name",(-690076933),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(24),true,(24),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"func-name","func-name",(-690076933),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"thank you Herwig Hochleitner! https://groups.google.com/forum/#!topic/clojurescript/-iVx1UQRNSE",(cljs.core.truth_(gadjett.core$macros.defprint)?gadjett.core$macros.defprint.cljs$lang$test:null)]));

gadjett.core$macros.defprint.cljs$lang$macro = true;
(function (){
gadjett.core$macros.deflog = (function gadjett$core$macros$deflog(var_args){
var args__23374__auto__ = [];
var len__23372__auto___469 = arguments.length;
var i__23373__auto___470 = (0);
while(true){
if((i__23373__auto___470 < len__23372__auto___469)){
args__23374__auto__.push((arguments[i__23373__auto___470]));

var G__471 = (i__23373__auto___470 + (1));
i__23373__auto___470 = G__471;
continue;
} else {
}
break;
}

var argseq__23375__auto__ = ((((2) < args__23374__auto__.length))?(new cljs.core.IndexedSeq(args__23374__auto__.slice((2)),(0),null)):null);
return gadjett.core$macros.deflog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23375__auto__);
}); return (
new cljs.core.Var(function(){return gadjett.core$macros.deflog;},new cljs.core.Symbol("gadjett.core$macros","deflog","gadjett.core$macros/deflog",(983865727),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.core$macros","gadjett.core$macros",(1327646013),null),new cljs.core.Symbol(null,"deflog","deflog",(-768371620),null),"gadjett/core.clj",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(31),true,(31),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null)], null)),null,(cljs.core.truth_(gadjett.core$macros.deflog)?gadjett.core$macros.deflog.cljs$lang$test:null)])));})()
;

gadjett.core$macros.deflog.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,definition){
var full_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,_AMPERSAND_env,cljs.core.first.call(null,definition))))].join('');
if(cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,definition))){
var vec__466 = definition;
var seq__467 = cljs.core.seq.call(null,vec__466);
var first__468 = cljs.core.first.call(null,seq__467);
var seq__467__$1 = cljs.core.next.call(null,seq__467);
var func_name = first__468;
var first__468__$1 = cljs.core.first.call(null,seq__467__$1);
var seq__467__$2 = cljs.core.next.call(null,seq__467__$1);
var args = first__468__$1;
var body = seq__467__$2;
var body_new = gadjett.collections.my_replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"log","log",(45015523),null),cljs.core._conj.call(null,(function (){var x__23115__auto__ = full_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),new cljs.core.Symbol(null,"log-with-msg","log-with-msg",(-1568844291),null))], null),body);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",(-1606493717),null)),(function (){var x__23115__auto__ = func_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),(function (){var x__23115__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),body_new));
} else {
return null;
}
});

gadjett.core$macros.deflog.cljs$lang$maxFixedArity = (2);

gadjett.core$macros.deflog.cljs$lang$applyTo = (function (seq463){
var G__464 = cljs.core.first.call(null,seq463);
var seq463__$1 = cljs.core.next.call(null,seq463);
var G__465 = cljs.core.first.call(null,seq463__$1);
var seq463__$2 = cljs.core.next.call(null,seq463__$1);
return gadjett.core$macros.deflog.cljs$core$IFn$_invoke$arity$variadic(G__464,G__465,seq463__$2);
});

new cljs.core.Var(function(){return gadjett.core$macros.deflog;},new cljs.core.Symbol("gadjett.core$macros","deflog","gadjett.core$macros/deflog",(983865727),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.core$macros","gadjett.core$macros",(1327646013),null),new cljs.core.Symbol(null,"deflog","deflog",(-768371620),null),"gadjett/core.clj",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(31),true,(31),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null)], null)),null,(cljs.core.truth_(gadjett.core$macros.deflog)?gadjett.core$macros.deflog.cljs$lang$test:null)]));

gadjett.core$macros.deflog.cljs$lang$macro = true;
(function (){
gadjett.core$macros.deftrack = (function gadjett$core$macros$deftrack(var_args){
var args__23374__auto__ = [];
var len__23372__auto___485 = arguments.length;
var i__23373__auto___486 = (0);
while(true){
if((i__23373__auto___486 < len__23372__auto___485)){
args__23374__auto__.push((arguments[i__23373__auto___486]));

var G__487 = (i__23373__auto___486 + (1));
i__23373__auto___486 = G__487;
continue;
} else {
}
break;
}

var argseq__23375__auto__ = ((((2) < args__23374__auto__.length))?(new cljs.core.IndexedSeq(args__23374__auto__.slice((2)),(0),null)):null);
return gadjett.core$macros.deftrack.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23375__auto__);
}); return (
new cljs.core.Var(function(){return gadjett.core$macros.deftrack;},new cljs.core.Symbol("gadjett.core$macros","deftrack","gadjett.core$macros/deftrack",(-1634017107),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.core$macros","gadjett.core$macros",(1327646013),null),new cljs.core.Symbol(null,"deftrack","deftrack",(-2029317560),null),"gadjett/core.clj",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(39),true,(39),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null)], null)),null,(cljs.core.truth_(gadjett.core$macros.deftrack)?gadjett.core$macros.deftrack.cljs$lang$test:null)])));})()
;

gadjett.core$macros.deftrack.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,definition){
var full_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,_AMPERSAND_env,cljs.core.first.call(null,definition))))].join('');
if(cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,definition))){
var vec__475 = definition;
var seq__476 = cljs.core.seq.call(null,vec__475);
var first__477 = cljs.core.first.call(null,seq__476);
var seq__476__$1 = cljs.core.next.call(null,seq__476);
var func_name = first__477;
var first__477__$1 = cljs.core.first.call(null,seq__476__$1);
var seq__476__$2 = cljs.core.next.call(null,seq__476__$1);
var args = first__477__$1;
var body = seq__476__$2;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",(-1606493717),null)),(function (){var x__23115__auto__ = func_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),(function (){var x__23115__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"&","&",(-2144855648),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__20__auto__","args__20__auto__",(-1533651971),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",(1075777968),null)),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("gadjett.core-fn","record-function-call","gadjett.core-fn/record-function-call",(421969988),null)),(function (){var x__23115__auto__ = full_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__20__auto__","args__20__auto__",(-1533651971),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("gadjett.core-fn","function-call-err-msg","gadjett.core-fn/function-call-err-msg",(-1699083960),null)),(function (){var x__23115__auto__ = full_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__20__auto__","args__20__auto__",(-1533651971),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23115__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23115__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__20__auto__","args__20__auto__",(-1533651971),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})()));
} else {
var vec__478 = definition;
var seq__479 = cljs.core.seq.call(null,vec__478);
var first__480 = cljs.core.first.call(null,seq__479);
var seq__479__$1 = cljs.core.next.call(null,seq__479);
var func_name = first__480;
var definitions = seq__479__$1;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",(-1606493717),null)),(function (){var x__23115__auto__ = func_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),cljs.core.map.call(null,((function (vec__478,seq__479,first__480,seq__479__$1,func_name,definitions,full_name){
return (function (p__481){
var vec__482 = p__481;
var seq__483 = cljs.core.seq.call(null,vec__482);
var first__484 = cljs.core.first.call(null,seq__483);
var seq__483__$1 = cljs.core.next.call(null,seq__483);
var args = first__484;
var body = seq__483__$1;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23115__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",(1075777968),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false),cljs.core._conj.call(null,cljs.core.List.EMPTY,"deftrack macro doesn't handle (yet) multi-arity functions")));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),body));
});})(vec__478,seq__479,first__480,seq__479__$1,func_name,definitions,full_name))
,definitions)));
}
});

gadjett.core$macros.deftrack.cljs$lang$maxFixedArity = (2);

gadjett.core$macros.deftrack.cljs$lang$applyTo = (function (seq472){
var G__473 = cljs.core.first.call(null,seq472);
var seq472__$1 = cljs.core.next.call(null,seq472);
var G__474 = cljs.core.first.call(null,seq472__$1);
var seq472__$2 = cljs.core.next.call(null,seq472__$1);
return gadjett.core$macros.deftrack.cljs$core$IFn$_invoke$arity$variadic(G__473,G__474,seq472__$2);
});

new cljs.core.Var(function(){return gadjett.core$macros.deftrack;},new cljs.core.Symbol("gadjett.core$macros","deftrack","gadjett.core$macros/deftrack",(-1634017107),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.core$macros","gadjett.core$macros",(1327646013),null),new cljs.core.Symbol(null,"deftrack","deftrack",(-2029317560),null),"gadjett/core.clj",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(39),true,(39),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null)], null)),null,(cljs.core.truth_(gadjett.core$macros.deftrack)?gadjett.core$macros.deftrack.cljs$lang$test:null)]));

gadjett.core$macros.deftrack.cljs$lang$macro = true;
