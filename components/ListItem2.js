import React from 'react'
import { View,TouchableOpacity } from 'react-native'

import Box from './Box'
import Button from './button';
import Text from './text'
import Remove from './icons/Remove'
import theme from '../styles/theme'

const ListItem = ({item,deleteItem}) => {
    return (
        <Box
         bg={theme.listBg} 
         borderBottomWidth={1} 
        borderBottomColor={theme.borderColor} pt={15} 
        flexDirection="row"  
        justifyContent="space-between"
        >
            <Box flex={5}   >
                <Button
                    justifyContent='flex-start' alignItems="flex-start"  py={16} px={12}  >  
                    <Text fontSize={4}> {item.text}</Text>
                </Button>
            </Box>

            <Box  flex={1}  justifyContent='center' alignItems="flex-end">
                <Button pr={9} onPress={() => deleteItem(item.id)} >  
                <Remove  color={theme.mavi} width={20} height={20} />
                </Button> 
            </Box>

        
        </Box>
    )
}

export default ListItem
