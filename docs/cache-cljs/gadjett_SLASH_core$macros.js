goog.provide("gadjett.core$macros");
(function (){
gadjett.core$macros.dbg = (function gadjett$core$macros$dbg(_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23115__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21__auto__","x__21__auto__",(-86467418),null)),(function (){var x__23115__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","println","cljs.core/println",(-331834442),null)),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null)),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23115__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,": "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21__auto__","x__21__auto__",(-86467418),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21__auto__","x__21__auto__",(-86467418),null))));
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
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23115__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__22__auto__","x__22__auto__",(634239485),null)),(function (){var x__23115__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","println","cljs.core/println",(-331834442),null)),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null)),(function (){var x__23115__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,": "),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23115__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," => "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__22__auto__","x__22__auto__",(634239485),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__22__auto__","x__22__auto__",(634239485),null))));
}); return (
new cljs.core.Var(function(){return gadjett.core$macros.log_with_msg;},new cljs.core.Symbol("gadjett.core$macros","log-with-msg","gadjett.core$macros/log-with-msg",(-1697890176),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.core$macros","gadjett.core$macros",(1327646013),null),new cljs.core.Symbol(null,"log-with-msg","log-with-msg",(-1568844291),null),"gadjett/core.clj",(23),(1),(16),true,(16),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",(1234475525),null),new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(gadjett.core$macros.log_with_msg)?gadjett.core$macros.log_with_msg.cljs$lang$test:null)])));})()
;

