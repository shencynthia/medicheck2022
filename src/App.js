import React from 'react'; 
import Header from './Header'
import LoginPage from './LoginPage'
import Dashboard from './Dashboard'
import './App.css';

function App() {
  class PageControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }

    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;

      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }

      return (
        <div>
          <CurrentPage isLoggedIn={isLoggedIn} />
          <div class="myEnterButton">{button}</div>
        </div>
      );
    }
  }
  function CurrentPage(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <Dashboard/>;
    }
    return <LoginPage />;
  }

  function LoginButton(props) {
    return (
      <button class="myEnterButton" onClick={props.onClick}>
        Login
      </button>
    );
  }

  function LogoutButton(props) {
    return ( null
      //<button onClick={props.onClick}>
      //  Logout
      //</button>
    );
  }
  return (
    <>
      <Header/>
      <PageControl/>
    </>
  );
}

export default App;