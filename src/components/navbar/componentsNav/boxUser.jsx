import {Flex,Image} from "@chakra-ui/react"

function User(){

    return(
        <>
       <Image
        src="https://i.pinimg.com/736x/5a/72/e1/5a72e1f05f9e2e1b76a8438a7490dc3b.jpg"
        width="50px"
        height="50px"
        borderRadius="50%"
        cursor="pointer"
        mb={{sm:"1rem",md:"0",lg:"0",xl:"0"}}
        ml="auto"
        mr={{sm:"auto",md:"1rem",lg:"1rem",xl:"1rem"}}
       />
        </>
    )
}
export default User;