import {Component} from "react";

export default class App extends Component {
    render() {
        return (
    <nav className="navbar navbar-expand-lg bg light">
        <div class="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>   
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Homebase</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Into the Unknown</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">The Final Frontier</a>
                </li>
            </ul>
        </div>
      </div>
    </nav>
        );
    }   
}