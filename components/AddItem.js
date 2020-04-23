import React,{useState} from 'react'
import { Viev,TextInput,Platform} from 'react-native'


import Box from './Box'
import Text from './text'
import Button from './button'
import AddIcon from './icons/AddIcon'
import IconSil from './icons/IconSil'
import theme from './../styles/theme'

const AddItem = ({props,addItem}) => {
    const altPadding = 14;

    const [value, onChangeText] = useState('');

    return (
        <Box 
        flex={1}
        position="relative"
        flexDirection="row" 
        py={2}
        px={9}
        zIndex={1}
        {...props}
        alignItems="flex-start"
        justifyContent="space-between">
            <TextInput
                flex={1}
                backgroundColor="white"
                style={{ height: 50, borderColor: 'gray', borderWidth: 1,
                fontSize:19,
                borderRadius:11,
                paddingLeft: value.length > 0 ? 43 : 3 ,
                paddingRight:40 }}
                onChangeText={text => onChangeText(text)}
                value={value}
                placeholder="Add Shopping List Items"
                />
            {
                 value.length > 0  && (
                <Button 
                position="absolute"
                right={21}
                top={altPadding}
                width={32}
                height={32}
                onPress={() => addItem(value)}
                height={40} flex={1} alignItems="center" justifyContent='center'
                >
                    <AddIcon color={theme.iconColor} width={32} height={32}/>
                </Button>
                 )
            }
            


            {
                value.length > 0  && (
                     <Button 
                        position="absolute"
                        onPress={() => onChangeText('')}
                        width={32}
                        height={32}
                        left={17}
                        top={altPadding}
                        // onPress={() => addItem(value)}
                        height={40} flex={1} alignItems="center" justifyContent='center'>
                            <IconSil color={theme.iconColor} width={32} height={32}/>
                      </Button>
                )
            }
           
           
        </Box>
    )
}

export default AddItem
