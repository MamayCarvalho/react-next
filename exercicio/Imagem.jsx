import Image from "next/image";
import frontend from "../exercicio/Img/front.png";
import backend from "../exercicio/Img/back.png";
import fullstack from "../exercicio/Img/full.png";
export default function pictures(){
    return (
        <>
            <div>
                <Image src={frontend} width={250} height={250}/>
                <Image src={backend} width={250} height={250}/>
                <Image src={fullstack} width={250} height={250}/>
            </div>

        </>
    )
}
