import { StyleSheet, Text, TouchableOpacity, View ,SafeAreaView,TextInput} from 'react-native';
import React ,{ Component } from 'react';
import ItemList from './ItemList';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      text :'',
      data:[]
    }
  }
  handleSave = () => {
    const {text,data} = this.state;
    data.push({text});
    this.setState({ data,text:''});
  };


  render(){
      const {text,data} = this.state;
    return (
    <SafeAreaView style={styles.container}>
      <View style={styles.TittleContainer}>
        <Text style ={styles.Tittle} >
          Tüm Notlar
        </Text>
      </View>
      <View style ={styles.AddBarContainer} >
        <TextInput
        style={styles.input}
        value={text}
        onChangeText={(text)=>this.setState({ text })}
        />
        <TouchableOpacity onPress={this.handleSave}>
          <Text style = {styles.AddButton} >
            +
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        { data.map((item) => {
          return <ItemList text={item.text}/>
        } )
        }
      </View>
   </SafeAreaView>
  )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'dimgrey',
  },
  TittleContainer:{
    paddingTop:50,
    marginBottom:15,
  },
  Tittle:{
    color:'white',
    fontSize:30,
    paddingLeft:15,
  },
  AddBarContainer:{
    flexDirection:'row',
    height:40,
    paddingLeft:10,
  },
  input:{
    width:'80%',
    backgroundColor:'white',
    borderRadius:10,
  },
  AddButton:{
    marginLeft:10,
    fontWeight:'bold',
    fontSize:15,
    backgroundColor:'white',
    height:40,
    width:40,
    borderRadius:40,
    paddingLeft:'4.5%',
    paddingTop:'2.5%'

  },
});
