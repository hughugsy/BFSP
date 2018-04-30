import React, { PropTypes } from 'react';
import { Highlight } from 'react-instantsearch/dom';


const Result = ({ hit }) => {
  return (
    <div style={{ marginTop: '5px' }}>
      <span className="hit-name">
        <Highlight attribute="description" hit={hit} />
      </span>
      <div className="hit-content">
        <div style={{ marginTop: '5px' }}>
          {'Duration: '} {hit.duration}
        </div>
        <div>
          {'Date: '}{hit.time}
        </div>
      </div>
    </div>
    );
};

Result.PropTypes = {
  hit: PropTypes.obj,
};

export default Result;
