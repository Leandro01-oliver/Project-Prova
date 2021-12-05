
import Image from 'next/image'
import LogoImg from '../../../../public/logo.png'
import { Flex } from "@chakra-ui/react"

function Logo(){

    return(
        <>
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
        </>
    )
}
export default Logo;