import { useContext, useState } from 'react';
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm
} from 'react-hook-form';
import {
  Button,
  StyleSheet,
  useWindowDimensions,
  TextInput,
  ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabView, SceneMap } from 'react-native-tab-view';

import { Text, View } from '../components/Themed';
import { UserContext } from '../providers/UserProvider';

type FormProps = {
  submitText: string;
  onSubmit: SubmitHandler<FieldValues>;
  type?: 'register';
};

const Form = ({ submitText, onSubmit, type }: FormProps) => {
  const { handleSubmit, control, reset } = useForm();

  const submitHandler = (data: any) => {
    onSubmit(data);
    reset();
  };

  return (
    <View style={styles.tabContainer}>
      <Text style={styles.label}>E-mail</Text>
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            keyboardType="email-address"
            style={styles.field}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
      />
      <Text style={styles.label}>Hasło</Text>
      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.field}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
      />
      {type === 'register' && (
        <>
          <Text style={styles.label}>Imię</Text>
          <Controller
            name="firstName"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.field}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
          />
          <Text style={styles.label}>Nazwisko</Text>
          <Controller
            name="secondName"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.field}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
          />
          <Text style={styles.label}>Telefon</Text>
          <Controller
            name="phone"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                keyboardType="phone-pad"
                style={styles.field}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
          />
          <Text style={styles.label}>Adres</Text>
          <Controller
            name="address"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.field}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
          />
        </>
      )}
      <View style={{ marginTop: 15 }}>
        <Button title={submitText} onPress={handleSubmit(submitHandler)} />
      </View>
    </View>
  );
};

const Login = () => {
  const userContext = useContext(UserContext);

  const onSubmit = async ({ email, password }: any) => {
    userContext.actions.login({ email, password });
    console.log({ email, password });
  };

  return <Form submitText="Zaloguj się" onSubmit={onSubmit} />;
};

const Register = () => {
  const userContext = useContext(UserContext);

  const onSubmit = async ({
    email,
    password,
    firstName,
    secondName,
    phone,
    address
  }: any) => {
    userContext.actions.register({
      email,
      password,
      firstName,
      secondName,
      phone,
      address
    });
    console.log({
      email,
      password,
      firstName,
      secondName,
      phone,
      address
    });
  };

  return (
    <ScrollView>
      <Form submitText="Załóż konto" onSubmit={onSubmit} type="register" />
    </ScrollView>
  );
};

const renderScene = SceneMap({
  login: Login,
  register: Register
});

export default function AccountScreen() {
  const userContext = useContext(UserContext);
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'login', title: 'Zaloguj się' },
    { key: 'register', title: 'Załóż konto' }
  ]);

  return userContext.state.user ? (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Witaj!</Text>
    </SafeAreaView>
  ) : (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Witamy na StudentWynajem!</Text>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 15,
    marginVertical: 20,
    backgroundColor: 'transparent'
  },
  title: {
    fontSize: 30,
    paddingVertical: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black'
  },
  field: {
    height: 50,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginVertical: 10,
    fontSize: 17,
    backgroundColor: 'white'
  },
  label: {
    color: 'black'
  }
});
