import {Flex} from "@chakra-ui/react"

function MenuNav(){

    const openSad = () =>{
        let boxSed = document.querySelector("#box-sad"),
            boxNav = document.querySelector("#box-nav"),
            menu = document.querySelector("#menu"),
            boxFilter = document.querySelector("#box-filter");
            
             
        boxSed.classList.toggle("show-sad");
        boxNav.classList.toggle("show-sad");
        boxFilter.classList.toggle("show-sad");
        menu.classList.toggle("show-sad");
    }

    return(
        <>
                    <Flex
                        id="menu"
                        w="30px"
                        h="30px"
                        border="2px solid #000"
                        borderRadius="50%"
                        justify="center"
                        align="center"
                        mx="auto"
                        cursor="pointer"
                        onClick={openSad}
                        transition=".5s ease-in-out"
                        _hover={{
                            border:"2px solid transparent",
                            boxShadow:"0 0 10px 0 rgba( 0 , 0 , 0 ,.5)"
                        }}
                    >
                      
                    </Flex>
        </>
    )
}
export default MenuNav;