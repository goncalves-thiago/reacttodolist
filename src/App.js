import TodoList from './components/TodoList';
import './App.css';

function App() {

  const arrayTasks = [
    {
        user: 'Thiago Goncalves',
        avatarUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp',
        priority: 'High',
        task: 'Update server firmwares'
    },
    {
        user: 'Marie Horwitz',
        avatarUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp',
        priority: 'Medium',
        task: 'Test new application'
    },
    {
        user: 'Alexa Chung',
        avatarUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp',
        priority: 'Low',
        task: 'Update new application documentation'
    },
    {
        user: 'Graziele Vargas',
        avatarUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp',
        priority: 'High',
        task: 'Run backup routines'
    },
]

  return (
    <TodoList tasks={arrayTasks}/>
  );
}

export default App;
