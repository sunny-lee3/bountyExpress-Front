import React, {useState} from 'react';
import axios from 'axios';

import { FilledInput } from '@material-ui/core';
import Button from '@material-ui/core/Button';


import { useAuth0 } from '@auth0/auth0-react';

import './GuildMaster.css'




export default function AdminPage(){

const { isAuthenticated, getIdTokenClaims } = useAuth0();
const [email, setEmail] = useState();
const [password, setPassword] = useState(); 
const [userCreate, setUserCreate] = useState();


const signUpForm = {
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',

}

const style = {


}
const FORM ={
    backgroundColor:'rgba(0,0,0,0.6)',
    borderWidth: '3px',
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius:'8px',
    width:'50vh',
    height:'70vh',
    marginLeft:'10vh'
}
const styleFormBox ={
    borderWidth: '3px',
    borderColor: 'white',
    borderStyle: 'solid',
    borderRadius:'8px',
    width: '40vh',
    height: '25vh',
    marginTop:'9vh',
    color: 'white'
}

const secondScreen={
    backgroundColor:'rgba(0,0,0,0.6)',
    borderWidth: '3px',
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius:'8px',
    width:'50vh',
    height:'70vh',
    marginLeft:'10vh'
}
const headingGuild={
    marginLeft: '15vh',
    marginBottom: '20vh',
    width:'40vh'
}
const mainBackground ={
    background: "url('https://acegif.com/wp-content/gif/outerspace-6.gif') no-repeat",
    backgroundSize:'100%',
    backgroundAttachment: 'fixed'
}



function handleSubmit(){
    if(isAuthenticated){
        getIdTokenClaims()
        .then((res) => {
            const jwt = res.__raw;
            const config ={
                headers :{Authorization: `Bearer ${jwt}`},
                method: "POST",
                url: "https://dev-b086be-1.us.auth0.com/dbconnections/signup",
                body:{
                    client_id: "fnpUrVSJZ3Vh2ENmn3w4iudtiRGlptS0",
                    email: "sunny.lee69love@gmail.com",
                    password: "qazwesxewd12344KJKjk.",
                    connection: "Bounties",
                    picture: "",
                    use_metadata: {
                        capability: ""
                    }
                }
            }
            axios(config)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.error(err)
            })
        })
        .catch((err) => {
            console.error(err)
        })
    }
}

    return(
        <div>
            <main style={mainBackground}>

                <div style={headingGuild} className="adminPageHeading">
                    <div style={{ backgroundColor:"black"}}>
                    <h2 
                    id="GuildMasterTitle"> 
                        Welcome, Guild Master
                        <span aria-hidden>_</span>
                        <span aria-hidden class="masterTitle__glitch">Guild Master_</span>
                        <span aria-hidden class="masterTitle__tag">ORGINAL</span>
                        </h2>
                    </div>
                </div>
                {/* container */}
                <div style={{marginLeft: '50vh', width: '85vh'}}>
                    <h3 id="GuildMasterTitle">Create a user or check the bounties.
                    <span aria-hidden>_</span>
                    <span aria-hidden class="masterTitle__glitch">Create a user or check the bounties_</span>
                    <span aria-hidden class="masterTitle__tag">ORGINAL</span>
                    </h3>
                </div>
                <div>

                </div>
                <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                    <div style={FORM} id="FORM">
                        <div style={signUpForm} id="signUpAuth0-form">
                            <form style={style}>
                                <div>
                                    <p style={{
                                        color:'white',
                                        marginTop: '2vh'
                                        }}>
                                    User's Email
                                    </p>
                                    <FilledInput 
                                        type="email"
                                        label="userEmail"
                                        id="Admin-userEmail"
                                        style={{
                                            borderColor:'white', 
                                            borderStyle:'solid',
                                            borderWidth:'2px', 
                                            marginTop: '2vh'
                                        }}
                                    >
                                    </FilledInput>
                                </div>

                                <div>
                                    <p style={{
                                        color:'white',
                                        marginTop: '2vh',
                                        
                                        }}>
                                    User's Password
                                    </p> 
                                    <FilledInput 
                                        label="userPassword"
                                        id="Admin-Password"
                                        style={{
                                            borderColor:'white', 
                                            borderStyle:'solid',
                                            borderWidth:'2px', 
                                            marginTop: '2vh'
                                        }}
                                        color="secondary"
                                        type="password"
                                    >
                                    </FilledInput>
                                </div>

                                <div>
                                    <p style={{
                                        color:'white',
                                        marginTop: '2vh',
                                        
                                        }}>
                                    User's Capability
                                    </p> 
                                    <FilledInput 
                                        label="userCap"
                                        id="Capability"
                                        style={{
                                            borderColor:'white', 
                                            borderStyle:'solid',
                                            borderWidth:'2px', 
                                            marginTop: '2vh'
                                        }}
                                        color="secondary"
                                        type="text"
                                    >
                                    </FilledInput>
                                </div>

                                <Button onClick={handleSubmit} color='secondary' >Create User</Button> 
                                <div>
                                    <FilledInput
                                        style={styleFormBox}
                                        label="AdminUserResponse"
                                        id="adminResponse"
                                        value="This is a response"
                                        disabled
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div style={secondScreen}>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </main>
        </div>

    )
}