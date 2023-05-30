import { useState } from "react"
import "./Formulario.css"
import Campo from '../Campo'
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [precio, actualizarPrecio] = useState("")
    const [imagen, actualizarImagen] = useState("")
    const [categoria, actualizarCategoria] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")


    const { registrarColaborador, crearCategoria } = props

    const menejarEnvio = (e) => {        
        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            nombre,
            precio,
            imagen,
            categoria
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevaCategoria = (e) => {
        e.preventDefault()
        crearCategoria({ titulo, colorPrimario: color })
    }

    return <section className="formulario">
        <form onSubmit={menejarEnvio}>
            <h2>Rellena el formulario para registrar un producto</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresa nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre} 
            />
            <Campo 
                titulo="Precio" 
                placeholder="Ingresa precio" 
                required 
                valor={precio} 
                actualizarValor={actualizarPrecio} 
            />
            <Campo 
                titulo="Imagen" 
                placeholder="Ingresa link de magen" 
                required 
                valor={imagen} 
                actualizarValor={actualizarImagen} 
            />
            <ListaOpciones 
                valor={categoria} 
                actualizarCategoria={actualizarCategoria}
                categorias={props.categorias}
            />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevaCategoria}>
            <h2>Rellena el formulario para registrar una categoria</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingresa titulo" 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo} 
            />
            <Campo 
                titulo="Color" 
                placeholder="Ingresa el color en Hex" 
                required 
                valor={color} 
                actualizarValor={actualizarColor} 
                type="color"
            />           
            <Boton>
                Registrar Categoria
            </Boton>
            </form>
    </section>
}

export default Formulario




// Aqui vamos
// https://app.aluracursos.com/course/react-como-componentes-funcionan/task/83879