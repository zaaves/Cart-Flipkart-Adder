import React from "react";

export default function Navbar({ data }) {

    return (

        <div id="mod" className="w-full px-20 py-3 flex justify-between items-center">
            <h3 className="font-serif font-normal owais text-xl">Music Vendor</h3>
            <div className="flex p-2 px-4 bg-owais text-white rounded-md text-sm gap-3">
                <h3>Favourites</h3>
                <h4>{data.filter(item => item.added).length}</h4>
            </div>
        </div>
    )
}