import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


const Details = () => {

  const {id} = useParams();
  const [pets,setPets] = useState([])
  const navigateTo = useNavigate();

  useEffect(()=>{
    axios.get("http://localhost:8000/pet/"+id)
    .then(res =>{
      console.log(res.data);
      setPets(res.data);

    })
    .catch(err => console.log(err))
  },[id,])


  const adopted = (idPets)=>{
    axios.delete("http://localhost:8000/pet/d/e/delete/"+idPets)
    .then(res =>{
      setPets(navigateTo('/'));
    },[id,navigateTo])
  }

  return (
    <div className='mx-auto h-[1080px] max-w-[1080px] w-screen border border-red-300 '>
        <header className='mx-auto h-[300px] border max-w-[1080px]'>
        <div className="grid grid-cols-2 grid-rows-1 ">
        <div  className='h-32 w-96 mx-auto border grid justify-items-start'>
          <p>Logo</p>
          
            <p>texto</p>
          
        </div>
        <div className='h-32 w-96 border mx-auto grid justify-items-end'>
          <button className='btn btn-accent' >back home</button>
          <button className='btn btn-accent'onClick={()=>adopted(pets._id)}> Adoptame nombre del perro {pets.petName}</button>
        </div>
        
        </div>
    
        </header>
        <div className='h-16 font-bold '>
          <br />
          <p className=' '>Detalles de {pets.petName} </p>
        </div>
        <div className=' grid grid-cols-1 border border-red-300 max-h-[800px] max-w-[1080px] '>
        <div className='h-96  w-full border flex flex-col font-bold  '>
          <br />
          <p>tipo: {pets.petType} </p>
          <br />
          <p>genero: {pets.petGender} </p>
          <br />
          <p>descripcion: <br />{pets.petDescription} </p>
        </div>
        </div>
    </div>
  )
}

export default Details    