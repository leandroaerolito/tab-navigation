import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "../Pages/Settings";
import Home from "../Pages/Home";
import {Ionicons} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Routes (){
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({route}) =>({
               tabBarIcon: ({ color, size }) => {
                 let iconName;

                 if (route.name ==="Home"){
                iconName = "home";
                 } else if (route.name ==="Settings"){
                     iconName = "settings";
                 }
                return <Ionicons name={iconName} size={size} color={color}/>;
               },
               headerShown: false,   
            // Para alterar a cor do ícone //
               tabBarActiveTintColor: "#f64348",
            
            //    tabBarShowLabel: false, (para remover o nome que vem padrão abaixo do ícone)

            })}
            >
                <Tab.Screen name="Home" component={Home}/>
                <Tab.Screen name="Settings" component={Settings}/> 
            </Tab.Navigator>
        </NavigationContainer>
    );
}