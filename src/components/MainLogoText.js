import {Component} from 'react';
import styles from './MainLogoText.scss';
import treasure from "../img/mainlogo.png";

export default class MainLogo extends Component{
    render(){
        return (
            <div>
                <div>
                    <img id="treasure" src={treasure} alt="traesure chest" />
                </div>

                <div className="container">
                    <div className="glitch" data-text="TREASURE">TREASURE</div>
                    <div className="glow">TREASURE</div>
                    <p className="subtitle">safest store of value on the Binance Smart Chain</p>
                </div>
            </div>
        );
    };
}