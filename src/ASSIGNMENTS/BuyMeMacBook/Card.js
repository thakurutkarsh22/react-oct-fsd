


function Card(props) {

    const {name, price, isCardSelected, clickhandler, id} = props


    return (<div onClick={() => clickhandler(id)}>
        {" "}
    {/* 4 divs will be rendered here when apps starts*/}
          <div className={isCardSelected ? "selected" : "container"} >
            <p>{name}</p>
            <p>
             {price}
            </p>
          </div>
       
        <br />
        
      </div>)

}


export default Card;