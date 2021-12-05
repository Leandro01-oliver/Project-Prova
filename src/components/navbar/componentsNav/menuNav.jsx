import {Flex} from "@chakra-ui/react"

function MenuNav(){

    const openNav = () =>{
     let mobileSign = document.querySelector("#mobile-sign");

     mobileSign.classList.toggle("show-nav")
    }

    return(
        <>
                    <Flex
                        id="menu-nav"
                        w="30px"
                        h="30px"
                        display="none"
                        border="2px solid #000"
                        borderRadius="50%"
                        justify="center"
                        align="center"
                        mr="1rem"
                        cursor="pointer"
                        onClick={openNav}
                        transition=".5s ease-in-out"
                        _hover={{
                            border:"2px solid transparent",
                            boxShadow:"0 0 5px 0 rgba( 0 , 0 , 0 ,.5)"
                        }}
                    >
                    <i class="fas fa-bars" id="icon-menu"></i>
                    </Flex>
        </>
    )
}
export default MenuNav;