import React from 'react'
import {Flex,Button,Input,Box,Text} from "@chakra-ui/react"
import Link from 'next/link'
import { db, storage } from "../config/firebaseConnection"
import { collection, getDocs, addDoc } from "firebase/firestore"
import { ref, getDownloadURL  } from "firebase/storage"
import { useState, useEffect } from "react";

export default function CadastrarA() {



    const [newCategoria, setCategoria] = useState("");
    const [newMarcaAutomovel, setMarcaAutomovel] = useState("");
    const [newModeloAutomovel, setModeloAutomovel] = useState("");
    const [newAnoFabricacaoAutomovel, setAnoFabricacaoAutomovel] = useState("");
    const [newAnoModeloAutomovel, setAnoModeloAutomovel] = useState("");
    const [newValorVendaAutomovel, setValorVendaAutomovel] = useState("");
    const [newDescricaoAutomovel, setDescricaoAutomovelAutomovel] = useState("");

    const [image,setImage] = useState(null);

    // const handleChange = e => {
    //    if(e.target.files[0]){
    //      setImage(e.target.files[0]);
    //    }
    //    console.log("image :", image)
    // }
  
 
  useEffect(() => {
  
    const carCollectionRef = collection( db , "cars" );

    const getCars = async () => {

      const data = await getDocs(carCollectionRef);
      data.docs.map((doc) => ({...doc.data(), id: doc.id}));
    };
    
    getCars();

  },[])
 
  const creatCarsA = async () =>{

    const carCollectionRef = collection( db , "cars" );

    // const uploadTask = storage.ref(`images/${image.name}`).put(image);

    // uploadTask.on(
    //   "state_changed",
    //   snapshot => {},
    //   error => {
    //     console.log(error);
    //   },
    //   ()=>{
    //       storage
    //       .ref("images")
    //       .child(image.name)
    //       .getDownloadURL();
    //   }
    // );

    if(addDoc){
      await addDoc(carCollectionRef,{
                                       categoryCar: newCategoria,
                                       barndCar: newMarcaAutomovel,
                                       modelCar: newModeloAutomovel,
                                       yearManufacturingCar: newAnoFabricacaoAutomovel,
                                       yearModelCar: newAnoModeloAutomovel,  
                                       valueSaleCar: newValorVendaAutomovel,
                                       descriptionCar: newDescricaoAutomovel
                                    }
                                        ); 
          alert("Sucesso com o seu anúncio!");
          window.location = "/Logath"
       }else{
         alert("Não foi possível efetuar seu anúncio.")
       }

  }

  const [animaLabelOne, setAnimaLabelOne] = useState(false);
  const [animaLabelTwo, setAnimaLabelTwo] = useState(false);
  const [animaLabelThree, setAnimaLabelThree] = useState(false);
  const [animaLabelFour, setAnimaLabelFour] = useState(false);
  const [animaLabelFive, setAnimaLabelFive] = useState(false);
  const [animaLabelSix, setAnimaLabelSix] = useState(false);
  const [animaLabelSeven, setAnimaLabelSeven] = useState(false);


    return (
        <>
    <Flex
    w="100%"
    minH="100vh"
    bg="rgb(0 , 0 , 180)"
    p="50px 4%"
    >
     <Flex 
      w="100%"
      maxW="550px"
      h="calc(100vh - 100px)"
      boxShadow="0 0 10px 0 rgba(0,0,0,.5)"
      borderRadius="20px"
      mx="auto"
      p="20px 10px "
      direction="column"
      justify="center"
      bg="#fff"
     >
       <Box
         overflowY="scroll"
         maxW="550px"
         h="calc(100vh - 100px)"
       >
            <Flex
                        h="50px"
                        w="96%"
                        mx="auto"
                        borderRadius="10px"
                        border="2px dashed #000"
                        align="center"
                        justify="center"
                        cursor="pointer"
                    >
                    <label
                    id="label__file"
                    for="input__file"
                    w="96%"
                    mx="auto"
                    >
                    Enviar a foto de seu automóvel
                    </label>
                    <Input
                    id="input__file"
                    display="none"
                    mt="1rem"
                    type="file"
                    />
                    </Flex>
            <Flex
                    w="96%"
                    mx="auto"
                    h="50px"
                    border= "2px solid #000"
                    mt="1.5rem"
                    borderRadius="5px"
                    align="center"
                    justify="center"
                    position="relative"
                    transition=".5s ease-in-out"
                    p={animaLabelOne ? '35px 10px 20px 10px' : '10px'}
                    _hover={{
                        border:"2px solid transparent",
                        boxShadow:"0 0 5px 0 rgba( 0 , 0, 0, .5)"
                    }}
                    >
                    <Text
                    position="absolute"
                    top={animaLabelOne ? '.25rem' : '-.9rem'}
                    fontSize={animaLabelOne ? '12px' : '14px'}
                    left="1rem"
                    bg={ animaLabelOne ? 'transparent' : '#fff'}
                    p="0 5px"
                    onChange={(event) =>{
                        setAnimaLabelOne(event.target.value);
                    }}
                    >
                    Categoria do Automóvel :
                    </Text>
                    <Input
                    onClick={()=>{
                        setAnimaLabelOne(!animaLabelOne);
                    } }
                        w="100%"
                        p="0"
                        h="50px"
                        type="text"
                        border="0"
                        borderRadius="5px!important"
                        _focus={{
                            boxShadow:"none" 
                        }}
                        onChange={(event) =>{
                          setCategoria(event.target.value);
                        }}  
                    />
                    </Flex>

                    <Flex
                    w="96%"
                    mx="auto"
                    h="50px"
                    border= "2px solid #000"
                    mt="1.5rem"
                    borderRadius="5px"
                    align="center"
                    justify="center"
                    position="relative"
                    transition=".5s ease-in-out"
                    p={animaLabelOne ? '35px 10px 20px 10px' : '10px'}
                    _hover={{
                        border:"2px solid transparent",
                        boxShadow:"0 0 5px 0 rgba( 0 , 0, 0, .5)"
                    }}
                    >
                    <Text
                    position="absolute"
                    top={animaLabelTwo ? '.25rem' : '-.9rem'}
                    fontSize={animaLabelTwo ? '12px' : '14px'}
                    left="1rem"
                    bg={ animaLabelTwo ? 'transparent' : '#fff'}
                    p="0 5px"
                    onChange={(event) =>{
                        animaLabelTwo(event.target.value);
                    }}
                    >
                    Marca do Automóvel :
                    </Text>
                <Input
                   onClick={()=>{
                    setAnimaLabelTwo(!animaLabelTwo)
                } }
                    w="100%"
                    p="0"
                    h="50px"
                    type="text"
                    border="0"
                 borderRadius="5px!important"
                 _focus={{
                     boxShadow:"none" 
                 }}
                    onChange={(event) =>{
                        setMarcaAutomovel(event.target.value);
                    }} 
                    />
                    </Flex>

                    <Flex
                    w="96%"
                    mx="auto"
                    h="50px"
                    border= "2px solid #000"
                    mt="1.5rem"
                    borderRadius="5px"
                    align="center"
                    justify="center"
                    position="relative"
                    transition=".5s ease-in-out"
                    p={animaLabelThree ? '35px 10px 20px 10px' : '10px'}
                    _hover={{
                        border:"2px solid transparent",
                        boxShadow:"0 0 5px 0 rgba( 0 , 0, 0, .5)"
                    }}
                    >
                    <Text
                    position="absolute"
                    top={animaLabelThree ? '.25rem' : '-.9rem'}
                    fontSize={animaLabelThree ? '12px' : '14px'}
                    left="1rem"
                    bg={ animaLabelThree ? 'transparent' : '#fff'}
                    p="0 5px"
                    onChange={(event) =>{
                        animaLabelThree(event.target.value);
                    }}
                    >
                    Modelo do Automóvel :
                    </Text>
                <Input
                   onClick={()=>{
                    setAnimaLabelThree(!animaLabelThree)
                } }
                    w="100%"
                    p="0"
                    h="50px"
                    type="text"
                    border="0"
                    borderRadius="5px!important"
                    _focus={{
                        boxShadow:"none" 
                    }}
                    onChange={(event) =>{
                      setModeloAutomovel(event.target.value);
                    }} 
                    />
                    </Flex>

                    <Flex
                    w="96%"
                    mx="auto"
                    h="50px"
                    border= "2px solid #000"
                    mt="1.5rem"
                    borderRadius="5px"
                    align="center"
                    justify="center"
                    position="relative"
                    transition=".5s ease-in-out"
                    p={ animaLabelFour ? '35px 10px 20px 10px' : '10px'}
                    _hover={{
                        border:"2px solid transparent",
                        boxShadow:"0 0 5px 0 rgba( 0 , 0, 0, .5)"
                    }}
                    >
                    <Text
                    position="absolute"
                    top={ animaLabelFour ? '.25rem' : '-.9rem'}
                    fontSize={ animaLabelFour ? '12px' : '14px'}
                    left="1rem"
                    bg={ animaLabelFour ? 'transparent' : '#fff'}
                    p="0 5px"
                    onChange={(event) =>{
                        animaLabelFour(event.target.value);
                    }}
                    >
                       Ano de Fabricação do Automóvel :
                    </Text>
                    <Input
                        onClick={()=>{      
                          setAnimaLabelFour(!animaLabelFour)
                        } }
                        w="100%"
                        maxLength="10"
                        id="input__date_manufacturing"
                        onKeyPress = {()=>{
                            let inputDateManufacturing = document.querySelector("#input__date_manufacturing");
  
                            if(inputDateManufacturing.value.length == 2 ||  inputDateManufacturing.value.length == 5)
                             inputDateManufacturing.value += "/"
                       }}
                        p="0"
                        h="50px"
                        type="text"
                        border="0"
                        borderRadius="5px!important"
                        _focus={{
                            boxShadow:"none" 
                        }}
                    onChange={(event) =>{
                      setAnoFabricacaoAutomovel(event.target.value);
                    }} 
                    />
                    </Flex>

                    <Flex
                    w="96%"
                    mx="auto"
                    h="50px"
                    border= "2px solid #000"
                    mt="1.5rem"
                    borderRadius="5px"
                    align="center"
                    justify="center"
                    position="relative"
                    transition=".5s ease-in-out"
                    p={ animaLabelFive ? '35px 10px 20px 10px' : '10px'}
                    _hover={{
                        border:"2px solid transparent",
                        boxShadow:"0 0 5px 0 rgba( 0 , 0, 0, .5)"
                    }}
                    >
                    <Text
                    position="absolute"
                    top={ animaLabelFive ? '.25rem' : '-.9rem'}
                    fontSize={ animaLabelFive ? '12px' : '14px'}
                    left="1rem"
                    bg={ animaLabelFive ? 'transparent' : '#fff'}
                    p="0 5px"
                    onChange={(event) =>{
                        animaLabelFive(event.target.value);
                    }}
                    >
                       Ano de Modelo do Automóvel :
                    </Text>
                    <Input
                    onClick={()=>{
                      setAnimaLabelFive(!animaLabelFive)
                    } }
                    w="100%"
                    id="input__date_model"
                    maxLength="10"
                    onKeyPress = {()=>{
                         let inputDateModel = document.querySelector("#input__date_model");

                         if(inputDateModel.value.length == 2 ||  inputDateModel.value.length == 5)
                          inputDateModel.value += "/"
                    }}
                    p="0"
                    h="50px"
                    type="text"
                    border="0"
                    borderRadius="5px!important"
                    _focus={{
                       boxShadow:"none" 
                    }}
                     onChange={(event) =>{
                      setAnoModeloAutomovel(event.target.value);
                    }}
                    />
                    </Flex>

                    <Flex
                    w="96%"
                    mx="auto"
                    h="50px"
                    border= "2px solid #000"
                    mt="1.5rem"
                    borderRadius="5px"
                    align="center"
                    justify="center"
                    position="relative"
                    transition=".5s ease-in-out"
                    p={ animaLabelSix ? '35px 10px 20px 10px' : '10px'}
                    _hover={{
                        border:"2px solid transparent",
                        boxShadow:"0 0 5px 0 rgba( 0 , 0, 0, .5)"
                    }}
                    >
                    <Text
                    position="absolute"
                    top={ animaLabelSix ? '.25rem' : '-.9rem'}
                    fontSize={ animaLabelSix ? '12px' : '14px'}
                    left="1rem"
                    bg={ animaLabelSix ? 'transparent' : '#fff'}
                    p="0 5px"
                    onChange={(event) =>{
                        animaLabelSix(event.target.value);
                    }}
                    >
                        Valor de Venda do Automóvel :
                    </Text>
                <Input
                  id="input__value_sales"
                  w="100%"
                  onKeyPress = {() =>{
                      let valueSales = document.querySelector("#input__value_sales");

                    if(valueSales.value.length == 0)
                          valueSales.value += "R$";
                  }}
                    onClick={()=>{
                        setAnimaLabelSix(!animaLabelSix)
                    } }
                    p="0"
                    h="50px"
                    type="text"
                    border="0"
                    borderRadius="5px!important"
                    _focus={{
                        boxShadow:"none" 
                     }}
                    onChange={(event) =>{
                        setValorVendaAutomovel(event.target.value);
                    }} 
                    />
                  </Flex>

                    <Flex 
                    w="96%"
                    mx="auto"
                    h="150px"
                    border= "2px solid #000"
                    my="1rem"
                    borderRadius="5px"
                    p="10px 8px"
                    align="center"
                    justify="center"
                    position="relative"
                    >
                   <Text
                    position="absolute"
                    top={ animaLabelSeven ? '.2rem' : '-.9rem'}
                    fontSize={ animaLabelSeven ? '12px' : '14px'}
                    left="1rem"
                    p="0 5px"
                    bg={ animaLabelSeven ? 'transparent' : '#fff'}
                    onChange={(event) =>{
                        animaLabelSeven(event.target.value);
                    }}
                    >
                        Descrição do Automóvel :
                    </Text>
                    <textarea 
                    id="textarea__desc"
                    onClick={()=>{
                     setAnimaLabelSeven(!animaLabelSeven)   
                    } }
                    onChange={(event) =>{
                      setDescricaoAutomovelAutomovel(event.target.value);
                    }} 
                    ></textarea>
                </Flex>


    <Box 
    w="96%"
    mx="auto"
    >
      <Button w="100%"  
              mt="1rem"
              onClick={creatCarsA}
              >
        Cadastrar-se
      </Button>
    </Box>

   <Box 
    w="96%"
    mx="auto"
    >
   <Link
    href="/Logath"
   >
      <Button w="100%"  
              my="1rem"
              >
        Voltar
      </Button>
   </Link>
   </Box>
   </Box>
     </Flex>
    </Flex>
        </>
    )
}
