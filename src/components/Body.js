import RestroCard from "./Restrocard"
import { resobj }  from "../utils/mockdata";
import { useState,useEffect } from "react";
const Body=()=>{

  const [resList,getrestlist]=useState([]);
  const [mainobj,setmainobj]=useState([]);
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData=async()=>{
    const data=await fetch('https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D19.113645%26lng%3D72.8697339%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING');
    const jsondata=await data.json();
    console.log();
    const newfreshdata=jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log(newfreshdata);
    getrestlist(newfreshdata);
    setmainobj(newfreshdata);
  }
  // if(resList.length===0){
  //   return <h1>Loading......</h1>
  // }
    return resList.length===0 ? <h1>Loading......</h1> : (
        <div className="w-full">
            <div className="flex justify-start gap-5 my-2">
              <div><p>SearchBar</p></div>
              <button className="p-2 bg-amber-200 text-xl cursor-pointer" onClick={()=>{
                console.log("Hello i click");
                const filterEle=mainobj.filter((res)=>{
                  return res.info.avgRating>4.5;
                }
              )
              getrestlist(filterEle);
              }} >Avgrating</button>

              <button className="p-2 bg-amber-200 text-xl cursor-pointer" onClick={()=>{
                getrestlist(mainobj);
              }} >All Items</button>


              <button className="p-2 bg-amber-200 text-xl cursor-pointer" 
              onClick={()=>{
                const filterveg=mainobj.filter((res)=>{
                  return res.info.veg===true;
                })
                getrestlist(filterveg);
              }}
              >Veg Only</button>

              <button className="p-2 bg-amber-200 text-xl cursor-pointer" 
                onClick={()=>{
                  const filterveg=mainobj.filter((res)=>{
                    if(res.info.veg){
                      return;
                    }else{
                      return res;
                    }
                  })
                  getrestlist(filterveg);
                }}
              >Non-Veg Only</button>
            </div>
            <div className="flex flex-wrap gap-10 justify-start items-center">
              {
                resList.map((res)=>(
                  <RestroCard key={res.info.id} restdata={res} />
                ))
              }
                  
            </div>
        </div>
    )
};
export default Body;