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
import { animate } from 'framer-motion';



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
                        setUpdateCategoria(event.target.value);
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
                        setUpdateMarcaAutomovel(event.target.value);
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
                        setUpdateModeloAutomovel(event.target.value);
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
                        p="0"
                        h="50px"
                        type="text"
                        border="0"
                        borderRadius="5px!important"
                        _focus={{
                            boxShadow:"none" 
                        }}
                    onChange={(event) =>{
                        setUpdateAnoFabricacaoAutomovel(event.target.value);
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
                    p="0"
                    h="50px"
                    type="text"
                    border="0"
                    borderRadius="5px!important"
                    _focus={{
                       boxShadow:"none" 
                    }}
                     onChange={(event) =>{
                        setUpdateAnoModeloAutomovel(event.target.value);
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
                    w="100%"
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
                        setUpdateValorVendaAutomovel(event.target.value);
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
                        setUpdateDescricaoAutomovelAutomovel(event.target.value);
                    }} 
                    ></textarea>
                </Flex>


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