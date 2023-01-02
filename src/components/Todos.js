import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const Todos = () => {
  const list1=JSON.parse(localStorage.getItem('list'))||'[]'
  const [entry, setentry] = useState("");
  const[data,setdata]=useState([])
  
  console.log(entry)

  function handlesubmit(){
    const newData=entry
    if(!newData){
        alert('enter a value')
        return
    }
    setdata([...data,newData])
    setentry('')
  }

  function deleteItem(id){
    console.log(id)
    const updated=data.filter((val,index)=> id!=index)
    setdata(updated)

  }
  useEffect(()=>{
      setdata(list1)
  },[])


  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(data))
  },[data])
 
  return (
    <div>
      <Card style={{ width: "28rem" ,margin:'auto',marginTop:'200px'}}>
        <Card.Header>
            <div className="row justify-content-center align-items-center mb-3">
            <div className="col-md-8">
            <input type='text' className="form-control" placeholder="enter task" value={entry} name='task'
                onChange={(e)=>setentry(e.target.value)}
            />
            </div>
            <div className="col-md-3">
            <button className="btn btn-secondary p-1 m-2 " onClick={handlesubmit}>Submit</button>
            </div>
            </div>
            {
        data.map((elem,index)=>{
            return(
            <div key={index}>
                <div className="row justify-content-center align-items-center m-1">
                    <div className="col-md-7 text-center border"><p>{elem}</p></div>
                    <div className="col-md-3"><button onClick={()=>deleteItem(index)}><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"></path></svg></button></div>

                </div>
                
            </div>
            )
        })
     }
        </Card.Header>
      </Card>
     
    </div>
  );
};

export default Todos;
