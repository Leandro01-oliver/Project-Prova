import { Flex, Box } from "@chakra-ui/react"
import Logo from "./componentsNav/logo";
import User from "./componentsNav/boxUser"
import SignIn from "./componentsNav/signIn";
import MenuNav from "./componentsNav/menuNav";

 function Header(){

    return (
             <>
                <Flex
                    id="box-nav"
                    w="calc(100% - 60px)"
                    h="70px"
                    borderBottom="2px solid #000"
                    align="center"
                    justify="space-between"
                >
                  <Logo/>


                   <MenuNav/>

                  <Flex id="mobile-sign" align="center" direction={{sm:"column",md:"row",lg:"row",xl:"row"}}>
                     <User/>
                     <SignIn/>
                  </Flex>

                </Flex>
             </>
           )  

}
export default Header;