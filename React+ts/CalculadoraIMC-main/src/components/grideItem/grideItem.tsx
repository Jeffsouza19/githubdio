import { Level } from "../../helpers/imc"
import '../../app.css'
import upImage from '../../assets/up.png'
import downImage from '../../assets/down.png'

type Props = {
    item: Level
}


export const GrideItem = ({ item }: Props) =>{
    return(
        <div className="flex-1 flex-col flex items-center justify-center p-5 rounded-xl text-white" style={{backgroundColor: item.color}}>
           <div className="w-16 h-16 rounded-full justify-center bg-rgba flex items-center" >
               <img className="" src={item.icon === 'up' ? upImage : downImage} alt="" width='30' />
           </div>
           <div className="text-xl my-2 font-bold">{item.title}</div>

           {item.yourImc && 
            <div className="mt-2 text-lg">
                <>
                    Seu IMC é <strong>{item.yourImc}</strong> kg/m².
                </>
            </div>
           }
           {!item.yourImc &&
            <div className="text-sm mt-2">
                <>
                    Imc está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
           }
        </div>
    )
}