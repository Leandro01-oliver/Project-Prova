import {Flex,Button,Input,Box,InputGroup,Text,InputRightElement} from "@chakra-ui/react"
import React from "react"
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useState } from "react"
import { auth } from "../config/firebaseConnection"
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"

import Head from "next/head"

 function Home() {

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPwd, setLoginPwd] = useState("");

  const redirectionLogath = async ()=>{
    try{
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPwd
     )
      console.log(user);
      alert("Login feito com sucesso!");
      window.location = "/Logath"
     }catch{
     alert("Senha ou Email errados.")
   }
  }

  return (
   <>


   <Flex
    w="100%"
    minH="100vh"
    bg="rgb(0 , 0 , 180)"
    p="50px 4%"
    >
     <Flex 
      w="100%"
      maxW="550px"
      minH="calc(100vh - 100px)"
      boxShadow="0 0 10px 0 rgba(0,0,0,.5)"
      borderRadius="20px"
      mx="auto"
      p="20px"
      direction="column"
      justify="center"
      bg="#fff"
     >
  
      <Input
       mt="1rem"
       type="text"
       placeholder="Informe o seu email"
       onChange = {(event)=>{
        setLoginEmail(event.target.value);
      }} 
      />
   <InputGroup mt="1rem">
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Informe o sua senha'
        onChange = {(event)=>{
          setLoginPwd(event.target.value);
        }} 
      />
      <InputRightElement>
          <Flex
          w="25px"
          h="25px"
          borderRadius="50%"
          onClick={handleClick}
          align="center"
          justify="center"
          cursor="pointer"
          transition="1s ease-in-out"
          _hover={{
              boxShadow:"0 0 5px 0 rgba(0, 0 , 0, .5)"
          }}
          >
         {show ? <ViewIcon/> : <ViewOffIcon/>}
          </Flex>
      </InputRightElement>
    </InputGroup>


    <Button 
              w="100%"  
              mt="1rem"
              onClick={redirectionLogath}
    >
        Entrar
      </Button>
    <a href="/CadastrarUsers">
      <Button w="100%"  
              my="1rem"
              >
        Cadastrar-se
      </Button>
    </a>

     </Flex>
    </Flex>
   </>
  )
}
export default Home;