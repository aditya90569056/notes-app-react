import React from 'react'
import { useState } from 'react'
const App = () => {
  const [title,setTitle] = useState("");
  const [details,setDetails] = useState("");
  const [task,setTask] = useState([]);
  const submit = (e)=>{
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({title,details});
    setTask(copyTask);
    setTitle("");
    setDetails("");
  }
  const deleteNote = (index)=>{
    const copyTask = [...task];
    copyTask.splice(index, 1);
    setTask(copyTask);

  }
  return (
    <div className='h-screen lg:flex flex-col bg-black text-white' >
      <form className='flex gap-4 p-10  flex-col lg:w-1/2' onSubmit={submit}>
     <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>
     <input type='text' 
     placeholder='Enter notes Details'
       className='px-5 py-2 border-2 outline-none rounded w-full h-20'
       value={title}
       onChange={(e)=>{
        setTitle(e.target.value);
       }}
     />
     <textarea 
     value={details}
      type='text'
      className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded '
      placeholder='Write Details here'
      onChange={
        (e)=>{
          setDetails(e.target.value)
        }
      }
     />
     <button className='px-5 py-2 outline-none bg-white rounded text-gray-900 font-bold'>Add Notes</button>
     
         </form>
        <div className='lg:w-1/2 lg/:border-1-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-hidden'>
          {task.map(function(elem,index){

            return <div key={index} className='w-80 h-40 bg-gray-900 rounded p-5 flex flex-col justify-between'>
              <div>
                <h1 className='text-2xl font-bold'>{elem.title}</h1>
                <p className='text-sm mt-2'>{elem.details}</p>
              </div>
              <button onClick={()=>deleteNote(index)} className='px-5 py-2 outline-none bg-red-500 rounded text-white font-bold'>Delete</button>
            </div>
          })

          }
        </div>
        </div> 
      </div>
     
  )
}

export default App;