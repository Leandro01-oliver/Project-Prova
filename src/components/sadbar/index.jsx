import {Flex} from "@chakra-ui/react"
import MenuSad from "./componentsSad/menuSad"
import Filters from "./componentsSad/boxFilters"


 function Sad(){

    return (
             <>
                <Flex
                    id="box-sad"
                    w="60px"
                    h="70px"
                    borderRight="2px solid #000"
                    borderBottom="2px solid #000"
                   justify="center"
                   align="center"
                   flexDirection="column"
                >
                   <MenuSad/>
                   <Filters/>
                </Flex>
             </>
           )  

}
export default Sad;