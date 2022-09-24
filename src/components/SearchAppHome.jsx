import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchAppHome = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      navigate(`/searchhome/${inputValue}`);
    }
  };

  return (
          <div className="col-12">
            <form className="d-flex justify-content-end" onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control text-white"
                placeholder="Buscar..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </form>
      </div>
  );
};

export default SearchAppHome;
