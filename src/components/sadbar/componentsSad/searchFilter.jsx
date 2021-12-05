import { InputGroup,Input,InputRightElement} from "@chakra-ui/react"

function SearchFilter(){

    return(
            <>
            <InputGroup
                id="box-search"
                display="none"
                mt="4rem"
            >
                <Input
                 placeholder="Informe sua Categoria de Carro"
                />
                <InputRightElement
                    cursor="pointer"
                    children={<i className="fas fa-search"></i>}
                />
            </InputGroup>

            </>
        )
};

export default SearchFilter;