import React from 'react'

export default function Search({input,onChangeData,formsubmit}) {
  return (
    <div>
    <form action="" onSubmit={formsubmit}>
    <input type="text" name="" value={input} onChange={onChangeData} id="" />
    <button type='submit'>Search</button>
    </form>
    </div>
  )
}
