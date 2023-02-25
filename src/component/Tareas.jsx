import React from 'react'
import Tarea from './Tarea'

function Tareas({tareas}) {
    return (
        <>
        {tareas.map((tarea)=> (<Tarea key={tarea.id} texto={tarea.texto} fecha={tarea.fecha} />))}
        </>
    )
}

export default Tareas