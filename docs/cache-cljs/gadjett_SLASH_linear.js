goog.provide("gadjett.linear");
(function (){
gadjett.linear.highest_below_y = (function gadjett$linear$highest_below_y(m,v){
return cljs.core.second.call(null,cljs.core.last.call(null,cljs.core.sort_by.call(null,cljs.core.first,cljs.core.group_by.call(null,cljs.core.second,cljs.core.filter.call(null,(function (p__42){
var vec__43 = p__42;
var x = cljs.core.nth.call(null,vec__43,(0),null);
var y = cljs.core.nth.call(null,vec__43,(1),null);
return (y <= v);
}),m)))));
}); return (
new cljs.core.Var(function(){return gadjett.linear.highest_below_y;},new cljs.core.Symbol("gadjett.linear","highest-below-y","gadjett.linear/highest-below-y",(1719236491),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.linear","gadjett.linear",(-872230395),null),new cljs.core.Symbol(null,"highest-below-y","highest-below-y",(-1743201219),null),"gadjett/linear.cljc",(22),(1),(3),(3),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),null,(cljs.core.truth_(gadjett.linear.highest_below_y)?gadjett.linear.highest_below_y.cljs$lang$test:null)])));})()
;
(function (){
gadjett.linear.lowest_above_y = (function gadjett$linear$lowest_above_y(m,v){
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.sort_by.call(null,cljs.core.first,cljs.core.group_by.call(null,cljs.core.second,cljs.core.filter.call(null,(function (p__50){
var vec__51 = p__50;
var x = cljs.core.nth.call(null,vec__51,(0),null);
var y = cljs.core.nth.call(null,vec__51,(1),null);
return (y >= v);
}),m)))));
}); return (
new cljs.core.Var(function(){return gadjett.linear.lowest_above_y;},new cljs.core.Symbol("gadjett.linear","lowest-above-y","gadjett.linear/lowest-above-y",(-678539222),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.linear","gadjett.linear",(-872230395),null),new cljs.core.Symbol(null,"lowest-above-y","lowest-above-y",(505415316),null),"gadjett/linear.cljc",(21),(1),(6),(6),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),null,(cljs.core.truth_(gadjett.linear.lowest_above_y)?gadjett.linear.lowest_above_y.cljs$lang$test:null)])));})()
;
(function (){
gadjett.linear.highest_below_x = (function gadjett$linear$highest_below_x(m,v){
return cljs.core.second.call(null,cljs.core.last.call(null,cljs.core.sort_by.call(null,cljs.core.first,cljs.core.group_by.call(null,cljs.core.first,cljs.core.filter.call(null,(function (p__58){
var vec__59 = p__58;
var x = cljs.core.nth.call(null,vec__59,(0),null);
var y = cljs.core.nth.call(null,vec__59,(1),null);
return (x <= v);
}),m)))));
}); return (
new cljs.core.Var(function(){return gadjett.linear.highest_below_x;},new cljs.core.Symbol("gadjett.linear","highest-below-x","gadjett.linear/highest-below-x",(-203805291),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.linear","gadjett.linear",(-872230395),null),new cljs.core.Symbol(null,"highest-below-x","highest-below-x",(695991143),null),"gadjett/linear.cljc",(22),(1),(9),(9),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),null,(cljs.core.truth_(gadjett.linear.highest_below_x)?gadjett.linear.highest_below_x.cljs$lang$test:null)])));})()
;
(function (){
gadjett.linear.lowest_above_x = (function gadjett$linear$lowest_above_x(m,v){
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.sort_by.call(null,cljs.core.first,cljs.core.group_by.call(null,cljs.core.first,cljs.core.filter.call(null,(function (p__66){
var vec__67 = p__66;
var x = cljs.core.nth.call(null,vec__67,(0),null);
var y = cljs.core.nth.call(null,vec__67,(1),null);
return (x >= v);
}),m)))));
}); return (
new cljs.core.Var(function(){return gadjett.linear.lowest_above_x;},new cljs.core.Symbol("gadjett.linear","lowest-above-x","gadjett.linear/lowest-above-x",(-1000687226),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.linear","gadjett.linear",(-872230395),null),new cljs.core.Symbol(null,"lowest-above-x","lowest-above-x",(498387984),null),"gadjett/linear.cljc",(21),(1),(12),(12),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),null,(cljs.core.truth_(gadjett.linear.lowest_above_x)?gadjett.linear.lowest_above_x.cljs$lang$test:null)])));})()
;
(function (){
gadjett.linear.find_keys_with_values_in = (function gadjett$linear$find_keys_with_values_in(m,s){
return cljs.core.filter.call(null,cljs.core.comp.call(null,s,m),cljs.core.keys.call(null,m));
}); return (
new cljs.core.Var(function(){return gadjett.linear.find_keys_with_values_in;},new cljs.core.Symbol("gadjett.linear","find-keys-with-values-in","gadjett.linear/find-keys-with-values-in",(1711391947),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.linear","gadjett.linear",(-872230395),null),new cljs.core.Symbol(null,"find-keys-with-values-in","find-keys-with-values-in",(815935357),null),"gadjett/linear.cljc",(31),(1),(16),(16),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),null,(cljs.core.truth_(gadjett.linear.find_keys_with_values_in)?gadjett.linear.find_keys_with_values_in.cljs$lang$test:null)])));})()
;
(function (){
gadjett.linear.find_keys_with_value = (function gadjett$linear$find_keys_with_value(m,v){
return gadjett.linear.find_keys_with_values_in.call(null,m,cljs.core.PersistentHashSet.createAsIfByAssoc([v], true));
}); return (
new cljs.core.Var(function(){return gadjett.linear.find_keys_with_value;},new cljs.core.Symbol("gadjett.linear","find-keys-with-value","gadjett.linear/find-keys-with-value",(-1658039387),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.linear","gadjett.linear",(-872230395),null),new cljs.core.Symbol(null,"find-keys-with-value","find-keys-with-value",(1389290803),null),"gadjett/linear.cljc",(27),(1),(19),(19),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),null,(cljs.core.truth_(gadjett.linear.find_keys_with_value)?gadjett.linear.find_keys_with_value.cljs$lang$test:null)])));})()
;
(function (){
gadjett.linear.linear_y = (function gadjett$linear$linear_y(x,x1,y1,x2,y2){
return (y1 + (((y2 - y1) * (x - x1)) / (x2 - x1)));
}); return (
new cljs.core.Var(function(){return gadjett.linear.linear_y;},new cljs.core.Symbol("gadjett.linear","linear-y","gadjett.linear/linear-y",(407794745),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.linear","gadjett.linear",(-872230395),null),new cljs.core.Symbol(null,"linear-y","linear-y",(1323836327),null),"gadjett/linear.cljc",(15),(1),(22),(22),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"x1","x1",(-223390720),null),new cljs.core.Symbol(null,"y1","y1",(-2065312303),null),new cljs.core.Symbol(null,"x2","x2",(278018052),null),new cljs.core.Symbol(null,"y2","y2",(921840226),null)], null)),null,(cljs.core.truth_(gadjett.linear.linear_y)?gadjett.linear.linear_y.cljs$lang$test:null)])));})()
;
(function (){
gadjett.linear.log_x_linear_y = (function gadjett$linear$log_x_linear_y(x,x1,y1,x2,y2){
return (y1 + (((y2 - y1) * (Math.log(x) - Math.log(x1))) / (Math.log(x2) - Math.log(x1))));
}); return (
new cljs.core.Var(function(){return gadjett.linear.log_x_linear_y;},new cljs.core.Symbol("gadjett.linear","log-x-linear-y","gadjett.linear/log-x-linear-y",(333001738),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.linear","gadjett.linear",(-872230395),null),new cljs.core.Symbol(null,"log-x-linear-y","log-x-linear-y",(-646225420),null),"gadjett/linear.cljc",(21),(1),(25),(25),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"x1","x1",(-223390720),null),new cljs.core.Symbol(null,"y1","y1",(-2065312303),null),new cljs.core.Symbol(null,"x2","x2",(278018052),null),new cljs.core.Symbol(null,"y2","y2",(921840226),null)], null)),null,(cljs.core.truth_(gadjett.linear.log_x_linear_y)?gadjett.linear.log_x_linear_y.cljs$lang$test:null)])));})()
;
(function (){
gadjett.linear.linear_y_func = (function gadjett$linear$linear_y_func(p__70){
var map__74 = p__70;
var map__74__$1 = ((((!((map__74 == null)))?((((map__74.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74):map__74);
var axes = map__74__$1;
var x = cljs.core.get.call(null,map__74__$1,new cljs.core.Keyword(null,"x","x",(2099068185)));
var y = cljs.core.get.call(null,map__74__$1,new cljs.core.Keyword(null,"y","y",(-1757859776)));
var G__76 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linear","linear",(872268697)),new cljs.core.Keyword(null,"linear","linear",(872268697))], null),G__76)){
return gadjett.linear.linear_y;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"log","log",(-1595516004)),new cljs.core.Keyword(null,"linear","linear",(872268697))], null),G__76)){
return gadjett.linear.log_x_linear_y;
} else {
return gadjett.linear.linear_y;

}
}
}); return (
new cljs.core.Var(function(){return gadjett.linear.linear_y_func;},new cljs.core.Symbol("gadjett.linear","linear-y-func","gadjett.linear/linear-y-func",(1600550169),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.linear","gadjett.linear",(-872230395),null),new cljs.core.Symbol(null,"linear-y-func","linear-y-func",(-1794888821),null),"gadjett/linear.cljc",(20),(1),(28),(28),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"axes","axes",(-683569329),null)], null)], null)),null,(cljs.core.truth_(gadjett.linear.linear_y_func)?gadjett.linear.linear_y_func.cljs$lang$test:null)])));})()
;
(function (){
gadjett.linear.interpolate_linear_y = (function gadjett$linear$interpolate_linear_y(var_args){
var args__23374__auto__ = [];
var len__23372__auto___89 = arguments.length;
var i__23373__auto___90 = (0);
while(true){
if((i__23373__auto___90 < len__23372__auto___89)){
args__23374__auto__.push((arguments[i__23373__auto___90]));

var G__91 = (i__23373__auto___90 + (1));
i__23373__auto___90 = G__91;
continue;
} else {
}
break;
}

var argseq__23375__auto__ = ((((2) < args__23374__auto__.length))?(new cljs.core.IndexedSeq(args__23374__auto__.slice((2)),(0),null)):null);
return gadjett.linear.interpolate_linear_y.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23375__auto__);
}); return (
new cljs.core.Var(function(){return gadjett.linear.interpolate_linear_y;},new cljs.core.Symbol("gadjett.linear","interpolate-linear-y","gadjett.linear/interpolate-linear-y",(221772891),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.linear","gadjett.linear",(-872230395),null),new cljs.core.Symbol(null,"interpolate-linear-y","interpolate-linear-y",(1423267529),null),"gadjett/linear.cljc",(27),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"interpolate?","interpolate?",(1217375241),null),new cljs.core.Symbol(null,"axes","axes",(-683569329),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"interpolate?","interpolate?",(1217375241),null),cljs.core.list(new cljs.core.Symbol(null,"constantly","constantly",(-271143939),null),true),new cljs.core.Symbol(null,"axes","axes",(-683569329),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",(2099068185)),new cljs.core.Keyword(null,"linear","linear",(872268697)),new cljs.core.Keyword(null,"y","y",(-1757859776)),new cljs.core.Keyword(null,"linear","linear",(872268697))], null)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"interpolate?","interpolate?",(1217375241),null),new cljs.core.Symbol(null,"axes","axes",(-683569329),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"interpolate?","interpolate?",(1217375241),null),cljs.core.list(new cljs.core.Symbol(null,"constantly","constantly",(-271143939),null),true),new cljs.core.Symbol(null,"axes","axes",(-683569329),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",(2099068185)),new cljs.core.Keyword(null,"linear","linear",(872268697)),new cljs.core.Keyword(null,"y","y",(-1757859776)),new cljs.core.Keyword(null,"linear","linear",(872268697))], null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(35),(35),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"interpolate?","interpolate?",(1217375241),null),new cljs.core.Symbol(null,"axes","axes",(-683569329),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"interpolate?","interpolate?",(1217375241),null),cljs.core.list(new cljs.core.Symbol(null,"constantly","constantly",(-271143939),null),true),new cljs.core.Symbol(null,"axes","axes",(-683569329),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",(2099068185)),new cljs.core.Keyword(null,"linear","linear",(872268697)),new cljs.core.Keyword(null,"y","y",(-1757859776)),new cljs.core.Keyword(null,"linear","linear",(872268697))], null)], null)], null)], null)),null,(cljs.core.truth_(gadjett.linear.interpolate_linear_y)?gadjett.linear.interpolate_linear_y.cljs$lang$test:null)])));})()
;

gadjett.linear.interpolate_linear_y.cljs$core$IFn$_invoke$arity$variadic = (function (m,x,p__80){
var map__81 = p__80;
var map__81__$1 = ((((!((map__81 == null)))?((((map__81.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81):map__81);
var interpolate_QMARK_ = cljs.core.get.call(null,map__81__$1,new cljs.core.Keyword(null,"interpolate?","interpolate?",(-423156286)),cljs.core.constantly.call(null,true));
var axes = cljs.core.get.call(null,map__81__$1,new cljs.core.Keyword(null,"axes","axes",(1970866440)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",(2099068185)),new cljs.core.Keyword(null,"linear","linear",(872268697)),new cljs.core.Keyword(null,"y","y",(-1757859776)),new cljs.core.Keyword(null,"linear","linear",(872268697))], null));
var or__20262__auto__ = cljs.core.get.call(null,m,x);
if(cljs.core.truth_(or__20262__auto__)){
return or__20262__auto__;
} else {
var vec__83 = cljs.core.last.call(null,cljs.core.sort.call(null,gadjett.linear.highest_below_x.call(null,m,x)));
var x_below = cljs.core.nth.call(null,vec__83,(0),null);
var y_below = cljs.core.nth.call(null,vec__83,(1),null);
var vec__86 = cljs.core.first.call(null,cljs.core.sort.call(null,gadjett.linear.lowest_above_x.call(null,m,x)));
var x_above = cljs.core.nth.call(null,vec__86,(0),null);
var y_above = cljs.core.nth.call(null,vec__86,(1),null);
if(cljs.core.truth_((function (){var and__20156__auto__ = x_below;
if(cljs.core.truth_(and__20156__auto__)){
var and__20156__auto____$1 = x_above;
if(cljs.core.truth_(and__20156__auto____$1)){
return interpolate_QMARK_.call(null,x_below,x_above);
} else {
return and__20156__auto____$1;
}
} else {
return and__20156__auto__;
}
})())){
return gadjett.linear.linear_y_func.call(null,axes).call(null,x,x_below,y_below,x_above,y_above);
} else {
return null;
}
}
});

gadjett.linear.interpolate_linear_y.cljs$lang$maxFixedArity = (2);

gadjett.linear.interpolate_linear_y.cljs$lang$applyTo = (function (seq77){
var G__78 = cljs.core.first.call(null,seq77);
var seq77__$1 = cljs.core.next.call(null,seq77);
var G__79 = cljs.core.first.call(null,seq77__$1);
var seq77__$2 = cljs.core.next.call(null,seq77__$1);
return gadjett.linear.interpolate_linear_y.cljs$core$IFn$_invoke$arity$variadic(G__78,G__79,seq77__$2);
});

new cljs.core.Var(function(){return gadjett.linear.interpolate_linear_y;},new cljs.core.Symbol("gadjett.linear","interpolate-linear-y","gadjett.linear/interpolate-linear-y",(221772891),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.linear","gadjett.linear",(-872230395),null),new cljs.core.Symbol(null,"interpolate-linear-y","interpolate-linear-y",(1423267529),null),"gadjett/linear.cljc",(27),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"interpolate?","interpolate?",(1217375241),null),new cljs.core.Symbol(null,"axes","axes",(-683569329),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"interpolate?","interpolate?",(1217375241),null),cljs.core.list(new cljs.core.Symbol(null,"constantly","constantly",(-271143939),null),true),new cljs.core.Symbol(null,"axes","axes",(-683569329),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",(2099068185)),new cljs.core.Keyword(null,"linear","linear",(872268697)),new cljs.core.Keyword(null,"y","y",(-1757859776)),new cljs.core.Keyword(null,"linear","linear",(872268697))], null)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"interpolate?","interpolate?",(1217375241),null),new cljs.core.Symbol(null,"axes","axes",(-683569329),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"interpolate?","interpolate?",(1217375241),null),cljs.core.list(new cljs.core.Symbol(null,"constantly","constantly",(-271143939),null),true),new cljs.core.Symbol(null,"axes","axes",(-683569329),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",(2099068185)),new cljs.core.Keyword(null,"linear","linear",(872268697)),new cljs.core.Keyword(null,"y","y",(-1757859776)),new cljs.core.Keyword(null,"linear","linear",(872268697))], null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(35),(35),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"interpolate?","interpolate?",(1217375241),null),new cljs.core.Symbol(null,"axes","axes",(-683569329),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"interpolate?","interpolate?",(1217375241),null),cljs.core.list(new cljs.core.Symbol(null,"constantly","constantly",(-271143939),null),true),new cljs.core.Symbol(null,"axes","axes",(-683569329),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",(2099068185)),new cljs.core.Keyword(null,"linear","linear",(872268697)),new cljs.core.Keyword(null,"y","y",(-1757859776)),new cljs.core.Keyword(null,"linear","linear",(872268697))], null)], null)], null)], null)),null,(cljs.core.truth_(gadjett.linear.interpolate_linear_y)?gadjett.linear.interpolate_linear_y.cljs$lang$test:null)]));
(function (){
gadjett.linear.linear_x = (function gadjett$linear$linear_x(y,x1,y1,x2,y2){
return (x1 + (((x2 - x1) * (y - y1)) / (y2 - y1)));
}); return (
new cljs.core.Var(function(){return gadjett.linear.linear_x;},new cljs.core.Symbol("gadjett.linear","linear-x","gadjett.linear/linear-x",(-431052786),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.linear","gadjett.linear",(-872230395),null),new cljs.core.Symbol(null,"linear-x","linear-x",(-1138703716),null),"gadjett/linear.cljc",(15),(1),(43),(43),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.Symbol(null,"x1","x1",(-223390720),null),new cljs.core.Symbol(null,"y1","y1",(-2065312303),null),new cljs.core.Symbol(null,"x2","x2",(278018052),null),new cljs.core.Symbol(null,"y2","y2",(921840226),null)], null)),null,(cljs.core.truth_(gadjett.linear.linear_x)?gadjett.linear.linear_x.cljs$lang$test:null)])));})()
;
(function (){
gadjett.linear.linear_x_func = (function gadjett$linear$linear_x_func(p__92){
var map__96 = p__92;
var map__96__$1 = ((((!((map__96 == null)))?((((map__96.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__96.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__96):map__96);
var axes = map__96__$1;
var x = cljs.core.get.call(null,map__96__$1,new cljs.core.Keyword(null,"x","x",(2099068185)));
var y = cljs.core.get.call(null,map__96__$1,new cljs.core.Keyword(null,"y","y",(-1757859776)));
var G__98 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linear","linear",(872268697)),new cljs.core.Keyword(null,"linear","linear",(872268697))], null),G__98)){
return gadjett.linear.linear_x;
} else {
return gadjett.linear.linear_x;

}
}); return (
new cljs.core.Var(function(){return gadjett.linear.linear_x_func;},new cljs.core.Symbol("gadjett.linear","linear-x-func","gadjett.linear/linear-x-func",(-1061265730),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.linear","gadjett.linear",(-872230395),null),new cljs.core.Symbol(null,"linear-x-func","linear-x-func",(-1977620216),null),"gadjett/linear.cljc",(20),(1),(46),(46),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"axes","axes",(-683569329),null)], null)], null)),null,(cljs.core.truth_(gadjett.linear.linear_x_func)?gadjett.linear.linear_x_func.cljs$lang$test:null)])));})()
;
(function (){
gadjett.linear.below_and_above_y = (function gadjett$linear$below_and_above_y(y,p__99,p__100){
var vec__107 = p__99;
var x1 = cljs.core.nth.call(null,vec__107,(0),null);
var y1 = cljs.core.nth.call(null,vec__107,(1),null);
var vec__110 = p__100;
var x2 = cljs.core.nth.call(null,vec__110,(0),null);
var y2 = cljs.core.nth.call(null,vec__110,(1),null);
if((((y1 < y)) && ((y < y2))) || (((y1 > y)) && ((y > y2)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2], null)], null);
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return gadjett.linear.below_and_above_y;},new cljs.core.Symbol("gadjett.linear","below-and-above-y","gadjett.linear/below-and-above-y",(-137746734),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.linear","gadjett.linear",(-872230395),null),new cljs.core.Symbol(null,"below-and-above-y","below-and-above-y",(-920366212),null),"gadjett/linear.cljc",(24),(1),(52),(52),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x1","x1",(-223390720),null),new cljs.core.Symbol(null,"y1","y1",(-2065312303),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x2","x2",(278018052),null),new cljs.core.Symbol(null,"y2","y2",(921840226),null)], null)], null)),null,(cljs.core.truth_(gadjett.linear.below_and_above_y)?gadjett.linear.below_and_above_y.cljs$lang$test:null)])));})()
;
(function (){
gadjett.linear.find_below_and_above_y = (function gadjett$linear$find_below_and_above_y(m,y){
var $ = cljs.core.map.call(null,cljs.core.vec,m);
var $__$1 = cljs.core.sort_by.call(null,cljs.core.first,$);
var $__$2 = cljs.core.map.call(null,cljs.core.partial.call(null,gadjett.linear.below_and_above_y,y),$__$1,cljs.core.rest.call(null,$__$1));
var $__$3 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,$__$2);
return $__$3;
}); return (
new cljs.core.Var(function(){return gadjett.linear.find_below_and_above_y;},new cljs.core.Symbol("gadjett.linear","find-below-and-above-y","gadjett.linear/find-below-and-above-y",(-1739125293),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.linear","gadjett.linear",(-872230395),null),new cljs.core.Symbol(null,"find-below-and-above-y","find-below-and-above-y",(-1045079995),null),"gadjett/linear.cljc",(29),(1),(55),(55),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"y","y",(-117328249),null)], null)),null,(cljs.core.truth_(gadjett.linear.find_below_and_above_y)?gadjett.linear.find_below_and_above_y.cljs$lang$test:null)])));})()
;
(function (){
gadjett.linear.calc_interpolated_values = (function gadjett$linear$calc_interpolated_values(m,y,interpolate_QMARK_,axes){
var $ = (function (p__123){
var vec__124 = p__123;
var vec__127 = cljs.core.nth.call(null,vec__124,(0),null);
var x_below = cljs.core.nth.call(null,vec__127,(0),null);
var y_below = cljs.core.nth.call(null,vec__127,(1),null);
var vec__130 = cljs.core.nth.call(null,vec__124,(1),null);
var x_above = cljs.core.nth.call(null,vec__130,(0),null);
var y_above = cljs.core.nth.call(null,vec__130,(1),null);
if(cljs.core.truth_((function (){var and__20156__auto__ = y_below;
if(cljs.core.truth_(and__20156__auto__)){
var and__20156__auto____$1 = y_above;
if(cljs.core.truth_(and__20156__auto____$1)){
return interpolate_QMARK_.call(null,y_below,y_above);
} else {
return and__20156__auto____$1;
}
} else {
return and__20156__auto__;
}
})())){
return gadjett.linear.linear_x_func.call(null,axes).call(null,y,x_below,y_below,x_above,y_above);
} else {
return null;
}
});
var $__$1 = cljs.core.keep.call(null,$,gadjett.linear.find_below_and_above_y.call(null,m,y));
return $__$1;
}); return (
new cljs.core.Var(function(){return gadjett.linear.calc_interpolated_values;},new cljs.core.Symbol("gadjett.linear","calc-interpolated-values","gadjett.linear/calc-interpolated-values",(1783878378),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.linear","gadjett.linear",(-872230395),null),new cljs.core.Symbol(null,"calc-interpolated-values","calc-interpolated-values",(-1607399400),null),"gadjett/linear.cljc",(31),(1),(62),(62),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.Symbol(null,"interpolate?","interpolate?",(1217375241),null),new cljs.core.Symbol(null,"axes","axes",(-683569329),null)], null)),null,(cljs.core.truth_(gadjett.linear.calc_interpolated_values)?gadjett.linear.calc_interpolated_values.cljs$lang$test:null)])));})()
;
(function (){
gadjett.linear.min_coll = (function gadjett$linear$min_coll(coll){
if(cljs.core.empty_QMARK_.call(null,coll)){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.min,coll);
}
}); return (
new cljs.core.Var(function(){return gadjett.linear.min_coll;},new cljs.core.Symbol("gadjett.linear","min-coll","gadjett.linear/min-coll",(-663771677),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"gadjett.linear","gadjett.linear",(-872230395),null),new cljs.core.Symbol(null,"min-coll","min-coll",(248384369),null),"gadjett/linear.cljc",(16),(1),(72),(72),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),null,(cljs.core.truth_(gadjett.linear.min_coll)?gadjett.linear.min_coll.cljs$lang$test:null)])));})()
;
/**
 * Returns the interpolated x for a given y acording to the select-func thats passed
 * 
 * - `:interpolate?` -  a predicate for deciding eather to calc th interpolation or not.
 * -   `:axes` -  a map that defines what are the axes scales
 * -   `:select-func` - what functionality to use if there are multiple interpolated values
 * 
 * ~~~klipse
 *   (interpolate-linear-x {10 30 20 50 70 60} 32)
 * ~~~
 *   
 */
(function (){
gadjett.linear.interpolate_linear_x = (function gadjett$linear$interpolate_linear_x(var_args){
var args__23374__auto__ = [];
var len__23372__auto___139 = arguments.length;
var i__23373__auto___140 = (0);
while(true){
if((i__23373__auto___140 < len__23372__auto___139)){
args__23374__auto__.push((arguments[i__23373__auto___140]));

var G__141 = (i__23373__auto___140 + (1));
i__23373__auto___140 = G__141;
continue;
} else {
}
break;
}

var argseq__23375__auto__ = ((((2) < args__23374__auto__.length))?(new cljs.core.IndexedSeq(args__23374__auto__.slice((2)),(0),null)):null);
return gadjett.linear.interpolate_linear_x.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23375__auto__);
}); return (
new cljs.core.Var(function(){return gadjett.linear.interpolate_linear_x;},new cljs.core.Symbol("gadjett.linear","interpolate-linear-x","gadjett.linear/interpolate-linear-x",(-1756486354),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.linear","gadjett.linear",(-872230395),null),new cljs.core.Symbol(null,"interpolate-linear-x","interpolate-linear-x",(-286761284),null),"gadjett/linear.cljc",(27),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"interpolate?","interpolate?",(1217375241),null),new cljs.core.Symbol(null,"axes","axes",(-683569329),null),new cljs.core.Symbol(null,"select-func","select-func",(-65500283),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"interpolate?","interpolate?",(1217375241),null),cljs.core.list(new cljs.core.Symbol(null,"constantly","constantly",(-271143939),null),true),new cljs.core.Symbol(null,"axes","axes",(-683569329),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",(2099068185)),new cljs.core.Keyword(null,"linear","linear",(872268697)),new cljs.core.Keyword(null,"y","y",(-1757859776)),new cljs.core.Keyword(null,"linear","linear",(872268697))], null),new cljs.core.Symbol(null,"select-func","select-func",(-65500283),null),new cljs.core.Symbol(null,"min-coll","min-coll",(248384369),null)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"interpolate?","interpolate?",(1217375241),null),new cljs.core.Symbol(null,"axes","axes",(-683569329),null),new cljs.core.Symbol(null,"select-func","select-func",(-65500283),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"interpolate?","interpolate?",(1217375241),null),cljs.core.list(new cljs.core.Symbol(null,"constantly","constantly",(-271143939),null),true),new cljs.core.Symbol(null,"axes","axes",(-683569329),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",(2099068185)),new cljs.core.Keyword(null,"linear","linear",(872268697)),new cljs.core.Keyword(null,"y","y",(-1757859776)),new cljs.core.Keyword(null,"linear","linear",(872268697))], null),new cljs.core.Symbol(null,"select-func","select-func",(-65500283),null),new cljs.core.Symbol(null,"min-coll","min-coll",(248384369),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(76),(76),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"interpolate?","interpolate?",(1217375241),null),new cljs.core.Symbol(null,"axes","axes",(-683569329),null),new cljs.core.Symbol(null,"select-func","select-func",(-65500283),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"interpolate?","interpolate?",(1217375241),null),cljs.core.list(new cljs.core.Symbol(null,"constantly","constantly",(-271143939),null),true),new cljs.core.Symbol(null,"axes","axes",(-683569329),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",(2099068185)),new cljs.core.Keyword(null,"linear","linear",(872268697)),new cljs.core.Keyword(null,"y","y",(-1757859776)),new cljs.core.Keyword(null,"linear","linear",(872268697))], null),new cljs.core.Symbol(null,"select-func","select-func",(-65500283),null),new cljs.core.Symbol(null,"min-coll","min-coll",(248384369),null)], null)], null)], null)),"Returns the interpolated x for a given y acording to the select-func thats passed\n\n- `:interpolate?` -  a predicate for deciding eather to calc th interpolation or not.\n-   `:axes` -  a map that defines what are the axes scales\n-   `:select-func` - what functionality to use if there are multiple interpolated values\n\n~~~klipse\n  (interpolate-linear-x {10 30 20 50 70 60} 32)\n~~~\n  ",(cljs.core.truth_(gadjett.linear.interpolate_linear_x)?gadjett.linear.interpolate_linear_x.cljs$lang$test:null)])));})()
;

gadjett.linear.interpolate_linear_x.cljs$core$IFn$_invoke$arity$variadic = (function (m,y,p__136){
var map__137 = p__136;
var map__137__$1 = ((((!((map__137 == null)))?((((map__137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__137.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__137):map__137);
var interpolate_QMARK_ = cljs.core.get.call(null,map__137__$1,new cljs.core.Keyword(null,"interpolate?","interpolate?",(-423156286)),cljs.core.constantly.call(null,true));
var axes = cljs.core.get.call(null,map__137__$1,new cljs.core.Keyword(null,"axes","axes",(1970866440)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",(2099068185)),new cljs.core.Keyword(null,"linear","linear",(872268697)),new cljs.core.Keyword(null,"y","y",(-1757859776)),new cljs.core.Keyword(null,"linear","linear",(872268697))], null));
var select_func = cljs.core.get.call(null,map__137__$1,new cljs.core.Keyword(null,"select-func","select-func",(-1706031810)),gadjett.linear.min_coll);
var values = gadjett.linear.find_keys_with_value.call(null,m,y);
var interpolated_values = gadjett.linear.calc_interpolated_values.call(null,m,y,interpolate_QMARK_,axes);
return select_func.call(null,cljs.core.concat.call(null,values,interpolated_values));
});

gadjett.linear.interpolate_linear_x.cljs$lang$maxFixedArity = (2);

gadjett.linear.interpolate_linear_x.cljs$lang$applyTo = (function (seq133){
var G__134 = cljs.core.first.call(null,seq133);
var seq133__$1 = cljs.core.next.call(null,seq133);
var G__135 = cljs.core.first.call(null,seq133__$1);
var seq133__$2 = cljs.core.next.call(null,seq133__$1);
return gadjett.linear.interpolate_linear_x.cljs$core$IFn$_invoke$arity$variadic(G__134,G__135,seq133__$2);
});

new cljs.core.Var(function(){return gadjett.linear.interpolate_linear_x;},new cljs.core.Symbol("gadjett.linear","interpolate-linear-x","gadjett.linear/interpolate-linear-x",(-1756486354),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.linear","gadjett.linear",(-872230395),null),new cljs.core.Symbol(null,"interpolate-linear-x","interpolate-linear-x",(-286761284),null),"gadjett/linear.cljc",(27),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"interpolate?","interpolate?",(1217375241),null),new cljs.core.Symbol(null,"axes","axes",(-683569329),null),new cljs.core.Symbol(null,"select-func","select-func",(-65500283),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"interpolate?","interpolate?",(1217375241),null),cljs.core.list(new cljs.core.Symbol(null,"constantly","constantly",(-271143939),null),true),new cljs.core.Symbol(null,"axes","axes",(-683569329),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",(2099068185)),new cljs.core.Keyword(null,"linear","linear",(872268697)),new cljs.core.Keyword(null,"y","y",(-1757859776)),new cljs.core.Keyword(null,"linear","linear",(872268697))], null),new cljs.core.Symbol(null,"select-func","select-func",(-65500283),null),new cljs.core.Symbol(null,"min-coll","min-coll",(248384369),null)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"interpolate?","interpolate?",(1217375241),null),new cljs.core.Symbol(null,"axes","axes",(-683569329),null),new cljs.core.Symbol(null,"select-func","select-func",(-65500283),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"interpolate?","interpolate?",(1217375241),null),cljs.core.list(new cljs.core.Symbol(null,"constantly","constantly",(-271143939),null),true),new cljs.core.Symbol(null,"axes","axes",(-683569329),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",(2099068185)),new cljs.core.Keyword(null,"linear","linear",(872268697)),new cljs.core.Keyword(null,"y","y",(-1757859776)),new cljs.core.Keyword(null,"linear","linear",(872268697))], null),new cljs.core.Symbol(null,"select-func","select-func",(-65500283),null),new cljs.core.Symbol(null,"min-coll","min-coll",(248384369),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(76),(76),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"interpolate?","interpolate?",(1217375241),null),new cljs.core.Symbol(null,"axes","axes",(-683569329),null),new cljs.core.Symbol(null,"select-func","select-func",(-65500283),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"interpolate?","interpolate?",(1217375241),null),cljs.core.list(new cljs.core.Symbol(null,"constantly","constantly",(-271143939),null),true),new cljs.core.Symbol(null,"axes","axes",(-683569329),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",(2099068185)),new cljs.core.Keyword(null,"linear","linear",(872268697)),new cljs.core.Keyword(null,"y","y",(-1757859776)),new cljs.core.Keyword(null,"linear","linear",(872268697))], null),new cljs.core.Symbol(null,"select-func","select-func",(-65500283),null),new cljs.core.Symbol(null,"min-coll","min-coll",(248384369),null)], null)], null)], null)),"Returns the interpolated x for a given y acording to the select-func thats passed\n\n- `:interpolate?` -  a predicate for deciding eather to calc th interpolation or not.\n-   `:axes` -  a map that defines what are the axes scales\n-   `:select-func` - what functionality to use if there are multiple interpolated values\n\n~~~klipse\n  (interpolate-linear-x {10 30 20 50 70 60} 32)\n~~~\n  ",(cljs.core.truth_(gadjett.linear.interpolate_linear_x)?gadjett.linear.interpolate_linear_x.cljs$lang$test:null)]));
(function (){
gadjett.linear.linear_equation = (function gadjett$linear$linear_equation(x1,y1,x2,y2){
var a = ((y1 - y2) / (x1 - x2));
var b = (y1 - (a * x1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}); return (
new cljs.core.Var(function(){return gadjett.linear.linear_equation;},new cljs.core.Symbol("gadjett.linear","linear-equation","gadjett.linear/linear-equation",(2113086836),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.linear","gadjett.linear",(-872230395),null),new cljs.core.Symbol(null,"linear-equation","linear-equation",(592612994),null),"gadjett/linear.cljc",(22),(1),(94),(94),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x1","x1",(-223390720),null),new cljs.core.Symbol(null,"y1","y1",(-2065312303),null),new cljs.core.Symbol(null,"x2","x2",(278018052),null),new cljs.core.Symbol(null,"y2","y2",(921840226),null)], null)),null,(cljs.core.truth_(gadjett.linear.linear_equation)?gadjett.linear.linear_equation.cljs$lang$test:null)])));})()
;
(function (){
gadjett.linear.log_x_linear_equation = (function gadjett$linear$log_x_linear_equation(x1,y1,x2,y2){
var a = ((y1 - y2) / (Math.log(x1) - Math.log(x2)));
var b = (y1 - (a * Math.log(x1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}); return (
new cljs.core.Var(function(){return gadjett.linear.log_x_linear_equation;},new cljs.core.Symbol("gadjett.linear","log-x-linear-equation","gadjett.linear/log-x-linear-equation",(-286506460),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.linear","gadjett.linear",(-872230395),null),new cljs.core.Symbol(null,"log-x-linear-equation","log-x-linear-equation",(344956854),null),"gadjett/linear.cljc",(28),(1),(99),(99),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x1","x1",(-223390720),null),new cljs.core.Symbol(null,"y1","y1",(-2065312303),null),new cljs.core.Symbol(null,"x2","x2",(278018052),null),new cljs.core.Symbol(null,"y2","y2",(921840226),null)], null)),null,(cljs.core.truth_(gadjett.linear.log_x_linear_equation)?gadjett.linear.log_x_linear_equation.cljs$lang$test:null)])));})()
;
(function (){
gadjett.linear.linear_equation_func = (function gadjett$linear$linear_equation_func(p__142){
var map__146 = p__142;
var map__146__$1 = ((((!((map__146 == null)))?((((map__146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__146):map__146);
var axes = map__146__$1;
var x = cljs.core.get.call(null,map__146__$1,new cljs.core.Keyword(null,"x","x",(2099068185)));
var y = cljs.core.get.call(null,map__146__$1,new cljs.core.Keyword(null,"y","y",(-1757859776)));
var G__148 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linear","linear",(872268697)),new cljs.core.Keyword(null,"linear","linear",(872268697))], null),G__148)){
return gadjett.linear.linear_equation;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"log","log",(-1595516004)),new cljs.core.Keyword(null,"linear","linear",(872268697))], null),G__148)){
return gadjett.linear.log_x_linear_equation;
} else {
return gadjett.linear.linear_equation;

}
}
}); return (
new cljs.core.Var(function(){return gadjett.linear.linear_equation_func;},new cljs.core.Symbol("gadjett.linear","linear-equation-func","gadjett.linear/linear-equation-func",(-1295764429),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.linear","gadjett.linear",(-872230395),null),new cljs.core.Symbol(null,"linear-equation-func","linear-equation-func",(-127768155),null),"gadjett/linear.cljc",(27),(1),(104),(104),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"axes","axes",(-683569329),null)], null)], null)),null,(cljs.core.truth_(gadjett.linear.linear_equation_func)?gadjett.linear.linear_equation_func.cljs$lang$test:null)])));})()
;
(function (){
gadjett.linear.intersection_point = (function gadjett$linear$intersection_point(a1,b1,a2,b2){
var x = ((b2 - b1) / (a1 - a2));
var y = ((a1 * x) + b1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
}); return (
new cljs.core.Var(function(){return gadjett.linear.intersection_point;},new cljs.core.Symbol("gadjett.linear","intersection-point","gadjett.linear/intersection-point",(-1632779466),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.linear","gadjett.linear",(-872230395),null),new cljs.core.Symbol(null,"intersection-point","intersection-point",(-716231004),null),"gadjett/linear.cljc",(25),(1),(111),(111),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a1","a1",(-2100654832),null),new cljs.core.Symbol(null,"b1","b1",(370494769),null),new cljs.core.Symbol(null,"a2","a2",(2065488328),null),new cljs.core.Symbol(null,"b2","b2",(-1545495255),null)], null)),null,(cljs.core.truth_(gadjett.linear.intersection_point)?gadjett.linear.intersection_point.cljs$lang$test:null)])));})()
;
(function (){
gadjett.linear.log_x_intersection_point = (function gadjett$linear$log_x_intersection_point(a1,b1,a2,b2){
var x = ((b2 - b1) / (a1 - a2));
var y = ((a1 * x) + b1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.exp(x),y], null);
}); return (
new cljs.core.Var(function(){return gadjett.linear.log_x_intersection_point;},new cljs.core.Symbol("gadjett.linear","log-x-intersection-point","gadjett.linear/log-x-intersection-point",(1666212863),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.linear","gadjett.linear",(-872230395),null),new cljs.core.Symbol(null,"log-x-intersection-point","log-x-intersection-point",(721303113),null),"gadjett/linear.cljc",(31),(1),(116),(116),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a1","a1",(-2100654832),null),new cljs.core.Symbol(null,"b1","b1",(370494769),null),new cljs.core.Symbol(null,"a2","a2",(2065488328),null),new cljs.core.Symbol(null,"b2","b2",(-1545495255),null)], null)),null,(cljs.core.truth_(gadjett.linear.log_x_intersection_point)?gadjett.linear.log_x_intersection_point.cljs$lang$test:null)])));})()
;
(function (){
gadjett.linear.intersection_point_func = (function gadjett$linear$intersection_point_func(p__149){
var map__153 = p__149;
var map__153__$1 = ((((!((map__153 == null)))?((((map__153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__153.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__153):map__153);
var axes = map__153__$1;
var x = cljs.core.get.call(null,map__153__$1,new cljs.core.Keyword(null,"x","x",(2099068185)));
var y = cljs.core.get.call(null,map__153__$1,new cljs.core.Keyword(null,"y","y",(-1757859776)));
var G__155 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linear","linear",(872268697)),new cljs.core.Keyword(null,"linear","linear",(872268697))], null),G__155)){
return gadjett.linear.intersection_point;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"log","log",(-1595516004)),new cljs.core.Keyword(null,"linear","linear",(872268697))], null),G__155)){
return gadjett.linear.log_x_intersection_point;
} else {
return gadjett.linear.intersection_point;

}
}
}); return (
new cljs.core.Var(function(){return gadjett.linear.intersection_point_func;},new cljs.core.Symbol("gadjett.linear","intersection-point-func","gadjett.linear/intersection-point-func",(-1990488468),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.linear","gadjett.linear",(-872230395),null),new cljs.core.Symbol(null,"intersection-point-func","intersection-point-func",(-738336574),null),"gadjett/linear.cljc",(30),(1),(121),(121),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"axes","axes",(-683569329),null)], null)], null)),null,(cljs.core.truth_(gadjett.linear.intersection_point_func)?gadjett.linear.intersection_point_func.cljs$lang$test:null)])));})()
;
(function (){
gadjett.linear.intersection_point_from_2_lines_points = (function gadjett$linear$intersection_point_from_2_lines_points(var_args){
var args__23374__auto__ = [];
var len__23372__auto___179 = arguments.length;
var i__23373__auto___180 = (0);
while(true){
if((i__23373__auto___180 < len__23372__auto___179)){
args__23374__auto__.push((arguments[i__23373__auto___180]));

var G__181 = (i__23373__auto___180 + (1));
i__23373__auto___180 = G__181;
continue;
} else {
}
break;
}

var argseq__23375__auto__ = ((((2) < args__23374__auto__.length))?(new cljs.core.IndexedSeq(args__23374__auto__.slice((2)),(0),null)):null);
return gadjett.linear.intersection_point_from_2_lines_points.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23375__auto__);
}); return (
new cljs.core.Var(function(){return gadjett.linear.intersection_point_from_2_lines_points;},new cljs.core.Symbol("gadjett.linear","intersection-point-from-2-lines-points","gadjett.linear/intersection-point-from-2-lines-points",(-450953282),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.linear","gadjett.linear",(-872230395),null),new cljs.core.Symbol(null,"intersection-point-from-2-lines-points","intersection-point-from-2-lines-points",(997992748),null),"gadjett/linear.cljc",(45),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ax1","ax1",(-674717403),null),new cljs.core.Symbol(null,"ay1","ay1",(-413671615),null),new cljs.core.Symbol(null,"ax2","ax2",(1894387901),null),new cljs.core.Symbol(null,"ay2","ay2",(-1849354441),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bx1","bx1",(-493059),null),new cljs.core.Symbol(null,"by1","by1",(-1082296001),null),new cljs.core.Symbol(null,"bx2","bx2",(-1776087545),null),new cljs.core.Symbol(null,"by2","by2",(1540737799),null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"axes","axes",(-683569329),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"axes","axes",(-683569329),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",(2099068185)),new cljs.core.Keyword(null,"linear","linear",(872268697)),new cljs.core.Keyword(null,"y","y",(-1757859776)),new cljs.core.Keyword(null,"linear","linear",(872268697))], null)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ax1","ax1",(-674717403),null),new cljs.core.Symbol(null,"ay1","ay1",(-413671615),null),new cljs.core.Symbol(null,"ax2","ax2",(1894387901),null),new cljs.core.Symbol(null,"ay2","ay2",(-1849354441),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bx1","bx1",(-493059),null),new cljs.core.Symbol(null,"by1","by1",(-1082296001),null),new cljs.core.Symbol(null,"bx2","bx2",(-1776087545),null),new cljs.core.Symbol(null,"by2","by2",(1540737799),null)], null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"axes","axes",(-683569329),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"axes","axes",(-683569329),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",(2099068185)),new cljs.core.Keyword(null,"linear","linear",(872268697)),new cljs.core.Keyword(null,"y","y",(-1757859776)),new cljs.core.Keyword(null,"linear","linear",(872268697))], null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(128),(128),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ax1","ax1",(-674717403),null),new cljs.core.Symbol(null,"ay1","ay1",(-413671615),null),new cljs.core.Symbol(null,"ax2","ax2",(1894387901),null),new cljs.core.Symbol(null,"ay2","ay2",(-1849354441),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bx1","bx1",(-493059),null),new cljs.core.Symbol(null,"by1","by1",(-1082296001),null),new cljs.core.Symbol(null,"bx2","bx2",(-1776087545),null),new cljs.core.Symbol(null,"by2","by2",(1540737799),null)], null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"axes","axes",(-683569329),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"axes","axes",(-683569329),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",(2099068185)),new cljs.core.Keyword(null,"linear","linear",(872268697)),new cljs.core.Keyword(null,"y","y",(-1757859776)),new cljs.core.Keyword(null,"linear","linear",(872268697))], null)], null)], null)], null)),null,(cljs.core.truth_(gadjett.linear.intersection_point_from_2_lines_points)?gadjett.linear.intersection_point_from_2_lines_points.cljs$lang$test:null)])));})()
;