gadjett.core$macros.log_with_msg.cljs$lang$macro = true;
(function (){
gadjett.core$macros.log = (function gadjett$core$macros$log(var_args){
var args__23374__auto__ = [];
var len__23372__auto___1635 = arguments.length;
var i__23373__auto___1636 = (0);
while(true){
if((i__23373__auto___1636 < len__23372__auto___1635)){
args__23374__auto__.push((arguments[i__23373__auto___1636]));

var G__1637 = (i__23373__auto___1636 + (1));
i__23373__auto___1636 = G__1637;
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

gadjett.core$macros.log.cljs$lang$applyTo = (function (seq1632){
var G__1633 = cljs.core.first.call(null,seq1632);
var seq1632__$1 = cljs.core.next.call(null,seq1632);
var G__1634 = cljs.core.first.call(null,seq1632__$1);
var seq1632__$2 = cljs.core.next.call(null,seq1632__$1);
return gadjett.core$macros.log.cljs$core$IFn$_invoke$arity$variadic(G__1633,G__1634,seq1632__$2);
});

new cljs.core.Var(function(){return gadjett.core$macros.log;},new cljs.core.Symbol("gadjett.core$macros","log","gadjett.core$macros/log",(759165568),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.core$macros","gadjett.core$macros",(1327646013),null),new cljs.core.Symbol(null,"log","log",(45015523),null),"gadjett/core.clj",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(22),true,(22),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),null,(cljs.core.truth_(gadjett.core$macros.log)?gadjett.core$macros.log.cljs$lang$test:null)]));

gadjett.core$macros.log.cljs$lang$macro = true;
/**
 * thank you Herwig Hochleitner! https://groups.google.com/forum/#!topic/clojurescript/-iVx1UQRNSE
 */
(function (){
gadjett.core$macros.defprint = (function gadjett$core$macros$defprint(var_args){
var args__23374__auto__ = [];
var len__23372__auto___1643 = arguments.length;
var i__23373__auto___1644 = (0);
while(true){
if((i__23373__auto___1644 < len__23372__auto___1643)){
args__23374__auto__.push((arguments[i__23373__auto___1644]));

var G__1645 = (i__23373__auto___1644 + (1));
i__23373__auto___1644 = G__1645;
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
})(),(function (){var x__23115__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"&","&",(-2144855648),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__23__auto__","args__23__auto__",(400641028),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","println","cljs.core/println",(-331834442),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"args: "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__23__auto__","args__23__auto__",(400641028),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23115__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23115__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__23__auto__","args__23__auto__",(400641028),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})()));
});

gadjett.core$macros.defprint.cljs$lang$maxFixedArity = (4);

gadjett.core$macros.defprint.cljs$lang$applyTo = (function (seq1638){
var G__1639 = cljs.core.first.call(null,seq1638);
var seq1638__$1 = cljs.core.next.call(null,seq1638);
var G__1640 = cljs.core.first.call(null,seq1638__$1);
var seq1638__$2 = cljs.core.next.call(null,seq1638__$1);
var G__1641 = cljs.core.first.call(null,seq1638__$2);
var seq1638__$3 = cljs.core.next.call(null,seq1638__$2);
var G__1642 = cljs.core.first.call(null,seq1638__$3);
var seq1638__$4 = cljs.core.next.call(null,seq1638__$3);
return gadjett.core$macros.defprint.cljs$core$IFn$_invoke$arity$variadic(G__1639,G__1640,G__1641,G__1642,seq1638__$4);
});

new cljs.core.Var(function(){return gadjett.core$macros.defprint;},new cljs.core.Symbol("gadjett.core$macros","defprint","gadjett.core$macros/defprint",(-608848448),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.core$macros","gadjett.core$macros",(1327646013),null),new cljs.core.Symbol(null,"defprint","defprint",(-1406761181),null),"gadjett/core.clj",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"func-name","func-name",(-690076933),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"func-name","func-name",(-690076933),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(24),true,(24),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"func-name","func-name",(-690076933),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"thank you Herwig Hochleitner! https://groups.google.com/forum/#!topic/clojurescript/-iVx1UQRNSE",(cljs.core.truth_(gadjett.core$macros.defprint)?gadjett.core$macros.defprint.cljs$lang$test:null)]));

gadjett.core$macros.defprint.cljs$lang$macro = true;
(function (){
gadjett.core$macros.deflog = (function gadjett$core$macros$deflog(var_args){
var args__23374__auto__ = [];
var len__23372__auto___1652 = arguments.length;
var i__23373__auto___1653 = (0);
while(true){
if((i__23373__auto___1653 < len__23372__auto___1652)){
args__23374__auto__.push((arguments[i__23373__auto___1653]));

var G__1654 = (i__23373__auto___1653 + (1));
i__23373__auto___1653 = G__1654;
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
var vec__1649 = definition;
var seq__1650 = cljs.core.seq.call(null,vec__1649);
var first__1651 = cljs.core.first.call(null,seq__1650);
var seq__1650__$1 = cljs.core.next.call(null,seq__1650);
var func_name = first__1651;
var first__1651__$1 = cljs.core.first.call(null,seq__1650__$1);
var seq__1650__$2 = cljs.core.next.call(null,seq__1650__$1);
var args = first__1651__$1;
var body = seq__1650__$2;
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

gadjett.core$macros.deflog.cljs$lang$applyTo = (function (seq1646){
var G__1647 = cljs.core.first.call(null,seq1646);
var seq1646__$1 = cljs.core.next.call(null,seq1646);
var G__1648 = cljs.core.first.call(null,seq1646__$1);
var seq1646__$2 = cljs.core.next.call(null,seq1646__$1);
return gadjett.core$macros.deflog.cljs$core$IFn$_invoke$arity$variadic(G__1647,G__1648,seq1646__$2);
});

new cljs.core.Var(function(){return gadjett.core$macros.deflog;},new cljs.core.Symbol("gadjett.core$macros","deflog","gadjett.core$macros/deflog",(983865727),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.core$macros","gadjett.core$macros",(1327646013),null),new cljs.core.Symbol(null,"deflog","deflog",(-768371620),null),"gadjett/core.clj",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(31),true,(31),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null)], null)),null,(cljs.core.truth_(gadjett.core$macros.deflog)?gadjett.core$macros.deflog.cljs$lang$test:null)]));

gadjett.core$macros.deflog.cljs$lang$macro = true;
(function (){
gadjett.core$macros.deftrack = (function gadjett$core$macros$deftrack(var_args){
var args__23374__auto__ = [];
var len__23372__auto___1668 = arguments.length;
var i__23373__auto___1669 = (0);
while(true){
if((i__23373__auto___1669 < len__23372__auto___1668)){
args__23374__auto__.push((arguments[i__23373__auto___1669]));

var G__1670 = (i__23373__auto___1669 + (1));
i__23373__auto___1669 = G__1670;
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
var vec__1658 = definition;
var seq__1659 = cljs.core.seq.call(null,vec__1658);
var first__1660 = cljs.core.first.call(null,seq__1659);
var seq__1659__$1 = cljs.core.next.call(null,seq__1659);
var func_name = first__1660;
var first__1660__$1 = cljs.core.first.call(null,seq__1659__$1);
var seq__1659__$2 = cljs.core.next.call(null,seq__1659__$1);
var args = first__1660__$1;
var body = seq__1659__$2;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",(-1606493717),null)),(function (){var x__23115__auto__ = func_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),(function (){var x__23115__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"&","&",(-2144855648),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__24__auto__","args__24__auto__",(-765467202),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",(1075777968),null)),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("gadjett.core-fn","record-function-call","gadjett.core-fn/record-function-call",(421969988),null)),(function (){var x__23115__auto__ = full_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__24__auto__","args__24__auto__",(-765467202),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("gadjett.core-fn","function-call-err-msg","gadjett.core-fn/function-call-err-msg",(-1699083960),null)),(function (){var x__23115__auto__ = full_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__24__auto__","args__24__auto__",(-765467202),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23115__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23115__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__24__auto__","args__24__auto__",(-765467202),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})()));
} else {
var vec__1661 = definition;
var seq__1662 = cljs.core.seq.call(null,vec__1661);
var first__1663 = cljs.core.first.call(null,seq__1662);
var seq__1662__$1 = cljs.core.next.call(null,seq__1662);
var func_name = first__1663;
var definitions = seq__1662__$1;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",(-1606493717),null)),(function (){var x__23115__auto__ = func_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),cljs.core.map.call(null,((function (vec__1661,seq__1662,first__1663,seq__1662__$1,func_name,definitions,full_name){
return (function (p__1664){
var vec__1665 = p__1664;
var seq__1666 = cljs.core.seq.call(null,vec__1665);
var first__1667 = cljs.core.first.call(null,seq__1666);
var seq__1666__$1 = cljs.core.next.call(null,seq__1666);
var args = first__1667;
var body = seq__1666__$1;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23115__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",(1075777968),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false),cljs.core._conj.call(null,cljs.core.List.EMPTY,"deftrack macro doesn't handle (yet) multi-arity functions")));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),body));
});})(vec__1661,seq__1662,first__1663,seq__1662__$1,func_name,definitions,full_name))
,definitions)));
}
});

gadjett.core$macros.deftrack.cljs$lang$maxFixedArity = (2);

gadjett.core$macros.deftrack.cljs$lang$applyTo = (function (seq1655){
var G__1656 = cljs.core.first.call(null,seq1655);
var seq1655__$1 = cljs.core.next.call(null,seq1655);
var G__1657 = cljs.core.first.call(null,seq1655__$1);
var seq1655__$2 = cljs.core.next.call(null,seq1655__$1);
return gadjett.core$macros.deftrack.cljs$core$IFn$_invoke$arity$variadic(G__1656,G__1657,seq1655__$2);
});

new cljs.core.Var(function(){return gadjett.core$macros.deftrack;},new cljs.core.Symbol("gadjett.core$macros","deftrack","gadjett.core$macros/deftrack",(-1634017107),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.core$macros","gadjett.core$macros",(1327646013),null),new cljs.core.Symbol(null,"deftrack","deftrack",(-2029317560),null),"gadjett/core.clj",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(39),true,(39),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null)], null)),null,(cljs.core.truth_(gadjett.core$macros.deftrack)?gadjett.core$macros.deftrack.cljs$lang$test:null)]));

gadjett.core$macros.deftrack.cljs$lang$macro = true;
