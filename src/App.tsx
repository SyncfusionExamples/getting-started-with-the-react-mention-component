import React from 'react';
import {MentionComponent} from '@syncfusion/ej2-react-dropdowns';
import {emailData, projects} from './dataSource';
import './App.css';

function App() {
  const commentTarget = "#commentsMention";
  const commentField = { text:"Name"}
  const listItemTemplate = (props:any)=>{
    return(
      <div className='mention-listItems'>
        <img className='empImage' src={'https://ej2.syncfusion.com/react/demos/src/mention/Employees/' + props.Eimg + '.png'}
          alt="employee"/>
        <span className='person'>{props.Name}</span>
        <span>{props.EmailId}</span> 
      </div>
    )
  }
  const itemDisplayTemplate =(props:any)=>{
    return(<span>{props.EmailId}</span>)
  }
  return (
    <div className="App">
      <div className='container'>
        <label className='default-size'>Comments</label>
        <div id='commentsMention' placeholder='Type @ and tag user'></div>
      </div>
      <MentionComponent target={commentTarget} dataSource={emailData}
          fields={commentField} itemTemplate={listItemTemplate} displayTemplate={itemDisplayTemplate}
          noRecordsTemplate={"No items matched your search"} popupWidth={250}></MentionComponent>
      <MentionComponent target={commentTarget} dataSource={projects}
          fields={commentField} mentionChar="#"></MentionComponent>
    </div>
  );
}

export default App;
