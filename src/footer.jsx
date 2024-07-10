import React from "react";
export default function Footer(){
    return(
        <div className="flex justify-around bg-zinc-900
        h-20 items-center rounded-b-lg">
            <i class="cursor-pointer fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
            <i class="cursor-pointer fa fa-facebook-official fa-2x" aria-hidden="true"></i>
            <i class="cursor-pointer fa fa-instagram fa-2x" aria-hidden="true"></i>
            <i class="cursor-pointer fa fa-github-square fa-2x" aria-hidden="true"></i>
        </div>
    )
}