import { skillCards } from '../constants'

const Card = ({card, children, index, length}) => {

    if(index < length - 1){
        return (
        <>
            <div id={`inner-card-${index-1}`} className="card__face card__face--front size-full transform-3d card-deck">
                {children}
            </div>
            <div id={`card-${index}`} className="card__face card__face--back size-full rounded-3xl border-4 border-amber-500 overflow-hidden">
                <img
                    src={`/images/cards/${card.name}.png`}
                    alt={card.name}
                    className="absolute left-0 top-0 size-full object-cover"
                />
            </div>
        </>
    )
    } else {
        return (
            <>
                <div id={`inner-card-${index-1}`} className="card__inner size-full card-deck">
                    {children}
                </div>
                <div id={`card-${index}`} className="card__face card__face--back size-full rounded-3xl border-4 border-amber-500 overflow-hidden">
                    <img
                        src={`/images/cards/${card.name}.png`}
                        alt={card.name}
                        className="absolute left-0 top-0 size-full object-cover"
                    />
                </div>
            </>
        )
    }
    
}

const InitialCard = ({card, index}) => {
    return (
        <>
            <div id={`card-${index}`} className="card__face card__face--front size-full rounded-3xl border-4 border-amber-500 overflow-hidden">
                <img
                    src="/images/about.webp"
                    alt="about image"
                    className=" absolute left-0 top-0 size-full object-cover"
                />
            </div>
            <div className="card__face card__face--back size-full rounded-3xl border-4 border-amber-500 overflow-hidden">
                <img
                    src={`/images/cards/${card.name}.png`}
                    alt={card.name}
                    className="absolute left-0 top-0 size-full object-cover"
                />
            </div>
        </>
    )
}

const CardCarousel = () => {
  return (
    <>
    {skillCards.reduce((acc, card, index, arr)=>{

        if(index===0){
            return (<InitialCard
                card={card}
                index={index}
            />)
        }
        else{
            return (
                <Card
                    card={card}
                    index={index}
                    length={arr.length}
                >
                    {acc}
                </Card>
            )
        }

    }, null)}
    </>
  )
}

export default CardCarousel