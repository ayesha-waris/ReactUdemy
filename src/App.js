import React, { useState, useCallback,useMemo } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';
import DemoList from './components/Demo/DemoList';

function App() {
  const [listTitle, setListTitle] = useState('My List');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}
// function App() {
//   const [showParagraph, setShowParagraph] = useState(false);
//   const [allowToggle, setAllowToggle] = useState(false);

//   console.log('APP RUNNING');

//   const toggleParagraphHandler = useCallback(() => {
//     if (allowToggle) {
//       setShowParagraph((prevShowParagraph) => !prevShowParagraph);
//       //better way to update state
//       //in case of useEffect outstanding state changes are not missed
//     }
//   }, [allowToggle]);

//   const allowToggleHandler = () => {
//     setAllowToggle(true);
//   };

//   return (
//     <div className="app">
//       <h1>Hi there!</h1>
//       <DemoOutput show={showParagraph} />
//       <Button onClick={allowToggleHandler}>Allow Toggling</Button>
//       <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
//     </div>
//   );
// }

export default App;

//React.memo()
//when parent component re-evaluatesall its child components also even if props value do not change
// React.memo() is used to resolve this issue, it stores previous props value and compare it to the ne props
// it costs performance as well for larger projects
//useful for long tree to avoid re-evaluation

//useCallback()
// for objects useMemo does not not work
// copies of objects are made which are of reference type and they're not same
//useCallback is used to resolve this issue, it allows a function to save it exactly and use same object wwhen component re-evaluates.
// dependencies are used to recreate function because values of function coming from from outside are changed,  to use latest value in function



//useState is handled by react itself, when component re-evaluates no new states is made
//state is only changed after firstt initialisation
//unless component is removed

//state update is scheduled when component reruns
//STATE BATCHING
//react batches states updates together for synchronuous functions(start- end)


