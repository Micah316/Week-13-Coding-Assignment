import {Component} from "react";

export default class App extends Component {
    render() {
        return (
            <div>
                <form className='App App-header App-link'>
                 <div className='position-absolute top-50 start-50 translate-middle border border-5 border-info'>
                    <h3>Log In</h3>
                    <label>
                        Username:
                    <input className='m-1' type="text" name="name" /><br/>
                        Password:
                    <input className='m-1' type="text" name="name" />   
                    </label><br/>
                    <input className='btn btn-outline-info m-1' type="submit" value="Submit" />
                </div>   
                </form>
                </div>
        );
    }
}