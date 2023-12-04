import { useState } from "react"
import Link from "next/link"

export default function MangaCard() {

    return (
        <>
            <div className="lg:w-full w-[420px] h-full flex">
                <div className="card-image">
                    <img className="cursor-pointer h-[250px] lg:w-[175px] w-[100px] object-cover rounded-b-lg rounded-l-lg rounded-r-none" src="https://www.kissmanga.info/storage/manga_covers/rebirth-of-the-urban-immortal-cultivator.webp" />
                </div>
                <div className="bg-zinc-800/20 border-zinc-700/20 flex h-[250px] lg:w-[500px] w-[250px] rounded-lg">
                    <div className="overflow-hidden">
                        <div className="h-[205px] relative">
                            <div id="info" className="relative ml-3 overflow-hidden">
                                <div id="content">
                                    <div className="card-info transition duration-300 w-full">
                                        <div className="card-info-item overflow-hidden flex flex-col w-full">
                                            <div className="card-info-item-title">
                                                <h1 className="ml-2 mt-4 font-semibold text-2xl line-clamp-1">Rebirth of the Urban Immortal Cultivator</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="overflow-x-hidden overflow-y-auto h-[190px]">
                                    <p className={`px-4 text-sm mt-3 italic -ml-2 mb-2 transition duration-200 card-description-opacity opacity-100 line-clamp-6 overflow-auto`}>
                                       desc 1
                                        <br />
                                      desc 2
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-zinc-700/10 h-11 rounded-r-lg rounded-t-none">
                            <div className="flex flex-row w-full justify-between items-center px-2">
                                <p className="text-sm text-gray-400 inline-block py-4 p-2">
                                    <span className="rounded-full bg-green-500 w-2 h-2 inline-block mr-1"></span> Ongoing
                                </p>
                                <p className="text-sm text-gray-400 inline-block p-2">
                                    <span className="rounded-full bg-gray-500 w-2 h-2 inline-block mr-1"></span> 52 Chapter
                                </p>
                                <p className="text-sm text-gray-400 inline-block p-2">
                                    <span className="rounded-full bg-blue-500 w-2 h-2 inline-block mr-1"></span> Manhua
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}