import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('APP RUNNING');

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;

//when parent component re-evaluatesall its child components also even if props value do not change
// React.memo() is used to resolve this issue, it stores previous props value and compare it to the ne props
// it costs performance as well for larger projects
//useful for long tree to avoid re-evaluation

// for objects useMemo does not not work
// copies of objects are made which are of reference type and they're not same
//useCallback is used to resolve this issue, it allows a function to save it exactly and use same object wwhen component re-evaluates.
// dependencies are used to recreate function because values of function coming from from outside are changed,  to use latest value in function