
import {runInAction,observable,isArrayLike,computed,autorun,when,reaction,action} from 'mobx';
import '../style/style.css'

class Store{
	@observable array=[];
	@observable obj={};
	@observable map=new Map();

	@observable string='hello';
	@observable number=20;
	@observable bool =true;
	@computed get mixed(){
		return store.string+'/'+store.number;
	}

	@action.bound bar(){
		this.string="world ";
		this.number="303";
	}
}

var store=new Store();
//computed
/*var foo=computed(function(){return store.string+'/'+store.number});
foo.observe(function(change){
	console.log('change');
})*/

if(module.hot){
    module.hot.accept();
}

//autorun
/*autorun(()=>{
	console.log(store.mixed)
})
console.log('before')
//when
when(()=>store.bool,()=>console.log('it`s true'))
store.bool=true;
console.log('after');*/
//reaction

reaction(()=>[store.string,store.number],arr=>console.log(arr.join(" ")));
store.string="world ";
store.number="303";

/*console.log('has sfsf');
runInAction('modify',()=>{
	store.string="world ";
		store.number="303";
})*/
