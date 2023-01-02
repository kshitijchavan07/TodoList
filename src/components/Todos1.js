import React, { useReducer, useRef } from 'react'
import { Container } from 'react-bootstrap'
import { Card } from "react-bootstrap";
const initialState=[]
const reducer=(state,action)=>{
  switch(action.type){
    case 'add':
      return [...state,action.task]
    case 'delete':
      return state.filter((ele,id)=>id!=action.index)
  }
}
const Todos1 = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const InputRef=useRef()
   function handlesubmit(e){
    if(!InputRef.current.value){
      alert('value is required')
      return
    }
    e.preventDefault()
    dispatch({
      type:'add',
      task:InputRef.current.value
    })
    InputRef.current.value=''
     console.log(state)
   }

  return (
    <div>
    <Container style={{display:'flex',justifyContent:'center',alignItems:'center',height:'90vh'}}>
    <Card style={{ width: "28rem"}}>
        <Card.Header>
            <div className="row justify-content-center align-items-center mb-3">
            <div className="col-md-8">
            <input type='text' className="form-control" placeholder="enter task"  name='task' ref={InputRef}/>
            </div>
            <div className="col-md-3">
            <button className="btn btn-dark p-1 m-2 " onClick={handlesubmit}>Submit</button>
            </div>
            </div>
            {
        state.map((elem,index)=>{
            return(
            <div key={index}>
                <div className="row justify-content-center align-items-center m-1">
                    <div className="col-md-7 text-center border"><p>{elem}</p></div>
                    <div className="col-md-3"><button onClick={()=>dispatch({type:'delete',index})}><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"></path></svg></button></div>

                </div>
                
            </div>
            )
        })
     }
        </Card.Header>
      </Card>
    </Container>
    </div>
  )
}

export default Todos1