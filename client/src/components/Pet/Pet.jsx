import { useState } from 'react'
import { useNavigate} from 'react-router-dom';
import axios from 'axios';




const Pet = () => {

  const [petName,setPetname]= useState("");
  const [petType,setPetType]= useState("");
  const [petGender,setPetGender] = useState("");
  const [petDescription,setPetDescription] = useState("")
  // const [petLike,setPetLike] = useState("");
  //const [petImage,setPetImage] = useState("");
  const [errors, setErrors] = useState({});
  const navigateTo = useNavigate();

  
  const savePet = e =>{
    e.preventDefault();
    console.log({petName:petName,
      petType:petType,
      petDescription:petDescription,
      petGender:petGender})
    axios.post("http://localhost:8000/pets/new",{
      petName:petName,
      petType:petType,
      petDescription:petDescription,
      petGender:petGender
      
    })
    .then(res => navigateTo('/'))
    .catch(err =>{ setErrors(err.response.data)
      console.log(err)})
    

  }


  return (
    < >
    <div className="bg-dogostep h-[950px] bg-no-repeat">
      <div className="mx-auto h-[18rem] max-w-[1080px] w-screen border">
        
        <div className="grid grid-cols-2 grid-rows-1 gap-4">
            <div>
              <h1>LOGO</h1>
              <div>
                ficha tecnica
              </div>
            </div>
            <div >boton</div>
        </div>
    
      </div>

      <form onSubmit={savePet}>
      <div className='mx-auto h-[23rem]  max-w-[1080px] w-screen border'>
        
        <div className="grid grid-cols-2 grid-rows-1 gap-4">

            <div className=" h-80   border pt-8 pl-8 gap-y-10" >
            <div className="join join-horizontal  gap-x-2 ">
            <input type="text" value={petName} id='petName' onChange={(e)=>setPetname(e.target.value)}  placeholder="Nombre" className="input join-item input-bordered  border-lime-500 bg-white  w-full max-w-xs " />
            <input type="text" value={petType} id='petType' onChange={(e)=>setPetType(e.target.value)} placeholder="perro o gato" className="input join-item input-bordered border-lime-500 bg-white  w-full max-w-xs " />
            {/* {errors.petType ? <span className="text-danger">{errors.petType.message}</span>: null} */}
            

            </div>

            <div className="join join-horizontal gap-2">
            <input type="text" placeholder="Type here" className="input join-item input-bordered border-lime-500 bg-white  w-full max-w-xs " />
            <select value={petGender} id='petGender' onChange={(e)=>{setPetGender(e.target.value),console.log(e.target.value)}}  className="select select-primary w-full max-w-xs">
            <option value={'Male'} id='Male'>Male</option>
            <option value={'Female'} id='Female'>Female</option>
            </select>
            </div>

              
            <div className="join join-horizontal">
            <button  type='submit'  className="btn btn-active btn-primary">Primary</button>
            
            </div>
            {/* <input type="file" value={petImage} id='PetImage' onChange={(e)=>setPetImage(e.target.value)} className="file-input file-input-bordered file-input-success w-full max-w-xs" /> */}
            <textarea value={petDescription} id='petDescription' onChange={(e)=>setPetDescription(e.target.value)}  className="textarea textarea-primary w-80" placeholder="Bio"></textarea>
           
            
            </div>
            
            <div >2</div>
            
        </div>
    
      </div>
      </form>
      <button  type='button' onClick={()=>navigateTo('/')} className="btn btn-active btn-primary">wena los cabrops</button>
    </div>
    </>
  )
}

export default Pet