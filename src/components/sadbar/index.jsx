import {Flex} from "@chakra-ui/react"
import MenuNav from "./componentsSad/menu"
import Filters from "./componentsSad/BoxFilters"


 function Sad(){

    return (
             <>
                <Flex
                    id="box-sad"
                    w="70px"
                    h="70px"
                    borderRight="2px solid #000"
                    borderBottom="2px solid #000"
                   justify="center"
                   align="center"
                   flexDirection="column"
                >
                   <MenuNav/>
  
                   <Filters/>

                </Flex>
             </>
           )  

}
export default Sad;