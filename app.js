// const container = document.getElementById('react-container')

// ReactDOM.render("Hello, Welcome to React", container)

// Functional component
// const Container = () =>{
//     return React.createElement(`div`,null,`Hey Kalvians! Welcome to React Learning`,
//        React.createElement(`div`,null,`Let's rock and roll`)
//        );
// }
// Render the Container
// const container = document.getElementById('react-container');
// ReactDOM.render(React.createElement(Container),container);

class ReactContainer extends React.Component{
    // constructor - to initialize the state 
    // constructor() {
    //     super();
    //     this.state = {
    //       name: 'Ayan' // Initialize the state with a name
    //     };
    // }

    // render method to render the react dom 
      render(){
          return React.createElement(`div`,null,`Hey Kalvian`,
          React.createElement(`div`,null,`Let's rock and roll with classes`)
          );
      }
    
  }
  const container = document.getElementById('react-container');
  ReactDOM.render(React.createElement(ReactContainer),container);