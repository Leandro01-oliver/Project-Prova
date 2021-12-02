import {Flex} from "@chakra-ui/react"
import {database} from "firebase/database"
import {useEffect} from "react"

 function Content(){

   const closeSad = () =>{
    let boxSed = document.querySelector("#box-sad"),
    boxNav = document.querySelector("#box-nav"),
    menu = document.querySelector("#menu"),
    boxFilter = document.querySelector("#box-filter");
    
     
    boxSed.classList.remove("show-sad");
    boxNav.classList.remove("show-sad");
    boxFilter.classList.remove("show-sad");
    menu.classList.remove("show-sad");
   }

   useEffect(()=>{
      
   })

    return (
             <>
                <Flex
                    id="box-content"
                    w="100%"
                    minH="calc(100vh - 70px)"
                    p="10px"
                    onClick={closeSad}
                >

                </Flex>
             </>
           )  

}
export default Content;