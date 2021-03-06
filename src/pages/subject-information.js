import React, { useEffect, useState } from 'react'
import SEO from '@structure_f/seo'
import Layout from '@structure_f/Layout'
import axios from 'axios'
import Table from '../components/Table'
import Button from '@buttons_f/Button'

const Subject_info = (props) => {
  const [subjects_array, setSubjects] = useState([])
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

  // http://localhost:3000/api-noSQL/subjects/consult
  const [data_array, setDatos] = useState([])
  const [state, setState] = useState(false)

  useEffect(() => {
    axios
      .get('http://localhost:3000/api-noSQL/subjects/consult')
      .then((response) => {
        setDatos(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    setDidMount(true)
  }, [])

  const loadpay = () => {
    return data_array.map((data, i) => {
      return (
        <Table
          name={data.Materia}
          science={data.Ciencia.toString()}
          career={data.Carrera}
          description={data.Descripcion}
        />
      )
    })
  }

  const [target_subject, setTargetSubject] = useState('')

  return (
    <Layout title={props.title}>
      <SEO title={props.title} />
      <div>
        <div class="flex relative w-2/5 items-center mx-auto mb-6">
          <select
            id="subjects"
            class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            onChange={(event) => {
              console.log(event.target.value)
              setTargetSubject(event.target.value)
              setState(false)
            }}
          >
            {didMount && subjects_array.map((materia,index)=>{
              return <option value={materia.Subject_name}>{materia.Subject_name}</option>
            })}
          </select>
          <Button
            indicator="Buscar"
            onClick={() => {
              setState(!state)
              axios
                .get(`http://localhost:3000/api-noSQL/subjects/consult/${target_subject}`)
                .then((response) => {
                  setDatos(response.data)
                })
                .catch((error) => {
                  console.log(error)
                })
            }}
          />
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
              <tbody>{state && loadpay()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Subject_info
