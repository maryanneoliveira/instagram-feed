
import{NavigationContainer} from '@react-navigation/native'
import{createStackNavigator} from'@react-navigation/stack'

import firebase from './src/firebaseConnection';
// minhas paginas
import Cadastro from './src/Telas/Cadastro';
import Entrou from './src/Telas/Entrou';
import Login from './src/Telas/Login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>

          <Stack.Screen
            name='telaLogin'
            component={Login}
            options={{
              headerShown:false
            }}
         />

<Stack.Screen
            name='telaCadastro'
            component={Cadastro}
            options={{
              headerShown:false
            }}
         />

<Stack.Screen
            name='entrou'
            component={Entrou}
            options={{
              headerShown:false
            }}
         />

      </Stack.Navigator>
    </NavigationContainer>
   
   //<Login></Login>
   //<Entrou> </Entrou>
   //<Cadastro> </Cadastro>
  );
}
