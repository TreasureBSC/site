import {Component} from 'react';
import ParticlesBG from "./components/ParticlesBG";
import MainLogoText from "./components/MainLogoText";

export default class App extends Component{

    render(){
        return (
            <div>
                <h1>TreasureBSC</h1>
                <MainLogoText />
                <ParticlesBG />
            </div>
        );
    };

}