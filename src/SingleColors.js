import rgbToHex from "./Util";

function SingleColors({rgb,weight}){
    const backgroundColor=rgb.join(',')
    const hex=rgbToHex(...rgb)
    return(
        <>
        <div className="box" style={{backgroundColor:`rgb(${backgroundColor})`}}>
            <p>{weight}</p>
            <p>{hex}</p>
        </div>
        </>
    )
}
export default SingleColors;


