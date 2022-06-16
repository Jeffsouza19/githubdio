import { useState } from 'react'
import './App.css'
import poweredImage from './assets/powered.png'
import { levels, calcIMC, Level } from './helpers/imc'
import { GrideItem } from './components/grideItem'
import leftArrowImage from './assets/leftarrow.png'

const App = () =>{

  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);
  
  const handleUp = (e: any) =>{
    if(e.key ==="Enter"){
    handleCalc;
    }
  }

  const handleBackButton = ()=>{
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  const handleCalc = () =>{
    if(heightField && weightField){
        setToShow(calcIMC(heightField, weightField));
    }else{
      alert('Preencha todos os campos!')
    }
  }
  return (
    <div className='box-border font-sans mx-10 sm:mx-auto lg:max-w-5xl max-w-screen-sm pb-10'>
        <header className='container mt-10 lg:mt-20 '>
            <div>
                <img src={poweredImage} alt="" className='h-10' />
            </div>
        </header>
        <div className='container flex flex-col lg:flex-row lg:mt-10'>
            <div className='mt-5 flex-1 p-2 flex-col flex items-center w-full lg:mr-10'>
                <h1 className='text-blue-500 text-5xl mb-8'>Caucule o seu IMC</h1>
                <p className='mb-8'>IMC é a sigla para Índice de Massa Corporal, parâmetro adotado pela OMS (Organização Mundial de Saúde) para caulcular o peso ideal de cada pessoa. </p>
                <div className='mt-5 flex flex-col items-center w-full' >
                    <input type="number" className='border-b outline-none w-full border-green-400 mb-4 disabled:text-gray-400 focus:border-green-600' placeholder='Altura em metros ex. 1,75' value={heightField > 0 ? heightField : ''} onChange={e=> setHeightField(parseFloat(e.target.value))} disabled={toShow ? true : false} />
                    <input type="number" className='border-b outline-none w-full border-green-400 mt-4 mb-6 focus:border-green-600 disabled:text-gray-400' placeholder='Peso'value={weightField > 0 ? weightField : ''} onChange={e=> setWeightField(e.target.valueAsNumber)} disabled={toShow ? true : false} />
                    <button onClick={handleCalc} id='calc' className='font-bold ring-1 w-full ring-green-400 bg-green-200 py-1 rounded-xl mt-6 disabled:bg-green-200 disabled:text-gray-400 hover:bg-green-50 ease-in duration-300 hover:text-green-900' onKeyUp={handleUp} disabled={toShow ? true : false}>Calcular</button>
                </div>
            </div>
            <div className='lg:ml-10 flex flex-1 mt-8'>
                {!toShow &&
                  <div className='flex-1 gap-5 grid sm:grid-cols-2'>
                    {levels.map((item, key)=>(
                    <GrideItem key={key} item={item} />
                    ))}
                  </div>                
                }
                {toShow &&
                  <div className='flex-1 flex'>
                    <div className='absolute lg:-ml-10 lg:mt-32 bg-blue-200 w-16 h-16 sm:w-20 sm:h-20 rounded-br-lg lg:rounded-full flex justify-center items-center cursor-pointer' onClick={handleBackButton}>
                      <img src={leftArrowImage} alt="" width={25} />
                    </div>
                    <GrideItem item={toShow} />
                  </div>
                }
            </div>
        </div>
    </div>
  )
}

export default App
