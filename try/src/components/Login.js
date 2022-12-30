import React, {useState} from "react";


import "./Login.css"

const Login= () => {


    

    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

    const onSuccess = e => {
        alert("User signed in")
        console.log(e)
    }

    const onFailure = e => {
        alert("User sign in Failed")
        console.log(e)
    }
    

    return (
        <div className="cover">
        
            <h1>CONNEXION</h1><hr/><br/>
            
               <div className="alt-login">
               
               
               <button className="blue" title="FACEBOOK"/>
               <button className="RED" title="GOOGLE"/>

                <button className="green" title="INSCRIPTION"/>
               
              
       </div>
       
       
       <p className="text"><div class="d"><hr/>Ou<hr/></div></p>
            
            <input  type="text" placeholder="Nom d'utilisateur" required />
            <input type="password" placeholder="Mot de passe" required/> 
            <h6><a href="#">Mot de passe oublié ?</a></h6>

            <div className="login-btn" onClick={popup}>SE CONNECTER</div>

          

           


            <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p>Username or password incorrect</p>
            </div>
            
        </div>
    )
}

export default Login