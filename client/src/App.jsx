
import './App.css'
import { useEffect,useRef } from 'react'

function App() {

  const countupRef = useRef(null);
  let countUpAnim;

 const countupRef2 = useRef(null);
 let countUpAnim2;

 const countupRef3 = useRef(null);
 let countUpAnim3;


  // useEffect(()=>{
  //   initCountUp();
  //   initCountUp2();
  //   initCountUp3();
  // },);

  // async function initCountUp2(){
  //   const countUpModule2 = await import('countup.js');
  //   countUpAnim2 = new countUpModule2.CountUp(countupRef2.current,300,{duration:3.3});
  //   if(!countUpAnim2.error){
  //     countUpAnim2.start();
  //   }else{
  //     console.error(countUpAnim2.error)
  //   }
  // }



  async function initCountUp(){
    const countUpModule = await import('countup.js');
    countUpAnim = new countUpModule.CountUp(countupRef.current,1001,{duration:10.3});
    if(!countUpAnim.error ){
      countUpAnim.start();
    }else{
      console.error(countUpAnim.error);
    }
  }

  async function initCountUp2(){
    const countUpModule2 = await import('countup.js');
    countUpAnim2 = new countUpModule2.CountUp(countupRef2.current,400,{duration:10.3});
    if(!countUpAnim2.error){
      countUpAnim2.start();
    }else{
      console.error(countUpAnim2.error)
    }
  }

  async function initCountUp3(){
    const countUpModule3 = await import('countup.js');
    countUpAnim3 = new countUpModule3.CountUp(countupRef3.current,300,{duration:10.3});
    if(!countUpAnim3.error){
      countUpAnim3.start();
    }else{
      console.error(countUpAnim3.error)
    }
  }
 


  return (
    <>
    menu
      <div className='mx-auto h-[900px] bg-herodog bg-cover bg-center  bg-no-repeat   max-w-full     '> 
        <div className='  mx-auto max-w-[1080px] w-full h-screen  border-red-400 pt-32'>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 content-center'>

              <div className=' w-1'>

              </div>

              <div className='grid h-32 content-center ml-8 mt-8'>
                  <p className='text-4xl text-white  font-mono font-extrabold sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl '>You cant buy love <br /> but you can adopted it</p>
                  
              </div>
              <div></div>
              <div className='flex flex-col h-32  pt-20'>
                <div className='flex justify-center '>
                  <button  className=' h-10 w-32 rounded-full  bg-lime-500 text-base  font-bold'> Adopted me</button>
                  
                </div>
                  
               
              </div>
            </div>
        </div>
      </div>

    <section className='mx-auto text-3xl pt-24  max-w-[1080px] w-full grid grid-cols-3 grid-rows-1 gap-4 border-r-red-300  '>
      <div className='h-32  grid place-content-center '>
        <h1 ref={countupRef} onScroll={()=>{countUpAnim.start();}}>0</h1>
        <span>Rescatados</span>
        </div>
      <div className='h-32 grid border-x place-content-center'>
        <h1 ref={countupRef2} onScroll={()=>{countUpAnim2.start();}} >2</h1>
        <span>Adoptados</span>
        </div>
      <div className='h-32 grid place-content-center'>
        <h1 ref={countupRef3} onScroll={()=>{countUpAnim3.start()}} >3</h1>
        <span>por adoptar</span>
        </div>
    </section>


      <div className='flex flex-col pt-32  bg-fill bg-no-repeat z-40'>
        <div className='flex justify-center'><p> Sobre el Proyecto </p></div>
      </div>

      <section className='mx-auto pt-32 max-w-[1080px] w-full grid grid-cols-1 grid-rows-1 sm:grid-cols-2'>
        <div>
        <img src="./src/assets/undog.svg" alt="" />
        </div>
       <div>
        
        <p className='text-xl'>Problema</p>
          <p>La gente generalmente trata de comprar mascotas en
            lugar de tomarlas de los refugios en el mundo moderno.
            El número de mascotas en los refugios es cada vez más difícil
            para los voluntarios cuidarlas</p>
       </div>
      </section>

      <section className='mx-auto pt-32 max-w-[1080px] w-full grid grid-cols-1 grid-rows-1 sm:grid-cols-2'>
      <div>
      <p className='text-xl'>Solución:</p>
          <p> Esta aplicación tiene como objetivo proporcionar ayuda a las mascotas sin hogar
              Las personas podrán familiarizarse en detalle con cada mascota del refugio,
              adoptarlas o también hacer una donación para ayudar al refugio.</p>
      </div>     

      <div className=''>
      <img src="./src/assets/undogsvg.svg" className='' alt="" />
      <div className='bg-patasdog bg-no-repeat'></div>
      </div>
      </section>

      <section className='max-w-[1080px] w-screen h-[30rem]  mx-auto border '>
        <div className='  grid grid-cols-3  grid-rows-1 gap-4 border '>

          <div className='border h-96 flex flex-col flex-row-3  '>
            
            <div className='flex justify-center h-20 border  mb-10  mt-20'> <img className='rounded-full h-20 ' src="../src/assets/undog.svg" alt="" /></div>
             
              <div className='flex justify-center h-10 border'>
                <p>aca ira el nombre</p>
              </div>
              
            <div className='flex justify-center h-10 border'>
              <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              amet consectetur adipisicin
                </p>
            </div>
          </div>

          <div className='border h-96 flex flex-col flex-row-3  '>
            
            <div className='flex justify-center h-20 border  mb-10  mt-20'> <img className='rounded-full h-20 ' src="../src/assets/undog.svg" alt="" /></div>
             
              <div className='flex justify-center h-10 border'>
                <p>aca ira el nombre</p>
              </div>
              
            <div className='flex justify-center h-10 border'>
              <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              amet consectetur adipisicin
                </p>
            </div>
          </div>

          <div className='border h-96 flex flex-col flex-row-3  '>
            
            <div className='flex justify-center h-20 border  mb-10  mt-20'> <img className='rounded-full h-20 ' src="../src/assets/undog.svg" alt="" /></div>
             
              <div className='flex justify-center h-10 border'>
                <p>aca ira el nombre</p>
              </div>
              
            <div className='flex justify-center h-10 border'>
              <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              amet consectetur adipisicin
                </p>
            </div>
          </div>

          

          

        </div>
      </section>
     
     <footer  className='mx-auto max-w-[1080px] w-screen h-60 mt-20 bg-[#EFEFEF]'>
      <div className='grid grid-cols-4 grid-rows-1 border-x bg-[#EFEFEF]'>
        <div className='h-44 border-x flex flex-col-2 flex-row-2'>
          <div className=''>
            <img className='h-9 w-9' src="../src/assets/perro.png" alt="logo" />
            
          </div>
          <br />
          <p>PerreraPerra</p>
           <div>
            asd
            </div> 
            
        </div>

        <div className='h-44 border-x flex flex-col flex-row-3'>
          <h1 className=' font-bold'>Social</h1>
            <div><br /></div>
            <div>Damiancardenas22@gmail.com</div>
            <br />
            <div className='flex justify-around'> 
              <a href='www.instagram.com' alt='instagram'>
              <img className='h-8' src="../src/assets/insta.png" alt="" />
              </a> 
              <a href='www.twitter.com'>
              <img className='h-8' src="../src/assets/twitter.png" alt="" />
              </a>
              <a href='wwww.linkedin.com'>
              <img className='h-8' src="../src/assets/linkedin.png" alt="" />
              </a>
              <a  href='www.facebook.com'>
                <img className='h-8'src="../src/assets/facebook.png" alt="" />
              </a>
              </div>
        </div>

        <div className='h-44 border-x'>
          <h1 className=' font-bold'>Quick Links</h1>
          <br />
          
          <p>About</p>
          <p>Category</p>
          <p>Testimonial</p>
          <p>Contact</p>
          </div>
        <div className='h-44 border-x'>
        <h1 className='font-bold'>Location & Contact</h1>
          <br />
        
          <p className=' text-slate-500  text-base'>Av. del Parque 4722, Huechuraba, 8580644 Santiago, Región Metropolitana</p>
        </div>
      </div>
     </footer>

     <footer className='mx-auto max-w-[1080px] flex justify-center'>
      
        <p>Designed And Developed by Damian Cardenas</p>
        
     </footer>

      
    </>
  )
}

export default App
