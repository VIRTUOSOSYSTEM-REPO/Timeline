import React from 'react'
import './Chart.css'

const Chart = () => { 
    const list = []
    for (var i =1 ;i <= 13 ; i++  ) {
      list.push(i)
    }

    return (
        <>
        <div className="d-flex">
             { list && list.length > 0 && list.map(lists => {
                return (
                <div>
                    <div className="">
                        <h6 style={{paddingLeft: "37px"}}>{lists}week</h6>
                        
                    </div>
                </div> 
                )
            }
             )}
             </div>
             <div className="d-flex">
            { list && list.length > 0 && list.map(lists => {
            return (
                <div>
                    <div style={{paddingLeft: "80px"}}>
                        <div className="vl"></div>
                        
                    </div>
                </div> 
                )
            }
                
            )}
            </div>
        </>
    )
}
export default Chart;
