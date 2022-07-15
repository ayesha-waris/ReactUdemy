
import useTask from '../../hooks/use-task';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {

  const { isLoading, error, sendRequest: addTask }  = useTask();


  const enterTaskHandler = async (taskText) => {

    const createTask = (data) => {
      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };
      props.onAddTask(createdTask);
    }

      const config = {
        url: 'https://httprequest-34399-default-rtdb.firebaseio.com/tasks.json',
        method: 'POST',
        body: { text: taskText } ,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    
      addTask(config,createTask);
  }
        
      

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
