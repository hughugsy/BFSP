import React from 'react';
import PropTypes from 'prop-types';

function TRCommentButton(props) {
  const { onToggle } = props;
  return (
    <div>
        <button onClick={onToggle}>Comment</button>
    </div>
  );
}

TRCommentButton.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default TRCommentButton;
