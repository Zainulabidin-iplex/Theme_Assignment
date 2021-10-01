import React ,{useState}from 'react'
import './Portfolio.css';

const Portfolio = () => {

    const [count,setcount]=useState(0)
    const [data,setData]=useState([

        {
            id:0,
            img :"Images/tab1.png"
        },
        {
            id:1,
            img :"Images/tab2.png"
        },
        {
            id:2,
            img :"Images/tab3.png"
        },
        {
            id:3,
            img :"Images/tab4.png"
        },
        {
            id:4,
            img :"Images/tab5.png"
        },
        {
            id:5,
            img :"Images/tab6.png"
        }
    ]);

    return (
        <div id="portfolio">
            <div className="port_main">
                <div className="port_left">
                    <div>
                        <h1 className="port_heading">Portfolio</h1>
                    </div>
                    <div className="tabs_btn">
                        <h4 className="click_btn" onClick={()=>setcount(0)}>All</h4>
                        <h4 className="click_btn"   onClick={()=>setcount(1)}>Logo</h4>
                        <h4 className="click_btn"   onClick={()=>setcount(2)}>Websites</h4>
                        <h4 className="click_btn"     onClick={()=>setcount(3)}>Mobile Apps</h4>
                    </div>
           {  count==0?       <div className="tabs_main">
                    {
                        data && data.map((item,index)=>{
                            return(
                                <div className="tabs_image">
                                    <img className="img_sizing" src={item.img}/>
                                </div>
                            )
                        }) 
                    }
                    </div>:null}
          { count==1?
                    <div className="tabs_main">
                    {
                        data && data.slice(0,3).map((item,index)=>{
                            return(
                                <div className="tabs_image">
                                    <img className="img_sizing" src={item.img}/>
                                </div>
                            )
                        }) 
                    }
                    </div>:null}
                    { count==2?
                    <div className="tabs_main">
                    {
                        data && data.slice(3,6).map((item,index)=>{
                            return(
                                <div className="tabs_image">
                                    <img className="img_sizing" src={item.img}/>
                                </div>
                            )
                        }) 
                    }
                    </div>:null}

                    { count==3?
                    <div className="tabs_main">
                    {
                        data && data.slice(0,3).map((item,index)=>{
                            return(
                                <div className="tabs_image">
                                    <img className="img_sizing" src={item.img}/>
                                </div>
                            )
                        }) 
                    }
                    </div>:null}
                </div>
            </div>
        </div>
    )
}


export default Portfolio;
