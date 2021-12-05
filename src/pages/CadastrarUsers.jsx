import {Flex,Button,Input,InputGroup,InputRightElement} from "@chakra-ui/react"
import React from "react"
import { auth } from "../config/firebaseConnection"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

  function CadastrarUsers() {

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPwd, setRegisterPwd] = useState("");

    const registerUsers = async ()=>{
        try{
            const user = await createUserWithEmailAndPassword(
              auth,
              registerEmail,
              registerPwd
           )
             window.location= "/"
            alert("Cadastro realizado com Sucesso !");

           }catch{
           console.log("Não foi possível cadastrar-se na plataforma;");
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
        setRegisterEmail(event.target.value);
      }} 
      />
   <InputGroup mt="1rem">
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Informe o sua senha'
        onChange = {(event)=>{
          setRegisterPwd(event.target.value);
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
            onClick={registerUsers} 
     >
        Cadastrar-se
      </Button>

    <a href="/">
    <Button w="100%"  
              my="1rem"
    >
        Voltar
      </Button>
     </a>

     </Flex>
    </Flex>
        </>
    )
}
export default CadastrarUsers;