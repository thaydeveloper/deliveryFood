import { StatusBar } from "expo-status-bar";
import React from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

export default Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const navigation = useNavigation();

  async function handleSignIn(data) {
    if (!data.email || !data.password) {
      return;
    }

    console.log(data);
    navigation.navigate("Home");
  }

  return (
    <View style={styles.containerLogin}>
      <StatusBar style="auto" />
      <Animatable.View animation={"fadeInLeft"} delay={1000}>
        <Text style={styles.textLogin}>Bem-Vindo(a)</Text>
      </Animatable.View>

      <Animatable.View
        animation="fadeInUp"
        delay={500}
        style={styles.sectionLogin}
      >
        <View style={styles.sectionLogin}>
          <Text style={styles.textInput}>Email</Text>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Email de usuario"
              />
            )}
          ></Controller>

          <Text style={styles.textInput}>Senha</Text>

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                secureTextEntry={true}
                style={styles.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Senha"
              />
            )}
          ></Controller>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(handleSignIn)}
          >
            <Text style={styles.textButton}> Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonRegister}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.textButtonRegister}>
              Não possui uma conta? Cadastre-se
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    backgroundColor: "#38a69d",
    width: "100%",
    height: "100%",
  },
  textLogin: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  sectionLogin: {
    backgroundColor: "#fff",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  textInput: {
    fontSize: 20,
    marginTop: 28,
    marginBottom: 10,
    color: "#3b394a",
    alignItems: "center",
  },
  button: {
    width: "100%",
    height: 50,
    marginTop: 30,
    borderRadius: 8,
    paddingVertical: 8,
    backgroundColor: "#38a69d",
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonRegister: {
    marginTop: 14,

    alignSelf: "center",
  },
  textButtonRegister: {
    color: "#a1a1a1",
    marginTop: "10%",
  },
});
