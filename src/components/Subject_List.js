import React from 'react';

class Subject_List extends React.Component{
    render(){
        let materias={
            nombre: ['Quimica','Cálculo I','Física III','Comunicación'],
            cantidad: ['324','309','259','103']
        };
        
        return(
            <div class="rounded-lg border-4 border-opacity-50 border-gray-800" >
                <h2 class="p-3 text-white bg-gray-800 text-justify">Materias</h2>
                <div class="p-3">
                <table>
                    {materias.nombre.map((materia,i) => {
                        return(
                            <tr>
                                <th class="text-left">{materia}</th>
                                <th>{materias.cantidad[i]}</th>
                            </tr>
                        );
                    })
                    }
                </table>
                </div>
            </div>
        );
    }
}

export default Subject_List;