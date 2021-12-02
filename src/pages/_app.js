import { ChakraProvider } from '@chakra-ui/react'
import "../../public/style.css"

function MyApp({ Component, pageProps }) {

    return (
             <>  
                 <ChakraProvider>
                   <Component {...pageProps} />
                 </ChakraProvider>
                 
             </>
           )
  }

  export default MyApp