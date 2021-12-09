import {
  Flex,
  Button,
  Input,
  Box,
  InputGroup,
  Text,
  InputRightElement,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import React,{useEffect} from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Image from "next/image";
import LogoImg from "../../public/logo.png";
import { auth } from "../config/firebaseConnection";
import { signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup, FacebookAuthProvider,GithubAuthProvider } from "firebase/auth";

function Home() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPwd, setLoginPwd] = useState("");

  const signPoupGithub = ()=>{

    const provider = new GithubAuthProvider();

    signInWithPopup(auth,provider)
    .then(()=>{
      
      setTimeout(()=>{
        window.location="/Logath"
      },1500)

    }).catch(()=>{
      // alert("Erro com a autenticação do faceboock")
    })
  }

  const signPoupFaceboock = ()=>{
    const provider = new FacebookAuthProvider();

    signInWithPopup(auth,provider)
    .then(()=>{
      alert("Sucesso com a autenticação do faceboock")

      setTimeout(()=>{
        window.location="/Logath"
      },1500)

    }).catch(()=>{
      // alert("Erro com a autenticação do faceboock")
    })
  }

  const signPoupGoogle = ()=>{
    
  const provider = new GoogleAuthProvider();

     signInWithPopup(auth,provider)
     .then((result)=>{
       const name = result.user.displayName
       const email = result.user.email
       const profile = result.user.photoURL

       localStorage.setItem("name",name)
       localStorage.setItem("email",email)
       localStorage.setItem("profile",profile)

       setTimeout(()=>{
         window.location="/Logath"
       },1500)

     }).catch((error)=>{
        console.log("erro na autenticação com o google")
     })
  }

  const redirectionLogath = async () => {
    let alertEspecifecCamp = document.querySelector("#alert__especifec_camp"),
      alertAllCamp = document.querySelector("#alert__all_camp"),
      alertErroCamp = document.querySelector("#alert__error_camp");

    let valueEmail = document.querySelector("#input__email").value,
      valuePwd = document.querySelector("#input__pwd").value;

    setTimeout(async () => {
      if (valueEmail == "" && valuePwd == "") {
        alertAllCamp.classList.toggle("show-alerts");
        alertEspecifecCamp.classList.remove("show-alerts");
        alertErroCamp.classList.remove("show-erro-alert");
      } else if (valueEmail == "" || valuePwd == "") {
        alertEspecifecCamp.classList.toggle("show-alerts");
        alertAllCamp.classList.remove("show-alerts");
        alertErroCamp.classList.remove("show-erro-alert");
      } else {
        try {
          const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPwd
          );
          alertAllCamp.classList.remove("show-alerts");
          alertEspecifecCamp.classList.remove("show-alerts");
          window.location = "/Logath";
        } catch {
          alertErroCamp.classList.toggle("show-erro-alert");
          alertAllCamp.classList.remove("show-alerts");
          alertEspecifecCamp.classList.remove("show-alerts");
        }
      }
    }, 2000);
  };



  return (
    <>
      <Flex
        id="bg-login"
        w="100%"
        minH="100vh"
        backgroundSize="100% 100%"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
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
          <Flex my="1rem" mx="auto" cursor="pointer">
            <Image
              src={LogoImg}
              alt="Picture of the author"
              width={80}
              height={80}
            />
          </Flex>
          <Input
            id="input__email"
            mt="1rem"
            type="text"
            placeholder="Informe o seu email"
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <InputGroup mt="1rem">
            <Input
              id="input__pwd"
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Informe o sua senha"
              onChange={(event) => {
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
                  boxShadow: "0 0 5px 0 rgba(0, 0 , 0, .5)",
                }}
              >
                {show ? <ViewIcon /> : <ViewOffIcon />}
              </Flex>
            </InputRightElement>
          </InputGroup>

          <Alert
            display="none"
            id="alert__all_camp"
            status="error"
            variant="left-accent"
            w="100%"
            mx="auto"
            mt="1rem"
            borderRadius="5px"
          >
            <AlertIcon />
            Preencha todos os campos para o login !
          </Alert>
          <Alert
            display="none"
            id="alert__especifec_camp"
            status="error"
            variant="left-accent"
            w="100%"
            mx="auto"
            mt="1rem"
            borderRadius="5px"
          >
            <AlertIcon />
            Preencha os campos que estão faltando !
          </Alert>

          <Alert
            display="none"
            id="alert__error_camp"
            status="error"
            variant="left-accent"
            w="100%"
            mx="auto"
            mt="1rem"
            borderRadius="5px"
          >
            <AlertIcon />
            Email ou Senha incorretos!
          </Alert>

          <Button w="100%" mt="1rem" onClick={redirectionLogath}>
            Entrar
          </Button>

          <a href="/CadastrarUsers">
            <Button w="100%" my="1rem">
              Cadastrar-se
            </Button>
          </a>

        <Box
        my="1rem"
        >
          <hr />
        </Box>

        <Button w="100%" mt="1rem" onClick={signPoupGoogle}>
            Google
        </Button>

        <Button w="100%" mt="1rem" onClick={signPoupFaceboock}>
            Meta
        </Button>

        <Button w="100%" mt="1rem" onClick={signPoupGithub}>
            Github
        </Button>
        </Flex>
      </Flex>
    </>
  );
}
export default Home;
