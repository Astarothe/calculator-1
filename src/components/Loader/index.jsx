import React from 'react'
import PropTypes from 'prop-types'

import { Loader } from './styled'
import theme from '@/theme'

const LOADER_SIZE = 100

const Load = () => (
    <Loader
      type="Bars"
      color={theme.background}
      height={LOADER_SIZE}
      width={LOADER_SIZE}
    />
  )


Loader.propTypes = {
  type: PropTypes.oneOf(['Bars']),
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
}

export default Load
