import React, { useState } from 'react'
import { SafeAreaView,StatusBar,FlatList,ScrollView} from 'react-native'
import 'react-native-get-random-values'

import { v4 as uuidv4 } from 'uuid';
import Box from './components/Box'
import Text from './components/text'
import Header from './components/Header'
import ListItem from './components/ListItem2'
import theme from './styles/theme'
import AddItem from './components/AddItem';

const App = () => {
  const [data, setData] = useState([
  
  ])

  const deleteItem = (id) =>{
    setData(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }



  const addItem = (t) =>{
    setData(prevItems => {
      return [
        {id:uuidv4(),text:t},...prevItems
      ]
    })
  }

  

  return (
  
    <Box flex={1} bg={theme.mavi} padding={0} margin={0}>
      <StatusBar  
      translucent={true} 
      backgroundColor={'transparent'} 
      barStyle={'light-content'} />
        <SafeAreaView flex={1}  >
        <Header />

          
          <Box  flex={1} >
            <Box flex={1}>
              <AddItem addItem ={addItem}/>
            </Box>

            <Box flex={9} bg='white'>
        
        
            <FlatList
                data={data}
                height={180}
                contentContainerStyle={{ flexGrow: 1 }}
                  renderItem={({ item }) => 
                  <ListItem item={item} deleteItem={deleteItem}/>
                  
                  }          
                keyExtractor={item => item.id}
              />
         
            
              
            </Box>
         
           
           
          </Box>

          
        </SafeAreaView>
   
    </Box>
  )
}

export default App
