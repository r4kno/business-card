import React from "react";
import picture from './assets/pic2.jpg'

export default function info(){
    const mailclick = () => {
        window.location.href = `mailto:${'onkargupta0864@gmail.com'}`;
    }
    const linkedinclick = () =>{
        window.location.href = 'https://www.linkedin.com/in/onkar-gupta-6398ba264/'
    }
    const weblink = () =>{
        window.location.href = 'https://r4kno.github.io/showcase/'
    }
    return (
        <>
        <img src={picture} className="w-80 rounded-t-lg"style={{

        width: '20rem',
        height: '300px',
        objectFit: 'cover',
        objectPosition: 'center',
        objectPosition: '50% 10%'

}}/>
        <div className="info" style={{
            display: "flex", 
            flexDirection: 'column', 
            alignItems: 'center',
            position: 'relative',
            top: '0',
            marginTop: '20px',
            gap: '0.2rem'
            
            
            }}>
            
            <h2 className="name flex justify-center text-3xl font-bold">Onkar Gupta</h2>
            <h3 className="text-base font-normal text-orange-400">Student</h3>
            <h4 className="text-sm font-thin cursor-pointer" onClick={weblink}>website link</h4>
            <div className="btngap-2.5 m-s flex justify-center 3">
                <button className="email p-2 h-10 w-32 bg-white rounded-lg flex items-center justify-center space-x-2 shadow" onClick={mailclick}>
                <i class="fa fa-envelope text-zinc-950 " aria-hidden="true"></i>
                <h4 className="text-zinc-950 font-bold">Email</h4>
                </button>
                <button className=" w-32 h-10 linkedin rounded-lg flex justify-center items-center space-x-2 p-2 shadow" onClick={linkedinclick} style={{backgroundColor: '#5093E2',}}>
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                <h4 className="font-bold">LinkedIn</h4>
                </button>
            </div>
        </div>
        </>
    )
}