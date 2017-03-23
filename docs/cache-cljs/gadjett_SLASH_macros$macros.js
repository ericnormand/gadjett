goog.provide("gadjett.macros$macros");
/**
 * returns a symbol with the concatenation of the str values of the args
 */
(function (){
gadjett.macros$macros.symbol_several = (function gadjett$macros$macros$symbol_several(var_args){
var args__23374__auto__ = [];
var len__23372__auto___222 = arguments.length;
var i__23373__auto___223 = (0);
while(true){
if((i__23373__auto___223 < len__23372__auto___222)){
args__23374__auto__.push((arguments[i__23373__auto___223]));

var G__224 = (i__23373__auto___223 + (1));
i__23373__auto___223 = G__224;
continue;
} else {
}
break;
}

var argseq__23375__auto__ = ((((0) < args__23374__auto__.length))?(new cljs.core.IndexedSeq(args__23374__auto__.slice((0)),(0),null)):null);
return gadjett.macros$macros.symbol_several.cljs$core$IFn$_invoke$arity$variadic(argseq__23375__auto__);
}); return (
new cljs.core.Var(function(){return gadjett.macros$macros.symbol_several;},new cljs.core.Symbol("gadjett.macros$macros","symbol-several","gadjett.macros$macros/symbol-several",(-1873084971),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.macros$macros","gadjett.macros$macros",(401057286),null),new cljs.core.Symbol(null,"symbol-several","symbol-several",(-1886895634),null),"gadjett/macros.clj",(21),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"x","x",(-555367584),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(4),(4),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"returns a symbol with the concatenation of the str values of the args",(cljs.core.truth_(gadjett.macros$macros.symbol_several)?gadjett.macros$macros.symbol_several.cljs$lang$test:null)])));})()
;

gadjett.macros$macros.symbol_several.cljs$core$IFn$_invoke$arity$variadic = (function (x){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,cljs.core.str,x));
});

gadjett.macros$macros.symbol_several.cljs$lang$maxFixedArity = (0);

gadjett.macros$macros.symbol_several.cljs$lang$applyTo = (function (seq221){
return gadjett.macros$macros.symbol_several.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq221));
});

new cljs.core.Var(function(){return gadjett.macros$macros.symbol_several;},new cljs.core.Symbol("gadjett.macros$macros","symbol-several","gadjett.macros$macros/symbol-several",(-1873084971),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.macros$macros","gadjett.macros$macros",(401057286),null),new cljs.core.Symbol(null,"symbol-several","symbol-several",(-1886895634),null),"gadjett/macros.clj",(21),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"x","x",(-555367584),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(4),(4),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"returns a symbol with the concatenation of the str values of the args",(cljs.core.truth_(gadjett.macros$macros.symbol_several)?gadjett.macros$macros.symbol_several.cljs$lang$test:null)]));
(function (){
gadjett.macros$macros.disp = (function gadjett$macros$macros$disp(var_args){
var args__23374__auto__ = [];
var len__23372__auto___232 = arguments.length;
var i__23373__auto___233 = (0);
while(true){
if((i__23373__auto___233 < len__23372__auto___232)){
args__23374__auto__.push((arguments[i__23373__auto___233]));

var G__234 = (i__23373__auto___233 + (1));
i__23373__auto___233 = G__234;
continue;
} else {
}
break;
}

var argseq__23375__auto__ = ((((2) < args__23374__auto__.length))?(new cljs.core.IndexedSeq(args__23374__auto__.slice((2)),(0),null)):null);
return gadjett.macros$macros.disp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23375__auto__);
}); return (
new cljs.core.Var(function(){return gadjett.macros$macros.disp;},new cljs.core.Symbol("gadjett.macros$macros","disp","gadjett.macros$macros/disp",(-2014444012),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.macros$macros","gadjett.macros$macros",(401057286),null),new cljs.core.Symbol(null,"disp","disp",(-407012807),null),"gadjett/macros.clj",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(9),true,(9),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),null,(cljs.core.truth_(gadjett.macros$macros.disp)?gadjett.macros$macros.disp.cljs$lang$test:null)])));})()
;

gadjett.macros$macros.disp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
return cljs.core.cons.call(null,new cljs.core.Symbol("gadjett.macros","symbol-several","gadjett.macros/symbol-several",(-1159153538),null),(function (){var iter__22913__auto__ = (function gadjett$macros$macros$iter__228(s__229){
return (new cljs.core.LazySeq(null,(function (){
var s__229__$1 = s__229;
while(true){
var temp__19244__auto__ = cljs.core.seq.call(null,s__229__$1);
if(temp__19244__auto__){
var s__229__$2 = temp__19244__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__229__$2)){
var c__22911__auto__ = cljs.core.chunk_first.call(null,s__229__$2);
var size__22912__auto__ = cljs.core.count.call(null,c__22911__auto__);
var b__231 = cljs.core.chunk_buffer.call(null,size__22912__auto__);
if((function (){var i__230 = (0);
while(true){
if((i__230 < size__22912__auto__)){
var form = cljs.core._nth.call(null,c__22911__auto__,i__230);
cljs.core.chunk_append.call(null,b__231,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null)),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23115__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," => "),(function (){var x__23115__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"\n"))));

var G__235 = (i__230 + (1));
i__230 = G__235;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__231),gadjett$macros$macros$iter__228.call(null,cljs.core.chunk_rest.call(null,s__229__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__231),null);
}
} else {
var form = cljs.core.first.call(null,s__229__$2);
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null)),(function (){var x__23115__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23115__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," => "),(function (){var x__23115__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23115__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"\n"))),gadjett$macros$macros$iter__228.call(null,cljs.core.rest.call(null,s__229__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__22913__auto__.call(null,forms);
})());
});

gadjett.macros$macros.disp.cljs$lang$maxFixedArity = (2);

gadjett.macros$macros.disp.cljs$lang$applyTo = (function (seq225){
var G__226 = cljs.core.first.call(null,seq225);
var seq225__$1 = cljs.core.next.call(null,seq225);
var G__227 = cljs.core.first.call(null,seq225__$1);
var seq225__$2 = cljs.core.next.call(null,seq225__$1);
return gadjett.macros$macros.disp.cljs$core$IFn$_invoke$arity$variadic(G__226,G__227,seq225__$2);
});

new cljs.core.Var(function(){return gadjett.macros$macros.disp;},new cljs.core.Symbol("gadjett.macros$macros","disp","gadjett.macros$macros/disp",(-2014444012),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.macros$macros","gadjett.macros$macros",(401057286),null),new cljs.core.Symbol(null,"disp","disp",(-407012807),null),"gadjett/macros.clj",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(9),true,(9),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),null,(cljs.core.truth_(gadjett.macros$macros.disp)?gadjett.macros$macros.disp.cljs$lang$test:null)]));

gadjett.macros$macros.disp.cljs$lang$macro = true;
