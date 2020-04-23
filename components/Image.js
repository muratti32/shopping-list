import { Image as T } from 'react-native'
import styled from 'styled-components'
import { compose,  size, typography, space } from 'styled-system'

const Image = styled(T)(
  compose(
    typography,
    space,
    size
  )
)

export default Image
