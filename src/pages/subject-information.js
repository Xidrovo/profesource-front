import React, { useEffect, useState } from 'react'
import SEO from '@structure_f/seo'
import Layout from '@structure_f/Layout'
import axios from 'axios'
import Table from '../components/Table'

const Subject_info = (props) => {
  const [subjects_array,setSubjects] = useState([])
  const [didMount, setDidMount] = useState(false)

  useEffect(() => {
    axios
    .get('http://localhost:3000/api/subjects/consult')
    .then((response) => {
      setSubjects(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
    setDidMount(true)
  }, [])

  // const data_array = axios.get('http://localhost:3000/api/subjects/consult');

  const loadSubjects = () => {
    return subjects_array.map((subject, i) => {
      var option = document.createElement('option')
      var sub = document.createTextNode(subject.Subject_name)
      option.appendChild(sub)
      document.getElementById('subjects').appendChild(option)
    })
  }
  const data_array = [
    {
      name: 'Desarrollo de Aplicaciones Web',
      science: ['Computer Science', 'Computacion', 'bla', 'bla'],
      career: 'Computacion',
      description: 'Computacion rules :D',
    },
  ]
  const loadpay = () => {
    return data_array.map((data, i) => {
      return (
        <Table
          name={data.name}
          science={data.science.toString()}
          career={data.career}
          description={data.description}
        />
      )
    })
  }
  return (
    <Layout title={props.title}>
      <SEO title={props.title} />
      <div>
        <div class="flex relative w-64 items-center mx-auto mb-6">
          <select
            id="subjects"
            class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            {didMount && loadSubjects()}
          </select>
        </div>
        <div>
          <div class="flex">
            <table class="table-auto mx-auto mt-6">
              <thead>
                <tr>
                  <th class="px-4 py-2">Nombre</th>
                  <th class="px-4 py-2">Ciencias</th>
                  <th class="px-4 py-2">Carreras Relacionada</th>
                  <th class="px-4 py-2">Descripción</th>
                </tr>
              </thead>
              <tbody>{loadpay()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Subject_info
