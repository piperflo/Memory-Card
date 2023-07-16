import React, {useState, useEffect} from 'react'
import "../styles/CreateCards.css"
import Header from './header'

const CreateCards = () => {
    const [count, setCount] = useState(0);
    const [maxCount, setMaxCount] = useState(0);
    const [cards, setCards] = useState([
        {
            id: 0,
            url: "fry.png", 
            clicked: false
        },
        {
            id: 1,
            url: "leela.png", 
            clicked: false
        },
        {
            id: 2,
            url: "bender.png", 
            clicked: false
        },
        {
            id: 3,
            url: "gang.png", 
            clicked: false
        },
        {
            id: 4,
            url: "amy.png", 
            clicked: false
        },
        {
            id: 5,
            url: "hermes.png", 
            clicked: false
        },
        {
            id: 6,
            url: "zap.png", 
            clicked: false
        },
        {
            id: 7,
            url: "zoid.png", 
            clicked: false
        },
        {
            id: 8,
            url: "fryv2.png", 
            clicked: false
        },
        {
            id: 9,
            url: "leelav2.png", 
            clicked: false
        },
        {
            id: 10,
            url: "benderv2.png", 
            clicked: false
        },
        {
            id: 11,
            url: "roberto.png", 
            clicked: false
        }
    ]);
    const shuffle = (array) =>{
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        console.log("Now shuffling");
        console.log("--------------S-------------")
    }
    useEffect(() => {
        shuffle(cards);  
        if(count >= maxCount){
            setMaxCount(count);
        } 
    },[count, maxCount, cards]);
    const updateCount = (event) =>{
        var v = event.target.parentNode;
        for(let i = 0; i < cards.length; i++){           
            if(cards[i].id == v.id){
                if(!cards[i].clicked){
                    setCount(count + 1);
                    cards[i].clicked = true;
                }
                else{
                    for(let i = 0; i < cards.length; i++){
                        cards[i].clicked = false; 
                    }
                    setCount(0);
                }
                break;
            }
        }       
    }         
    return(
        <div id="content">
            <Header count={count} maxCount={maxCount}/>
            <div id="card-container">
                <div id="cards">
                {cards.map((card) => {
                        return <div key={card.id} className="card" id={card.id} onClick={updateCount}><img src={require(`../Images/${card.url}`)} alt={card.url} ></img></div> 
                    })}
                </div>
            </div>
        </div>
    )
}

export default CreateCards;