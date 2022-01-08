import { useState } from "react";

/**
 *
 * @param {*} Provide data array to this component..
 * @returns {*} It will display the data in Card Design..
 */

function Card({ data }) {
  const [characterCount, setcharacterCount] = useState(0);

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-header">
          <button
            className="arrows-btn"
            onClick={() => {
              setcharacterCount((e) => e - 1);
            }}
            disabled={characterCount === 0}
          >
            {"<"}
          </button>
          <img
            src={data[characterCount].image}
            className="avatar-lg img-thumbnail"
            alt="displayPokemon"
          />
          <button
            className="arrows-btn"
            onClick={() => {
              setcharacterCount((e) => e + 1);
            }}
            disabled={characterCount === data.length - 1}
          >
            {">"}
          </button>
        </div>
        <div className="card-content">
          <div>
            <h2>
              {data[characterCount].name} - {data[characterCount].number}
            </h2>
          </div>
          <div className="description">
            <h5>Fast attack :</h5>
            {data[characterCount].maxCP}
          </div>
          <div className="description">
            <h5>Slow attack :</h5>
            {data[characterCount].maxHP}
          </div>
          <div className="description">
            <h5>Weakness :</h5>
            {data[characterCount].weaknesses}
          </div>
          <div className="description">
            <h5>Resistance :</h5>
            {data[characterCount].resistant}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
