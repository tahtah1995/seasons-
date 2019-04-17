import React from 'react';
import ReactDOM from 'react-dom';
import { bounce,flash,slideInUp} from 'animate.css';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './spinner';


class App extends React.Component{


state={lat:null,errorMessage:''};

    componentDidMount = () => {
        window.navigator.geolocation.getCurrentPosition(
            (postion) => this.setState({lat:postion.coords.latitude}),
            (err) =>   this.setState({errorMessage:err.message})
    
            
        );
    }

renderContent(){
    if (this.state.errorMessage && !this.state.lat){
        return <div> Error: {this.state.errorMessage} </div>
    }
   
    if(!this.state.errorMessage && this.state.lat){
        return <SeasonDisplay lat={this.state.lat} />
    }

    return <Spinner message='please accept our loaction spotter '/>;
  
}
    
    

    render(){

        return (
<div className = "border red">
{this.renderContent()}
</div>

        );
        }
       }



 ReactDOM.render(
<App/>, document.querySelector('#root')


 );