import React from 'react'
import Card from './Card'

const AllItems = ({ items }) => {
  const allItems = items.map(item => {
    return <Card title={item.title} description={item.description} />
  })
  
  return (
    <section>
      { allItems }
    </section>
  )
}

export default AllItems