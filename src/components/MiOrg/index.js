import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    // Estado - hooks
    // useState
    // const [nombreVariable, funciónActualiza] = useStage(valorInicial)
    console.log(props)
    // const [mostrar, actualizarMostrar] = useState(true) 
    // const manejarClick = () => {
    //     console.log('Mostrar/Ocultar elemento', !mostrar)
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="title">Mis Productos</h3>
        <img className="image" src="/img/agregarMas.svg" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg