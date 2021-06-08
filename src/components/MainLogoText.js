import {Component} from 'react';
import styles from './MainLogoText.scss';
import treasure from "../img/piratechest.png";

export default class MainLogo extends Component{
    render(){
        return (
            <div>
                <div>
                    <img id="treasure" src={treasure} alt="traesure chest" />
                </div>

                <div className="container">
                    <div className="title">
                        <div className="glitch" data-text="TREASURE">TREASURE</div>
                        <div className="glow">TREASURE</div>
                    </div>
                    <p className="subtitle">generate passive income by holding</p>
                </div>
            </div>
        );
    };
}