gadjett.linear.intersection_point_from_2_lines_points.cljs$core$IFn$_invoke$arity$variadic = (function (p__159,p__160,p__161){
var vec__162 = p__159;
var ax1 = cljs.core.nth.call(null,vec__162,(0),null);
var ay1 = cljs.core.nth.call(null,vec__162,(1),null);
var ax2 = cljs.core.nth.call(null,vec__162,(2),null);
var ay2 = cljs.core.nth.call(null,vec__162,(3),null);
var vec__165 = p__160;
var bx1 = cljs.core.nth.call(null,vec__165,(0),null);
var by1 = cljs.core.nth.call(null,vec__165,(1),null);
var bx2 = cljs.core.nth.call(null,vec__165,(2),null);
var by2 = cljs.core.nth.call(null,vec__165,(3),null);
var map__168 = p__161;
var map__168__$1 = ((((!((map__168 == null)))?((((map__168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__168.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__168):map__168);
var axes = cljs.core.get.call(null,map__168__$1,new cljs.core.Keyword(null,"axes","axes",(1970866440)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",(2099068185)),new cljs.core.Keyword(null,"linear","linear",(872268697)),new cljs.core.Keyword(null,"y","y",(-1757859776)),new cljs.core.Keyword(null,"linear","linear",(872268697))], null));
var vec__170 = gadjett.linear.linear_equation_func.call(null,axes).call(null,ax1,ay1,ax2,ay2);
var a1 = cljs.core.nth.call(null,vec__170,(0),null);
var b1 = cljs.core.nth.call(null,vec__170,(1),null);
var vec__173 = gadjett.linear.linear_equation_func.call(null,axes).call(null,bx1,by1,bx2,by2);
var a2 = cljs.core.nth.call(null,vec__173,(0),null);
var b2 = cljs.core.nth.call(null,vec__173,(1),null);
var vec__176 = gadjett.linear.intersection_point_func.call(null,axes).call(null,a1,b1,a2,b2);
var x = cljs.core.nth.call(null,vec__176,(0),null);
var y = cljs.core.nth.call(null,vec__176,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});

gadjett.linear.intersection_point_from_2_lines_points.cljs$lang$maxFixedArity = (2);

gadjett.linear.intersection_point_from_2_lines_points.cljs$lang$applyTo = (function (seq156){
var G__157 = cljs.core.first.call(null,seq156);
var seq156__$1 = cljs.core.next.call(null,seq156);
var G__158 = cljs.core.first.call(null,seq156__$1);
var seq156__$2 = cljs.core.next.call(null,seq156__$1);
return gadjett.linear.intersection_point_from_2_lines_points.cljs$core$IFn$_invoke$arity$variadic(G__157,G__158,seq156__$2);
});

new cljs.core.Var(function(){return gadjett.linear.intersection_point_from_2_lines_points;},new cljs.core.Symbol("gadjett.linear","intersection-point-from-2-lines-points","gadjett.linear/intersection-point-from-2-lines-points",(-450953282),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.linear","gadjett.linear",(-872230395),null),new cljs.core.Symbol(null,"intersection-point-from-2-lines-points","intersection-point-from-2-lines-points",(997992748),null),"gadjett/linear.cljc",(45),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ax1","ax1",(-674717403),null),new cljs.core.Symbol(null,"ay1","ay1",(-413671615),null),new cljs.core.Symbol(null,"ax2","ax2",(1894387901),null),new cljs.core.Symbol(null,"ay2","ay2",(-1849354441),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bx1","bx1",(-493059),null),new cljs.core.Symbol(null,"by1","by1",(-1082296001),null),new cljs.core.Symbol(null,"bx2","bx2",(-1776087545),null),new cljs.core.Symbol(null,"by2","by2",(1540737799),null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"axes","axes",(-683569329),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"axes","axes",(-683569329),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",(2099068185)),new cljs.core.Keyword(null,"linear","linear",(872268697)),new cljs.core.Keyword(null,"y","y",(-1757859776)),new cljs.core.Keyword(null,"linear","linear",(872268697))], null)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ax1","ax1",(-674717403),null),new cljs.core.Symbol(null,"ay1","ay1",(-413671615),null),new cljs.core.Symbol(null,"ax2","ax2",(1894387901),null),new cljs.core.Symbol(null,"ay2","ay2",(-1849354441),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bx1","bx1",(-493059),null),new cljs.core.Symbol(null,"by1","by1",(-1082296001),null),new cljs.core.Symbol(null,"bx2","bx2",(-1776087545),null),new cljs.core.Symbol(null,"by2","by2",(1540737799),null)], null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"axes","axes",(-683569329),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"axes","axes",(-683569329),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",(2099068185)),new cljs.core.Keyword(null,"linear","linear",(872268697)),new cljs.core.Keyword(null,"y","y",(-1757859776)),new cljs.core.Keyword(null,"linear","linear",(872268697))], null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(128),(128),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ax1","ax1",(-674717403),null),new cljs.core.Symbol(null,"ay1","ay1",(-413671615),null),new cljs.core.Symbol(null,"ax2","ax2",(1894387901),null),new cljs.core.Symbol(null,"ay2","ay2",(-1849354441),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bx1","bx1",(-493059),null),new cljs.core.Symbol(null,"by1","by1",(-1082296001),null),new cljs.core.Symbol(null,"bx2","bx2",(-1776087545),null),new cljs.core.Symbol(null,"by2","by2",(1540737799),null)], null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"axes","axes",(-683569329),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"axes","axes",(-683569329),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",(2099068185)),new cljs.core.Keyword(null,"linear","linear",(872268697)),new cljs.core.Keyword(null,"y","y",(-1757859776)),new cljs.core.Keyword(null,"linear","linear",(872268697))], null)], null)], null)], null)),null,(cljs.core.truth_(gadjett.linear.intersection_point_from_2_lines_points)?gadjett.linear.intersection_point_from_2_lines_points.cljs$lang$test:null)]));
