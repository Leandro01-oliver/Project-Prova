import NavBar from "../components/navbar/index"
import SadBar from "../components/sadbar/index"
import Content from "../components/content/index"
import {Flex} from "@chakra-ui/react"

export default function Home() {
  return (
   <>
    <Flex>
     <SadBar/>
     <NavBar/>
     </Flex>
     <Content/>
   </>
  )
}
