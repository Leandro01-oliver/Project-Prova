import {Flex} from "@chakra-ui/react"

function MenuSad(){

    const openSad = () =>{
        let boxSad = document.querySelector("#box-sad"),
            boxNav = document.querySelector("#box-nav"),
            menuSad = document.querySelector("#menu-sad"),
            iconArrow = document.querySelector("#icon-arrow"),
            boxFilter = document.querySelector("#box-filter"),
            bgSad = document.querySelector("#bg-sad"),
            boxSearch = document.querySelector("#box-search"),
            mobileSign = document.querySelector("#mobile-sign");

             
        mobileSign.classList.remove("show-nav")   
        boxSad.classList.toggle("show-sad");
        boxSearch.classList.toggle("show-sad");
        boxNav.classList.toggle("show-sad");
        bgSad.classList.toggle("show-sad");
        boxFilter.classList.toggle("show-sad");
        menuSad.classList.toggle("show-sad");
        iconArrow.classList.toggle("show-sad");
    }

    return(
        <>
                    <Flex
                        id="menu-sad"
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
                            boxShadow:"0 0 5px 0 rgba( 0 , 0 , 0 ,.5)"
                        }}
                    >
                     <i className="fas fa-chevron-right" id="icon-arrow"></i>
                    </Flex>
        </>
    )
}
export default MenuSad;