//.........about useReducer....

import { useState } from "react";

function reducer(state,action){
          if(state.type=='addtodo'){
                    let todotext=action.payload.todotext;
                    return [...state,{id:state.length+1,data:todotext}]
          }
          return state;  //compulsory to do if above conditions are not fulfilled..
}

let [list,dispatch]=useState(reducer,[])

let updatelist=(el)=>dispatch({type:"addtodo",payload:{todotext:el}})

//now calling updatelist in component(or anywhere) with value will call dispatch and dispatch ultimately calls reducer with action parameter containing type and payload of dispatch and state is list and return part will be returned on list..