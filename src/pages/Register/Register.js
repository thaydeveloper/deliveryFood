import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import Inputs from "./components/Inputs";
import * as Animatable from "react-native-animatable";
import { useForm, Controller } from "react-hook-form";

export default function Register() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  return (
    <View style={styles.containerRegister}>
      <Animatable.View animation={"fadeInLeft"} delay={1000}>
        <Text style={styles.textRegister}>Cadastro</Text>
      </Animatable.View>

      <Animatable.View
        animation="fadeInUp"
        delay={500}
        style={styles.sectionLogin}
      >
        <View style={styles.sectionRegister}>
          <Text style={styles.textInput}>Nome</Text>
          <Controller
            control={control}
            name="nameUser"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.inputs}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Digite seu nome"
              />
            )}
          ></Controller>

          <Text style={styles.textInput}>Email</Text>
          <Controller
            control={control}
            name="Email"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.inputs}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Digite seu email"
              />
            )}
          ></Controller>

          <Text style={styles.textInput}>Cidade</Text>
          <Controller
            control={control}
            name="city"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.inputs}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Sua cidade"
              />
            )}
          ></Controller>

          <Text style={styles.textInput}>Cep</Text>
          <Controller
            control={control}
            name="zipCode"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.inputs}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Digite seu cep"
              />
            )}
          ></Controller>

          <Text style={styles.textInput}>Rua</Text>
          <Controller
            control={control}
            name="road"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.inputs}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Nome da rua "
              />
            )}
          ></Controller>

          <Text style={styles.textInput}>Complemento</Text>
          <Controller
            control={control}
            name="complement"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.inputs}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="complemento"
              />
            )}
          ></Controller>
        </View>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerRegister: {
    flex: 1,
    backgroundColor: "#38a69d",
    width: "100%",
    minHeight: "80%",
    overflow: "scroll",
  },
  textRegister: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  sectionRegister: {
    backgroundColor: "#fff",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
    minHeight: "70%",
    overFlow: "scroll",
  },
  inputs: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,

    marginBottom: 10,
    color: "#3b394a",
    alignItems: "center",
  },
  textInput: {
    fontSize: 20,
    marginTop: 28,
    color: "#3b394a",
    alignItems: "center",
  },
});
