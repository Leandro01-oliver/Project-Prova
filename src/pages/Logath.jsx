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
import { BiEdit } from 'react-icons/bi';
import { ImBin } from 'react-icons/im';
import { CgClose } from 'react-icons/cg';
import Image from "next/image";
import LogoImg from "../../public/logo.png";
import Link from "next/link";
import { auth, db } from '../config/firebaseConnection';
import { signOut } from "firebase/auth"
import { collection, getDocs} from 'firebase/firestore';


 function Logath() {


    const [openMneu,setOpenMenu] = useState(false);
    const handlMenu = () =>{setOpenMenu(!openMneu)}

    const handlModalMenu = () =>{
        let modalEdit = document.querySelector("#modal-edit");

        modalEdit.classList.toggle("show")
    }

    const closeEdit = ()=>{
        let modalEdit = document.querySelector("#modal-edit");

        modalEdit.classList.remove("show")
    }

    const [cars, setCars] = useState([]);

   

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
         minH="calc(100vh - 70px)"
         >
         <SimpleGrid 
              columns={{sm:"1",md:"2",lg:"3",xl:"4"}} 
              spacing={10}
        >
         { 
            cars.map((cars) =>{
                return (
                        <Box 
                        position="relative"
                        mt="2rem"
                        bg='tomato' 
                        w="300px"
                        mx="auto"
                        boxShadow="0 0 5px 0 rgba(0, 0, 0, .5)"
                        borderRadius="8px"
                        padding="55px 10px 20px 10px"
                        >
                        <Flex
                        position="absolute"
                        top="1rem"
                        right="1rem"
                        >
                        <Flex
                            onClick={handlModalMenu}
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
                )
            })
         }  
        </SimpleGrid>
         </Box>

         <Flex
           id="modal-edit"
           display = "none"
           position="absolute"
           top="0"
           left="0"
           minH="100vh"
           w="100%"
           bg="rgba( 0 , 0 , 0 , .5)"
           padding="40px 4%"
         >
             <Box
              w="100%"
              maxW="525px"
              minH="calc(100vh - 180px)"
              bg="#fff"
              mx="auto"
              borderRadius="10px"
              position="relative"
              padding="70px 10px 10px 10px"
             >

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
               w="100%"
               minH="calc(100vh - 180px)"
               display="flex"
               flexDirection="column"
              >

                <Input
                    w="96%"
                    mt="1rem"
                    type="text"
                    mx="auto"
                    placeholder="Digite a alertação da categoria de seu automóvel"
               />

               <Input
                    w="96%"
                    mt="1rem"
                    type="text"
                    mx="auto"
                    placeholder="Digite a alertação da marca de seu automóvel"
               />

            <Input
                w="96%"
                mt="1rem"
                type="text"
                mx="auto"
                placeholder="Digite a alteração do modelo de seu automóvel"
            />

            <Input
                w="96%"
                mt="1rem"
                type="text"
                mx="auto"
                placeholder="Digite a alteração do ano de fabricação de seu automóvel"
           />

            <Input
                w="96%"
                mt="1rem"
                type="text"
                mx="auto"
                placeholder="Digite a alteração do ano do modelo de seu automóvel"
           />

            <Input
                w="96%"
                mt="1rem"
                type="text"
                mx="auto"
                placeholder="Digite a alteração do valor de venda de seu automóvel"
            />

        <textarea 
            id="textarea__desc"
            height="150px"
        ></textarea>

            <Button
              w="96%"
              mx="auto"
            >
              Confirmar Alteração
            </Button>
              </Box>
             </Box>
         </Flex>
        </>
    )
}
export default Logath;