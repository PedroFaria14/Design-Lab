import React from 'react'

import style from  "./register.module.css"
import { db } from '../../firebase/config'; // Ajuste o caminho conforme a estrutura do seu projeto

  import { useState } from 'react'
  import { useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'

const Register = () => {
  const [displayName,setDisplayName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState ("");
  const [confirmPassword,setConfirmPassword] = useState ("");
  const [ error,setError] = useState ("");


  const {  auth,
    createUser,
    error: authError, loading } = useAuthentication();
  
  const handleSubmit = async (e) => {
    e.preventDefault();


    setError("");

    const user = {

      displayName,
      email,
      password
    
    }

    if(password !== confirmPassword){
      setError("As senhas Necessitam ser iguais!");
      return
    }

    const res = await createUser(user);
    console.log(res);
  }

  useEffect (() =>{
    if(authError){
      setError(authError);
    }
  },[authError])


  return (
    <div className={style.Register}>
    <h1>Cadastre-se Para Postar</h1>
    <p>Crie seu Usuário e compartilhe suas obras </p>
    <form onSubmit={handleSubmit} className='registrar'>
    <label>
    <span>Nome:</span>
    <input type="text" name='displayName' 
    required placeholder='Nome do Usuário'
    value={displayName} 
    onChange={(e) => setDisplayName(e.target.value)}/>
    </label>


    <label>
    <span>E-mail:</span>
    <input type="email" name='email' 
    required placeholder='E-mail do Usuário'
    value={email} 
    onChange={(e) => setEmail(e.target.value)}/> 
    </label>

    <label>
    <span>Senha</span>
    <input type="password" name='password' 
    required placeholder='Digite a Senha'  value={password} 
    onChange={(e) => setPassword(e.target.value)}/>
    </label>

    <label>
    <span>Confirme sua Senha</span>
    <input type="password" name='confirmPassword' 
    required placeholder='Confirmação de Senha'  
    value={confirmPassword} 
    onChange={(e) => setConfirmPassword(e.target.value)}/>
    </label>

  
    <div className='btnCadas'>  
    {!loading && <button  className='btn'> Cadastrar</button>}
    {loading && <button  className='btn' disabled> Aguarde...</button>}

    </div>

    
    {error && <p className='error'> {error}</p>}

    </form>
    
    </div>
  )
}

export default Register
