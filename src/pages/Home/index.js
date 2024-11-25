import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, ScrollView } from 'react-native';
import Header from "../../components/Header"
import Balance from '../../components/Balance';
import Movements from "../../components/Movements/index"
import Actions from '../../components/Actions';

const FAKELIST =[
  {id:1,
  label:"boleto",
  value:"3590,90",
  date:"12/28/2024",
  type: 0 // despesas
  },
  {id:2,
    label:"freela 2",
    value:"380,90",
    date:"12/25/2024",
    type: 1 // receita
    },
    {id:3,
      label:"salario",
      value:"3000,90",
      date:"12/22/2024",
      type: 1 // receita
      },
]

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Header name="Renan PROPS"/>
      <Balance balance="9.250,90" expenses="-520,00"/>
      <Actions></Actions>
      <Text style={styles.title}>Ultimas Movimentações</Text>

      <FlatList style={styles.list}
      data={FAKELIST}
      keyExtractor={(item)=> String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={({item})=><Movements data={item}/>}
      ></FlatList>

      <ScrollView style={styles.list} vertical={true} showsVerticalScrollIndicator={false}>
      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },title:{
    fontSize:18,
    fontWeight:"bold",
    margin: 14,
  },list:{
    marginStart:14,
    marginEnd:14,
  }
});
