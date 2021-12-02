import { Flex, Box } from "@chakra-ui/react"
import Image from 'next/image'
import LogoImg from '../../../public/logo.png'

 function Header(){

    return (
             <>
                <Flex
                    id="box-nav"
                    w="calc(100% - 70px)"
                    h="70px"
                    borderBottom="2px solid #000"
                    align="center"
                    justify="space-between"
                >
                    <Flex
                      align="center"
                      marginLeft="1rem"
                      cursor="pointer"
                    >
                      <Image
                        src={LogoImg}
                        height="50px"
                        width="50px"
                      />
                    </Flex>
                 
                </Flex>
             </>
           )  

}
export default Header;