
import './TodoList.css';
import React from 'react';

class TodoList extends React.Component {
 
    constructor(props) {
     super(props);
     this.state = { tasks: props.tasks }
    }
 
     addTable() {
         return (
             <table className="table text-white mb-0">
                 <thead>
                     <tr>
                         <th scope="col">Team Member</th>
                         <th scope="col">Task</th>
                         <th scope="col">Priority</th>
                         <th scope="col">Actions</th>
                     </tr>
                 </thead>
                 <tbody>
                     {this.addItem()}
                 </tbody>
             </table>
         );
     }
     
     addItem() {
         return (
                 this.state.tasks.map((task, index) => 
                     <tr key={index} className="fw-normal">
                     <th>
                         <img src={task.avatarUrl} 
                             alt="avatar 1" className="avatar" />
                         <span className="ms-2">{task.user}</span>
                     </th>
                     <td className="align-middle">
                         <span>{task.task}</span>
                     </td>
                     <td className="align-middle">
                         <h6 className="mb-0"><span className={this.addPriority(task.priority)}>{task.priority}</span></h6>
                     </td>
                     <td className="align-middle">
                         <a href="#!" data-mdb-tooltip-init title="Done"><i className="fas fa-check fa-lg text-success me-3" onClick={() => this.changePriority(index)}></i></a>
                         <a href="#!" data-mdb-tooltip-init title="Remove"><i className="fas fa-trash-alt fa-lg text-warning" onClick={() => this.removeItem(task)}></i></a>
                     </td>
                 </tr>
             )
         );
     }
    
     removeItem(task) {
         this.setState(prevState => 
             ({
                 tasks: prevState.tasks.filter((t) => t !== task)
             })
         );
     }
 
     changePriority(id) {
         const newTasks = this.state.tasks.map((task, index) => {
             if (index === id) { 
                 return { ...task, priority: 'Completed' }
             }
             else {
                 return task;
             }
         });
         this.setState({ tasks: newTasks });
     }
 
     addPriority(priority) {
             switch (priority) {
                 case 'High': return 'badge bg-danger';
                 case 'Medium': return 'badge bg-warning';
                 case 'Completed': return 'badge bg-success';
                 default: return 'badge bg-secondary';
             }
     }
 
     render() {
         return (
             <section className="vh-100 gradient-custom-2">
                 <div className="container py-5 h-100">
                     <div className="row d-flex justify-content-center align-items-center h-100">
                         <div className="col-md-12 col-xl-10">
                             <div className="card mask-custom">
                                 <div className="card-body p-4 text-white">
                                     <div className="text-center pt-3 pb-2">
                                         <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                                             alt="Check" width="60" />
                                         <h2 className="my-4">Todo List</h2>
                                     </div>
                                     {this.addTable()}
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </section>
         );
     }
 
 }
 
export default TodoList;