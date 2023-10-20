import style from '../components/exercicio/exercicio.module.css'

export default function subtitulo(){
    return (
        <>
            <h2 id={style.subtitleOne}>Front-End</h2>
            <h2 id={style.sutitleTwo}>Back-End</h2>
            <h2 id={style.sutitleThree}>Full-Stack</h2>
        </>
    )

}