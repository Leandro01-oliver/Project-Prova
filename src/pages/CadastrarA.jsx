import React from 'react'
import {Flex,Button,Input,Box,InputGroup,Text,InputRightElement} from "@chakra-ui/react"
import Link from 'next/link'
import { db  } from "../config/firebaseConnection"
import { collection, getDocs, addDoc} from "firebase/firestore"
import { useState, useEffect } from "react";

export default function CadastrarA() {


    const [newCategoria, setCategoria] = useState("");
    const [newMarcaAutomovel, setMarcaAutomovel] = useState("");
    const [newModeloAutomovel, setModeloAutomovel] = useState("");
    const [newAnoFabricacaoAutomovel, setAnoFabricacaoAutomovel] = useState("");
    const [newAnoModeloAutomovel, setAnoModeloAutomovel] = useState("");
    const [newValorVendaAutomovel, setValorVendaAutomovel] = useState("");
    const [newDescricaoAutomovel, setDescricaoAutomovelAutomovel] = useState("");

 
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

  const UploadFile = async (e) =>{
     const file = e.target.files[0];
     const storageRef = storage.storage().ref();
     const fileRef = storageRef.child(file.name);
     await fileRef.put(file).then(()=>{
       console.log("Upload feito com sucesso!");
     })
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
      minH="calc(100vh - 100px)"
      boxShadow="0 0 10px 0 rgba(0,0,0,.5)"
      borderRadius="20px"
      mx="auto"
      p="20px"
      direction="column"
      justify="center"
      bg="#fff"
     >
    <Flex
        h="50px"
        w="100%"
        borderRadius="10px"
        border="2px dashed #000"
        align="center"
        justify="center"
        cursor="pointer"
    >
    <label
     id="label__file"
     for="input__file"
    >
    Enviar a foto de seu automóvel
    </label>
     <Input
      id="input__file"
      display="none"
       mt="1rem"
       type="file"
       onChange={UploadFile}
      />
    </Flex>

      <Input
      mt="1rem"
       type="text"
       placeholder="Informe a categoria do seu automóvel"
       onChange={(event) =>{
        setCategoria(event.target.value);
      }} 
      />
 
   <Input
      mt="1rem"
       type="text"
       placeholder="Informe a marca do seu automóvel"
       onChange={(event) =>{
        setMarcaAutomovel(event.target.value);
      }} 
    />

   <Input
       mt="1rem"
       type="text"
       placeholder="Informe o modelo do seu automóvel"
       onChange={(event) =>{
        setModeloAutomovel(event.target.value);
      }} 
    />

    <Input
       mt="1rem"
       type="text"
       placeholder="Informe o ano de fabricação do seu automóvel"
       onChange={(event) =>{
        setAnoFabricacaoAutomovel(event.target.value);
      }} 
    />

    <Input
       mt="1rem"
       type="text"
       placeholder="Informe o ano do modelo do seu automóvel"
       onChange={(event) =>{
        setAnoModeloAutomovel(event.target.value);
      }} 
    />

   <Input
       mt="1rem"
       type="text"
       placeholder="Informe o valor de venda do seu automóvel"
       onChange={(event) =>{
        setValorVendaAutomovel(event.target.value);
      }} 
    />

    <textarea 
    id="textarea__desc"
     onChange={(event) =>{
        setDescricaoAutomovelAutomovel(event.target.value);
      }} 
    ></textarea>

      <Button w="100%"  
              mt="1rem"
              onClick={creatCarsA}
              >
        Cadastrar-se
      </Button>

   <Link
    href="/Logath"
   >
      <Button w="100%"  
              my="1rem"
              >
        Voltar
      </Button>
   </Link>
     </Flex>
    </Flex>
        </>
    )
}
