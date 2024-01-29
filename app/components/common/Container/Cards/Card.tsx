import React from 'react'


type CardProps = {
  padding?: string,
  background?: string,
  children: React.ReactNode
}

const Card = ({padding, background, children}: CardProps) => {
  const classString = `${padding ?? 'p-2'} ${background ?? 'bg-white'} rounded-lg`;

  return (
    <div className={classString}>
      {children}
    </div>
  )
}

export default Card