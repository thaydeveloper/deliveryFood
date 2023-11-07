import { StatusBar } from "expo-status-bar";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";

export default Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  async function handleSignIn(data) {
    console.log(data);
  }

  return (
    <View style={styles.containerLogin}>
      <Text style={styles.textLogin}>Bem-Vindo(a)</Text>
      <View style={styles.sectionLogin}>
        <Text style={styles.textInput}>Nome</Text>
        <Controller
          control={control}
          name="userName"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="nome de usuario"
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
              placeholder="senha"
            />
          )}
        ></Controller>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(handleSignIn)}
        >
          <Text style={styles.textButton}> Acessar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,

    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    /* justifyContent: "center", */
  },
  textLogin: {
    fontSize: 30,
    marginBottom: 30,
    color: "#3b394a",
  },
  sectionLogin: {
    width: 300,
    height: 400,
    backgroundColor: "#f56565",
    borderBlockColor: 1,
    borderRadius: 9,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  input: {
    width: "80%",
    height: 40,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "yellow",
    padding: 10,
  },
  textInput: {
    fontSize: 20,
    marginBottom: 10,
    color: "#3b394a",
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    width: "80%",
    height: 50,
    marginTop: 30,
    borderRadius: 8,
    backgroundColor: "#655ab0",
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: "white",
    fontSize: 15,
  },
});
