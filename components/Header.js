import React from 'react'
import { View } from 'react-native'

import theme from './../styles/theme'
import Box from './Box'
import Text from './text'

const Header = (props) => {
    return (
        <Box  width={'100%'} height={60} paddingTop={15} bg={theme.mavi}>
            <Text py={2} fontWeight='800' color="#fff" fontSize={4} textAlign="center"> {props.title} </Text>
        </Box>
    )
}

Header.defaultProps = {
    title:'Shopping List',
}

export default Header
