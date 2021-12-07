import React from 'react';
import { useState, useEffect } from "react";
import {
         Flex,
         Box,
         SimpleGrid,
         Button,
         Text,
         Input,
         Alert,
         AlertIcon
       } from "@chakra-ui/react";
import { BiEdit } from 'react-icons/bi';
import { ImBin } from 'react-icons/im';
import Image from "next/image";
import LogoImg from "../../public/logo.png";
import Link from "next/link";
import { auth, db, storage } from '../config/firebaseConnection';
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



    const [cars, setCars] = useState([]);
    


   const confEdit = async (id) =>{

         const docRef = doc( db, "cars", id);

       
          /*CAP ELEMENTS ALERTS*/ 
       let   alertSucessCamp = document.querySelector("#alert__sucess_camp"),
             alertEspecifecCamp = document.querySelector("#alert__especifec_camp"),
             alertAllCamp      = document.querySelector("#alert__all_camp"),
            /*CAP ELEMENTS INPUTS*/
            valueCategoria  = document.querySelector("#input__cartegory"),
            valueMarca      = document.querySelector("#input__brand"),
            valueModelo     = document.querySelector("#input__model"),
        valueAnoFabricacao  = document.querySelector("#input__year_manufacturing"),
            valueAnoModelo  = document.querySelector("#input__year_model"),
            valueSales      = document.querySelector("#input__value_sales"),
             valueDesc  = document.querySelector("#textarea__desc");              
           
    setTimeout( async ()=>{
        if(valueCategoria.value == "" && valueMarca.value == "" && valueModelo.value == "" && valueAnoFabricacao.value == "" && valueAnoModelo.value == "" && valueSales.value == "" && valueDesc.value == ""){
            alertAllCamp.classList.toggle("show-alerts")
            alertEspecifecCamp.classList.remove("show-alerts")
           }else if(valueCategoria.value == "" || valueMarca.value == "" || valueModelo.value == "" || valueAnoFabricacao.value == "" || valueAnoModelo.value == "" || valueSales.value == "" || valueDesc.value == ""){
            alertEspecifecCamp.classList.toggle("show-alerts")
            alertAllCamp.classList.remove("show-alerts")
           }else{
            if(updateDoc){
               await updateDoc(
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
                alertAllCamp.classList.remove("show-alerts")
                alertEspecifecCamp.classList.remove("show-alerts")
                alertSucessCamp.classList.toggle("show-alert-sucess")
                
            }else{
                alert("Não foi possível atualizar seu anúncio.")
            }
           }
        }
      ,2000)
   }

  const handleDelite = async (id) =>{

        if(deleteDoc){
            await deleteDoc(doc(db,"cars",id));
            alert("Anúncio excluido com Sucesso!")
            location.reload()
        }else{
            alert("Não foi possível excluir seu anúncio.")
        }

  }

    useEffect(() => {

       
       
        /*CAP ELEMENTS ALERTS*/ 


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
              spacing={3}
              p="0 0 3rem 0"
        >
         { 
            cars.map((cars) =>{
                return (
                      <>
                        <Box 
                        position="relative"
                        mt="3rem"
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
                            <Text
                             textAlign="justify"
                            >
                                &nbsp;{cars.descriptionCar}
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
                    zIndex="100"
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
            
                            
                    <Box
                        overflowY="scroll"
                        maxW="550px"
                        h="calc(100vh - 100px)"
                    >

                    {/* <Flex
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
                    </Flex> */}

            <Flex
                    justify="center"
                    cursor="pointer"
                    >
                    <Image
                    src={LogoImg}
                    alt="Picture of the author"
                    width={80}
                    height={80}
                    />
         </Flex>

             <Box mt="1rem">
                    <Text
                    ml="1rem"
                    >
                    Categoria do Automóvel :
                    </Text>
            <Flex
                    w="96%"
                    mx="auto"
                    h="45px"
                    border= "2px solid #000"
                    mt=".25rem"
                    borderRadius="5px"
                    align="center"
                    justify="center"
                    transition=".5s ease-in-out"
                    _hover={{
                        border:"2px solid transparent",
                        boxShadow:"0 0 5px 0 rgba( 0 , 0, 0, .5)"
                    }}
                    >
                    <Input
                        w="100%"
                        p="0 10px"
                        h="45px"
                        type="text"
                        border="0"
                        id="input__cartegory"
                        borderRadius="5px!important"
                        _focus={{
                            boxShadow:"none" 
                        }}
                        onChange={(event) =>{
                          setUpdateCategoria(event.target.value);
                        }}  
                    />
                    </Flex>

            </Box>

            <Box mt="1rem">
                      <Text
                    ml="1rem"
                    >
                     Marca do Automóvel :
                    </Text>
            <Flex
                    w="96%"
                    mx="auto"
                    h="45px"
                    border= "2px solid #000"
                    mt=".25rem"
                    borderRadius="5px"
                    align="center"
                    justify="center"
                    transition=".5s ease-in-out"
                    _hover={{
                        border:"2px solid transparent",
                        boxShadow:"0 0 5px 0 rgba( 0 , 0, 0, .5)"
                    }}
                    >
                <Input
                    w="100%"
                    p="0 10px"
                    h="50px"
                    type="text"
                    border="0"
                    id="input__brand"
                 borderRadius="5px!important"
                 _focus={{
                     boxShadow:"none" 
                 }}
                    onChange={(event) =>{
                        setUpdateMarcaAutomovel(event.target.value);
                    }} 
                    />
                    </Flex>
         </Box>
                   
         <Box mt="1rem">
                      <Text
                    ml="1rem"
                    >
                     Modelo do Automóvel :
                    </Text>
            <Flex
                    w="96%"
                    mx="auto"
                    h="45px"
                    border= "2px solid #000"
                    mt=".25rem"
                    borderRadius="5px"
                    align="center"
                    justify="center"
                    transition=".5s ease-in-out"
                    _hover={{
                        border:"2px solid transparent",
                        boxShadow:"0 0 5px 0 rgba( 0 , 0, 0, .5)"
                    }}
                    >
                <Input
                    w="100%"
                    p="0 10px"
                    h="50px"
                    type="text"
                    id="input__model"
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
              </Box>

              <Box mt="1rem">
                      <Text
                    ml="1rem"
                    >
                     Ano de Fabricação do Automóvel :
                    </Text>
            <Flex
                    w="96%"
                    mx="auto"
                    h="45px"
                    border= "2px solid #000"
                    mt=".25rem"
                    borderRadius="5px"
                    align="center"
                    justify="center"
                    transition=".5s ease-in-out"
                    _hover={{
                        border:"2px solid transparent",
                        boxShadow:"0 0 5px 0 rgba( 0 , 0, 0, .5)"
                    }}
                    >
                    <Input
                        w="100%"
                        maxLength="10"
                        id="input__year_manufacturing"
                        onKeyPress = {()=>{
                            let inputYearManufacturing = document.querySelector("#input__year_manufacturing");
  
                            if(inputYearManufacturing.value.length == 2 ||  inputYearManufacturing.value.length == 5)
                             inputYearManufacturing.value += "/"
                       }}
                        p="0 10px"
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
               </Box>

               <Box mt="1rem">
                      <Text
                    ml="1rem"
                    >
                     Ano de Modelo do Automóvel :
                    </Text>
            <Flex
                    w="96%"
                    mx="auto"
                    h="45px"
                    border= "2px solid #000"
                    mt=".25rem"
                    borderRadius="5px"
                    align="center"
                    justify="center"
                    transition=".5s ease-in-out"
                    _hover={{
                        border:"2px solid transparent",
                        boxShadow:"0 0 5px 0 rgba( 0 , 0, 0, .5)"
                    }}
                    >
                    <Input
                    w="100%"
                    id="input__year_model"
                    maxLength="10"
                    onKeyPress = {()=>{
                         let inputYearModel = document.querySelector("#input__year_model");

                         if(inputYearModel.value.length == 2 ||  inputYearModel.value.length == 5)
                          inputYearModel.value += "/"
                    }}
                    p="0 10px"
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
                </Box>

                  <Box mt="1rem">
                      <Text
                    ml="1rem"
                    >
                     Valor de Venda do Automóvel :
                    </Text>
            <Flex
                    w="96%"
                    mx="auto"
                    h="45px"
                    border= "2px solid #000"
                    mt=".25rem"
                    borderRadius="5px"
                    align="center"
                    justify="center"
                    transition=".5s ease-in-out"
                    _hover={{
                        border:"2px solid transparent",
                        boxShadow:"0 0 5px 0 rgba( 0 , 0, 0, .5)"
                    }}
                    >
                <Input
                  id="input__value_sales"
                  w="100%"
                  onKeyPress = {() =>{
                      let valueSales = document.querySelector("#input__value_sales");

                    if(valueSales.value.length == 0)
                          valueSales.value += "R$";
                  }}
                    p="0 10px"
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
             </Box>

           <Box
           my="1rem"
           >
             <Text
               ml="1rem"
               mb=".25rem"
               textAlign="justify"
             >
                        Descrição do Automóvel :
                    </Text>
                    <Flex 
                    w="96%"
                    mx="auto"
                    h="150px"
                    border= "2px solid #000"
                    borderRadius="5px"
                    p="5px"
                    align="center"
                    justify="center"
                    >
                    <textarea 
                    id="textarea__desc"
                    onChange={(event) =>{
                      setUpdateDescricaoAutomovelAutomovel(event.target.value);
                    }} 
                    ></textarea>
                </Flex>
                </Box>
                <Alert 
                           display="none"    
                           id="alert__all_camp"
                           status='error' 
                           variant='left-accent'
                           w="96%"
                           mx="auto"
                           my="1rem"
                           borderRadius="5px"
                >
                  
                        <AlertIcon />
                        Preencha todos os campos
                    </Alert>

                    <Alert 
                           display="none"    
                           id="alert__sucess_camp"
                           status='success' 
                           variant='left-accent'
                           w="96%"
                           mx="auto"
                           my="1rem"
                           borderRadius="5px"
                >
                  
                        <AlertIcon />
                        Anúncio Editado com Sucesso!
                    </Alert>

                
                    <Alert 
                           display="none"
                           id="alert__especifec_camp"
                           status='error' 
                           variant='left-accent'
                           w="96%"
                           mx="auto"
                           my="1rem"
                           borderRadius="5px"
                           >
                        <AlertIcon />
                        Preencha os campos que estão faltando !
                    </Alert>
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

                    <Button 
                        w="100%"  
                        my="1rem"
                        onClick={()=>{window.location = "/Logath"}}
                     >
                        Voltar
                    </Button>
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