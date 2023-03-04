

function Table(){
    const {useState} = React

    // const [data, setData] = useState([
        
    // ])
    let data=["Onboarding Call","Google Search Console Access","Google Analytics Access","Website Access","Technical Audit","Anchot Text and Semantic Analysis", "Competetor Analysis", "Anchor Text/URL Mapping", "Google Data Studio Report + Local Reporting Suite", "Site Level Optimization", "On Page Optimization","Content Creation", "Content Publishing", "Premium Press Release", "Authority Niche Placements", "Review Management", "Index Links", "Video Recap"]

    let arr=[]
    for (let i=0;i<18;i++) {
        let new_arr=[]
        for (let j=0;j<6;j++) {
            if (j==0) {
                new_arr.push(<td key={`r${i+1}c${j+1}`} onBlur={(e)=>handleupdate(e.target.innerText,`r${i+1}c${j+1}`)} style={{border:"1px solid #ccc",backgroundColor:"rgb(219, 219, 219)", color:"rgb(112, 112, 112)", padding:"5px"}} contentEditable="true">{data[i]}</td>)
            } else {
                new_arr.push(<td key={`r${i+1}c${j+1}`} onBlur={(e)=>handleupdate(e.target.innerText,`r${i+1}c${j+1}`)} style={{border:"1px solid #ccc",width:"15%", padding:"5px"}} contentEditable="true"></td>)
            }
        }
        arr.push(new_arr)
    }
    
    function handleupdate(data, position){
        console.log(data,position)
        fetch('url', {
            method: 'POST',
            body: JSON.stringify({
                data:data,
                position:position
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((e)=>console.log(e))
        .catch((e)=>console.log(e))

    }

    return(
        <div>
            <table style={{border:"1px solid #ccc", borderCollapse:"collapse"}}>
                <thead>
                    <tr>
                        <th contentEditable="true" style={{backgroundColor:"rgb(219, 219, 219)",color:"rgb(112, 112, 112)", padding:"5px"}}>MONTH 1</th>
                        <th contentEditable="true" style={{backgroundColor:"rgb(219, 219, 219)",color:"rgb(112, 112, 112)", padding:"5px"}}></th>
                        <th contentEditable="true" style={{backgroundColor:"rgb(219, 219, 219)",color:"rgb(112, 112, 112)", padding:"5px"}}></th>
                        <th contentEditable="true" style={{backgroundColor:"rgb(219, 219, 219)",color:"rgb(112, 112, 112)", padding:"5px"}}></th>
                        <th contentEditable="true" style={{backgroundColor:"rgb(219, 219, 219)",color:"rgb(112, 112, 112)", padding:"5px"}}></th>
                        <th contentEditable="true" style={{backgroundColor:"rgb(219, 219, 219)",color:"rgb(112, 112, 112)", padding:"5px"}}></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arr?.map((p_el,p_i)=>(
                            <tr key={p_i}>
                                {
                                    p_el.map((c_el,c_i)=>(
                                        c_el
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}


ReactDOM.render(<Table/>, document.querySelector("#table"))