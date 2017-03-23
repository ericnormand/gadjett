goog.provide("gadjett.core$macros");
(function (){
gadjett.core$macros.dbg = (function gadjett$core$macros$dbg(_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23115__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__2__auto__","x__2__auto__",(150146139),null)),(function (){var x__23115__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","println","cljs.core/println",(-331834442),null)),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null)),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23115__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,": "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__2__auto__","x__2__auto__",(150146139),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__2__auto__","x__2__auto__",(150146139),null))));
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
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23115__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__3__auto__","x__3__auto__",(460791022),null)),(function (){var x__23115__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","println","cljs.core/println",(-331834442),null)),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null)),(function (){var x__23115__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,": "),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23115__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," => "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__3__auto__","x__3__auto__",(460791022),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__3__auto__","x__3__auto__",(460791022),null))));
}); return (
new cljs.core.Var(function(){return gadjett.core$macros.log_with_msg;},new cljs.core.Symbol("gadjett.core$macros","log-with-msg","gadjett.core$macros/log-with-msg",(-1697890176),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.core$macros","gadjett.core$macros",(1327646013),null),new cljs.core.Symbol(null,"log-with-msg","log-with-msg",(-1568844291),null),"gadjett/core.clj",(23),(1),(16),true,(16),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",(1234475525),null),new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(gadjett.core$macros.log_with_msg)?gadjett.core$macros.log_with_msg.cljs$lang$test:null)])));})()
;

