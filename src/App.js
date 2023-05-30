import { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario/Formulario';
import Header from './components/Header/Header';
import MiOrg from './components/MiOrg';
import Categoria from './components/Categoria';
import Footer from './components/Footer';
import { v4 as uuid } from "uuid"

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaborades] = useState([{
    id: uuid(),    
    nombre: "Fresa",
    precio: "10",
    imagen: "https://libbys.es/wordpress/wp-content/uploads/2018/05/fresas.jpg",
    categoria: "Frutas",
    fav: true
  },
  {    
    id: uuid(),
    nombre: "Fresa",
    precio: "10",
    imagen: "https://libbys.es/wordpress/wp-content/uploads/2018/05/fresas.jpg",
    categoria: "Verduras",
    fav: false
  },
  {    
    id: uuid(),
    nombre: "Fresa",
    precio: "10",
    imagen: "https://libbys.es/wordpress/wp-content/uploads/2018/05/fresas.jpg",
    categoria: "Abarrotes",
    fav: false
  }
])

  const [categorias, actualizarCategorias] = useState([    
    {
      id: uuid(),
      titulo:"Abarrotes",
      colorPrimario: '#57C278',
      colorSecundario: '#d9f7e9'
    },
    {
      id: uuid(),
      titulo:"Frutas",
      colorPrimario: '#82cffa',
      colorSecundario: '#e8f8ff'
    },
    {
      id: uuid(),
      titulo:"Verduras",
      colorPrimario: '#a6d157',
      colorSecundario: '#f0f8e2'
    },
    {
      id: uuid(),
      titulo:"Dulces",
      colorPrimario: '#e06b69',
      colorSecundario: '#fde7e8'
    },
    {
      id: uuid(),
      titulo:"Lácteos",
      colorPrimario: '#db6ebf',
      colorSecundario: '#fae9f5'
    }
  ])

  // ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  // registrar colaborador = producto
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    // Spread Operator, copia un valor
    actualizarColaborades([...colaboradores, colaborador])
  }

  // Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaborades(nuevosColaboradores)
  }

  // Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log('Actualizar: ', color, id)
    const categoriasActulizadas = categorias.map((categoria) => {
      if(categoria.id === id){
        categoria.colorPrimario = color
      }
    
      return categoria
    })

    actualizarCategorias(categoriasActulizadas)
  }

  // return equipo
  const crearCategoria = (nuevaCategoria) => {
    console.log(nuevaCategoria)
    actualizarCategorias([...categorias, { ...nuevaCategoria, id: uuid() }])
  }

  const like = (id) => {
    console.log("Like", id)
    const categoriasActualizadas = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaborades(categoriasActualizadas);
  }

  return (
    <div>
      <Header /> 
      {/* { mostrarFormulario ? <Formulario /> : <></>}  */}
      { 
        mostrarFormulario  && <Formulario categorias={categorias.map((categoria) => categoria.titulo)}
          registrarColaborador = {registrarColaborador}
          crearCategoria = {crearCategoria}
          />
        }      
      
      
      
      
      <MiOrg  cambiarMostrar={cambiarMostrar}/> 
      {/* <Categoria  categoria="Frutas"/> 
      <Categoria  categoria="Verduras"/> 
      <Categoria  categoria="Abarrotes"/> 
      <Categoria  categoria="Lácteos"/> 
      <Categoria  categoria="Dulces"/>    */}


      {/* Crea un equipo por cada elemento
      cada vez que trabajas con map debes usar key */}
      { 
        categorias.map((categoria) => <Categoria    datos={categoria} 
          key={categoria.titulo}
          colaboradores={colaboradores.filter( colaborador => colaborador.categoria === categoria.titulo )}
          eliminarColaborador = {eliminarColaborador}
          actualizarColor = {actualizarColor}
          like = {like }
        />
        )
      }

      <Footer />

    </div>
  );
}

export default App;
