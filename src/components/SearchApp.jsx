import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const SearchApp = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      navigate(`/search/${inputValue}`);
    }
  };

  const handleSelectChange=(e)=>{
    if(e.target.value == 1){
      navigate(`/search/ppendientes`);
    }
    else if(e.target.value == 2){
      navigate(`/search/prealizados`);
    }
    else{
      navigate(`/pedido`);
    }
  
  }
  return (
    <>
      <div className="container ">
                      <div className="row">
                        <div className="col-8">
                        <form className="ms-2" onSubmit={handleSubmit}>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Ingrese el numero de pedido que desea buscar..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                          />
                          </form>
                        </div>
                        
                        <div className="col-4">
                          <select class="form-select" id="verP" name="verP" aria-label="Default select example" onChange={handleSelectChange}>
                          <option value="9" selected>Ver Pedidos..</option>
                           <option value="0" >Todos</option>
                           <option value="1">Pendientes</option>
                           <option value="2">Realizados</option>
                         </select>
                        </div>
                      </div>
                    </div>
              <div></div>

      
         </>

  );
};

export default SearchApp;
