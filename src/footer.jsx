import React from "react";
export default function Footer(){
    const linkedin = () =>{
        window.location.href = 'https://www.linkedin.com/in/onkar-gupta-6398ba264/'
    }
    const twitter = () =>{
        window.location.href = 'https://x.com/r4kno'
    }
    const instagram = () =>{
        window.location.href = 'https://www.instagram.com/__rakno__/'
    }
    const github = () =>{
        window.location.href = 'https://github.com/r4kno'
    }
    return(
        <div className="flex justify-around bg-zinc-900
        h-20 items-center rounded-b-lg items-self-end">
            <i class="cursor-pointer fa fa-linkedin-square fa-2x" onClick={linkedin} aria-hidden="true"></i>
            <i class="cursor-pointer fa fa-twitter-square fa-2x" onClick={twitter} aria-hidden="true"></i>
            <i class="cursor-pointer fa fa-instagram fa-2x" onClick={instagram} aria-hidden="true"></i>
            <i class="cursor-pointer fa fa-github-square fa-2x" onClick={github} aria-hidden="true"></i>
        </div>
    )
}