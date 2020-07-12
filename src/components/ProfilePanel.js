import React from 'react';
import PostCells from '@components/PostCells'
import CellContent from '@components/CellContent'

const ProfilePanel = (props) =>{
    const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-1 text-center ">
              <a
                className={
                  "text-xs text-blue-103 font-bold uppercase px-5 py-3  block leading-normal " +
                  (openTab === 1
                    ? "border-b-2  border-blue-103"
                    : "border-tranparent")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Populares
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-1 text-center ">
              <a
                className={
                  "text-xs text-blue-103 font-bold uppercase px-5 py-3  block leading-normal " +
                  (openTab === 2
                    ? "border-b-2  border-blue-103"
                    : "border-tranparent")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Post
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-1 text-center">
              <a
                className={
                  "text-xs text-blue-103 font-bold uppercase px-5 py-3  block leading-normal " +
                  (openTab === 3
                    ? "border-b-2 border-blue-103"
                    : "boreder-transparent")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Respuestas
              </a>
            </li>
            
          </ul>
          <div className="relative flex flex-col  w-full  mb-6">
            <div className="px-4 py-5">
              <div className="flex flex-col w-full">
                <div className={openTab === 1 ? "block" : "hidden"}  id="link1">
                    
                  <div className="block  md:inline-grid md:grid-cols-2 md:col-gap-4 w-full">
                    <div>
                      <CellContent 
                      title="Java o Python" 
                      content="¿Cómo se declaran las variables primitivas en Java? ¿Es igual que en Python? ¿En qué se diferencian?"
                      favs="10"   
                      comments="6"></CellContent>
                    </div>
                    <div>
                      <CellContent title="La transformada de Laplace"
                      content="Revisamos este tema la última clase, pero no estuve presente, podrían dejar algunos recursos del tema? Muchas gracias!"
                      favs="9"
                      comments="5"></CellContent>
                    </div>
                    <div>
                      <CellContent 
                      title="Límites"
                      content="¿Hay algún formulario para sacar límites? He encontrado algunas respuestas y no se cual sea la adecuada "
                      favs="7"
                      comments="10">

                      </CellContent>
                    </div>
                    
                  </div>
                  
                  
                </div>


                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="block  md:inline-grid md:grid-cols-2 md:col-gap-4 w-full">
                    <div>
                      <CellContent 
                      title="Resta binaria" 
                      content="Revisé que se utiliza el complemento a 2 y el complemento a 1, pero ¿cuándo debería usar cada una? ¿cómo se hace en el caso de decimales?"
                      favs="2"   
                      comments="1"></CellContent>
                    </div>
                    <div>
                      <CellContent 
                      title="Aplicaciones Ecuaciones Diferenciales Parciales" 
                      content="El otro día vi que en Matemáticas Avanzadas revisan algunos temas como Ecuación de la onda, dónde podría encontrar material de estudio?"
                      favs="0"   
                      comments="1"></CellContent>
                    </div>
                    
                    <div>
                      <CellContent 
                      title="Java o Python" 
                      content="¿Cómo se declaran las variables primitivas en Java? ¿Es igual que en Python? ¿En qué se diferencian?"
                      favs="10"   
                      comments="6"></CellContent>
                    </div>
                    <div>
                      <CellContent title="La transformada de Laplace"
                      content="Revisamos este tema la última clase, pero no estuve presente, podrían dejar algunos recursos del tema? Muchas gracias!"
                      favs="9"
                      comments="5"></CellContent>
                    </div>
                    <div>
                      <CellContent 
                      title="Límites"
                      content="¿Hay algún formulario para sacar límites? He encontrado algunas respuestas y no se cual sea la adecuada "
                      favs="7"
                      comments="10">

                      </CellContent>
                    </div>
                    <div>
                      <CellContent 
                      title="Mi primer Post en Profesource!"
                      content=""
                      favs="10"
                      comments="5">

                      </CellContent>
                    </div>
                    
                  </div>
                  
                </div>

                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <div className="block  md:inline-grid md:grid-cols-2 md:col-gap-4 w-full">
                    <CellContent
                    title="re:Numpy en Python"
                    content="Tu respuest no está mal, pero intenta usar las funciones de numpy, es mejor usar mean en lugar de hacer for
                     para sacar el promedio. Saludos!"
                     favs="1"
                     comments="1"
                    >
                    </CellContent>
                  </div>

                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePanel;