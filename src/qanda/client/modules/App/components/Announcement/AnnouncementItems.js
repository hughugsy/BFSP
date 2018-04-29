import React from 'react';

// Import Components
import AnnouncementItem from './AnnouncementItem/AnnouncementItem';


export class AnnouncementItems extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
      <h3>Announcements</h3>
        <ul>
          {
          this.props.announcementItems.map(announcementItem => (
            <AnnouncementItem
              announcementItem = {announcementItem}
              key={announcementItem.cuid}
            />
          ))
          }
         </ul>
      </div>
    );
  }
}

export default AnnouncementItems;
