import React from "react";
import { Link } from "react-router-dom";

function ListingItem(props) {
  return (
    <div>
      <li className="listings__item">
        <Link className="listings__item__link" to={props.path}>
          <figure
            className="listings__item__pic-wrap"
            data-category={props.label}
          >
            <img
              src={props.src}
              alt="listing-item"
              className="listings__item__img"
            />
          </figure>
          <div className="listings__item__info">
            <h5 className="listings__item__text">{props.text}</h5>
            <p className="listings__item__price">{props.price}</p>
          </div>
        </Link>
      </li>
    </div>
  );
}

export default ListingItem;
