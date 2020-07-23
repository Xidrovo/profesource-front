import React, {useState, useEffect, useRef} from 'react'
import MagnifierIcon from '@Icons/MagnifierIcon'
import Fuse from 'fuse.js'
import Search_Element from '../Search_Element'
import UseOnClickOutside from '../../hooks/UseOnClickOutside'



const Search_bar = (props) => {
  const [open, setOpen] = useState(false)
  const [escrito, setValue] = useState('')
  const ref = useRef()
  UseOnClickOutside(ref, () => setOpen(false))



  var list = [{
    username:"cxcarvaj",
    time: "20 min",
    title: "Mi primer post en profesource",
    desc: "Hola, mi nombre es Carlos Carvajal y este es mi primer post desde profesource!",
    favs: "10",
    comments:"5",
    tags:["DAWM, "," Computer Science, "," ESPOL "]
  },
  {
    username:"fponce",
    time: "10 horas",
    title: "Problemas en DAWM",
    desc: "Alguien conoce lugares donde pueda aprender JS, html y CSS? Seria de gran ayuda que me compartieran esta información! Gracias",
    favs: "5",
    comments:"10",
    tags:["DAWM, "," ESPOL"]
  },
  {
    username:"kcastro",
    time: "5 horas",
    title: "Duda sobre un ejercicio de estadística :(",
    desc: "Hola chicos, disculpen es que tengo una duda con un ejercico de estadística inferencial y no sé si me puedan ayudar!",
    favs: "12",
    comments:"20",
    tags:["Estadística, ","ESPOL, ", " Inferencial"]
  },
    ]
        const options = {
      // isCaseSensitive: false,
      // includeScore: false,
      // shouldSort: true,
      // includeMatches: false,
      // findAllMatches: false,
      // minMatchCharLength: 1,
      // location: 0,
      // threshold: 0.6,
      // distance: 100,
      // useExtendedSearch: false,
      // ignoreLocation: false,
      // ignoreFieldNorm: false,
      keys: [
        "title",
        "username"
      ]
    };
    
    const fuse = new Fuse(list, options);
    
    // Change the pattern
    useEffect(() => {
      presentarElements()
    }, [escrito])

    const result = fuse.search(escrito)

    function presentarElements(){
      return result.map((obj,i)=>{
        return (<div key={i}>
        <Search_Element title={obj.item.title} tags={obj.item.tags}/>
        </div>
        )
      })
    }
    const handleChange = (evt) =>{
      const {target} = evt;
      const {value} = target;

      setValue(value)
    }
    
  return (
    <div class="pr-8 flex justify-between my-4 ml-8 w-6/12">
      <div class="flex-1 flex">
        <div class="w-full flex md:ml-0" ref={ref}>
          <label for="search_field" class="sr-only">
            Search
          </label>
          <div class="relative w-full text-gray-400 focus-within:text-gray-600">
            <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
              <div className="text-gray-600 my-auto">
                <MagnifierIcon
                  className="fill-current ml-2 my-auto"
                  color={'#ffd700'}
                  width="20px"
                  height="20px"
                />
              </div>
            </div>
            <input
              id="search_field"
              class="block w-full h-full pl-8 pr-3 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm"
              placeholder="Search"
              type="search"
              onClick={() => {
                setOpen(!open)
              }}
              onChange={handleChange}
            />
            {open && (
                  <div
                    className="origin-top-left left-0 mt-4 w-100 shadow-lg"
                  >
                    <div className="pt-1 bg-white text-black hover:border-2">
                    {presentarElements()}
                    </div>
                  </div>
                )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Search_bar
