import {Button} from "@chakra-ui/react"
import React from "react";

function LinkSad(){

    const menusOptions = React.useMemo(
        () => [
            {
                id : 1,
                title: "Inicio",
                href: "/",
            },
            {
                id : 2,
                title: "Home",
                href: "/",
            }
        ]);

    return(
        <>
        {menusOptions.map((_el) => (
           <Button 
           id="btn"
           w="100%" 
           mt="1rem"
           >
            {(_el.title)}
           </Button>
        ))}
        </>
    )
}
export default LinkSad;