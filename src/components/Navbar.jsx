import React from 'react'

export default function Navbar() {
    const menu = [
        { tile: "Home" },
        { tile: "About" },
        { tile: "Contact" },
    ]

    return (
        <>
            <nav className=' bg-black'>
                <div className='container top-0  h-20 p-2 flex flex-row justify-between items-center text-white px-7 m-auto text-lg'>
                    <div>Navbar</div>
                    <div>
                        <ul className='flex flex-row gap-4 text-center'>
                            {menu.map((item, i) => (
                                <a href="" key={i}>
                                    <li>{item.tile}</li>
                                </a>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
