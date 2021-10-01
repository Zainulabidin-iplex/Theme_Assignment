import React,{useState} from 'react'
import './Capability.css';


const Capability = () => {
    const [data,setData]=useState([

        {
            id:0,
            img :"Images/skill.png",
            title:'Web Design',
            des:'Get awesome design services from inkyy.com '
        },
        {
            id:1,
            img :"Images/skill.png",
            title:'Web Design',
            des:'Get awesome design services from inkyy.com '

        },
        {
            id:2,
            img :"Images/skill.png",
            title:'Web Design',
            des:'Get awesome design services from inkyy.com '

        },
        {
            id:3,
            img :"Images/skill.png",
            title:'Web Design',
            des:'Get awesome design services from inkyy.com '

        },
        {
            id:4,
            img :"Images/skill.png",
            title:'Web Design',
            des:'Get awesome design services from inkyy.com '

        },
        {
            id:5,
            img :"Images/skill.png",
            title:'Web Design',
            des:'Get awesome design services from inkyy.com '

        }
    ]);
 
    return (
            <div className="main_countainer">
                <div className="capa_wrap">
                    <h1 className="capa_heading">My Capabilities</h1>
                    <p className="capa_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et t enim ad minim veniam, quis nostrud exercitation.</p>
                </div>
                <div className="skill_main">
                    {
                        data && data.map((item,index)=>{
                            return(
                            
                                <div className="skillll">
                                    <img className="skilll_image" src={item.img}/>
                                    <h1 className="skilll_heading">{item.title}</h1>
                                    <p className="skilll_text">{item.des}</p>
                                </div>
                                
                            )
                        })
                    }
                </div>
            </div>
    )
}

export default Capability
