import "./card.css"

const Card = ({innerConent}) => {
    console.log(innerConent)
    return (
        < div className="card" >
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="card-inner">
                {innerConent}
            </div>
        </div >
    )
}

export default Card;