import "./Colaborador.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

// Colaborador hace referencia a los productos de la store - shop

const Colaborador = (props) => {
    const { nombre, categoria, imagen, precio, id, fav } = props.datos
    const { colorPrimario, eliminarColaborador, like } = props
    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)} />
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={imagen} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{categoria}</h5>
            { fav ? <AiFillHeart  color="red" onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)}/> }                      
        </div>
    </div>
}

export default Colaborador