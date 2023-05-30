import "./ListaOpciones.css"
const ListaOpciones = (props) => {

    // Metodo map -> arreglo.map( (categorias) =>{

    //} )
    // const categorias = [
    //     "Abarrotes", "Frutas", "Verduras", "Dulces", "Lacteos"
    // ]

    const manejarCambio = (e) => {
        console.log("Cambio", e.target.value)
        props.actualizarCategoria(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Categoria</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar categoria</option>
            { props.categorias.map( (categoria, index) => <option key={index} value={categoria}>{categoria}</option>
            ) }
        </select>
    </div>
}

export default ListaOpciones


// https://app.aluracursos.com/course/react-desarrollando-javascript/task/82993