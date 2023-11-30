import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Edit = () => {
  
  const{id} = useParams
  const[pet,setPet] = useState({});
  const[petName,setPetName] = useState('');
  const[petType,setPetType] = useState('');
  const[petDescription,setPetDescription] = useState('');
  const[petGender,setPetGender] = useState('')
  const[error,setErrors] = useState({})
  
  useEffect(()=>{
    axios.put("http://localhost:8000/pet/e/edit/"+id)
    .then(res=>{
      setPet(res.data)
      setPetName(res.data.petName)
      setPetType(res.data.petType)
      setPetDescription(res.data.petDescription)
      setPetGender(res.data.petGender)
    })
    .catch(err => {
      if(err.response.status === 401){
        Navigate('/')
      }else{
        Navigate('/error')
      }
    } )
  },[id])


  const saveMascot = e =>{
    e.preventDefault();
    axios.post("http://localhost:8000/pets/new",{
      petName,petType,petDescription,petGender
    })
    .then(res => Navigate('/'))
    .catch(err => setErrors(err.response.data.errors))
  }


  return (
    <>
    <div className='mx-auto bg-fullsteps max-w-[1920px] border h-[965px] w-full'>
      <div className='mx-auto border border-red-500 max-w-[1080px] h-[965px] w-full  '>
       
       <div className='h-96 max-w-[1080px] border mx-auto w-full'></div>
        <form onSubmit={saveMascot} >
          
        <div className='flex flex-col-1 row-1 mx-auto border border-blue-400 w-1080px h-96 justify-center'>
        
        <div className='flex justify-center place-items-center h-96 w-[24rem] border gap-3  join join-vertical'>
        <div>
            <span className=''>
              Editar
            </span>
          </div>
        <input type="text" placeholder="Nombre" value={petName}
        onChange={(e)=>setPetName(e.target.value)}
         className="input input-bordered input-primary w-full max-w-xs" />
        <input type="text" placeholder="Perro o Gato" value={petType}
        onChange={(e)=>setPetType(e.target.value)} className="input input-bordered input-primary w-full max-w-xs" />
        
        <select onChange={(e)=>setPetGender(e.target.value)} className="select select-primary w-full max-w-xs">
          <option disabled selected value={''}>Sexo</option>
          <option value={'Masculino'}>Masculino</option>
          <option value={'Femenino'}>Femenino</option>
         
        </select>
        <br />
        
        <textarea onChange={(e)=>setPetDescription(e.target.value)} value={petDescription} className="textarea textarea-xl  w-80 textarea-primary" placeholder="Bio"></textarea>
        <button type='submit' className="btn btn-primary">Guardar
        </button>
        </div>
        
        <div>
          
        </div>
        
        
        </div>
        </form>
      </div>
    </div>
    </>
    
  )
}

export default Edit