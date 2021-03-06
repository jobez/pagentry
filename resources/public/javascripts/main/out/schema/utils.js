// Compiled by ClojureScript 0.0-2227
goog.provide('schema.utils');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string');
goog.require('goog.string.format');
/**
* Like assoc but only assocs when value is truthy.  Copied from plumbing.core so that
* schema need not depend on plumbing.
* @param {...*} var_args
*/
schema.utils.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null))))))));
}
return cljs.core.into.call(null,(function (){var or__11126__auto__ = m;if(cljs.core.truth_(or__11126__auto__))
{return or__11126__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__11851__auto__ = (function iter__22228(s__22229){return (new cljs.core.LazySeq(null,(function (){var s__22229__$1 = s__22229;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__22229__$1);if(temp__4092__auto__)
{var s__22229__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22229__$2))
{var c__11849__auto__ = cljs.core.chunk_first.call(null,s__22229__$2);var size__11850__auto__ = cljs.core.count.call(null,c__11849__auto__);var b__22231 = cljs.core.chunk_buffer.call(null,size__11850__auto__);if((function (){var i__22230 = 0;while(true){
if((i__22230 < size__11850__auto__))
{var vec__22234 = cljs.core._nth.call(null,c__11849__auto__,i__22230);var k = cljs.core.nth.call(null,vec__22234,0,null);var v = cljs.core.nth.call(null,vec__22234,1,null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__22231,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__22236 = (i__22230 + 1);
i__22230 = G__22236;
continue;
}
} else
{{
var G__22237 = (i__22230 + 1);
i__22230 = G__22237;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22231),iter__22228.call(null,cljs.core.chunk_rest.call(null,s__22229__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22231),null);
}
} else
{var vec__22235 = cljs.core.first.call(null,s__22229__$2);var k = cljs.core.nth.call(null,vec__22235,0,null);var v = cljs.core.nth.call(null,vec__22235,1,null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__22228.call(null,cljs.core.rest.call(null,s__22229__$2)));
} else
{{
var G__22238 = cljs.core.rest.call(null,s__22229__$2);
s__22229__$1 = G__22238;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__11851__auto__.call(null,cljs.core.partition.call(null,2,kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__22239){
var m = cljs.core.first(arglist__22239);
var kvs = cljs.core.rest(arglist__22239);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
schema.utils.type_of = (function type_of(x){return typeof x;
});
/**
* What class can we associate the fn schema with? In Clojure use the class of the fn; in
* cljs just use the fn itself.
*/
schema.utils.fn_schema_bearer = (function fn_schema_bearer(f){return f;
});
/**
* @param {...*} var_args
*/
schema.utils.format_STAR_ = (function() { 
var format_STAR___delegate = function (fmt,args){return cljs.core.apply.call(null,goog.string.format,fmt,args);
};
var format_STAR_ = function (fmt,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return format_STAR___delegate.call(this,fmt,args);};
format_STAR_.cljs$lang$maxFixedArity = 1;
format_STAR_.cljs$lang$applyTo = (function (arglist__22240){
var fmt = cljs.core.first(arglist__22240);
var args = cljs.core.rest(arglist__22240);
return format_STAR___delegate(fmt,args);
});
format_STAR_.cljs$core$IFn$_invoke$arity$variadic = format_STAR___delegate;
return format_STAR_;
})()
;
/**
* Provide a descriptive short name for a value.
*/
schema.utils.value_name = (function value_name(value){var t = schema.utils.type_of.call(null,value);if((cljs.core.count.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value))) < 20))
{return value;
} else
{return cljs.core.symbol.call(null,("a-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)));
}
});

/**
* @constructor
*/
schema.utils.ValidationError = (function (schema,value,expectation_delay,fail_explanation){
this.schema = schema;
this.value = value;
this.expectation_delay = expectation_delay;
this.fail_explanation = fail_explanation;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
})
schema.utils.ValidationError.cljs$lang$type = true;
schema.utils.ValidationError.cljs$lang$ctorStr = "schema.utils/ValidationError";
schema.utils.ValidationError.cljs$lang$ctorPrWriter = (function (this__11693__auto__,writer__11694__auto__,opt__11695__auto__){return cljs.core._write.call(null,writer__11694__auto__,"schema.utils/ValidationError");
});
schema.utils.ValidationError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._pr_writer.call(null,schema.utils.validation_error_explain.call(null,this$__$1),writer,opts);
});
schema.utils.__GT_ValidationError = (function __GT_ValidationError(schema__$1,value,expectation_delay,fail_explanation){return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});
schema.utils.validation_error_explain = (function validation_error_explain(err){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.deref.call(null,err.expectation_delay)),(function (){var or__11126__auto__ = err.fail_explanation;if(cljs.core.truth_(or__11126__auto__))
{return or__11126__auto__;
} else
{return new cljs.core.Symbol(null,"not","not",-1640422260,null);
}
})());
});
/**
* for cljs sake (easier than normalizing imports in macros.clj)
*/
schema.utils.__GT_ValidationError = (function __GT_ValidationError(schema__$1,value,expectation_delay,fail_explanation){return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

/**
* @constructor
*/
schema.utils.NamedError = (function (name,error){
this.name = name;
this.error = error;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
})
schema.utils.NamedError.cljs$lang$type = true;
schema.utils.NamedError.cljs$lang$ctorStr = "schema.utils/NamedError";
schema.utils.NamedError.cljs$lang$ctorPrWriter = (function (this__11693__auto__,writer__11694__auto__,opt__11695__auto__){return cljs.core._write.call(null,writer__11694__auto__,"schema.utils/NamedError");
});
schema.utils.NamedError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._pr_writer.call(null,schema.utils.named_error_explain.call(null,this$__$1),writer,opts);
});
schema.utils.__GT_NamedError = (function __GT_NamedError(name,error){return (new schema.utils.NamedError(name,error));
});
schema.utils.named_error_explain = (function named_error_explain(err){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,err.name),err.error),new cljs.core.Symbol(null,"named","named",-1535946510,null));
});
/**
* for cljs sake (easier than normalizing imports in macros.clj)
*/
schema.utils.__GT_NamedError = (function __GT_NamedError(name,error){return (new schema.utils.NamedError(name,error));
});

/**
* @constructor
* @param {*} error
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.utils.ErrorContainer = (function (error,__meta,__extmap){
this.error = error;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.utils.ErrorContainer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11707__auto__){var self__ = this;
var this__11707__auto____$1 = this;var h__11537__auto__ = self__.__hash;if(!((h__11537__auto__ == null)))
{return h__11537__auto__;
} else
{var h__11537__auto____$1 = cljs.core.hash_imap.call(null,this__11707__auto____$1);self__.__hash = h__11537__auto____$1;
return h__11537__auto____$1;
}
});
schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11712__auto__,k__11713__auto__){var self__ = this;
var this__11712__auto____$1 = this;return cljs.core._lookup.call(null,this__11712__auto____$1,k__11713__auto__,null);
});
schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11714__auto__,k22242,else__11715__auto__){var self__ = this;
var this__11714__auto____$1 = this;var G__22244 = (((k22242 instanceof cljs.core.Keyword))?k22242.fqn:null);var caseval__22248;
switch (G__22244){
case "error":
caseval__22248=self__.error
break;
default:
caseval__22248=cljs.core.get.call(null,self__.__extmap,k22242,else__11715__auto__)
}
return caseval__22248;
});
schema.utils.ErrorContainer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11719__auto__,k__11720__auto__,G__22241){var self__ = this;
var this__11719__auto____$1 = this;var pred__22245 = cljs.core.keyword_identical_QMARK_;var expr__22246 = k__11720__auto__;if(cljs.core.truth_(pred__22245.call(null,new cljs.core.Keyword(null,"error","error",1110689146),expr__22246)))
{return (new schema.utils.ErrorContainer(G__22241,self__.__meta,self__.__extmap,null));
} else
{return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11720__auto__,G__22241),null));
}
});
schema.utils.ErrorContainer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11726__auto__,writer__11727__auto__,opts__11728__auto__){var self__ = this;
var this__11726__auto____$1 = this;var pr_pair__11729__auto__ = ((function (this__11726__auto____$1){
return (function (keyval__11730__auto__){return cljs.core.pr_sequential_writer.call(null,writer__11727__auto__,cljs.core.pr_writer,""," ","",opts__11728__auto__,keyval__11730__auto__);
});})(this__11726__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__11727__auto__,pr_pair__11729__auto__,"#schema.utils.ErrorContainer{",", ","}",opts__11728__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",1110689146),self__.error],null))], null),self__.__extmap));
});
schema.utils.ErrorContainer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11717__auto__,entry__11718__auto__){var self__ = this;
var this__11717__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__11718__auto__))
{return cljs.core._assoc.call(null,this__11717__auto____$1,cljs.core._nth.call(null,entry__11718__auto__,0),cljs.core._nth.call(null,entry__11718__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__11717__auto____$1,entry__11718__auto__);
}
});
schema.utils.ErrorContainer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11724__auto__){var self__ = this;
var this__11724__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",1110689146),self__.error],null))], null),self__.__extmap));
});
schema.utils.ErrorContainer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11716__auto__){var self__ = this;
var this__11716__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
schema.utils.ErrorContainer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11708__auto__,other__11709__auto__){var self__ = this;
var this__11708__auto____$1 = this;if(cljs.core.truth_((function (){var and__11114__auto__ = other__11709__auto__;if(cljs.core.truth_(and__11114__auto__))
{return ((this__11708__auto____$1.constructor === other__11709__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__11708__auto____$1,other__11709__auto__));
} else
{return and__11114__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.utils.ErrorContainer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11711__auto__,G__22241){var self__ = this;
var this__11711__auto____$1 = this;return (new schema.utils.ErrorContainer(self__.error,G__22241,self__.__extmap,self__.__hash));
});
schema.utils.ErrorContainer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11706__auto__){var self__ = this;
var this__11706__auto____$1 = this;return (new schema.utils.ErrorContainer(self__.error,self__.__meta,self__.__extmap,self__.__hash));
});
schema.utils.ErrorContainer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11710__auto__){var self__ = this;
var this__11710__auto____$1 = this;return self__.__meta;
});
schema.utils.ErrorContainer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11721__auto__,k__11722__auto__){var self__ = this;
var this__11721__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",1110689146),null], null), null),k__11722__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11721__auto____$1),self__.__meta),k__11722__auto__);
} else
{return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11722__auto__)),null));
}
});
schema.utils.ErrorContainer.cljs$lang$type = true;
schema.utils.ErrorContainer.cljs$lang$ctorPrSeq = (function (this__11746__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.utils/ErrorContainer");
});
schema.utils.ErrorContainer.cljs$lang$ctorPrWriter = (function (this__11746__auto__,writer__11747__auto__){return cljs.core._write.call(null,writer__11747__auto__,"schema.utils/ErrorContainer");
});
schema.utils.__GT_ErrorContainer = (function __GT_ErrorContainer(error){return (new schema.utils.ErrorContainer(error));
});
schema.utils.map__GT_ErrorContainer = (function map__GT_ErrorContainer(G__22243){return (new schema.utils.ErrorContainer(new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(G__22243),null,cljs.core.dissoc.call(null,G__22243,new cljs.core.Keyword(null,"error","error",1110689146))));
});
/**
* Distinguish a value (must be non-nil) as an error.
*/
schema.utils.error = (function error(x){if(cljs.core.truth_(x))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"x","x",-1640531407,null))))));
}
return schema.utils.__GT_ErrorContainer.call(null,x);
});
schema.utils.error_QMARK_ = (function error_QMARK_(x){return (x instanceof schema.utils.ErrorContainer);
});
schema.utils.error_val = (function error_val(x){if(schema.utils.error_QMARK_.call(null,x))
{return x.error;
} else
{return null;
}
});
/**
* If maybe-error is an error, wrap the inner value in a NamedError; otherwise, return as-is
*/
schema.utils.wrap_error_name = (function wrap_error_name(name,maybe_error){var temp__4090__auto__ = schema.utils.error_val.call(null,maybe_error);if(cljs.core.truth_(temp__4090__auto__))
{var e = temp__4090__auto__;return schema.utils.error.call(null,schema.utils.__GT_NamedError.call(null,name,e));
} else
{return maybe_error;
}
});
/**
* Build up a result by conjing values, producing an error if at least one
* sub-value returns an error.
*/
schema.utils.result_builder = (function result_builder(lift_to_error){return (function conjer(m,e){var temp__4090__auto__ = schema.utils.error_val.call(null,e);if(cljs.core.truth_(temp__4090__auto__))
{var err = temp__4090__auto__;return schema.utils.error.call(null,cljs.core.conj.call(null,(function (){var or__11126__auto__ = schema.utils.error_val.call(null,m);if(cljs.core.truth_(or__11126__auto__))
{return or__11126__auto__;
} else
{return lift_to_error.call(null,m);
}
})(),err));
} else
{var temp__4090__auto____$1 = schema.utils.error_val.call(null,m);if(cljs.core.truth_(temp__4090__auto____$1))
{var merr = temp__4090__auto____$1;return schema.utils.error.call(null,cljs.core.conj.call(null,merr,null));
} else
{return cljs.core.conj.call(null,m,e);
}
}
});
});
schema.utils.declare_class_schema_BANG_ = (function declare_class_schema_BANG_(klass,schema__$1){return (klass["schema$utils$schema"] = schema__$1);
});
schema.utils.class_schema = (function class_schema(klass){return (klass["schema$utils$schema"]);
});
schema.utils.PSimpleCell = (function (){var obj22250 = {};return obj22250;
})();
schema.utils.get_cell = (function get_cell(this$){if((function (){var and__11114__auto__ = this$;if(and__11114__auto__)
{return this$.schema$utils$PSimpleCell$get_cell$arity$1;
} else
{return and__11114__auto__;
}
})())
{return this$.schema$utils$PSimpleCell$get_cell$arity$1(this$);
} else
{var x__11753__auto__ = (((this$ == null))?null:this$);return (function (){var or__11126__auto__ = (schema.utils.get_cell[goog.typeOf(x__11753__auto__)]);if(or__11126__auto__)
{return or__11126__auto__;
} else
{var or__11126__auto____$1 = (schema.utils.get_cell["_"]);if(or__11126__auto____$1)
{return or__11126__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PSimpleCell.get_cell",this$);
}
}
})().call(null,this$);
}
});
schema.utils.set_cell = (function set_cell(this$,x){if((function (){var and__11114__auto__ = this$;if(and__11114__auto__)
{return this$.schema$utils$PSimpleCell$set_cell$arity$2;
} else
{return and__11114__auto__;
}
})())
{return this$.schema$utils$PSimpleCell$set_cell$arity$2(this$,x);
} else
{var x__11753__auto__ = (((this$ == null))?null:this$);return (function (){var or__11126__auto__ = (schema.utils.set_cell[goog.typeOf(x__11753__auto__)]);if(or__11126__auto__)
{return or__11126__auto__;
} else
{var or__11126__auto____$1 = (schema.utils.set_cell["_"]);if(or__11126__auto____$1)
{return or__11126__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PSimpleCell.set_cell",this$);
}
}
})().call(null,this$,x);
}
});

/**
* @constructor
*/
schema.utils.SimpleVCell = (function (q){
this.q = q;
})
schema.utils.SimpleVCell.cljs$lang$type = true;
schema.utils.SimpleVCell.cljs$lang$ctorStr = "schema.utils/SimpleVCell";
schema.utils.SimpleVCell.cljs$lang$ctorPrWriter = (function (this__11693__auto__,writer__11694__auto__,opt__11695__auto__){return cljs.core._write.call(null,writer__11694__auto__,"schema.utils/SimpleVCell");
});
schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$ = true;
schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$get_cell$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.q;
});
schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$set_cell$arity$2 = (function (this$,x){var self__ = this;
var this$__$1 = this;return self__.q = x;
});
schema.utils.__GT_SimpleVCell = (function __GT_SimpleVCell(q){return (new schema.utils.SimpleVCell(q));
});
/**
* Turn on run-time function validation for functions compiled when
* *compile-function-validation* was true -- has no effect for functions compiled
* when it is false.
*/
schema.utils.use_fn_validation = (new schema.utils.SimpleVCell(false));
schema.utils.use_fn_validation.get_cell = cljs.core.partial.call(null,schema.utils.get_cell,schema.utils.use_fn_validation);
schema.utils.use_fn_validation.set_cell = cljs.core.partial.call(null,schema.utils.set_cell,schema.utils.use_fn_validation);

//# sourceMappingURL=utils.js.map