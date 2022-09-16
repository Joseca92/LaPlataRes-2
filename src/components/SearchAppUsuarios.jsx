import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const SearchAppUsuarios = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      navigate(`/searchusuario/${inputValue}`);
    }
  };


  return (
    <>
      <div className="container ">
                      <div className="row">
                        <div className="col-8">
                        <form className="ms-2" onSubmit={handleSubmit}>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Ingrese lo que desea buscar..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                          />
                          </form>
                        </div>
                        
                        
                      </div>
                    </div>
              <div></div>

      
         </>

  );
};

export default SearchAppUsuarios;
