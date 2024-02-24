import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Cards } from './Components/Cards'


function App() {

  const [addFriend, setAddFriend] = useState(false)
  const [name, setName] = useState('')
  const [totalBill, setTotalBill] = useState(0)
  const [myExpense, setMyExpense] = useState(0)
  const [userExpense, setUserExpense] = useState(0)
  const [payingBill, setPayingBill] = useState(0)
  const [cardsData, setCardsData] = useState([
    {
      userImg: 'https://avatars.githubusercontent.com/u/132301326?v=4',
      userName: 'samad',
      desc: 'we have do anything',
      price: '919',
      isActive: false
    },
  ])
  return (
    <div className='flex justify-center'>
      <div className=''>
          <Cards cardsData={cardsData}
          setCardsData={setCardsData}
          addFriend={addFriend}
          setAddFriend={setAddFriend}
          name={name} setName={setName}
          totalBill={totalBill} setTotalBill={setTotalBill}
          myExpense={myExpense} setMyExpense={setMyExpense}
          userExpense={userExpense} setUserExpense={setUserExpense}
          payingBill={payingBill} setPayingBill={setPayingBill}/>
      </div>
    </div>
 )
 }
export default App
