import { useNavigate } from "react-router-dom";
import swal from "sweetalert";



const PostHomePublic = ({ post }) => {
    const navigate = useNavigate();

  const { _id, precio, nombre, img, detalle } = post;

  const handleSubmit = (e) => {
    e.preventDefault();
    swal({text: "Debe registrarse para realizar un pedido!!",
      icon:"warning",
      timer: 2000});
      setTimeout(()=>{
        navigate(`/login`);
      },2000)
    
    
  };
  

  return (
   
    <div className="card text-white bg-black sombra mb-3">
    <div className="row g-0">
      <div className="col-md-4">
        <img src={img} className="img-fluid rounded-start" alt="..." />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">{detalle}</p>
          <h5 className="card-title">$ {precio}</h5>
          <p className="card-text mt-3">
            <button
              key={_id}
              onClick={handleSubmit}
              className="btnGral fw-bold p-2 mx-2"
            >
              Agregar
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default PostHomePublic;
