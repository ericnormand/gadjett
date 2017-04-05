goog.provide("gadjett.io");
/**
 * Very simple implementation of XMLHttpRequests that given a file path
 *   calls src-cb with the string fetched of nil in case of error.
 *   See doc at https://developers.google.com/closure/library/docs/xhrio
 */
(function (){
gadjett.io.fetch_file_BANG_ = (function gadjett$io$fetch_file_BANG_(file_url,src_cb){
try{return goog.net.XhrIo.send(file_url,(function (e){
if(cljs.core.truth_(e.target.isSuccess())){
return src_cb.call(null,e.target.getResponseText());
} else {
return src_cb.call(null,null);
}
}));
}catch (e304){var e = e304;
return src_cb.call(null,null);
}}); return (
new cljs.core.Var(function(){return gadjett.io.fetch_file_BANG_;},new cljs.core.Symbol("gadjett.io","fetch-file!","gadjett.io/fetch-file!",(-1728174644),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.io","gadjett.io",(123163912),null),new cljs.core.Symbol(null,"fetch-file!","fetch-file!",(648597723),null),"gadjett/io.cljs",(18),(1),(4),(4),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"file-url","file-url",(776792564),null),new cljs.core.Symbol(null,"src-cb","src-cb",(1577514671),null)], null)),"Very simple implementation of XMLHttpRequests that given a file path\n  calls src-cb with the string fetched of nil in case of error.\n  See doc at https://developers.google.com/closure/library/docs/xhrio",(cljs.core.truth_(gadjett.io.fetch_file_BANG_)?gadjett.io.fetch_file_BANG_.cljs$lang$test:null)])));})()
;
