import { useState } from "react";
import { addFriend } from "addFriend"
// import { SplitBill } from "./SplitBalance"



export const Cards = ({ cardsData, setCardsData, addFriend,
    setAddFriend, name, setName, totalBill, setTotalBill, myExpense, setMyExpense,
    userExpense, setUserExpense, payingBill, setPayingBill, }) => {

    const [SelectSingleUser, setSelectSingleUser] = useState(false)

    return(
        <div className="">
            <div className="">
                <div className="">
                    {cardsData.map((singlecard, index) => (
                        <UserCard 
                        singlecard={singlecard}
              ind={index}
              cardsData={cardsData}
              setCardsData={setCardsData}
              setName={setName}
              selectSingleUser={selectSingleUser}
              setSelectSingleUser={setSelectSingleUser}
              totalBill={totalBill}
              setTotalBill={setTotalBill}
              myExpense={myExpense}
              setMyExpense={setMyExpense}
              userExpense={userExpense}
              setUserExpense={setUserExpense}
              payingBill={payingBill}
              setPayingBill={setPayingBill} />
                    ))}

                </div>




            </div>
        </div>
    )

}

const UserCard = ({  }) => {
    console.log(`checking cardsData ${cardsData}`)
    console.log(`checking index, ${index}`)

    const selectedUser = (index) => {
        // converting card Data 
        const convertCardData = [...cardsData]
        // checking the convertcarddata then find by val, index
        const checking = convertCardData.find((val, index1) => index1 === index)
        console.log(`checking ${checking}`)
        
        convertCardData[index].isActive = true
        setCardsData(convertCardData)
        localStorage.setItem('card', JSON.stringify({ ...check, index: index }))        
        setName(checking.username)
        setSelectSingleUser(true)
    }
    return (
        <div className="" style={{
                backgroundColor: setSelectSingleUser ? "red" : "orange",
                padding: "5px 10px"}}>
            <div className="flex flex-center">
                <img style={{width: '50px', height: "50px", borderRadius: "50%", marginRight: "30px" }}
                src={singlecard.userImg}
                alt="userImage"
                />
            <div>
                <p style={{ fontSize: "17px", fontWeight: "600", marginBottom: "2px", marginTop: "2px" }}>
                {singlecard.username}                
                </p>

                <p style={{
                    fontWeight: "200",
                    color: myExpense < userExpense ? "purple" : "red"
                }}>
                    {singlecard.desc}
                </p>
                </div>
            </div>
        
        <button onClick={() => selectedUser(index)}
        style={{
            padding: "10px 20px",
            backgroundColor: "red",
            border: "none",
            borderRadius: "7px",
            cursor: 'pointer'
        }}>
            select
        </button>
        </div>
    )
}