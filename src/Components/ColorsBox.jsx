function ColorsBox({color,handelRemove}){
return(
    <div style={{margin:"3px",width:"100px" ,height:"100px", backgroundColor:color }}>
    <button onClick={handelRemove}>delete</button>
    </div>
)

}

export default ColorsBox;
