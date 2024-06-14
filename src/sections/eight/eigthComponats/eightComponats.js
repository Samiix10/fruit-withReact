const SwipData = (prop) => {
  const item = prop.item;
  return (
    <>
      <div className="SwipCard" >
        <div className="SwipCardBody row">
          <div className="col-5 col-md-4 col-lg-3 order-lg-2 mx-auto mx-lg-0">
                  <div className="SwipCardImg">
                    <div className="photo">
                      <img src={item.img} alt={"phtop for" + item.name} />
                    </div>
            </div>
          </div>
          <div className="col-11 col-lg-9 mx-auto mx-lg-0 d-flex align-items-center p-0">
            <div className="SwipCardContent text-center text-lg-start">
              <p>{item.dis}</p>
              <span>{item.name} <small>{item.pos}</small></span>
            </div>
          </div>
        </div>
      </div>
          
    </>
  )
}

export default SwipData;