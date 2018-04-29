import React from 'react';

// Import Style
//import styles from './AnnouncementItem.css';

export function AnnouncementItem(props) {
  return (
    <div>
      <h3>{props.announcementItem.title}</h3>
    </div>
  );
}

export default AnnouncementItem;
