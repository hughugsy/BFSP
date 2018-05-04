import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

function AnswerPaperSheet(props) {
  const { onToggle } = props;
  return (
    <div>
      <button type="submit" className="btn btn-primary" onClick={onToggle}>ANSWER</button>
    </div>
  );
}

AnswerPaperSheet.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default AnswerPaperSheet;
