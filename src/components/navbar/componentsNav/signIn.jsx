import {
    Box,
    Button,
    Flex
  } from '@chakra-ui/react'

 function SignIn(){

    const openLogath = ()=>{
       let boxLogin = document.querySelector("#box-login"),
       mobileSign = document.querySelector("#mobile-sign");

     
       mobileSign.classList.remove("show-nav")   
       boxLogin.classList.toggle("show-sign-nav")
    }



    return (
        <>
     <Box 
         onClick={openLogath}
         mr="1rem"
         w="100%"
      > 
      <Button id="btn-sign" >
      <Box mr=".3rem"><i class="fas fa-sign-in-alt"></i></Box> Sign In
      </Button>
      </Box>

    
        </>
    )
}
export default SignIn;