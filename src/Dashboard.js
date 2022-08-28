import React, {useState} from 'react';
import TodoList from './TodoList'
import Account from './Account'

export default function Dashboard() {
    class PageControl extends React.Component {
        constructor(props) {
          super(props);
          this.handleAccountClick = this.handleAccountClick.bind(this);
          this.handleDashBoardClick = this.handleDashBoardClick.bind(this);
          this.state = {isAccount: false};
        }

        handleAccountClick() {
          this.setState({isAccount: true});
        }

        handleDashBoardClick() {
          this.setState({isAccount: false});
        }

        render() {
          const isAccount = this.state.isAccount;
          let button;
          if (isAccount) {
            button = <DashboardButton onClick={this.handleDashBoardClick} />;
          } else {
            button = <AccountButton onClick={this.handleAccountClick} />;
          }
    return (<> 
    <CurrentPage isAccount={isAccount} />
    {button} 
    </>
          )
        }
      }
      function CurrentPage(props) {
        const isAccount = props.isAccount;
        if (isAccount) {
          return <span class="AccountInformation"><Account/></span>
        }
        return <><span class="TodoList">
        <div class="Today"> August 28</div>
        <div class="ExercisesBackground"> EXCERCISES </div>
        <TodoList todos={todos} toggleTodo={toggleTodo}/>

        <div>{todos.filter(todo => !todo.complete).length} incomplete</div>
        </span>
        </>
      }

  function AccountButton(props) {
    return (
      <button class="myAccountButton" onClick={props.onClick}>
        Account Information
      </button>
    );
  }

  function DashboardButton(props) {
    return (
      <button class="myAccountButton" onClick={props.onClick}>
        Dashboard
      </button>
    );
  }  
    const [todos, setTodos] = useState([
        {complete: false, id: 1, name: " Child's pose"},
        {complete: false, id: 2, name: ' Downword Dog'},
        {complete: false, id: 3, name: ' Plank'},
        {complete: false, id: 4, name: ' Cat and Cow'},
        {complete: false, id: 5, name: ' Dead Bug'},
        {complete: false, id: 6, name: ' Glute Bridges'},
        {complete: false, id: 7, name: ' Clamshells'},
        {complete: false, id: 8, name: ' Cobra'}
    
    ])
    function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
    } 
    return (
        <PageControl/>
    )
}