import {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';


const Pets = () => {

  const[pet,setPets] = useState([]);
  const navigateTo = useNavigate();

  const handleClick = () =>{
    navigateTo('/pets/new')
  }
  const handleClickhome = ()=>{
    navigateTo('/')
  }

  useEffect(()=>{
    axios.get('http://localhost:8000/show/pets')
      .then(res =>{
        console.log(res.data)
        setPets(res.data);
      })
      .catch(err => console.log(err))
  })


  return (
    <>
    <div className='bg-fullsteps  h-[1000px] '>
    <div className='mx-auto max-w-[1200px] w-full '>
      <header className="mx-auto flex justify-end max-w-[1200px] w-full border-red-500">
       <button className='btn  btn-accent' onClick={handleClick}> Ficha ingreso </button>
      
      <button className='btn  btn-accent' onClick={handleClickhome }> home </button>
      </header>

      <section className="mx-auto h-96  max-w-[1200px] w-full border ">
      <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>N</th>
        <th>Details</th>
        <th>Name</th>
        <th>Type</th>
        <th>Gender</th>
        
      </tr>
    </thead>
    <tbody>
      {
        pet.map((pets,index)=>(
      <tr key={index}>

        <td>{index}</td>
        <td><Link className='btn btn-secondary' to={`/pet/${pets._id}`}>details</Link></td>
        <td>{pets.petName}</td>
        <td>{pets.petType}</td>
        <td>{pets.petGender}</td>
        
      </tr>
        ))
      }
    </tbody>
  </table>
</div>
      </section>

    </div>
    </div>
    </>
  )
}

export default Pets