import React from "react"

export default function Card({ data, handleClick, index }) {

    const { image, artist, added, name } = data;

    return (
        <div className=" w-60 bg-zinc-100 p-4 rounded-md flex gap-4 pb-8 relative mt-10">
            <div className="w-20 h-20 bg-orange-500 rounded-md overflow-hidden">
                <img className="w-full h-full object-cover " src={image} alt="" />
            </div>
            <div className="">
                <h3 className="text-xl font-semibold  leading-none">{name}</h3>
                <h6 className="text-sm">{artist}</h6>
            </div>
            <button
                onClick={() => handleClick(index)}
                className={`px-4 py-3 ${added == false ? "bg-owais" : "bg-teal-600"}  absolute bottom-0 translate-y-[50%] left-1/2 -translate-x-[50%] text-white text-xs rounded-full whitespace-nowrap`}>
                    
                {added === false ? "Add to Favourites" : "Added"}

                </button>
        </div>
    )
}