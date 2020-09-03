import React, {useState,useEffect} from 'react'
import AssignmentIcon from '@Icons/AssignmentIcon'
import axios from 'axios'

const Subject_List = () => {
  /*let materias = {
    nombre: ['Quimica', 'Cálculo I', 'Física III', 'Comunicación'],
    cantidad: ['324', '309', '259', '103'],
  }

  const [materias, setDatos] = useState([])

  async function getSubject() {
    try {
      const response = await axios.get('http://localhost:3000/api/subjects/consult');
      setDatos(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  getSubject()
  
  
  useEffect(async () => {
    console.log(materias)
    const result = await axios.get(
      ''
    )
    setDatos(result.data)
  }, [])
*/

  //var materias=[].push(axios.get(''))
  var materias = ['dawm', 'matematicas'] //axios.get('')

  function presentarMaterias(){
    return materias.map((materia, i) => {
      return (
        <tr>
          <td class="w-1/12">
            <AssignmentIcon
              lassName="fill-current my-auto h-6 w-6"
              color={'#ffd700'}
              width="20px"
              height="20px"
            />
          </td>
          <td class="text-left w-1/2">{materia}</td>
        </tr>
      )
    })
  }


  return (
    <div class="space-y-2">
      <h2 class="p-3 text-white text-center bg-gray-800  rounded-lg">
        Materias
      </h2>
      <div class="p-3 rounded-lg border-2 border-gray-102">
        <table>
          <tbody>
            {presentarMaterias()}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Subject_List
