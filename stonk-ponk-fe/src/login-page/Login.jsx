import Particles from 'react-particles-js';
import './login.css'

import logo from '../navigation/atlassian.png';

function Login() {
    return (
        <div className="container">
            <div className="particle-container">
                <Particles 
                    width={"100%"}
                    height={"100%"}
                    params={{
                        "particles": {
                            "number": {
                                "value": 70
                            },
                            "size": {
                                "value": 3
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }}
                />
            </div>
            <div className="login-form">
                <div className="stonk-ponk-logo">
                    <img id="logo" src={logo} alt=""/>
                </div>
                <div className="title">
                    <h1>Stonk Ponk</h1>
                </div>
                <form>
                    <div class="label-container"><label for="username">Username</label></div>
                    <input id="username" type="text" required></input>
                    <div class="underline"></div><br></br>
                    
                    <div class="label-container"><label for="password">Password</label></div>
                    <input id="password" type="password" required></input>
                    <div class="underline"></div><br></br>
                    <p id="forgot-password">
                        <a className="link" href="#"> Forgot your password?</a>
                    </p>
                    <input id="submit-button" type="submit" value="Login"/>
                </form>
                <hr></hr>
                <p>Don't have an account? <a className="link" href="#">Sign up now!</a></p>
                
            </div>
        </div>
    )
}

export default Login;