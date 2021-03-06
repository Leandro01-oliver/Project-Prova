import React from "react";
import {
  Flex,
  Button,
  Input,
  Box,
  Text,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import Image from "next/image";
import LogoImg from "../../public/logo.png";
import Link from "next/link";
import { db } from "../../config/firebaseConnection";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useState, useEffect } from "react";

export default function CadastrarA() {
  const [newCategoria, setCategoria] = useState("");
  const [newMarcaAutomovel, setMarcaAutomovel] = useState("");
  const [newModeloAutomovel, setModeloAutomovel] = useState("");
  const [newAnoFabricacaoAutomovel, setAnoFabricacaoAutomovel] = useState("");
  const [newAnoModeloAutomovel, setAnoModeloAutomovel] = useState("");
  const [newValorVendaAutomovel, setValorVendaAutomovel] = useState("");
  const [newDescricaoAutomovel, setDescricaoAutomovelAutomovel] = useState("");

  // const [image,setImage] = useState(null);

  // const handleChange = e => {
  //    if(e.target.files[0]){
  //      setImage(e.target.files[0]);
  //    }
  //    console.log("image :", image)
  // }

  useEffect(() => {
    const carCollectionRef = collection(db, "cars");

    const getCars = async () => {
      const data = await getDocs(carCollectionRef);
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    };

    getCars();
  }, []);

  const creatCarsA = async () => {
    const carCollectionRef = collection(db, "cars");

    /*CAP ELEMENTS ALERTS*/
    let alertSucessCamp = document.querySelector("#alert__sucess_camp"),
      alertEspecifecCamp = document.querySelector("#alert__especifec_camp"),
      alertYearMaxLengthCamp = document.querySelector(
        "#alert__year_max_length_camp"
      ),
      alertYearMinLengthCamp = document.querySelector(
        "#alert__year_min_length_camp"
      ),
      alertAllCamp = document.querySelector("#alert__all_camp"),
      /*CAP ELEMENTS INPUTS*/
      valueCategoria = document.querySelector("#input__cartegory"),
      valueMarca = document.querySelector("#input__brand"),
      valueModelo = document.querySelector("#input__model"),
      valueAnoFabricacao = document.querySelector("#input__year_manufacturing"),
      valueAnoModelo = document.querySelector("#input__year_model"),
      valueSales = document.querySelector("#input__value_sales"),
      valueDesc = document.querySelector("#textarea__desc");

    setTimeout(async () => {
      if (
        valueCategoria.value == "" &&
        valueMarca.value == "" &&
        valueModelo.value == "" &&
        valueAnoFabricacao.value == "" &&
        valueAnoModelo.value == "" &&
        valueSales.value == "" &&
        valueDesc.value == ""
      ) {
        alertAllCamp.classList.toggle("show-alerts");
        alertEspecifecCamp.classList.remove("show-alerts");
        alertSucessCamp.classList.remove("show-alert-sucess");
        alertYearMaxLengthCamp.classList.remove("show-alerts");
        alertYearMinLengthCamp.classList.remove("show-alerts");
      } else if (
        valueCategoria.value == "" ||
        valueMarca.value == "" ||
        valueModelo.value == "" ||
        valueAnoFabricacao.value == "" ||
        valueAnoModelo.value == "" ||
        valueSales.value == "" ||
        valueDesc.value == ""
      ) {
        alertEspecifecCamp.classList.toggle("show-alerts");
        alertAllCamp.classList.remove("show-alerts");
        alertYearMaxLengthCamp.classList.remove("show-alerts");
        alertYearMinLengthCamp.classList.remove("show-alerts");
      } else if (
        valueAnoFabricacao.value.length >= 5 ||
        valueAnoModelo.value.length >= 5
      ) {
        alertYearMaxLengthCamp.classList.toggle("show-alerts");
        alertYearMinLengthCamp.classList.remove("show-alerts");
        alertEspecifecCamp.classList.remove("show-alerts");
        alertSucessCamp.classList.remove("show-alert-sucess");
        alertAllCamp.classList.remove("show-alerts");
      } else if (
        valueAnoFabricacao.value.length < 4 ||
        valueAnoModelo.value.length < 4
      ) {
        alertYearMinLengthCamp.classList.toggle("show-alerts");
        alertYearMaxLengthCamp.classList.remove("show-alerts");
        alertEspecifecCamp.classList.remove("show-alerts");
        alertSucessCamp.classList.remove("show-alert-sucess");
        alertAllCamp.classList.remove("show-alerts");
      } else {
        if (addDoc) {
          await addDoc(carCollectionRef, {
            categoryCar: newCategoria,
            barndCar: newMarcaAutomovel,
            modelCar: newModeloAutomovel,
            yearManufacturingCar: newAnoFabricacaoAutomovel,
            yearModelCar: newAnoModeloAutomovel,
            valueSaleCar: newValorVendaAutomovel,
            descriptionCar: newDescricaoAutomovel,
          });
          alertSucessCamp.classList.toggle("show-alert-sucess");
          alertAllCamp.classList.remove("show-alerts");
          alertEspecifecCamp.classList.remove("show-alerts");
          alertYearMinLengthCamp.classList.remove("show-alerts");
          alertYearMaxLengthCamp.classList.remove("show-alerts");
          window.location = "/Logath";
        } else {
          alert("N??o foi poss??vel efetuar seu an??ncio.");
        }
      }
    }, 1500);
  };

  return (
    <>
      <Flex
        id="bg-cad-anuncios"
        w="100%"
        backgroundSize="100% 100%"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        minH="100vh"
        bg="rgb(0 , 0 , 180)"
        p="50px 4%"
      >
        <Flex
          w="100%"
          maxW="550px"
          h="calc(100vh - 100px)"
          borderRadius="20px"
          mx="auto"
          p="20px 10px "
          direction="column"
          justify="center"
          bg="#fff"
        >
          <Box overflowY="scroll" maxW="550px" h="calc(100vh - 100px)">
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
                    Enviar a foto de seu autom??vel
                    </label>
                    <Input
                    id="input__file"
                    display="none"
                    mt="1rem"
                    type="file"
                    />
                    </Flex> */}

            <Flex mt="1rem" justify="center" cursor="pointer">
              <Image
                src={LogoImg}
                alt="Picture of the author"
                width={80}
                height={80}
              />
            </Flex>

            <Box mt="1rem">
              <Text ml="1rem">Categoria do Autom??vel :</Text>
              <Flex
                w="96%"
                mx="auto"
                h="45px"
                border="2px solid #000"
                mt=".25rem"
                borderRadius="5px"
                align="center"
                justify="center"
                transition=".5s ease-in-out"
                _hover={{
                  border: "2px solid transparent",
                  boxShadow: "0 0 5px 0 rgba( 0 , 0, 0, .5)",
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
                    boxShadow: "none",
                  }}
                  onChange={(event) => {
                    setCategoria(event.target.value);
                  }}
                />
              </Flex>
            </Box>

            <Box mt="1rem">
              <Text ml="1rem">Marca do Autom??vel :</Text>
              <Flex
                w="96%"
                mx="auto"
                h="45px"
                border="2px solid #000"
                mt=".25rem"
                borderRadius="5px"
                align="center"
                justify="center"
                transition=".5s ease-in-out"
                _hover={{
                  border: "2px solid transparent",
                  boxShadow: "0 0 5px 0 rgba( 0 , 0, 0, .5)",
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
                    boxShadow: "none",
                  }}
                  onChange={(event) => {
                    setMarcaAutomovel(event.target.value);
                  }}
                />
              </Flex>
            </Box>

            <Box mt="1rem">
              <Text ml="1rem">Modelo do Autom??vel :</Text>
              <Flex
                w="96%"
                mx="auto"
                h="45px"
                border="2px solid #000"
                mt=".25rem"
                borderRadius="5px"
                align="center"
                justify="center"
                transition=".5s ease-in-out"
                _hover={{
                  border: "2px solid transparent",
                  boxShadow: "0 0 5px 0 rgba( 0 , 0, 0, .5)",
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
                    boxShadow: "none",
                  }}
                  onChange={(event) => {
                    setModeloAutomovel(event.target.value);
                  }}
                />
              </Flex>
            </Box>

            <Box mt="1rem">
              <Text ml="1rem">Ano de Fabrica????o do Autom??vel :</Text>
              <Flex
                w="96%"
                mx="auto"
                h="45px"
                border="2px solid #000"
                mt=".25rem"
                borderRadius="5px"
                align="center"
                justify="center"
                transition=".5s ease-in-out"
                _hover={{
                  border: "2px solid transparent",
                  boxShadow: "0 0 5px 0 rgba( 0 , 0, 0, .5)",
                }}
              >
                <Input
                  w="100%"
                  maxLength="4"
                  id="input__year_manufacturing"
                  p="0 10px"
                  h="50px"
                  type="number"
                  border="0"
                  borderRadius="5px!important"
                  _focus={{
                    boxShadow: "none",
                  }}
                  onChange={(event) => {
                    setAnoFabricacaoAutomovel(event.target.value);
                  }}
                />
              </Flex>
            </Box>

            <Box mt="1rem">
              <Text ml="1rem">Ano de Modelo do Autom??vel :</Text>
              <Flex
                w="96%"
                mx="auto"
                h="45px"
                border="2px solid #000"
                mt=".25rem"
                borderRadius="5px"
                align="center"
                justify="center"
                transition=".5s ease-in-out"
                _hover={{
                  border: "2px solid transparent",
                  boxShadow: "0 0 5px 0 rgba( 0 , 0, 0, .5)",
                }}
              >
                <Input
                  w="100%"
                  id="input__year_model"
                  maxLength="4"
                  p="0 10px"
                  h="50px"
                  type="number"
                  border="0"
                  borderRadius="5px!important"
                  _focus={{
                    boxShadow: "none",
                  }}
                  onChange={(event) => {
                    setAnoModeloAutomovel(event.target.value);
                  }}
                />
              </Flex>
            </Box>

            <Box mt="1rem">
              <Text ml="1rem">Valor de Venda do Autom??vel :</Text>
              <Flex
                w="96%"
                mx="auto"
                h="45px"
                border="2px solid #000"
                mt=".25rem"
                borderRadius="5px"
                align="center"
                justify="center"
                transition=".5s ease-in-out"
                _hover={{
                  border: "2px solid transparent",
                  boxShadow: "0 0 5px 0 rgba( 0 , 0, 0, .5)",
                }}
              >
                <Input
                  id="input__value_sales"
                  w="100%"
                  onKeyPress={() => {
                    let valueSales = document.querySelector(
                      "#input__value_sales"
                    );

                    if (valueSales.value.length == 0) valueSales.value += "R$";
                  }}
                  p="0 10px"
                  h="50px"
                  type="text"
                  border="0"
                  borderRadius="5px!important"
                  _focus={{
                    boxShadow: "none",
                  }}
                  onChange={(event) => {
                    setValorVendaAutomovel(event.target.value);
                  }}
                />
              </Flex>
            </Box>

            <Box mt="1rem">
              <Text ml="1rem" mb=".25rem" textAlign="justify">
                Descri????o do Autom??vel :
              </Text>
              <Flex
                w="96%"
                mx="auto"
                h="150px"
                border="2px solid #000"
                borderRadius="5px"
                p="5px"
                align="center"
                justify="center"
              >
                <textarea
                  id="textarea__desc"
                  maxLength="350"
                  onChange={(event) => {
                    setDescricaoAutomovelAutomovel(event.target.value);
                  }}
                ></textarea>
              </Flex>
            </Box>
            <Alert
              display="none"
              id="alert__all_camp"
              status="error"
              variant="left-accent"
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
              status="success"
              variant="left-accent"
              w="96%"
              mx="auto"
              my="1rem"
              borderRadius="5px"
            >
              <AlertIcon />
              An??ncio Editado com Sucesso!
            </Alert>

            <Alert
              display="none"
              id="alert__year_max_length_camp"
              status="error"
              variant="left-accent"
              w="96%"
              mx="auto"
              my="1rem"
              borderRadius="5px"
            >
              <AlertIcon />
              Preeencha os campo de Ano de Fabrica????o e Ano de Modelo com apenas
              4 caracteres!
            </Alert>

            <Alert
              display="none"
              id="alert__year_min_length_camp"
              status="error"
              variant="left-accent"
              w="96%"
              mx="auto"
              my="1rem"
              borderRadius="5px"
            >
              <AlertIcon />
              Preeencha os campo de Ano de Fabrica????o e Ano de Modelo com no
              min??no 4 caracteres!
            </Alert>

            <Alert
              display="none"
              id="alert__especifec_camp"
              status="error"
              variant="left-accent"
              w="96%"
              mx="auto"
              my="1rem"
              borderRadius="5px"
            >
              <AlertIcon />
              Preencha os campos que est??o faltando !
            </Alert>

            <Box w="96%" mx="auto">
              <Button w="100%" mt="1rem" onClick={creatCarsA}>
                Cadastrar-se
              </Button>
            </Box>

            <Box w="96%" mx="auto">
              <Link href="/Logath">
                <Button w="100%" my="1rem">
                  Voltar
                </Button>
              </Link>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
