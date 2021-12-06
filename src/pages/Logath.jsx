import React from 'react';
import { useState, useEffect } from "react";
import {
         Flex,
         Box,
         SimpleGrid,
         Button,
         Text,
         Input
       } from "@chakra-ui/react";
import { AiOutlineReload } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi';
import { ImBin } from 'react-icons/im';
import { CgClose } from 'react-icons/cg';
import Image from "next/image";
import LogoImg from "../../public/logo.png";
import Link from "next/link";
import { auth, db } from '../config/firebaseConnection';
import { signOut } from "firebase/auth"
import { collection, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';


 function Logath() {


    const [openMneu,setOpenMenu] = useState(false);
    const handlMenu = () =>{setOpenMenu(!openMneu)}

    const [categoria, setUpdateCategoria] = useState("");
    const [marcaAutomovel, setUpdateMarcaAutomovel] = useState("");
    const [modeloAutomovel, setUpdateModeloAutomovel] = useState("");
    const [anoFabricacaoAutomovel, setUpdateAnoFabricacaoAutomovel] = useState("");
    const [anoModeloAutomovel, setUpdateAnoModeloAutomovel] = useState("");
    const [valorVendaAutomovel, setUpdateValorVendaAutomovel] = useState("");
    const [descricaoAutomovel, setUpdateDescricaoAutomovelAutomovel] = useState("");

    const openModalMenu =  () =>{
        let modalEdit = document.querySelector("#modal-edit");

        modalEdit.classList.toggle("show");
    
    }

    
    const closeEdit = ()=>{
        let modalEdit = document.querySelector("#modal-edit");

        modalEdit.classList.remove("show")
    }

    const [cars, setCars] = useState([]);

   const confEdit = async (id) =>{

         const docRef = doc( db, "cars", id);

         let modalEdit = document.querySelector("#modal-edit");

    setTimeout(()=>{
        if(updateDoc){
            updateDoc(
                docRef,
            { 
                categoryCar: categoria,
                barndCar: marcaAutomovel,
                modelCar: modeloAutomovel,
                yearManufacturingCar: anoFabricacaoAutomovel,
                yearModelCar: anoModeloAutomovel,  
                valueSaleCar: valorVendaAutomovel,
                descriptionCar: descricaoAutomovel
            });
            alert("Sucesso na alteração do anúncio!");
            modalEdit.classList.remove("show")
            
        }else{
            alert("Não foi possível atualizar seu anúncio.")
        }
    },1500)
   }

  const handleDelite = async (id) =>{
    await deleteDoc(doc(db,"cars",id));
  }

    useEffect(() => {
        
        const carCollectionRef = collection( db , "cars" );

        const getUsers = async () => {
        const data = await getDocs(carCollectionRef);
        setCars(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      };
      
      getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const closeLogath = async () =>{
        if(signOut)
            window.location = "/"
            await signOut(auth);
    }

  
    return (
        <>
         <Flex
         h="70px"
         w="100%"
         borderBottom="2px solid #000"
         justify="space-between"
         align="center"

         >
            <Box
            ml="1.5rem"
            display="flex"
            alignItems="center"
            cursor="pointer"
            >
            <Image
            src={LogoImg}
            alt="Picture of the author"
            width={55}
            height={55}
            />
            </Box>
           <Flex
           w="40px"
           h="40px"
           borderRadius="50%"
           border="2px solid #000"
           cursor="pointer"
           mr="1.5rem"
           onClick={handlMenu}
           transition=".5s ease-in-out"
           _hover={{
               border:"2px solid transparent",
               boxShadow:"0 0 5px 0 rgba(0, 0, 0, .5)"
           }}
           >

           </Flex>
           <Box
               display={ openMneu ? 'flex' : 'none'}
               position="absolute"
               top="72px"
               right="1.7rem"
           >

           <Box
            h="40px"
            w="30px"
            bg="black"
            position="absolute"
            top="2px"
            right="2px"
            clipPath="polygon(50% 0%, 27% 20%, 76% 20%)"
           ></Box>
     
           <Box
           position="absolute"
           zIndex="1000"
           top="9.95px"
           right="2px"
           border="2px solid #000"
           padding="10px"
           borderRadius="10px"
           bg="#fff"
           >
            <Link
            href="/CadastrarA"
            >
               <Button
                  w="100%"
                  borderRadius="10px"
               >
                  Cadastrar seu anúncio
               </Button>
            </Link>
               <Box
               my=".5rem"
               >
               <hr/>
               </Box>
               <Button
                  w="100%"
                  borderRadius="10px"
                  onClick={closeLogath}
               >
                  Sair
               </Button>
           </Box>
           </Box>
         </Flex>  

         <Box
         w="100%"
         bg="blue"
         h="calc(100vh - 70px)"
         overflowY="scroll"
         >
         <SimpleGrid 
              columns={{sm:"1",md:"2",lg:"3",xl:"4"}} 
              spacing={10}
        >
         { 
            cars.map((cars) =>{
                return (
                      <>
                        <Box 
                        position="relative"
                        my="2rem"
                        bg='#fff' 
                        w="300px"
                        mx="auto"
                        boxShadow="0 0 5px 0 rgba(0, 0, 0, .5)"
                        borderRadius="8px"
                        padding="55px 10px 20px 10px"
                        key={cars.id}
                        >
                        <Flex
                        position="absolute"
                        top="1rem"
                        right="1rem"
                        >
                       <a href="#" >
                        <Flex
                            onClick={openModalMenu}
                            marginRight=".5rem"
                            w="25px"
                            h="25px"
                            align="center"
                            justify="center"
                            borderRadius="50%"
                            border="2px solid #000"
                            cursor="pointer"
                            transition=".5s ease-in-out"
                            _hover={{
                                border:"2px solid transparent",
                                boxShadow:"0 0 5px 0 rgba(0, 0, 0, .5)"
                            }}
                        >
                        <BiEdit/>
                        </Flex>
                    </a>
                    <a href="#" onClick={()=> handleDelite(cars.id)}>
                        <Flex
                            w="25px"
                            h="25px"
                            align="center"
                            justify="center"
                            borderRadius="50%"
                            border="2px solid #000"
                            cursor="pointer"
                            transition=".5s ease-in-out"
                            _hover={{
                                border:"2px solid transparent",
                                boxShadow:"0 0 5px 0 rgba(0, 0, 0, .5)"
                            }}
                        >
                        <ImBin/>
                        </Flex>
                    </a>
                        </Flex>
                       <Box>
                            <Text>
                                 Categoria do Automóvel :
                            </Text>
                        </Box>
                        <Box>
                            <Text>
                               {cars.categoryCar}
                            </Text>
                        </Box>

                        <Box>
                            <Text>
                                Marca do Automóvel :
                            </Text>
                        </Box>
                        <Box>
                            <Text>
                               {cars.barndCar}
                               
                            </Text>
                        </Box>

                        <Box>
                            <Text>
                               Modelo do Automóvel :
                            </Text>
                        </Box>
                        <Box>
                            <Text>
                               {cars.modelCar}
                            </Text>
                        </Box>
        
                        <Box>
                            <Text>
                               Ano de Fabricação do Automóvel :
                            </Text>
                        </Box>
                        <Box>
                            <Text>
                               {cars.yearManufacturingCar}
                            </Text>
                        </Box>

                        <Box>
                            <Text>
                               Ano de Modelo do Automível :
                            </Text>
                        </Box>
                        <Box>
                            <Text>
                               {cars.yearModelCar}
                            </Text>
                        </Box>

                        <Box>
                            <Text>
                               Valor da Venda do Automível :
                            </Text>
                        </Box>
                        <Box>
                            <Text>
                               {cars.valueSaleCar}
                            </Text>
                        </Box>

                        <Box>
                            <Text>
                               Descrição do Automóvel :
                            </Text>
                        </Box>
                        <Box>
                            <Text>
                               {cars.descriptionCar}
                            </Text>
                        </Box>

                        </Box>

                        <Flex
                    id="modal-edit"
                    display="none"
                    w="100%"
                    minH="100vh"
                    bg="rgba(0 , 0 , 0, .5)"
                    p="50px 4%"
                    position="absolute"
                    top="0"
                    left="0"
                    >
                    <Flex 
                    w="100%"
                    maxW="550px"
                    h="calc(100vh - 100px)"
                    boxShadow="0 0 10px 0 rgba(0,0,0,.5)"
                    borderRadius="20px"
                    mx="auto"
                    p="60px 10px 20px 10px "
                    direction="column"
                    justify="center"
                    position="relative"
                    bg="#fff"
                    >
                        <Flex
                        position="absolute"
                        top="1rem"
                        left="12rem"
                        >
                            <span>
                                {
                                    cars.id
                                }
                            </span>
                        </Flex>

                        <Flex
                            onClick={closeEdit}
                            position="absolute"
                            top="1rem"
                            right="1rem"
                            h="30px"
                            w="30px"
                            justify="center"
                            align="center"
                            borderRadius="50%"
                            border="2px solid #000"
                            cursor="pointer"
                            transition=".5s ease-in-out"
                            _hover={{
                                border:"2px solid transparent",
                                boxShadow:"0 0 5px 0 rgba( 0 , 0 , 0 , .5)"
                            }}
                            >
                                <CgClose/>
                            </Flex>
                            
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

                    <Box 
                    w="96%"
                    mx="auto"
                    >
                    <Input
                    mt="1rem"
                    type="text"
                    placeholder="Digite a alteração da categoria do seu automóvel"
                    onChange={(event) =>{
                        setUpdateCategoria(event.target.value);
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
                    placeholder="Digite a alteração da marca do seu automóvel"
                    onChange={(event) =>{
                        setUpdateMarcaAutomovel(event.target.value);
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
                    placeholder="Digite a alteração do modelo de seu automóvel"
                    onChange={(event) =>{
                        setUpdateModeloAutomovel(event.target.value);
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
                    placeholder="Digite a alteração o ano de fabricação do seu automóvel"
                    onChange={(event) =>{
                        setUpdateAnoFabricacaoAutomovel(event.target.value);
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
                     placeholder="Digite a alteração do ano de modelo do seu automóvel"
                     onChange={(event) =>{
                        setUpdateAnoModeloAutomovel(event.target.value);
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
                    placeholder="Digite a alteração do valor de venda do seu automóvel"
                    onChange={(event) =>{
                        setUpdateValorVendaAutomovel(event.target.value);
                    }} 
                    />
                    </Box>
                    <Box 
                    w="96%"
                    mx="auto"
                    >
                    <textarea 
                    id="textarea__desc"
                    placeholder="Digite a alteração de sua descrição do seu automóvel"
                    onChange={(event) =>{
                        setUpdateDescricaoAutomovelAutomovel(event.target.value);
                    }} 
                    ></textarea>
                    </Box>


                    <Box 
                    w="96%"
                    mx="auto"
                    >
                    <Button 
                    w="100%" 
                    onClick={()=> confEdit(cars.id)}
                    >
                           Confirmar
                    </Button>
                    </Box>

                    
                    <Box 
                    w="96%"
                    mx="auto"
                    >
                <Link
                    href="/Logath"
                >
                    <Button 
                            onClick={closeEdit}
                            w="100%"  
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
            })
         }  
        </SimpleGrid>
         </Box>
   
        </>
    )
}
export default Logath;