const Itemes = (props) => {
  const data = [...props.Data];
  return (
    <>
      {data.map((item, index) => {
        return (
          <div key={index} className="boxItem row w-100">
            <div className="boxItemPhoto col-3">
              <div className="boxItemPhoto-img">
                <img src={item.img} alt={item.name} className="over" />
                <img src={item.img} alt={item.name} className="main" />
              </div>
            </div>
            <div className="col d-flex align-items-center p-0">
              <div className="boxItem-content flex-grow-1">
                <div className="ItemInfo">
                <div className="itemHead d-flex align-items-center justify-content-between ">
                  <h5 className="ItemTitle">{item.name}</h5>
                  <span className="ItemPrice">${(+item.price).toFixed(2)}</span>
                </div>
                <p className="ItemDesc">{item.dis}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Itemes;
