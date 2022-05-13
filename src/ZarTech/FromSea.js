import React from "react";
import { useEffect, useState } from "react";
import { shopApi } from "./ApiLink";

const Shop_url = "/data";

const FromSea = () => {
    const [display, setDisplay] = useState([]);
    useEffect(() => {
      const fetchUser = async () => {
        const response = await shopApi.get(Shop_url);
        const data = JSON.stringify(response);
        setDisplay(response?.data);
        console.log(response);
        console.log(data);
      };
      fetchUser();
    }, []);

  return (
    <div>
    {display?.map((result, index) => (
      <>
        {result?.table_menu_list.map((types, index) => (
          <>
            {types?.category_dishes.map((salads, index) => (
              <>
              <div className="card my-2">
               <div className="d-flex p-2">
                 <div className="sub1 " style={{width:"72%",paddingLeft:"25px",position:"relative"}}>
                   <span className="icon1"> <i class="fas fa-circle"></i> </span>
                    <h6>{salads?.dish_name}</h6>
                    <div className="inner d-flex">
                      <div>{salads?.dish_currency}{salads?.dish_price}</div>
                      <div className="ml-auto">{salads?.dish_calories} calories</div>
                    </div>
                    <p className="pr-2 description">
                    {salads?.dish_description}
                    </p>
                 </div>
                 <div className="sub2 text-right ml-auto" style={{width:"24%"}}>
                   <img src={salads?.dish_image} alt="" />
                 </div>
               </div>
               </div>
              </>
            ))}
          </>
        ))}
      </>
    ))}
  </div>
  )
}

export default FromSea;