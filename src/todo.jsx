import { useState, useContext, useReducer } from "react"
import  createContext  from './todocontext.jsx'



function Todo(){
  let {todo,settodo}=useContext(createContext);
          let [count,setcount]=useState(1);
          let [values,setvalue]=useState('');
          let [editing,isediting]=useState([]);
        let [val,editval]=useState('');
    
         
          function get(id){   //we cannot directly change value of statevariable(as array) so use this method.
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
          }
          function pop(id){
                    let p=todo.filter((el)=>el.id!=id);
                    settodo([...p]);
          }

          function mate(){
                    settodo([...todo,{id:count,data:values}])
                    setcount(count+1);
          }
        
return(
          <div>
<input type="text" placeholder="enter todo..." onChange={(el)=>setvalue(el.target.value)}></input>
<button onClick={()=>values && mate() }>save</button>
{todo.map((el)=><div key={el.id} > {!editing[el.id] ? <><input type="checkbox" ></input><span>{el.data}</span></>: <input type="text" defaultValue={el.data} onChange={(el)=>editval(el.target.value)} ></input>}<button onClick={()=>get(el.id)}> {editing[el.id]? 'save':'edit'}</button> <button onClick={()=>pop(el.id)}>delete</button></div>)}
          </div>

)
}
export default Todo