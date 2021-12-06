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

    const getUsers = async () => {

      const data = await getDocs(carCollectionRef);
      data.docs.map((doc) => ({...doc.data(), id: doc.id}));
    };
    
    getUsers();

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
      //  onChange={handleChange}
      />
    </Flex>

    <Box 
    w="96%"
    mx="auto"
    >
      <Input
       mt="1rem"
       type="text"
       placeholder="Informe a categoria do seu automóvel"
       onChange={(event) =>{
        setCategoria(event.target.value);
      }} 
      />
    </Box>

    <Box 
    w="96%"
    mx="auto"
    >
   <Input
      mt="1rem"
       type="text"
       placeholder="Informe a marca do seu automóvel"
       onChange={(event) =>{
        setMarcaAutomovel(event.target.value);
      }} 
    />
    </Box>

    <Box 
    w="96%"
    mx="auto"
    >
   <Input
       mt="1rem"
       type="text"
       placeholder="Informe o modelo do seu automóvel"
       onChange={(event) =>{
        setModeloAutomovel(event.target.value);
      }} 
    />
    </Box>

   <Box 
    w="96%"
    mx="auto"
    >
    <Input
       mt="1rem"
       type="text"
       placeholder="Informe o ano de fabricação do seu automóvel"
       onChange={(event) =>{
        setAnoFabricacaoAutomovel(event.target.value);
      }} 
    />
    </Box>

    <Box 
    w="96%"
    mx="auto"
    >
    <Input
       mt="1rem"
       type="text"
       placeholder="Informe o ano do modelo do seu automóvel"
       onChange={(event) =>{
        setAnoModeloAutomovel(event.target.value);
      }} 
    />
    </Box>
    <Box 
    w="96%"
    mx="auto"
    >
   <Input
       mt="1rem"
       type="text"
       placeholder="Informe o valor de venda do seu automóvel"
       onChange={(event) =>{
        setValorVendaAutomovel(event.target.value);
      }} 
    />
    </Box>
    <Box 
    w="96%"
    mx="auto"
    >
    <textarea 
    id="textarea__desc"
    placeholder="Informe a descrição de seu automóvel"
     onChange={(event) =>{
        setDescricaoAutomovelAutomovel(event.target.value);
      }} 
    ></textarea>
    </Box>
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
