import {useEffect, useState} from 'react';
import axios from 'axios';

const Pets = () => {

  const[pet,setPets] = useState([]);

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
    <div className='mx-auto max-w-[1200px] w-full border'>
      <header className="mx-auto max-w-[1200px] w-full border-red-500">
       horizontal 
      </header>

      <section className="mx-auto h-96  max-w-[1200px] w-full border ">
      <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>N</th>
        <th>Name</th>
        <th>Type</th>
        <th>Genero</th>
        <th>Descripcion</th>
      </tr>
    </thead>
    <tbody>
      {
        pet.map((pets,index)=>(
      <tr key={index}>

        <td>{index}</td>
        <td>{pets.petName}</td>
        <td>{pets.petType}</td>
        <td>{pets.petGender}</td>
        <td>{pets.petDescription}</td>
      </tr>
        ))
      }
    </tbody>
  </table>
</div>
      </section>

    </div>
    </>
  )
}

export default Pets