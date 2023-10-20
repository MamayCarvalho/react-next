export default function Exercicio(props){
    return (
        <>
        <section>{props.principal}</section>
        <p>{props.paragrafo} <strong>{props.strong}</strong> {props.continua}</p>           
        </>
    )

}