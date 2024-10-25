import React from 'react'

const Title = ({ titleText, textColor = "red", placement }) => {
  return (
    <h1 style={{ color: textColor, textAlign: placement }}>
        {titleText}
    </h1>
  )
}

export default Title
