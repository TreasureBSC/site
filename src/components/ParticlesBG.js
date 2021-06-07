import Particles from 'react-particles-js';
import {Component} from 'react';
import styles from './ParticlesBG.css';

export default class ParticlesBG extends Component{
    render(){
        return (
            <div>
                <Particles
                    id='particle-canvas'
                    params={{
                        particles: {
                            color: {
                                value: '#1a44ad'
                            },
                            number: {
                                value: 160,
                                density: {
                                    enable: false
                                }
                            },
                            size: {
                                value: 10,
                                random: true
                            },
                            move: {
                                direction: 'top',
                                out_mode: 'out'
                            },
                            line_linked: {
                                enable: false
                            }
                        },
                    }} />
            </div>
        );
    };
}