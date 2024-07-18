let [count,setcount]=useState(1);
let [values,setvalue]=useState('');
let [editing,isediting]=useState([]);
let [val,editval]=useState('');
let [list,dispatch]=useReducer(reducer,[]);

function edittodo(id){   //we cannot directly change value of statevariable(as array) so use this method.
          if(editing[id] && editval){
             let p=[...todo];
             p.map((el)=>{
                    if(el.id==id){
                              el.data=val;
                    }
                    return el;
             })
             
              settodo([...p])
              editval('')
          }
          let p=[...editing];
          p[id]=!p[id];
          isediting([...p]);
          return (
          <>
          <input type="text" placeholder="enter todo..." onChange={(el)=>setvalue(el.target.value)}></input>
          <button onClick={()=>values && mate() }>save</button>
          </>
          )
}
function pop(id){
          let p=todo.filter((el)=>el.id!=id);
          settodo([...p]);
}

function mate(){
          settodo([...todo,{id:count,data:values}])
          setcount(count+1);
}