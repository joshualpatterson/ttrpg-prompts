import React, { useState } from 'react';
import { Trash } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const LogEntry = ({ entry, onDelete, onPromptClick }) => {
  const [selectedWords, setSelectedWords] = useState('');

  const handleWordSelection = (e) => {
    const selectedText = window.getSelection().toString();
    setSelectedWords(selectedText);
  };

  const handleWordSubmit = () => {
    onPromptClick(selectedWords.trim());
    setSelectedWords('');
  };

  const handleDelete = () => {
    onDelete(entry.id);
  }

  const renderEntryText = (text) => {
    const words = text.split(' ');

    return words.map((word, index) => (
      <span key={index} onMouseUp={handleWordSelection}>
        {word}{' '}
      </span>
    ));
  };


  // const renderHeader = () => {
  //   return (
  //     <Card.Header>
  //       <div className="log-entry-header">
  //         <div className="log-entry-timestamp">{timestamp}</div>
  //         <div className="log-entry-details">
  //           <div className="log-entry-prompt">
  //             <span className="log-entry-label">Prompt:</span> {prompt}
  //           </div>
  //           <div className="log-entry-keywords">
  //             <span className="log-entry-label">Keywords:</span> {keywords}
  //           </div>
  //           <div className="log-entry-theme">
  //             <span className="log-entry-label">Theme:</span> {theme}
  //           </div>
  //           <div className="log-entry-ruleset">
  //             <span className="log-entry-label">Ruleset:</span> {ruleset}
  //           </div>
  //         </div>
  //       </div>
  //     </Card.Header>
  //   );
  // };

  return (
    <Card className="log-entry">
      <Card.Body>
        <div className="log-entry-content">{renderEntryText(entry.response)}</div>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-end">
        {/* <Button variant="primary" onClick={onRefresh}>
          Refresh
        </Button> */}
        <Button className="m-2" variant="outline-primary" onClick={handleWordSubmit} disabled={!selectedWords}>Elaborate on {selectedWords}</Button>
        <Button className="m-2" variant="outline-danger" onClick={handleDelete}>
          <Trash /> Delete
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default LogEntry;