gadjett.core$macros.log_with_msg.cljs$lang$macro = true;
(function (){
gadjett.core$macros.log = (function gadjett$core$macros$log(var_args){
var args__23374__auto__ = [];
var len__23372__auto___185 = arguments.length;
var i__23373__auto___186 = (0);
while(true){
if((i__23373__auto___186 < len__23372__auto___185)){
args__23374__auto__.push((arguments[i__23373__auto___186]));

var G__187 = (i__23373__auto___186 + (1));
i__23373__auto___186 = G__187;
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

gadjett.core$macros.log.cljs$lang$applyTo = (function (seq182){
var G__183 = cljs.core.first.call(null,seq182);
var seq182__$1 = cljs.core.next.call(null,seq182);
var G__184 = cljs.core.first.call(null,seq182__$1);
var seq182__$2 = cljs.core.next.call(null,seq182__$1);
return gadjett.core$macros.log.cljs$core$IFn$_invoke$arity$variadic(G__183,G__184,seq182__$2);
});

new cljs.core.Var(function(){return gadjett.core$macros.log;},new cljs.core.Symbol("gadjett.core$macros","log","gadjett.core$macros/log",(759165568),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.core$macros","gadjett.core$macros",(1327646013),null),new cljs.core.Symbol(null,"log","log",(45015523),null),"gadjett/core.clj",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(22),true,(22),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),null,(cljs.core.truth_(gadjett.core$macros.log)?gadjett.core$macros.log.cljs$lang$test:null)]));

gadjett.core$macros.log.cljs$lang$macro = true;
/**
 * thank you Herwig Hochleitner! https://groups.google.com/forum/#!topic/clojurescript/-iVx1UQRNSE
 */
(function (){
gadjett.core$macros.defprint = (function gadjett$core$macros$defprint(var_args){
var args__23374__auto__ = [];
var len__23372__auto___193 = arguments.length;
var i__23373__auto___194 = (0);
while(true){
if((i__23373__auto___194 < len__23372__auto___193)){
args__23374__auto__.push((arguments[i__23373__auto___194]));

var G__195 = (i__23373__auto___194 + (1));
i__23373__auto___194 = G__195;
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
})(),(function (){var x__23115__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"&","&",(-2144855648),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__4__auto__","args__4__auto__",(729907791),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","println","cljs.core/println",(-331834442),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"args: "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__4__auto__","args__4__auto__",(729907791),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23115__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23115__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__4__auto__","args__4__auto__",(729907791),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})()));
});

gadjett.core$macros.defprint.cljs$lang$maxFixedArity = (4);

gadjett.core$macros.defprint.cljs$lang$applyTo = (function (seq188){
var G__189 = cljs.core.first.call(null,seq188);
var seq188__$1 = cljs.core.next.call(null,seq188);
var G__190 = cljs.core.first.call(null,seq188__$1);
var seq188__$2 = cljs.core.next.call(null,seq188__$1);
var G__191 = cljs.core.first.call(null,seq188__$2);
var seq188__$3 = cljs.core.next.call(null,seq188__$2);
var G__192 = cljs.core.first.call(null,seq188__$3);
var seq188__$4 = cljs.core.next.call(null,seq188__$3);
return gadjett.core$macros.defprint.cljs$core$IFn$_invoke$arity$variadic(G__189,G__190,G__191,G__192,seq188__$4);
});

new cljs.core.Var(function(){return gadjett.core$macros.defprint;},new cljs.core.Symbol("gadjett.core$macros","defprint","gadjett.core$macros/defprint",(-608848448),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.core$macros","gadjett.core$macros",(1327646013),null),new cljs.core.Symbol(null,"defprint","defprint",(-1406761181),null),"gadjett/core.clj",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"func-name","func-name",(-690076933),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"func-name","func-name",(-690076933),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(24),true,(24),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"func-name","func-name",(-690076933),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"thank you Herwig Hochleitner! https://groups.google.com/forum/#!topic/clojurescript/-iVx1UQRNSE",(cljs.core.truth_(gadjett.core$macros.defprint)?gadjett.core$macros.defprint.cljs$lang$test:null)]));

gadjett.core$macros.defprint.cljs$lang$macro = true;
(function (){
gadjett.core$macros.deflog = (function gadjett$core$macros$deflog(var_args){
var args__23374__auto__ = [];
var len__23372__auto___202 = arguments.length;
var i__23373__auto___203 = (0);
while(true){
if((i__23373__auto___203 < len__23372__auto___202)){
args__23374__auto__.push((arguments[i__23373__auto___203]));

var G__204 = (i__23373__auto___203 + (1));
i__23373__auto___203 = G__204;
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
var vec__199 = definition;
var seq__200 = cljs.core.seq.call(null,vec__199);
var first__201 = cljs.core.first.call(null,seq__200);
var seq__200__$1 = cljs.core.next.call(null,seq__200);
var func_name = first__201;
var first__201__$1 = cljs.core.first.call(null,seq__200__$1);
var seq__200__$2 = cljs.core.next.call(null,seq__200__$1);
var args = first__201__$1;
var body = seq__200__$2;
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

gadjett.core$macros.deflog.cljs$lang$applyTo = (function (seq196){
var G__197 = cljs.core.first.call(null,seq196);
var seq196__$1 = cljs.core.next.call(null,seq196);
var G__198 = cljs.core.first.call(null,seq196__$1);
var seq196__$2 = cljs.core.next.call(null,seq196__$1);
return gadjett.core$macros.deflog.cljs$core$IFn$_invoke$arity$variadic(G__197,G__198,seq196__$2);
});

new cljs.core.Var(function(){return gadjett.core$macros.deflog;},new cljs.core.Symbol("gadjett.core$macros","deflog","gadjett.core$macros/deflog",(983865727),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.core$macros","gadjett.core$macros",(1327646013),null),new cljs.core.Symbol(null,"deflog","deflog",(-768371620),null),"gadjett/core.clj",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(31),true,(31),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null)], null)),null,(cljs.core.truth_(gadjett.core$macros.deflog)?gadjett.core$macros.deflog.cljs$lang$test:null)]));

gadjett.core$macros.deflog.cljs$lang$macro = true;
(function (){
gadjett.core$macros.deftrack = (function gadjett$core$macros$deftrack(var_args){
var args__23374__auto__ = [];
var len__23372__auto___218 = arguments.length;
var i__23373__auto___219 = (0);
while(true){
if((i__23373__auto___219 < len__23372__auto___218)){
args__23374__auto__.push((arguments[i__23373__auto___219]));

var G__220 = (i__23373__auto___219 + (1));
i__23373__auto___219 = G__220;
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
var vec__208 = definition;
var seq__209 = cljs.core.seq.call(null,vec__208);
var first__210 = cljs.core.first.call(null,seq__209);
var seq__209__$1 = cljs.core.next.call(null,seq__209);
var func_name = first__210;
var first__210__$1 = cljs.core.first.call(null,seq__209__$1);
var seq__209__$2 = cljs.core.next.call(null,seq__209__$1);
var args = first__210__$1;
var body = seq__209__$2;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",(-1606493717),null)),(function (){var x__23115__auto__ = func_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),(function (){var x__23115__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"&","&",(-2144855648),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__5__auto__","args__5__auto__",(-670139962),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",(1075777968),null)),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("gadjett.core-fn","record-function-call","gadjett.core-fn/record-function-call",(421969988),null)),(function (){var x__23115__auto__ = full_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__5__auto__","args__5__auto__",(-670139962),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("gadjett.core-fn","function-call-err-msg","gadjett.core-fn/function-call-err-msg",(-1699083960),null)),(function (){var x__23115__auto__ = full_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__5__auto__","args__5__auto__",(-670139962),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23115__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23115__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__5__auto__","args__5__auto__",(-670139962),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})()));
} else {
var vec__211 = definition;
var seq__212 = cljs.core.seq.call(null,vec__211);
var first__213 = cljs.core.first.call(null,seq__212);
var seq__212__$1 = cljs.core.next.call(null,seq__212);
var func_name = first__213;
var definitions = seq__212__$1;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",(-1606493717),null)),(function (){var x__23115__auto__ = func_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),cljs.core.map.call(null,((function (vec__211,seq__212,first__213,seq__212__$1,func_name,definitions,full_name){
return (function (p__214){
var vec__215 = p__214;
var seq__216 = cljs.core.seq.call(null,vec__215);
var first__217 = cljs.core.first.call(null,seq__216);
var seq__216__$1 = cljs.core.next.call(null,seq__216);
var args = first__217;
var body = seq__216__$1;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23115__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",(1075777968),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false),cljs.core._conj.call(null,cljs.core.List.EMPTY,"deftrack macro doesn't handle (yet) multi-arity functions")));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),body));
});})(vec__211,seq__212,first__213,seq__212__$1,func_name,definitions,full_name))
,definitions)));
}
});

gadjett.core$macros.deftrack.cljs$lang$maxFixedArity = (2);

gadjett.core$macros.deftrack.cljs$lang$applyTo = (function (seq205){
var G__206 = cljs.core.first.call(null,seq205);
var seq205__$1 = cljs.core.next.call(null,seq205);
var G__207 = cljs.core.first.call(null,seq205__$1);
var seq205__$2 = cljs.core.next.call(null,seq205__$1);
return gadjett.core$macros.deftrack.cljs$core$IFn$_invoke$arity$variadic(G__206,G__207,seq205__$2);
});

new cljs.core.Var(function(){return gadjett.core$macros.deftrack;},new cljs.core.Symbol("gadjett.core$macros","deftrack","gadjett.core$macros/deftrack",(-1634017107),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.core$macros","gadjett.core$macros",(1327646013),null),new cljs.core.Symbol(null,"deftrack","deftrack",(-2029317560),null),"gadjett/core.clj",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(39),true,(39),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null)], null)),null,(cljs.core.truth_(gadjett.core$macros.deftrack)?gadjett.core$macros.deftrack.cljs$lang$test:null)]));

gadjett.core$macros.deftrack.cljs$lang$macro = true;
