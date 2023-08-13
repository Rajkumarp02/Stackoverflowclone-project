import React from 'react'

export default function Avatar({children,
    borderRadius,
    backgroundColor,
    px,py,color, 
    textDecoration,
    textAlign,
    width
}) 
{

 const style = {
    borderRadius,
    backgroundColor,
    padding:`${py} ${px}`,
    color:color || 'black',
    textDecoration,
    textAlign,
    width
 }

  return (
    <div style={style}>
     {children}
    </div>
  )
}
