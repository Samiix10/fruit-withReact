const SeventhBox = (prop) => {
  const Data = [...prop.data];
  const classame = (index) => {
    return index === 1
      ? "col-11 col-md-6 col-lg-4 mx-auto mx-md-0 mt-3 mt-md-0"
      : index === 2
      ? "col-11 col-md-6 col-lg-4 mx-auto mx-md-0 mt-3 mt-lg-0"
      : "col-11 col-md-6 col-lg-4 mx-auto mx-md-0";
  };
  return (
    <>
      {Data.map((item, index) => {
        return (
          <div key={index} className={classame(index)}>
            <div className="card">
              <div className="CardHead">
                <div className="CardHeadPhoto">
                  <img src={item.img} className="cardImg" alt="card-img" />
                </div>
                <div className="CardoverLay">{item.date}</div>
              </div>
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.dis}</p>
                <span className="ReadMoreCard">read more</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SeventhBox;
