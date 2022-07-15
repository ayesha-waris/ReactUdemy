import React, { useEffect, useState , useCallback } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useTask from './hooks/use-task';

function App() {

const [tasks, setTasks] = useState([]);



const getData = useCallback( (data) => {
  const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }
      setTasks(loadedTasks);
      
    },[]);
    

  const { isLoading, error, sendRequest: fetchTasks }  = useTask();



  useEffect(() => {
    const config = {
      url: 'https://httprequest-34399-default-rtdb.firebaseio.com/tasks.json',
    }
   fetchTasks(config,getData);

  }, [fetchTasks,getData]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
