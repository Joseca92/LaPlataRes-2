import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Post = ({ post }) => {
  const { author, title, date, _id } = post;
  return (
    <div className="card mt-4">
      <div className="card-header">
        <h5>{title}</h5>
      </div>
      <div className="card-body d-flex justify-content-between align-items-center">
        <span className="card-title text-secondary">
          {author.nombre} - {moment(date).format("LLL")}
        </span>
        <Link className="btn btn-primary" to={`/post/${_id}`}>
          Ver más
        </Link>
        {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
      </div>
    </div>
  );
};

export default Post;
