export const Cards = ({ cardsData }) => {

    return(
        <div className="">
            <div className="">
                <div className="">
                    {cardsData.map((singlecard, index) => (
                        <UserCard />
                    ))}

                </div>
            </div>
        </div>
    )

}

const UserCard = ({ }) => {
    console.log(`checking cardsData ${cardsData}`)
    console.log(`checking index, ${index}`)

    const selectedUser = (index) => {
        // converting card Data 
        const convertCardData = [...cardsData]
        // checking the convertcarddata then find by val, index
        const checking = convertCardData.find((val, index1) => index1 === index)
        console.log(`checking ${checking}`)

        
    }




}