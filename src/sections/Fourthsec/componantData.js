const ComponentsData = (prop) => {
  const Data = [...prop.Data];
  let num = prop.nm || 0;
  const liked = (index) => {
    const liked = document.getElementById(index);
    liked.classList.toggle("liked");
  };
  return (
    <>
      <div className={prop.name + "Box"}>
        <div className="row">
          {Data.map((item, index) => {
            index = index + +num;
            return (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div className="Boxitem">
                  <div className="bgItem p-4">
                    {item.sale ? <span className="sale">Sale</span> : ""}
                    <div className="bgBox">
                      <div className="iconsOver">
                        <svg
                          className="iconCart mt-3"
                          fill=""
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="30px"
                          height="30px"
                          viewBox="-83.58 -83.58 405.95 405.95"
                          stroke=""
                          strokeWidth="0.00238792"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0">
                            <rect
                              x="-83.58"
                              y="-83.58"
                              width="405.95"
                              height="405.95"
                              rx="202.975"
                              fill="#fff0ca"
                              strokeWidth="0"
                            ></rect>
                          </g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g>
                              {" "}
                              <g>
                                {" "}
                                <path d="M20.152,60.958L0.05,229.833c-0.242,2.035,0.397,4.07,1.76,5.601c1.363,1.531,3.312,2.408,5.362,2.408h224.449 c2.049,0,4-0.877,5.362-2.408c1.363-1.53,1.998-3.575,1.76-5.601L218.638,60.958c-0.425-3.605-3.486-6.324-7.117-6.324h-32.138 C175.818,24.449,150.116,0.95,118.989,0.95S62.16,24.454,58.594,54.634H27.278C23.636,54.634,20.579,57.352,20.152,60.958z M118.984,15.288c23.207,0,42.44,17.098,45.908,39.346H73.076C76.542,32.386,95.777,15.288,118.984,15.288z M65.296,68.971 h107.371h32.482l18.393,154.534H15.24L33.635,68.971H65.296z"></path>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>
                        </svg>
                        <svg
                          key={index}
                          id={index}
                          className={"heartIcon"}
                          width="30px"
                          height="30px"
                          viewBox="-8.4 -8.4 40.80 40.80"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          stroke=""
                          onClick={() => liked(index)}
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0">
                            <rect
                              x="-8.4"
                              y="-8.4"
                              width="40.80"
                              height="40.80"
                              rx="20.4"
                              fill="#fff0ca"
                              strokeWidth="0"
                            ></rect>
                          </g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                              stroke="#000000"
                              strokeWidth="0.8640000000000001"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>{" "}
                          </g>
                        </svg>
                        <svg
                          className="iconSearch mt-3"
                          width="30px"
                          height="30px"
                          viewBox="-12.72 -12.72 49.44 49.44"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          transform="matrix(-1, 0, 0, 1, 0, 0)"
                          stroke="#ffffff"
                        >
                          <g
                            id="SVGRepo_bgCarrier"
                            strokeWidth="0"
                            transform="translate(0,0), scale(1)"
                          >
                            <rect
                              x="-12.72"
                              y="-12.72"
                              width="49.44"
                              height="49.44"
                              rx="24.72"
                              fill="#fff0ca"
                              strokeWidth="0"
                            ></rect>
                          </g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="#CCCCCC"
                            strokeWidth="1.7759999999999998"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                              stroke="#000000"
                              strokeWidth="2.112"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>{" "}
                          </g>
                        </svg>
                      </div>
                      <img src={item.img1} alt={item.name} />
                      <img
                        src={item.img2}
                        alt={item.name}
                        className="overLay"
                      />
                    </div>
                  </div>
                  <div className="Boxtext text-center">
                    <h3>{item.name}</h3>
                    <span
                      style={{
                        textDecoration: item.sale ? "line-through" : "none",
                      }}
                    >
                      ${item.price}
                    </span>
                    {item.sale ? (
                      <span style={{ marginLeft: 5 }}>
                        ${(item.Sale() * 4.41).toFixed(2)}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ComponentsData;
