import {Flex} from "@chakra-ui/react"
import LinkSad from "./linksNav";
import SearchFilter from "./searchFilter"

function Filters(){


    return(
        <>
            <Flex
            id="box-filter"
            align="center"
            justify="center"
            display="none"
            >
           <SearchFilter/>
            <LinkSad/>
            </Flex>
        </>
    )
}
export default Filters;