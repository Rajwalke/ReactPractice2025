import { dishImg }  from "../utils/constant";
const RestroCard=(props)=>{
    // console.log(props.restdata.info);
    const {name,cuisines,cloudinaryImageId,sla,avgRating,costForTwo}=props.restdata.info;
    return(
        <div className="w-1/6 flex flex-col items-center justify-center bg-[#f0f0f0] p-2 gap-2 border-black border-2 rounded-xl">
            <div>
                <img  src={dishImg+cloudinaryImageId}/>
            </div>
            <div className="flex flex-col items-start">
                <p>{name}</p>
                <p>{cuisines.join(",")}</p>
                <p>{avgRating}</p>
                <p>{costForTwo}</p>
                <p>{sla.deliveryTime} mins</p>
            </div>
        </div>
    )
}
export default RestroCard;