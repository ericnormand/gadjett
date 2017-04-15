goog.provide("gadjett.async_utils");
/**
 * 
 *   ~~~klipse
 *   (require '[clojure.core.async :refer [<!]])
 *   (require-macros '[cljs.core.async.macros :refer [go go-loop]])  
 *   (require '[gadjett.async-utils :refer [safe-memoize-async memoize-async go-map go-map-object go-seq->map wait-for-msg wait-for-condition parallel safe-parallel safe-serial]])
 *   ~~~
 *   
 */
(function (){
gadjett.async_utils.aaaa_load_ns = (function gadjett$async_utils$aaaa_load_ns(){
return null;
}); return (
new cljs.core.Var(function(){return gadjett.async_utils.aaaa_load_ns;},new cljs.core.Symbol("gadjett.async-utils","aaaa-load-ns","gadjett.async-utils/aaaa-load-ns",(-1898501989),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.async-utils","gadjett.async-utils",(-1869404941),null),new cljs.core.Symbol(null,"aaaa-load-ns","aaaa-load-ns",(-91485172),null),"gadjett/async_utils.cljc",(19),(1),(13),(13),cljs.core.list(cljs.core.PersistentVector.EMPTY),"\n  ~~~klipse\n  (require '[clojure.core.async :refer [<!]])\n  (require-macros '[cljs.core.async.macros :refer [go go-loop]])  \n  (require '[gadjett.async-utils :refer [safe-memoize-async memoize-async go-map go-map-object go-seq->map wait-for-msg wait-for-condition parallel safe-parallel safe-serial]])\n  ~~~\n  ",(cljs.core.truth_(gadjett.async_utils.aaaa_load_ns)?gadjett.async_utils.aaaa_load_ns.cljs$lang$test:null)])));})()
;
/**
 * 
 *   Usage: `(safe-memoize-async f success-test-fn)`
 * 
 *   Same as memoize-async, but will only memoize the result if it passes the `success-test-fn`.
 *   ~~~klipse
 *   (def foo (safe-memoize-async (fn [x]
 *                             (go
 *                               (println "running the function with: " x)
 *                               (if (zero? x)
 *                                 [:error]
 *                                 [:ok x])))
 *                           #(= :ok (first %))))
 * 
 *   (go (println (<! (foo 0)))
 *  (println (<! (foo 0)))
 *  (println (<! (foo 1)))
 *  (println (<! (foo 1))))
 *   ~~~
 *   
 */
(function (){
gadjett.async_utils.safe_memoize_async = (function gadjett$async_utils$safe_memoize_async(f,success_test_fn){
var mem = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (mem){
return (function() { 
var G__523__delegate = function (args){
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__,mem){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__,mem){
return (function (state_503){
var state_val_504 = (state_503[(1)]);
if((state_val_504 === (1))){
var inst_487 = (state_503[(7)]);
var inst_486 = cljs.core.deref.call(null,mem);
var inst_487__$1 = cljs.core.find.call(null,inst_486,args);
var state_503__$1 = (function (){var statearr_505 = state_503;
(statearr_505[(7)] = inst_487__$1);

return statearr_505;
})();
if(cljs.core.truth_(inst_487__$1)){
var statearr_506_524 = state_503__$1;
(statearr_506_524[(1)] = (2));

} else {
var statearr_507_525 = state_503__$1;
(statearr_507_525[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_504 === (2))){
var inst_487 = (state_503[(7)]);
var inst_489 = cljs.core.val.call(null,inst_487);
var state_503__$1 = state_503;
var statearr_508_526 = state_503__$1;
(statearr_508_526[(2)] = inst_489);

(statearr_508_526[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_504 === (3))){
var inst_491 = cljs.core.apply.call(null,f,args);
var state_503__$1 = state_503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_503__$1,(5),inst_491);
} else {
if((state_val_504 === (4))){
var inst_501 = (state_503[(2)]);
var state_503__$1 = state_503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_503__$1,inst_501);
} else {
if((state_val_504 === (5))){
var inst_493 = (state_503[(8)]);
var inst_493__$1 = (state_503[(2)]);
var inst_494 = success_test_fn.call(null,inst_493__$1);
var state_503__$1 = (function (){var statearr_509 = state_503;
(statearr_509[(8)] = inst_493__$1);

return statearr_509;
})();
if(cljs.core.truth_(inst_494)){
var statearr_510_527 = state_503__$1;
(statearr_510_527[(1)] = (6));

} else {
var statearr_511_528 = state_503__$1;
(statearr_511_528[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_504 === (6))){
var inst_493 = (state_503[(8)]);
var inst_496 = cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,args,inst_493);
var state_503__$1 = state_503;
var statearr_512_529 = state_503__$1;
(statearr_512_529[(2)] = inst_496);

(statearr_512_529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_504 === (7))){
var state_503__$1 = state_503;
var statearr_513_530 = state_503__$1;
(statearr_513_530[(2)] = null);

(statearr_513_530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_504 === (8))){
var inst_493 = (state_503[(8)]);
var inst_499 = (state_503[(2)]);
var state_503__$1 = (function (){var statearr_514 = state_503;
(statearr_514[(9)] = inst_499);

return statearr_514;
})();
var statearr_515_531 = state_503__$1;
(statearr_515_531[(2)] = inst_493);

(statearr_515_531[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__8__auto__,mem))
;
return ((function (switch__3__auto__,c__8__auto__,mem){
return (function() {
var gadjett$async_utils$safe_memoize_async_$_state_machine__4__auto__ = null;
var gadjett$async_utils$safe_memoize_async_$_state_machine__4__auto____0 = (function (){
var statearr_519 = [null,null,null,null,null,null,null,null,null,null];
(statearr_519[(0)] = gadjett$async_utils$safe_memoize_async_$_state_machine__4__auto__);

(statearr_519[(1)] = (1));

return statearr_519;
});
var gadjett$async_utils$safe_memoize_async_$_state_machine__4__auto____1 = (function (state_503){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e520){if((e520 instanceof Object)){
var ex__7__auto__ = e520;
var statearr_521_532 = state_503;
(statearr_521_532[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_503);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__533 = state_503;
state_503 = G__533;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
gadjett$async_utils$safe_memoize_async_$_state_machine__4__auto__ = function(state_503){
switch(arguments.length){
case 0:
return gadjett$async_utils$safe_memoize_async_$_state_machine__4__auto____0.call(this);
case 1:
return gadjett$async_utils$safe_memoize_async_$_state_machine__4__auto____1.call(this,state_503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gadjett$async_utils$safe_memoize_async_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = gadjett$async_utils$safe_memoize_async_$_state_machine__4__auto____0;
gadjett$async_utils$safe_memoize_async_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = gadjett$async_utils$safe_memoize_async_$_state_machine__4__auto____1;
return gadjett$async_utils$safe_memoize_async_$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__,mem))
})();
var state__10__auto__ = (function (){var statearr_522 = f__9__auto__.call(null);
(statearr_522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8__auto__);

return statearr_522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__,mem))
);

return c__8__auto__;
};
var G__523 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__534__i = 0, G__534__a = new Array(arguments.length -  0);
while (G__534__i < G__534__a.length) {G__534__a[G__534__i] = arguments[G__534__i + 0]; ++G__534__i;}
  args = new cljs.core.IndexedSeq(G__534__a,0);
} 
return G__523__delegate.call(this,args);};
G__523.cljs$lang$maxFixedArity = 0;
G__523.cljs$lang$applyTo = (function (arglist__535){
var args = cljs.core.seq(arglist__535);
return G__523__delegate(args);
});
G__523.cljs$core$IFn$_invoke$arity$variadic = G__523__delegate;
return G__523;
})()
;
;})(mem))
}); return (
new cljs.core.Var(function(){return gadjett.async_utils.safe_memoize_async;},new cljs.core.Symbol("gadjett.async-utils","safe-memoize-async","gadjett.async-utils/safe-memoize-async",(-1594375093),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.async-utils","gadjett.async-utils",(-1869404941),null),new cljs.core.Symbol(null,"safe-memoize-async","safe-memoize-async",(-1260463166),null),"gadjett/async_utils.cljc",(25),(1),(23),(23),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"success-test-fn","success-test-fn",(-2094662249),null)], null)),"\n  Usage: `(safe-memoize-async f success-test-fn)`\n\n  Same as memoize-async, but will only memoize the result if it passes the `success-test-fn`.\n  ~~~klipse\n  (def foo (safe-memoize-async (fn [x]\n                               (go\n                                 (println \"running the function with: \" x)\n                                 (if (zero? x)\n                                   [:error]\n                                   [:ok x])))\n                             #(= :ok (first %))))\n\n  (go (println (<! (foo 0)))\n    (println (<! (foo 0)))\n    (println (<! (foo 1)))\n    (println (<! (foo 1))))\n  ~~~\n  ",(cljs.core.truth_(gadjett.async_utils.safe_memoize_async)?gadjett.async_utils.safe_memoize_async.cljs$lang$test:null)])));})()
;
/**
 * 
 *   Usage: `(memoize-async f)`
 * 
 * 
 *   Same as [clojure.core.memoize](https://clojuredocs.org/clojure.core/memoize)  for asynchronous functions (e.g. functions that return a `chan`).
 *   Returns a channel with the memoized result of the function call.
 * 
 *   ~~~klipse
 *   
 *  (defn async-square [x]
 *    (go
 *      (* x x)))
 *   
 *  (go (println (<! ((memoize-async async-square) 4))))
 *   ~~~
 *   
 */
(function (){
gadjett.async_utils.memoize_async = (function gadjett$async_utils$memoize_async(f){
return gadjett.async_utils.safe_memoize_async.call(null,f,(function() { 
var G__536__delegate = function (args){
return cljs.core.constantly.call(null,true);
};
var G__536 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__537__i = 0, G__537__a = new Array(arguments.length -  0);
while (G__537__i < G__537__a.length) {G__537__a[G__537__i] = arguments[G__537__i + 0]; ++G__537__i;}
  args = new cljs.core.IndexedSeq(G__537__a,0);
} 
return G__536__delegate.call(this,args);};
G__536.cljs$lang$maxFixedArity = 0;
G__536.cljs$lang$applyTo = (function (arglist__538){
var args = cljs.core.seq(arglist__538);
return G__536__delegate(args);
});
G__536.cljs$core$IFn$_invoke$arity$variadic = G__536__delegate;
return G__536;
})()
);
}); return (
new cljs.core.Var(function(){return gadjett.async_utils.memoize_async;},new cljs.core.Symbol("gadjett.async-utils","memoize-async","gadjett.async-utils/memoize-async",(-1525705463),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.async-utils","gadjett.async-utils",(-1869404941),null),new cljs.core.Symbol(null,"memoize-async","memoize-async",(-1829195534),null),"gadjett/async_utils.cljc",(20),(1),(55),(55),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),"\n  Usage: `(memoize-async f)`\n\n\n  Same as [clojure.core.memoize](https://clojuredocs.org/clojure.core/memoize)  for asynchronous functions (e.g. functions that return a `chan`).\n  Returns a channel with the memoized result of the function call.\n\n  ~~~klipse\n  \n    (defn async-square [x]\n      (go\n        (* x x)))\n  \n    (go (println (<! ((memoize-async async-square) 4))))\n  ~~~\n  ",(cljs.core.truth_(gadjett.async_utils.memoize_async)?gadjett.async_utils.memoize_async.cljs$lang$test:null)])));})()
;
/**
 * 
 *   Usage: `(go-map f coll)`
 * 
 *   Returns a channel that will receive the result of `f` applied to 
 *   each item of `coll` once all the data is available.
 *   The calculations are done in parallel.
 *   
 *   ~~~klipse
 *   
 *  (defn async-square [x]
 *    (go
 *      (* x x)))
 * 
 *  (go (println (<! (go-map async-square [1 2 3]))))
 *   ~~~
 *   
 */
(function (){
gadjett.async_utils.go_map = (function gadjett$async_utils$go_map(f,coll){
var chans = cljs.core.map.call(null,f,coll);
var chan__GT_coll = cljs.core.zipmap.call(null,chans,coll);
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__,chans,chan__GT_coll){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__,chans,chan__GT_coll){
return (function (state_608){
var state_val_609 = (state_608[(1)]);
if((state_val_609 === (1))){
var inst_582 = cljs.core.PersistentHashMap.EMPTY;
var inst_583 = inst_582;
var inst_584 = chans;
var state_608__$1 = (function (){var statearr_610 = state_608;
(statearr_610[(7)] = inst_583);

(statearr_610[(8)] = inst_584);

return statearr_610;
})();
var statearr_611_625 = state_608__$1;
(statearr_611_625[(2)] = null);

(statearr_611_625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_609 === (2))){
var inst_584 = (state_608[(8)]);
var inst_586 = cljs.core.empty_QMARK_.call(null,inst_584);
var state_608__$1 = state_608;
if(inst_586){
var statearr_612_626 = state_608__$1;
(statearr_612_626[(1)] = (4));

} else {
var statearr_613_627 = state_608__$1;
(statearr_613_627[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_609 === (3))){
var inst_606 = (state_608[(2)]);
var state_608__$1 = state_608;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_608__$1,inst_606);
} else {
if((state_val_609 === (4))){
var inst_583 = (state_608[(7)]);
var inst_588 = cljs.core.map.call(null,inst_583,coll);
var state_608__$1 = state_608;
var statearr_614_628 = state_608__$1;
(statearr_614_628[(2)] = inst_588);

(statearr_614_628[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_609 === (5))){
var inst_584 = (state_608[(8)]);
var state_608__$1 = state_608;
return cljs.core.async.ioc_alts_BANG_.call(null,state_608__$1,(7),inst_584);
} else {
if((state_val_609 === (6))){
var inst_604 = (state_608[(2)]);
var state_608__$1 = state_608;
var statearr_615_629 = state_608__$1;
(statearr_615_629[(2)] = inst_604);

(statearr_615_629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_609 === (7))){
var inst_583 = (state_608[(7)]);
var inst_584 = (state_608[(8)]);
var inst_594 = (state_608[(2)]);
var inst_595 = cljs.core.nth.call(null,inst_594,(0),null);
var inst_596 = cljs.core.nth.call(null,inst_594,(1),null);
var inst_597 = chan__GT_coll.call(null,inst_596);
var inst_598 = cljs.core.assoc.call(null,inst_583,inst_597,inst_595);
var inst_599 = [inst_596];
var inst_600 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_599);
var inst_601 = cljs.core.remove.call(null,inst_600,inst_584);
var inst_583__$1 = inst_598;
var inst_584__$1 = inst_601;
var state_608__$1 = (function (){var statearr_616 = state_608;
(statearr_616[(7)] = inst_583__$1);

(statearr_616[(8)] = inst_584__$1);

return statearr_616;
})();
var statearr_617_630 = state_608__$1;
(statearr_617_630[(2)] = null);

(statearr_617_630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
}
}
}
}
}
}
}
});})(c__8__auto__,chans,chan__GT_coll))
;
return ((function (switch__3__auto__,c__8__auto__,chans,chan__GT_coll){
return (function() {
var gadjett$async_utils$go_map_$_state_machine__4__auto__ = null;
var gadjett$async_utils$go_map_$_state_machine__4__auto____0 = (function (){
var statearr_621 = [null,null,null,null,null,null,null,null,null];
(statearr_621[(0)] = gadjett$async_utils$go_map_$_state_machine__4__auto__);

(statearr_621[(1)] = (1));

return statearr_621;
});
var gadjett$async_utils$go_map_$_state_machine__4__auto____1 = (function (state_608){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e622){if((e622 instanceof Object)){
var ex__7__auto__ = e622;
var statearr_623_631 = state_608;
(statearr_623_631[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_608);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__632 = state_608;
state_608 = G__632;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
gadjett$async_utils$go_map_$_state_machine__4__auto__ = function(state_608){
switch(arguments.length){
case 0:
return gadjett$async_utils$go_map_$_state_machine__4__auto____0.call(this);
case 1:
return gadjett$async_utils$go_map_$_state_machine__4__auto____1.call(this,state_608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gadjett$async_utils$go_map_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = gadjett$async_utils$go_map_$_state_machine__4__auto____0;
gadjett$async_utils$go_map_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = gadjett$async_utils$go_map_$_state_machine__4__auto____1;
return gadjett$async_utils$go_map_$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__,chans,chan__GT_coll))
})();
var state__10__auto__ = (function (){var statearr_624 = f__9__auto__.call(null);
(statearr_624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8__auto__);

return statearr_624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__,chans,chan__GT_coll))
);

return c__8__auto__;
}); return (
new cljs.core.Var(function(){return gadjett.async_utils.go_map;},new cljs.core.Symbol("gadjett.async-utils","go-map","gadjett.async-utils/go-map",(-318008461),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.async-utils","gadjett.async-utils",(-1869404941),null),new cljs.core.Symbol(null,"go-map","go-map",(-249380918),null),"gadjett/async_utils.cljc",(13),(1),(76),(76),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),"\n  Usage: `(go-map f coll)`\n\n  Returns a channel that will receive the result of `f` applied to \n  each item of `coll` once all the data is available.\n  The calculations are done in parallel.\n  \n  ~~~klipse\n  \n    (defn async-square [x]\n      (go\n        (* x x)))\n\n    (go (println (<! (go-map async-square [1 2 3]))))\n  ~~~\n  ",(cljs.core.truth_(gadjett.async_utils.go_map)?gadjett.async_utils.go_map.cljs$lang$test:null)])));})()
;
(function (){
gadjett.async_utils.vec__GT_map = (function gadjett$async_utils$vec__GT_map(vec){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,vec);
}); return (
new cljs.core.Var(function(){return gadjett.async_utils.vec__GT_map;},new cljs.core.Symbol("gadjett.async-utils","vec->map","gadjett.async-utils/vec->map",(-766143216),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"gadjett.async-utils","gadjett.async-utils",(-1869404941),null),new cljs.core.Symbol(null,"vec->map","vec->map",(-1380093561),null),"gadjett/async_utils.cljc",(16),(1),(103),(103),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vec","vec",(982683596),null)], null)),null,(cljs.core.truth_(gadjett.async_utils.vec__GT_map)?gadjett.async_utils.vec__GT_map.cljs$lang$test:null)])));})()
;
(function (){
gadjett.async_utils.go_map_2d_vec = (function gadjett$async_utils$go_map_2d_vec(f,m){
return gadjett.async_utils.go_map.call(null,(function (p__654){
var vec__655 = p__654;
var k = cljs.core.nth.call(null,vec__655,(0),null);
var id = cljs.core.nth.call(null,vec__655,(1),null);
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__,vec__655,k,id){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__,vec__655,k,id){
return (function (state_665){
var state_val_666 = (state_665[(1)]);
if((state_val_666 === (1))){
var inst_658 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_659 = f.call(null,id);
var state_665__$1 = (function (){var statearr_667 = state_665;
(statearr_667[(7)] = inst_658);

return statearr_667;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_665__$1,(2),inst_659);
} else {
if((state_val_666 === (2))){
var inst_658 = (state_665[(7)]);
var inst_661 = (state_665[(2)]);
var inst_662 = [k,inst_661];
var inst_663 = (new cljs.core.PersistentVector(null,(2),(5),inst_658,inst_662,null));
var state_665__$1 = state_665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_665__$1,inst_663);
} else {
return null;
}
}
});})(c__8__auto__,vec__655,k,id))
;
return ((function (switch__3__auto__,c__8__auto__,vec__655,k,id){
return (function() {
var gadjett$async_utils$go_map_2d_vec_$_state_machine__4__auto__ = null;
var gadjett$async_utils$go_map_2d_vec_$_state_machine__4__auto____0 = (function (){
var statearr_671 = [null,null,null,null,null,null,null,null];
(statearr_671[(0)] = gadjett$async_utils$go_map_2d_vec_$_state_machine__4__auto__);

(statearr_671[(1)] = (1));

return statearr_671;
});
var gadjett$async_utils$go_map_2d_vec_$_state_machine__4__auto____1 = (function (state_665){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e672){if((e672 instanceof Object)){
var ex__7__auto__ = e672;
var statearr_673_675 = state_665;
(statearr_673_675[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_665);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__676 = state_665;
state_665 = G__676;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
gadjett$async_utils$go_map_2d_vec_$_state_machine__4__auto__ = function(state_665){
switch(arguments.length){
case 0:
return gadjett$async_utils$go_map_2d_vec_$_state_machine__4__auto____0.call(this);
case 1:
return gadjett$async_utils$go_map_2d_vec_$_state_machine__4__auto____1.call(this,state_665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gadjett$async_utils$go_map_2d_vec_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = gadjett$async_utils$go_map_2d_vec_$_state_machine__4__auto____0;
gadjett$async_utils$go_map_2d_vec_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = gadjett$async_utils$go_map_2d_vec_$_state_machine__4__auto____1;
return gadjett$async_utils$go_map_2d_vec_$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__,vec__655,k,id))
})();
var state__10__auto__ = (function (){var statearr_674 = f__9__auto__.call(null);
(statearr_674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8__auto__);

return statearr_674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__,vec__655,k,id))
);

return c__8__auto__;
}),m);
}); return (
new cljs.core.Var(function(){return gadjett.async_utils.go_map_2d_vec;},new cljs.core.Symbol("gadjett.async-utils","go-map-2d-vec","gadjett.async-utils/go-map-2d-vec",(-1651348505),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"gadjett.async-utils","gadjett.async-utils",(-1869404941),null),new cljs.core.Symbol(null,"go-map-2d-vec","go-map-2d-vec",(-1434742920),null),"gadjett/async_utils.cljc",(21),(1),(106),(106),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),null,(cljs.core.truth_(gadjett.async_utils.go_map_2d_vec)?gadjett.async_utils.go_map_2d_vec.cljs$lang$test:null)])));})()
;
/**
 * Usage: `(go-map-object f m)`
 * 
 *   Returns channel that will receive a map with the same keys as `m` and with the values transformed by `f`.
 *   Where `f` is an asynchronous function.
 * 
 *   ~~~klipse
 * 
 *  (defn async-square [x]
 *    (go
 *      (* x x)))
 * 
 *  (go (println (<!
 *   (go-map-object async-square {:a 1 :b 2}))))
 *   ~~~
 * 
 *   
 */
(function (){
gadjett.async_utils.go_map_object = (function gadjett$async_utils$go_map_object(f,m){
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__){
return (function (state_696){
var state_val_697 = (state_696[(1)]);
if((state_val_697 === (1))){
var inst_691 = gadjett.async_utils.go_map_2d_vec.call(null,f,m);
var state_696__$1 = state_696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_696__$1,(2),inst_691);
} else {
if((state_val_697 === (2))){
var inst_693 = (state_696[(2)]);
var inst_694 = gadjett.async_utils.vec__GT_map.call(null,inst_693);
var state_696__$1 = state_696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_696__$1,inst_694);
} else {
return null;
}
}
});})(c__8__auto__))
;
return ((function (switch__3__auto__,c__8__auto__){
return (function() {
var gadjett$async_utils$go_map_object_$_state_machine__4__auto__ = null;
var gadjett$async_utils$go_map_object_$_state_machine__4__auto____0 = (function (){
var statearr_701 = [null,null,null,null,null,null,null];
(statearr_701[(0)] = gadjett$async_utils$go_map_object_$_state_machine__4__auto__);

(statearr_701[(1)] = (1));

return statearr_701;
});
var gadjett$async_utils$go_map_object_$_state_machine__4__auto____1 = (function (state_696){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e702){if((e702 instanceof Object)){
var ex__7__auto__ = e702;
var statearr_703_705 = state_696;
(statearr_703_705[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_696);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__706 = state_696;
state_696 = G__706;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
gadjett$async_utils$go_map_object_$_state_machine__4__auto__ = function(state_696){
switch(arguments.length){
case 0:
return gadjett$async_utils$go_map_object_$_state_machine__4__auto____0.call(this);
case 1:
return gadjett$async_utils$go_map_object_$_state_machine__4__auto____1.call(this,state_696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gadjett$async_utils$go_map_object_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = gadjett$async_utils$go_map_object_$_state_machine__4__auto____0;
gadjett$async_utils$go_map_object_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = gadjett$async_utils$go_map_object_$_state_machine__4__auto____1;
return gadjett$async_utils$go_map_object_$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__))
})();
var state__10__auto__ = (function (){var statearr_704 = f__9__auto__.call(null);
(statearr_704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8__auto__);

return statearr_704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__))
);

return c__8__auto__;
}); return (
new cljs.core.Var(function(){return gadjett.async_utils.go_map_object;},new cljs.core.Symbol("gadjett.async-utils","go-map-object","gadjett.async-utils/go-map-object",(-885500961),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.async-utils","gadjett.async-utils",(-1869404941),null),new cljs.core.Symbol(null,"go-map-object","go-map-object",(-17875376),null),"gadjett/async_utils.cljc",(20),(1),(109),(109),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),"Usage: `(go-map-object f m)`\n\n  Returns channel that will receive a map with the same keys as `m` and with the values transformed by `f`.\n  Where `f` is an asynchronous function.\n\n  ~~~klipse\n\n    (defn async-square [x]\n      (go\n        (* x x)))\n\n    (go (println (<!\n     (go-map-object async-square {:a 1 :b 2}))))\n  ~~~\n\n  ",(cljs.core.truth_(gadjett.async_utils.go_map_object)?gadjett.async_utils.go_map_object.cljs$lang$test:null)])));})()
;
(function (){
gadjett.async_utils.go_seq__GT_map = (function gadjett$async_utils$go_seq__GT_map(f,lst){
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__){
return (function (state_726){
var state_val_727 = (state_726[(1)]);
if((state_val_727 === (1))){
var inst_721 = gadjett.async_utils.go_map.call(null,f,lst);
var state_726__$1 = state_726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_726__$1,(2),inst_721);
} else {
if((state_val_727 === (2))){
var inst_723 = (state_726[(2)]);
var inst_724 = cljs.core.zipmap.call(null,lst,inst_723);
var state_726__$1 = state_726;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_726__$1,inst_724);
} else {
return null;
}
}
});})(c__8__auto__))
;
return ((function (switch__3__auto__,c__8__auto__){
return (function() {
var gadjett$async_utils$go_seq__GT_map_$_state_machine__4__auto__ = null;
var gadjett$async_utils$go_seq__GT_map_$_state_machine__4__auto____0 = (function (){
var statearr_731 = [null,null,null,null,null,null,null];
(statearr_731[(0)] = gadjett$async_utils$go_seq__GT_map_$_state_machine__4__auto__);

(statearr_731[(1)] = (1));

return statearr_731;
});
var gadjett$async_utils$go_seq__GT_map_$_state_machine__4__auto____1 = (function (state_726){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e732){if((e732 instanceof Object)){
var ex__7__auto__ = e732;
var statearr_733_735 = state_726;
(statearr_733_735[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_726);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__736 = state_726;
state_726 = G__736;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
gadjett$async_utils$go_seq__GT_map_$_state_machine__4__auto__ = function(state_726){
switch(arguments.length){
case 0:
return gadjett$async_utils$go_seq__GT_map_$_state_machine__4__auto____0.call(this);
case 1:
return gadjett$async_utils$go_seq__GT_map_$_state_machine__4__auto____1.call(this,state_726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gadjett$async_utils$go_seq__GT_map_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = gadjett$async_utils$go_seq__GT_map_$_state_machine__4__auto____0;
gadjett$async_utils$go_seq__GT_map_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = gadjett$async_utils$go_seq__GT_map_$_state_machine__4__auto____1;
return gadjett$async_utils$go_seq__GT_map_$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__))
})();
var state__10__auto__ = (function (){var statearr_734 = f__9__auto__.call(null);
(statearr_734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8__auto__);

return statearr_734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__))
);

return c__8__auto__;
}); return (
new cljs.core.Var(function(){return gadjett.async_utils.go_seq__GT_map;},new cljs.core.Symbol("gadjett.async-utils","go-seq->map","gadjett.async-utils/go-seq->map",(1833758048),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.async-utils","gadjett.async-utils",(-1869404941),null),new cljs.core.Symbol(null,"go-seq->map","go-seq->map",(2038106583),null),"gadjett/async_utils.cljc",(18),(1),(130),(130),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"lst","lst",(1910277514),null)], null)),null,(cljs.core.truth_(gadjett.async_utils.go_seq__GT_map)?gadjett.async_utils.go_seq__GT_map.cljs$lang$test:null)])));})()
;
(function (){
gadjett.async_utils.wait_for_msg = (function gadjett$async_utils$wait_for_msg(c,msg){
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__){
return (function (state_776){
var state_val_777 = (state_776[(1)]);
if((state_val_777 === (1))){
var state_776__$1 = state_776;
var statearr_778_791 = state_776__$1;
(statearr_778_791[(2)] = null);

(statearr_778_791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_777 === (2))){
var state_776__$1 = state_776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_776__$1,(4),c);
} else {
if((state_val_777 === (3))){
var inst_774 = (state_776[(2)]);
var state_776__$1 = state_776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_776__$1,inst_774);
} else {
if((state_val_777 === (4))){
var inst_766 = (state_776[(2)]);
var inst_767 = cljs.core._EQ_.call(null,msg,inst_766);
var state_776__$1 = state_776;
if(inst_767){
var statearr_779_792 = state_776__$1;
(statearr_779_792[(1)] = (5));

} else {
var statearr_780_793 = state_776__$1;
(statearr_780_793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_777 === (5))){
var state_776__$1 = state_776;
var statearr_781_794 = state_776__$1;
(statearr_781_794[(2)] = null);

(statearr_781_794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_777 === (6))){
var state_776__$1 = state_776;
var statearr_782_795 = state_776__$1;
(statearr_782_795[(2)] = null);

(statearr_782_795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_777 === (7))){
var inst_772 = (state_776[(2)]);
var state_776__$1 = state_776;
var statearr_783_796 = state_776__$1;
(statearr_783_796[(2)] = inst_772);

(statearr_783_796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
}
}
}
}
}
}
}
});})(c__8__auto__))
;
return ((function (switch__3__auto__,c__8__auto__){
return (function() {
var gadjett$async_utils$wait_for_msg_$_state_machine__4__auto__ = null;
var gadjett$async_utils$wait_for_msg_$_state_machine__4__auto____0 = (function (){
var statearr_787 = [null,null,null,null,null,null,null];
(statearr_787[(0)] = gadjett$async_utils$wait_for_msg_$_state_machine__4__auto__);

(statearr_787[(1)] = (1));

return statearr_787;
});
var gadjett$async_utils$wait_for_msg_$_state_machine__4__auto____1 = (function (state_776){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e788){if((e788 instanceof Object)){
var ex__7__auto__ = e788;
var statearr_789_797 = state_776;
(statearr_789_797[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_776);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__798 = state_776;
state_776 = G__798;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
gadjett$async_utils$wait_for_msg_$_state_machine__4__auto__ = function(state_776){
switch(arguments.length){
case 0:
return gadjett$async_utils$wait_for_msg_$_state_machine__4__auto____0.call(this);
case 1:
return gadjett$async_utils$wait_for_msg_$_state_machine__4__auto____1.call(this,state_776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gadjett$async_utils$wait_for_msg_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = gadjett$async_utils$wait_for_msg_$_state_machine__4__auto____0;
gadjett$async_utils$wait_for_msg_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = gadjett$async_utils$wait_for_msg_$_state_machine__4__auto____1;
return gadjett$async_utils$wait_for_msg_$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__))
})();
var state__10__auto__ = (function (){var statearr_790 = f__9__auto__.call(null);
(statearr_790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8__auto__);

return statearr_790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__))
);

return c__8__auto__;
}); return (
new cljs.core.Var(function(){return gadjett.async_utils.wait_for_msg;},new cljs.core.Symbol("gadjett.async-utils","wait-for-msg","gadjett.async-utils/wait-for-msg",(-271897325),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.async-utils","gadjett.async-utils",(-1869404941),null),new cljs.core.Symbol(null,"wait-for-msg","wait-for-msg",(467813098),null),"gadjett/async_utils.cljc",(19),(1),(134),(134),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"msg","msg",(254428083),null)], null)),null,(cljs.core.truth_(gadjett.async_utils.wait_for_msg)?gadjett.async_utils.wait_for_msg.cljs$lang$test:null)])));})()
;
/**
 * 
 *   returns a channel that will be activated when the predicate `f` returns true.
 *   
 *   ~~~klipse
 *   (let [start (js/Date.)]
 *   (go 
 *  (println "start:" (js/Date.))
 *  (<! (wait-for-condition #(>= (- (js/Date.) start) 1000) 100))
 *  (println "done:" (js/Date.))))
 *   ~~~
 *   
 */
(function (){
gadjett.async_utils.wait_for_condition = (function gadjett$async_utils$wait_for_condition(f,interval_in_msec){
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__){
return (function (state_841){
var state_val_842 = (state_841[(1)]);
if((state_val_842 === (1))){
var state_841__$1 = state_841;
var statearr_843_857 = state_841__$1;
(statearr_843_857[(2)] = null);

(statearr_843_857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_842 === (2))){
var inst_829 = f.call(null);
var state_841__$1 = state_841;
if(cljs.core.truth_(inst_829)){
var statearr_844_858 = state_841__$1;
(statearr_844_858[(1)] = (4));

} else {
var statearr_845_859 = state_841__$1;
(statearr_845_859[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_842 === (3))){
var inst_839 = (state_841[(2)]);
var state_841__$1 = state_841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_841__$1,inst_839);
} else {
if((state_val_842 === (4))){
var state_841__$1 = state_841;
var statearr_846_860 = state_841__$1;
(statearr_846_860[(2)] = null);

(statearr_846_860[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_842 === (5))){
var inst_832 = cljs.core.async.timeout.call(null,interval_in_msec);
var state_841__$1 = state_841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_841__$1,(7),inst_832);
} else {
if((state_val_842 === (6))){
var inst_837 = (state_841[(2)]);
var state_841__$1 = state_841;
var statearr_847_861 = state_841__$1;
(statearr_847_861[(2)] = inst_837);

(statearr_847_861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_842 === (7))){
var inst_834 = (state_841[(2)]);
var state_841__$1 = (function (){var statearr_848 = state_841;
(statearr_848[(7)] = inst_834);

return statearr_848;
})();
var statearr_849_862 = state_841__$1;
(statearr_849_862[(2)] = null);

(statearr_849_862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
}
}
}
}
}
}
}
});})(c__8__auto__))
;
return ((function (switch__3__auto__,c__8__auto__){
return (function() {
var gadjett$async_utils$wait_for_condition_$_state_machine__4__auto__ = null;
var gadjett$async_utils$wait_for_condition_$_state_machine__4__auto____0 = (function (){
var statearr_853 = [null,null,null,null,null,null,null,null];
(statearr_853[(0)] = gadjett$async_utils$wait_for_condition_$_state_machine__4__auto__);

(statearr_853[(1)] = (1));

return statearr_853;
});
var gadjett$async_utils$wait_for_condition_$_state_machine__4__auto____1 = (function (state_841){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e854){if((e854 instanceof Object)){
var ex__7__auto__ = e854;
var statearr_855_863 = state_841;
(statearr_855_863[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_841);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__864 = state_841;
state_841 = G__864;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
gadjett$async_utils$wait_for_condition_$_state_machine__4__auto__ = function(state_841){
switch(arguments.length){
case 0:
return gadjett$async_utils$wait_for_condition_$_state_machine__4__auto____0.call(this);
case 1:
return gadjett$async_utils$wait_for_condition_$_state_machine__4__auto____1.call(this,state_841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gadjett$async_utils$wait_for_condition_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = gadjett$async_utils$wait_for_condition_$_state_machine__4__auto____0;
gadjett$async_utils$wait_for_condition_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = gadjett$async_utils$wait_for_condition_$_state_machine__4__auto____1;
return gadjett$async_utils$wait_for_condition_$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__))
})();
var state__10__auto__ = (function (){var statearr_856 = f__9__auto__.call(null);
(statearr_856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8__auto__);

return statearr_856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__))
);

return c__8__auto__;
}); return (
new cljs.core.Var(function(){return gadjett.async_utils.wait_for_condition;},new cljs.core.Symbol("gadjett.async-utils","wait-for-condition","gadjett.async-utils/wait-for-condition",(-250942085),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.async-utils","gadjett.async-utils",(-1869404941),null),new cljs.core.Symbol(null,"wait-for-condition","wait-for-condition",(-313265684),null),"gadjett/async_utils.cljc",(25),(1),(140),(140),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"interval-in-msec","interval-in-msec",(-1312091410),null)], null)),"\n  returns a channel that will be activated when the predicate `f` returns true.\n  \n  ~~~klipse\n  (let [start (js/Date.)]\n  (go \n    (println \"start:\" (js/Date.))\n    (<! (wait-for-condition #(>= (- (js/Date.) start) 1000) 100))\n    (println \"done:\" (js/Date.))))\n  ~~~\n  ",(cljs.core.truth_(gadjett.async_utils.wait_for_condition)?gadjett.async_utils.wait_for_condition.cljs$lang$test:null)])));})()
;
/**
 * Receives a sequence of channels and returns a channel which will receive
 *   a sequence with the result of all the channels.
 *   Data is read from the channels in parallel.
 *   The result is a sequence where each element in the sequence is the result
 *   of the corresponding channel in the sequence.
 */
(function (){
gadjett.async_utils.parallel = (function gadjett$async_utils$parallel(chans){
var channel_indexes = cljs.core.zipmap.call(null,chans,cljs.core.range.call(null,cljs.core.count.call(null,chans)));
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__,channel_indexes){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__,channel_indexes){
return (function (state_936){
var state_val_937 = (state_936[(1)]);
if((state_val_937 === (1))){
var inst_909 = cljs.core.count.call(null,chans);
var inst_910 = cljs.core.range.call(null,inst_909);
var inst_911 = cljs.core.vec.call(null,inst_910);
var inst_912 = inst_911;
var inst_913 = chans;
var state_936__$1 = (function (){var statearr_938 = state_936;
(statearr_938[(7)] = inst_912);

(statearr_938[(8)] = inst_913);

return statearr_938;
})();
var statearr_939_953 = state_936__$1;
(statearr_939_953[(2)] = null);

(statearr_939_953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_937 === (2))){
var inst_913 = (state_936[(8)]);
var inst_915 = cljs.core.empty_QMARK_.call(null,inst_913);
var state_936__$1 = state_936;
if(inst_915){
var statearr_940_954 = state_936__$1;
(statearr_940_954[(1)] = (4));

} else {
var statearr_941_955 = state_936__$1;
(statearr_941_955[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_937 === (3))){
var inst_934 = (state_936[(2)]);
var state_936__$1 = state_936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_936__$1,inst_934);
} else {
if((state_val_937 === (4))){
var inst_912 = (state_936[(7)]);
var state_936__$1 = state_936;
var statearr_942_956 = state_936__$1;
(statearr_942_956[(2)] = inst_912);

(statearr_942_956[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_937 === (5))){
var inst_913 = (state_936[(8)]);
var state_936__$1 = state_936;
return cljs.core.async.ioc_alts_BANG_.call(null,state_936__$1,(7),inst_913);
} else {
if((state_val_937 === (6))){
var inst_932 = (state_936[(2)]);
var state_936__$1 = state_936;
var statearr_943_957 = state_936__$1;
(statearr_943_957[(2)] = inst_932);

(statearr_943_957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_937 === (7))){
var inst_912 = (state_936[(7)]);
var inst_913 = (state_936[(8)]);
var inst_922 = (state_936[(2)]);
var inst_923 = cljs.core.nth.call(null,inst_922,(0),null);
var inst_924 = cljs.core.nth.call(null,inst_922,(1),null);
var inst_925 = channel_indexes.call(null,inst_924);
var inst_926 = cljs.core.assoc.call(null,inst_912,inst_925,inst_923);
var inst_927 = [inst_924];
var inst_928 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_927);
var inst_929 = cljs.core.remove.call(null,inst_928,inst_913);
var inst_912__$1 = inst_926;
var inst_913__$1 = inst_929;
var state_936__$1 = (function (){var statearr_944 = state_936;
(statearr_944[(7)] = inst_912__$1);

(statearr_944[(8)] = inst_913__$1);

return statearr_944;
})();
var statearr_945_958 = state_936__$1;
(statearr_945_958[(2)] = null);

(statearr_945_958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
}
}
}
}
}
}
}
});})(c__8__auto__,channel_indexes))
;
return ((function (switch__3__auto__,c__8__auto__,channel_indexes){
return (function() {
var gadjett$async_utils$parallel_$_state_machine__4__auto__ = null;
var gadjett$async_utils$parallel_$_state_machine__4__auto____0 = (function (){
var statearr_949 = [null,null,null,null,null,null,null,null,null];
(statearr_949[(0)] = gadjett$async_utils$parallel_$_state_machine__4__auto__);

(statearr_949[(1)] = (1));

return statearr_949;
});
var gadjett$async_utils$parallel_$_state_machine__4__auto____1 = (function (state_936){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e950){if((e950 instanceof Object)){
var ex__7__auto__ = e950;
var statearr_951_959 = state_936;
(statearr_951_959[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_936);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__960 = state_936;
state_936 = G__960;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
gadjett$async_utils$parallel_$_state_machine__4__auto__ = function(state_936){
switch(arguments.length){
case 0:
return gadjett$async_utils$parallel_$_state_machine__4__auto____0.call(this);
case 1:
return gadjett$async_utils$parallel_$_state_machine__4__auto____1.call(this,state_936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gadjett$async_utils$parallel_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = gadjett$async_utils$parallel_$_state_machine__4__auto____0;
gadjett$async_utils$parallel_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = gadjett$async_utils$parallel_$_state_machine__4__auto____1;
return gadjett$async_utils$parallel_$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__,channel_indexes))
})();
var state__10__auto__ = (function (){var statearr_952 = f__9__auto__.call(null);
(statearr_952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8__auto__);

return statearr_952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__,channel_indexes))
);

return c__8__auto__;
}); return (
new cljs.core.Var(function(){return gadjett.async_utils.parallel;},new cljs.core.Symbol("gadjett.async-utils","parallel","gadjett.async-utils/parallel",(-426959260),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.async-utils","gadjett.async-utils",(-1869404941),null),new cljs.core.Symbol(null,"parallel","parallel",(-223075601),null),"gadjett/async_utils.cljc",(15),(1),(158),(158),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chans","chans",(532714674),null)], null)),"Receives a sequence of channels and returns a channel which will receive\n  a sequence with the result of all the channels.\n  Data is read from the channels in parallel.\n  The result is a sequence where each element in the sequence is the result\n  of the corresponding channel in the sequence.",(cljs.core.truth_(gadjett.async_utils.parallel)?gadjett.async_utils.parallel.cljs$lang$test:null)])));})()
;
/**
 * Receives a sequence of channels and fail-test function and returns a channel which will receive
 *   a sequence with the result of all the channels or with error if one of the channels failed.
 *   Data is read from the channels in parallel.
 *   if one of the channels failed - according to the fail-test function the result is the error message
 *   in other case the result is a sequence where each element in the sequence is the result
 *   of the corresponding channel in the sequence.
 */
(function (){
gadjett.async_utils.safe_parallel = (function gadjett$async_utils$safe_parallel(chans){
var channel_indexes = cljs.core.zipmap.call(null,chans,cljs.core.range.call(null,cljs.core.count.call(null,chans)));
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__,channel_indexes){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__,channel_indexes){
return (function (state_1196){
var state_val_1197 = (state_1196[(1)]);
if((state_val_1197 === (1))){
var inst_1104 = cljs.core.count.call(null,chans);
var inst_1105 = cljs.core.range.call(null,inst_1104);
var inst_1106 = cljs.core.vec.call(null,inst_1105);
var inst_1107 = inst_1106;
var inst_1108 = chans;
var state_1196__$1 = (function (){var statearr_1198 = state_1196;
(statearr_1198[(7)] = inst_1107);

(statearr_1198[(8)] = inst_1108);

return statearr_1198;
})();
var statearr_1199_1247 = state_1196__$1;
(statearr_1199_1247[(2)] = null);

(statearr_1199_1247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1197 === (2))){
var inst_1108 = (state_1196[(8)]);
var inst_1110 = cljs.core.empty_QMARK_.call(null,inst_1108);
var state_1196__$1 = state_1196;
if(inst_1110){
var statearr_1200_1248 = state_1196__$1;
(statearr_1200_1248[(1)] = (4));

} else {
var statearr_1201_1249 = state_1196__$1;
(statearr_1201_1249[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1197 === (3))){
var inst_1194 = (state_1196[(2)]);
var state_1196__$1 = state_1196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1196__$1,inst_1194);
} else {
if((state_val_1197 === (4))){
var inst_1107 = (state_1196[(7)]);
var inst_1112 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_1113 = [new cljs.core.Keyword(null,"ok","ok",(967785236)),inst_1107];
var inst_1114 = (new cljs.core.PersistentVector(null,(2),(5),inst_1112,inst_1113,null));
var state_1196__$1 = state_1196;
var statearr_1202_1250 = state_1196__$1;
(statearr_1202_1250[(2)] = inst_1114);

(statearr_1202_1250[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1197 === (5))){
var inst_1108 = (state_1196[(8)]);
var state_1196__$1 = state_1196;
return cljs.core.async.ioc_alts_BANG_.call(null,state_1196__$1,(7),inst_1108);
} else {
if((state_val_1197 === (6))){
var inst_1192 = (state_1196[(2)]);
var state_1196__$1 = state_1196;
var statearr_1203_1251 = state_1196__$1;
(statearr_1203_1251[(2)] = inst_1192);

(statearr_1203_1251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1197 === (7))){
var inst_1124 = (state_1196[(9)]);
var inst_1124__$1 = (state_1196[(2)]);
var inst_1125 = cljs.core.vector_QMARK_.call(null,inst_1124__$1);
var inst_1126 = cljs.core.count.call(null,inst_1124__$1);
var inst_1127 = (inst_1126 === (2));
var inst_1128 = (inst_1125) && (inst_1127);
var state_1196__$1 = (function (){var statearr_1204 = state_1196;
(statearr_1204[(9)] = inst_1124__$1);

return statearr_1204;
})();
if(cljs.core.truth_(inst_1128)){
var statearr_1205_1252 = state_1196__$1;
(statearr_1205_1252[(1)] = (8));

} else {
var statearr_1206_1253 = state_1196__$1;
(statearr_1206_1253[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1197 === (8))){
var inst_1124 = (state_1196[(9)]);
var inst_1130 = (state_1196[(10)]);
var inst_1130__$1 = cljs.core.nth.call(null,inst_1124,(0));
var inst_1131 = cljs.core.vector_QMARK_.call(null,inst_1130__$1);
var inst_1132 = cljs.core.count.call(null,inst_1130__$1);
var inst_1133 = (inst_1132 === (2));
var inst_1134 = (inst_1131) && (inst_1133);
var state_1196__$1 = (function (){var statearr_1207 = state_1196;
(statearr_1207[(10)] = inst_1130__$1);

return statearr_1207;
})();
if(cljs.core.truth_(inst_1134)){
var statearr_1208_1254 = state_1196__$1;
(statearr_1208_1254[(1)] = (11));

} else {
var statearr_1209_1255 = state_1196__$1;
(statearr_1209_1255[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1197 === (9))){
var state_1196__$1 = state_1196;
var statearr_1210_1256 = state_1196__$1;
(statearr_1210_1256[(1)] = (29));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1197 === (10))){
var inst_1190 = (state_1196[(2)]);
var state_1196__$1 = state_1196;
var statearr_1212_1257 = state_1196__$1;
(statearr_1212_1257[(2)] = inst_1190);

(statearr_1212_1257[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1197 === (11))){
var inst_1130 = (state_1196[(10)]);
var inst_1136 = cljs.core.nth.call(null,inst_1130,(0));
var inst_1137 = cljs.core.keyword_identical_QMARK_.call(null,inst_1136,new cljs.core.Keyword(null,"error","error",(-978969032)));
var state_1196__$1 = state_1196;
if(inst_1137){
var statearr_1213_1258 = state_1196__$1;
(statearr_1213_1258[(1)] = (14));

} else {
var statearr_1214_1259 = state_1196__$1;
(statearr_1214_1259[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1197 === (12))){
var state_1196__$1 = state_1196;
var statearr_1215_1260 = state_1196__$1;
(statearr_1215_1260[(1)] = (26));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1197 === (13))){
var inst_1180 = (state_1196[(2)]);
var state_1196__$1 = state_1196;
var statearr_1217_1261 = state_1196__$1;
(statearr_1217_1261[(2)] = inst_1180);

(statearr_1217_1261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1197 === (14))){
var inst_1130 = (state_1196[(10)]);
var inst_1139 = cljs.core.nth.call(null,inst_1130,(1));
var inst_1140 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_1141 = [new cljs.core.Keyword(null,"error","error",(-978969032)),inst_1139];
var inst_1142 = (new cljs.core.PersistentVector(null,(2),(5),inst_1140,inst_1141,null));
var state_1196__$1 = state_1196;
var statearr_1218_1262 = state_1196__$1;
(statearr_1218_1262[(2)] = inst_1142);

(statearr_1218_1262[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1197 === (15))){
var state_1196__$1 = state_1196;
var statearr_1219_1263 = state_1196__$1;
(statearr_1219_1263[(1)] = (17));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1197 === (16))){
var inst_1170 = (state_1196[(2)]);
var state_1196__$1 = state_1196;
var statearr_1221_1264 = state_1196__$1;
(statearr_1221_1264[(2)] = inst_1170);

(statearr_1221_1264[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1197 === (17))){
var inst_1130 = (state_1196[(10)]);
var inst_1145 = cljs.core.nth.call(null,inst_1130,(0));
var inst_1146 = cljs.core.keyword_identical_QMARK_.call(null,inst_1145,new cljs.core.Keyword(null,"ok","ok",(967785236)));
var state_1196__$1 = state_1196;
if(inst_1146){
var statearr_1222_1265 = state_1196__$1;
(statearr_1222_1265[(1)] = (20));

} else {
var statearr_1223_1266 = state_1196__$1;
(statearr_1223_1266[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1197 === (18))){
var state_1196__$1 = state_1196;
var statearr_1224_1267 = state_1196__$1;
(statearr_1224_1267[(2)] = null);

(statearr_1224_1267[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1197 === (19))){
var inst_1168 = (state_1196[(2)]);
var state_1196__$1 = state_1196;
var statearr_1225_1268 = state_1196__$1;
(statearr_1225_1268[(2)] = inst_1168);

(statearr_1225_1268[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1197 === (20))){
var inst_1130 = (state_1196[(10)]);
var inst_1124 = (state_1196[(9)]);
var inst_1107 = (state_1196[(7)]);
var inst_1108 = (state_1196[(8)]);
var inst_1148 = cljs.core.nth.call(null,inst_1130,(1));
var inst_1149 = cljs.core.nth.call(null,inst_1124,(1));
var inst_1150 = channel_indexes.call(null,inst_1149);
var inst_1151 = cljs.core.assoc.call(null,inst_1107,inst_1150,inst_1148);
var inst_1152 = [inst_1149];
var inst_1153 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_1152);
var inst_1154 = cljs.core.remove.call(null,inst_1153,inst_1108);
var inst_1107__$1 = inst_1151;
var inst_1108__$1 = inst_1154;
var state_1196__$1 = (function (){var statearr_1226 = state_1196;
(statearr_1226[(7)] = inst_1107__$1);

(statearr_1226[(8)] = inst_1108__$1);

return statearr_1226;
})();
var statearr_1227_1269 = state_1196__$1;
(statearr_1227_1269[(2)] = null);

(statearr_1227_1269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1197 === (21))){
var state_1196__$1 = state_1196;
var statearr_1228_1270 = state_1196__$1;
(statearr_1228_1270[(1)] = (23));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1197 === (22))){
var inst_1165 = (state_1196[(2)]);
var state_1196__$1 = state_1196;
var statearr_1230_1271 = state_1196__$1;
(statearr_1230_1271[(2)] = inst_1165);

(statearr_1230_1271[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1197 === (23))){
var inst_1124 = (state_1196[(9)]);
var inst_1158 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_1124)].join('');
var inst_1159 = (new Error(inst_1158));
var inst_1160 = (function(){throw inst_1159})();
var state_1196__$1 = state_1196;
var statearr_1231_1272 = state_1196__$1;
(statearr_1231_1272[(2)] = inst_1160);

(statearr_1231_1272[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1197 === (24))){
var state_1196__$1 = state_1196;
var statearr_1232_1273 = state_1196__$1;
(statearr_1232_1273[(2)] = null);

(statearr_1232_1273[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1197 === (25))){
var inst_1163 = (state_1196[(2)]);
var state_1196__$1 = state_1196;
var statearr_1233_1274 = state_1196__$1;
(statearr_1233_1274[(2)] = inst_1163);

(statearr_1233_1274[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1197 === (26))){
var inst_1124 = (state_1196[(9)]);
var inst_1173 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_1124)].join('');
var inst_1174 = (new Error(inst_1173));
var inst_1175 = (function(){throw inst_1174})();
var state_1196__$1 = state_1196;
var statearr_1234_1275 = state_1196__$1;
(statearr_1234_1275[(2)] = inst_1175);

(statearr_1234_1275[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1197 === (27))){
var state_1196__$1 = state_1196;
var statearr_1235_1276 = state_1196__$1;
(statearr_1235_1276[(2)] = null);

(statearr_1235_1276[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1197 === (28))){
var inst_1178 = (state_1196[(2)]);
var state_1196__$1 = state_1196;
var statearr_1236_1277 = state_1196__$1;
(statearr_1236_1277[(2)] = inst_1178);

(statearr_1236_1277[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1197 === (29))){
var inst_1124 = (state_1196[(9)]);
var inst_1183 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_1124)].join('');
var inst_1184 = (new Error(inst_1183));
var inst_1185 = (function(){throw inst_1184})();
var state_1196__$1 = state_1196;
var statearr_1237_1278 = state_1196__$1;
(statearr_1237_1278[(2)] = inst_1185);

(statearr_1237_1278[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1197 === (30))){
var state_1196__$1 = state_1196;
var statearr_1238_1279 = state_1196__$1;
(statearr_1238_1279[(2)] = null);

(statearr_1238_1279[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1197 === (31))){
var inst_1188 = (state_1196[(2)]);
var state_1196__$1 = state_1196;
var statearr_1239_1280 = state_1196__$1;
(statearr_1239_1280[(2)] = inst_1188);

(statearr_1239_1280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8__auto__,channel_indexes))
;
return ((function (switch__3__auto__,c__8__auto__,channel_indexes){
return (function() {
var gadjett$async_utils$safe_parallel_$_state_machine__4__auto__ = null;
var gadjett$async_utils$safe_parallel_$_state_machine__4__auto____0 = (function (){
var statearr_1243 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_1243[(0)] = gadjett$async_utils$safe_parallel_$_state_machine__4__auto__);

(statearr_1243[(1)] = (1));

return statearr_1243;
});
var gadjett$async_utils$safe_parallel_$_state_machine__4__auto____1 = (function (state_1196){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_1196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e1244){if((e1244 instanceof Object)){
var ex__7__auto__ = e1244;
var statearr_1245_1281 = state_1196;
(statearr_1245_1281[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1196);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e1244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__1282 = state_1196;
state_1196 = G__1282;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
gadjett$async_utils$safe_parallel_$_state_machine__4__auto__ = function(state_1196){
switch(arguments.length){
case 0:
return gadjett$async_utils$safe_parallel_$_state_machine__4__auto____0.call(this);
case 1:
return gadjett$async_utils$safe_parallel_$_state_machine__4__auto____1.call(this,state_1196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gadjett$async_utils$safe_parallel_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = gadjett$async_utils$safe_parallel_$_state_machine__4__auto____0;
gadjett$async_utils$safe_parallel_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = gadjett$async_utils$safe_parallel_$_state_machine__4__auto____1;
return gadjett$async_utils$safe_parallel_$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__,channel_indexes))
})();
var state__10__auto__ = (function (){var statearr_1246 = f__9__auto__.call(null);
(statearr_1246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8__auto__);

return statearr_1246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__,channel_indexes))
);

return c__8__auto__;
}); return (
new cljs.core.Var(function(){return gadjett.async_utils.safe_parallel;},new cljs.core.Symbol("gadjett.async-utils","safe-parallel","gadjett.async-utils/safe-parallel",(-162766989),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.async-utils","gadjett.async-utils",(-1869404941),null),new cljs.core.Symbol(null,"safe-parallel","safe-parallel",(169559268),null),"gadjett/async_utils.cljc",(20),(1),(172),(172),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chans","chans",(532714674),null)], null)),"Receives a sequence of channels and fail-test function and returns a channel which will receive\n  a sequence with the result of all the channels or with error if one of the channels failed.\n  Data is read from the channels in parallel.\n  if one of the channels failed - according to the fail-test function the result is the error message\n  in other case the result is a sequence where each element in the sequence is the result\n  of the corresponding channel in the sequence.",(cljs.core.truth_(gadjett.async_utils.safe_parallel)?gadjett.async_utils.safe_parallel.cljs$lang$test:null)])));})()
;
/**
 * Thanks [Jay Fields](http://blog.jayfields.com/2011/01/clojure-select-keys-select-values-and.html)
 */
(function (){
gadjett.async_utils.select_vals_in_order = (function gadjett$async_utils$select_vals_in_order(map,ks){
return cljs.core.reduce.call(null,(function (p1__19_SHARP_,p2__20_SHARP_){
return cljs.core.conj.call(null,p1__19_SHARP_,map.call(null,p2__20_SHARP_));
}),cljs.core.PersistentVector.EMPTY,ks);
}); return (
new cljs.core.Var(function(){return gadjett.async_utils.select_vals_in_order;},new cljs.core.Symbol("gadjett.async-utils","select-vals-in-order","gadjett.async-utils/select-vals-in-order",(168691842),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"gadjett.async-utils","gadjett.async-utils",(-1869404941),null),new cljs.core.Symbol(null,"select-vals-in-order","select-vals-in-order",(2046108443),null),"gadjett/async_utils.cljc",(28),(1),(188),(188),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map","map",(-1282745308),null),new cljs.core.Symbol(null,"ks","ks",(-754231827),null)], null)),"Thanks [Jay Fields](http://blog.jayfields.com/2011/01/clojure-select-keys-select-values-and.html)",(cljs.core.truth_(gadjett.async_utils.select_vals_in_order)?gadjett.async_utils.select_vals_in_order.cljs$lang$test:null)])));})()
;
/**
 * Receives a vector of {:f-name name :f-deps dependent-functions :f async-function}, and runs the functions one after the other. Each function is called with the result of its dependent functnios.
 *   Returns a channel with the result of all the functions, or with an error if one of the functions failed.
 */
(function (){
gadjett.async_utils.safe_serial = (function gadjett$async_utils$safe_serial(functions){
var c__8__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8__auto__){
return (function (){
var f__9__auto__ = (function (){var switch__3__auto__ = ((function (c__8__auto__){
return (function (state_1535){
var state_val_1536 = (state_1535[(1)]);
if((state_val_1536 === (32))){
var inst_1480 = (state_1535[(7)]);
var inst_1522 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_1480)].join('');
var inst_1523 = (new Error(inst_1522));
var inst_1524 = (function(){throw inst_1523})();
var state_1535__$1 = state_1535;
var statearr_1537_1591 = state_1535__$1;
(statearr_1537_1591[(2)] = inst_1524);

(statearr_1537_1591[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1536 === (1))){
var inst_1437 = cljs.core.PersistentHashMap.EMPTY;
var inst_1438 = inst_1437;
var inst_1439 = functions;
var state_1535__$1 = (function (){var statearr_1538 = state_1535;
(statearr_1538[(8)] = inst_1438);

(statearr_1538[(9)] = inst_1439);

return statearr_1538;
})();
var statearr_1539_1592 = state_1535__$1;
(statearr_1539_1592[(2)] = null);

(statearr_1539_1592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1536 === (33))){
var state_1535__$1 = state_1535;
var statearr_1540_1593 = state_1535__$1;
(statearr_1540_1593[(2)] = null);

(statearr_1540_1593[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1536 === (2))){
var inst_1439 = (state_1535[(9)]);
var inst_1441 = cljs.core.empty_QMARK_.call(null,inst_1439);
var state_1535__$1 = state_1535;
if(inst_1441){
var statearr_1541_1594 = state_1535__$1;
(statearr_1541_1594[(1)] = (4));

} else {
var statearr_1542_1595 = state_1535__$1;
(statearr_1542_1595[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1536 === (34))){
var inst_1527 = (state_1535[(2)]);
var state_1535__$1 = state_1535;
var statearr_1543_1596 = state_1535__$1;
(statearr_1543_1596[(2)] = inst_1527);

(statearr_1543_1596[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1536 === (3))){
var inst_1533 = (state_1535[(2)]);
var state_1535__$1 = state_1535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1535__$1,inst_1533);
} else {
if((state_val_1536 === (4))){
var inst_1438 = (state_1535[(8)]);
var inst_1443 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_1444 = [new cljs.core.Keyword(null,"ok","ok",(967785236)),inst_1438];
var inst_1445 = (new cljs.core.PersistentVector(null,(2),(5),inst_1443,inst_1444,null));
var state_1535__$1 = state_1535;
var statearr_1544_1597 = state_1535__$1;
(statearr_1544_1597[(2)] = inst_1445);

(statearr_1544_1597[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1536 === (5))){
var inst_1439 = (state_1535[(9)]);
var inst_1448 = (state_1535[(10)]);
var inst_1448__$1 = cljs.core.first.call(null,inst_1439);
var inst_1450 = (inst_1448__$1 == null);
var inst_1451 = cljs.core.not.call(null,inst_1450);
var state_1535__$1 = (function (){var statearr_1545 = state_1535;
(statearr_1545[(10)] = inst_1448__$1);

return statearr_1545;
})();
if(inst_1451){
var statearr_1546_1598 = state_1535__$1;
(statearr_1546_1598[(1)] = (7));

} else {
var statearr_1547_1599 = state_1535__$1;
(statearr_1547_1599[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1536 === (6))){
var inst_1531 = (state_1535[(2)]);
var state_1535__$1 = state_1535;
var statearr_1548_1600 = state_1535__$1;
(statearr_1548_1600[(2)] = inst_1531);

(statearr_1548_1600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1536 === (7))){
var inst_1448 = (state_1535[(10)]);
var inst_1453 = inst_1448.cljs$lang$protocol_mask$partition0$;
var inst_1454 = (inst_1453 & (64));
var inst_1455 = inst_1448.cljs$core$ISeq$;
var inst_1456 = (cljs.core.PROTOCOL_SENTINEL === inst_1455);
var inst_1457 = (inst_1454) || (inst_1456);
var state_1535__$1 = state_1535;
if(cljs.core.truth_(inst_1457)){
var statearr_1549_1601 = state_1535__$1;
(statearr_1549_1601[(1)] = (10));

} else {
var statearr_1550_1602 = state_1535__$1;
(statearr_1550_1602[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1536 === (8))){
var state_1535__$1 = state_1535;
var statearr_1551_1603 = state_1535__$1;
(statearr_1551_1603[(2)] = false);

(statearr_1551_1603[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1536 === (9))){
var inst_1464 = (state_1535[(2)]);
var state_1535__$1 = state_1535;
if(cljs.core.truth_(inst_1464)){
var statearr_1552_1604 = state_1535__$1;
(statearr_1552_1604[(1)] = (13));

} else {
var statearr_1553_1605 = state_1535__$1;
(statearr_1553_1605[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1536 === (10))){
var state_1535__$1 = state_1535;
var statearr_1554_1606 = state_1535__$1;
(statearr_1554_1606[(2)] = true);

(statearr_1554_1606[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1536 === (11))){
var state_1535__$1 = state_1535;
var statearr_1555_1607 = state_1535__$1;
(statearr_1555_1607[(2)] = false);

(statearr_1555_1607[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1536 === (12))){
var inst_1461 = (state_1535[(2)]);
var state_1535__$1 = state_1535;
var statearr_1556_1608 = state_1535__$1;
(statearr_1556_1608[(2)] = inst_1461);

(statearr_1556_1608[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1536 === (13))){
var inst_1448 = (state_1535[(10)]);
var inst_1466 = cljs.core.apply.call(null,cljs.core.hash_map,inst_1448);
var state_1535__$1 = state_1535;
var statearr_1557_1609 = state_1535__$1;
(statearr_1557_1609[(2)] = inst_1466);

(statearr_1557_1609[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1536 === (14))){
var inst_1448 = (state_1535[(10)]);
var state_1535__$1 = state_1535;
var statearr_1558_1610 = state_1535__$1;
(statearr_1558_1610[(2)] = inst_1448);

(statearr_1558_1610[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1536 === (15))){
var inst_1438 = (state_1535[(8)]);
var inst_1469 = (state_1535[(2)]);
var inst_1470 = cljs.core.get.call(null,inst_1469,new cljs.core.Keyword(null,"f","f",(-1597136552)));
var inst_1471 = cljs.core.get.call(null,inst_1469,new cljs.core.Keyword(null,"f-deps","f-deps",(1237903746)));
var inst_1472 = cljs.core.get.call(null,inst_1469,new cljs.core.Keyword(null,"f-name","f-name",(1829376078)));
var inst_1473 = gadjett.async_utils.select_vals_in_order.call(null,inst_1438,inst_1471);
var inst_1478 = cljs.core.apply.call(null,inst_1470,inst_1473);
var state_1535__$1 = (function (){var statearr_1559 = state_1535;
(statearr_1559[(11)] = inst_1472);

return statearr_1559;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1535__$1,(16),inst_1478);
} else {
if((state_val_1536 === (16))){
var inst_1480 = (state_1535[(7)]);
var inst_1480__$1 = (state_1535[(2)]);
var inst_1481 = cljs.core.vector_QMARK_.call(null,inst_1480__$1);
var inst_1482 = cljs.core.count.call(null,inst_1480__$1);
var inst_1483 = (inst_1482 === (2));
var inst_1484 = (inst_1481) && (inst_1483);
var state_1535__$1 = (function (){var statearr_1560 = state_1535;
(statearr_1560[(7)] = inst_1480__$1);

return statearr_1560;
})();
if(cljs.core.truth_(inst_1484)){
var statearr_1561_1611 = state_1535__$1;
(statearr_1561_1611[(1)] = (17));

} else {
var statearr_1562_1612 = state_1535__$1;
(statearr_1562_1612[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1536 === (17))){
var inst_1480 = (state_1535[(7)]);
var inst_1486 = cljs.core.nth.call(null,inst_1480,(0));
var inst_1487 = cljs.core.keyword_identical_QMARK_.call(null,inst_1486,new cljs.core.Keyword(null,"error","error",(-978969032)));
var state_1535__$1 = state_1535;
if(inst_1487){
var statearr_1563_1613 = state_1535__$1;
(statearr_1563_1613[(1)] = (20));

} else {
var statearr_1564_1614 = state_1535__$1;
(statearr_1564_1614[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1536 === (18))){
var state_1535__$1 = state_1535;
var statearr_1565_1615 = state_1535__$1;
(statearr_1565_1615[(1)] = (32));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1536 === (19))){
var inst_1529 = (state_1535[(2)]);
var state_1535__$1 = state_1535;
var statearr_1567_1616 = state_1535__$1;
(statearr_1567_1616[(2)] = inst_1529);

(statearr_1567_1616[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1536 === (20))){
var inst_1480 = (state_1535[(7)]);
var inst_1472 = (state_1535[(11)]);
var inst_1438 = (state_1535[(8)]);
var inst_1489 = cljs.core.nth.call(null,inst_1480,(1));
var inst_1490 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_1491 = [new cljs.core.Keyword(null,"f-name","f-name",(1829376078)),new cljs.core.Keyword(null,"error","error",(-978969032))];
var inst_1492 = [inst_1472,inst_1489];
var inst_1493 = cljs.core.PersistentHashMap.fromArrays(inst_1491,inst_1492);
var inst_1494 = [new cljs.core.Keyword(null,"error","error",(-978969032)),inst_1438,inst_1493];
var inst_1495 = (new cljs.core.PersistentVector(null,(3),(5),inst_1490,inst_1494,null));
var state_1535__$1 = state_1535;
var statearr_1568_1617 = state_1535__$1;
(statearr_1568_1617[(2)] = inst_1495);

(statearr_1568_1617[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1536 === (21))){
var state_1535__$1 = state_1535;
var statearr_1569_1618 = state_1535__$1;
(statearr_1569_1618[(1)] = (23));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1536 === (22))){
var inst_1519 = (state_1535[(2)]);
var state_1535__$1 = state_1535;
var statearr_1571_1619 = state_1535__$1;
(statearr_1571_1619[(2)] = inst_1519);

(statearr_1571_1619[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1536 === (23))){
var inst_1480 = (state_1535[(7)]);
var inst_1498 = cljs.core.nth.call(null,inst_1480,(0));
var inst_1499 = cljs.core.keyword_identical_QMARK_.call(null,inst_1498,new cljs.core.Keyword(null,"ok","ok",(967785236)));
var state_1535__$1 = state_1535;
if(inst_1499){
var statearr_1572_1620 = state_1535__$1;
(statearr_1572_1620[(1)] = (26));

} else {
var statearr_1573_1621 = state_1535__$1;
(statearr_1573_1621[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1536 === (24))){
var state_1535__$1 = state_1535;
var statearr_1574_1622 = state_1535__$1;
(statearr_1574_1622[(2)] = null);

(statearr_1574_1622[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1536 === (25))){
var inst_1517 = (state_1535[(2)]);
var state_1535__$1 = state_1535;
var statearr_1575_1623 = state_1535__$1;
(statearr_1575_1623[(2)] = inst_1517);

(statearr_1575_1623[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1536 === (26))){
var inst_1480 = (state_1535[(7)]);
var inst_1438 = (state_1535[(8)]);
var inst_1472 = (state_1535[(11)]);
var inst_1439 = (state_1535[(9)]);
var inst_1501 = cljs.core.nth.call(null,inst_1480,(1));
var inst_1502 = cljs.core.assoc.call(null,inst_1438,inst_1472,inst_1501);
var inst_1503 = cljs.core.rest.call(null,inst_1439);
var inst_1438__$1 = inst_1502;
var inst_1439__$1 = inst_1503;
var state_1535__$1 = (function (){var statearr_1576 = state_1535;
(statearr_1576[(8)] = inst_1438__$1);

(statearr_1576[(9)] = inst_1439__$1);

return statearr_1576;
})();
var statearr_1577_1624 = state_1535__$1;
(statearr_1577_1624[(2)] = null);

(statearr_1577_1624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1536 === (27))){
var state_1535__$1 = state_1535;
var statearr_1578_1625 = state_1535__$1;
(statearr_1578_1625[(1)] = (29));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1536 === (28))){
var inst_1514 = (state_1535[(2)]);
var state_1535__$1 = state_1535;
var statearr_1580_1626 = state_1535__$1;
(statearr_1580_1626[(2)] = inst_1514);

(statearr_1580_1626[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1536 === (29))){
var inst_1480 = (state_1535[(7)]);
var inst_1507 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_1480)].join('');
var inst_1508 = (new Error(inst_1507));
var inst_1509 = (function(){throw inst_1508})();
var state_1535__$1 = state_1535;
var statearr_1581_1627 = state_1535__$1;
(statearr_1581_1627[(2)] = inst_1509);

(statearr_1581_1627[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1536 === (30))){
var state_1535__$1 = state_1535;
var statearr_1582_1628 = state_1535__$1;
(statearr_1582_1628[(2)] = null);

(statearr_1582_1628[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1536 === (31))){
var inst_1512 = (state_1535[(2)]);
var state_1535__$1 = state_1535;
var statearr_1583_1629 = state_1535__$1;
(statearr_1583_1629[(2)] = inst_1512);

(statearr_1583_1629[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8__auto__))
;
return ((function (switch__3__auto__,c__8__auto__){
return (function() {
var gadjett$async_utils$safe_serial_$_state_machine__4__auto__ = null;
var gadjett$async_utils$safe_serial_$_state_machine__4__auto____0 = (function (){
var statearr_1587 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1587[(0)] = gadjett$async_utils$safe_serial_$_state_machine__4__auto__);

(statearr_1587[(1)] = (1));

return statearr_1587;
});
var gadjett$async_utils$safe_serial_$_state_machine__4__auto____1 = (function (state_1535){
while(true){
var ret_value__5__auto__ = (function (){try{while(true){
var result__6__auto__ = switch__3__auto__.call(null,state_1535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__6__auto__;
}
break;
}
}catch (e1588){if((e1588 instanceof Object)){
var ex__7__auto__ = e1588;
var statearr_1589_1630 = state_1535;
(statearr_1589_1630[(5)] = ex__7__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1535);

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
throw e1588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__1631 = state_1535;
state_1535 = G__1631;
continue;
} else {
return ret_value__5__auto__;
}
break;
}
});
gadjett$async_utils$safe_serial_$_state_machine__4__auto__ = function(state_1535){
switch(arguments.length){
case 0:
return gadjett$async_utils$safe_serial_$_state_machine__4__auto____0.call(this);
case 1:
return gadjett$async_utils$safe_serial_$_state_machine__4__auto____1.call(this,state_1535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gadjett$async_utils$safe_serial_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$0 = gadjett$async_utils$safe_serial_$_state_machine__4__auto____0;
gadjett$async_utils$safe_serial_$_state_machine__4__auto__.cljs$core$IFn$_invoke$arity$1 = gadjett$async_utils$safe_serial_$_state_machine__4__auto____1;
return gadjett$async_utils$safe_serial_$_state_machine__4__auto__;
})()
;})(switch__3__auto__,c__8__auto__))
})();
var state__10__auto__ = (function (){var statearr_1590 = f__9__auto__.call(null);
(statearr_1590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8__auto__);

return statearr_1590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10__auto__);
});})(c__8__auto__))
);

return c__8__auto__;
}); return (
new cljs.core.Var(function(){return gadjett.async_utils.safe_serial;},new cljs.core.Symbol("gadjett.async-utils","safe-serial","gadjett.async-utils/safe-serial",(-2061207443),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.async-utils","gadjett.async-utils",(-1869404941),null),new cljs.core.Symbol(null,"safe-serial","safe-serial",(-1323606538),null),"gadjett/async_utils.cljc",(18),(1),(193),(193),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"functions","functions",(1825482993),null)], null)),"Receives a vector of {:f-name name :f-deps dependent-functions :f async-function}, and runs the functions one after the other. Each function is called with the result of its dependent functnios.\n  Returns a channel with the result of all the functions, or with an error if one of the functions failed.",(cljs.core.truth_(gadjett.async_utils.safe_serial)?gadjett.async_utils.safe_serial.cljs$lang$test:null)])));})()
;
