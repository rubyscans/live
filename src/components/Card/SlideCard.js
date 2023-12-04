import Link from "next/link";

export default function SlideCard() {
    return (
        <>

            <div
                style={{
                    background: `linear-gradient(rgba(17, 17, 17, 0.8), rgba(17, 17, 17, 0.8), rgba(17, 17, 17, 0.8), rgba(17, 17, 17, 0.8)) 0% 0% / cover, url('https://otakukart.com/wp-content/uploads/2023/05/I-Picked-A-Hammer-To-Save-The-World-Chapter-28-scaled.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
                className="slidesr slider-item relative overflow-hidden min-w-full"
            >
                <div className="px-12 -mt-12">
                    <h1 className="mt-6 text-5xl font-bold text-white">Rebirth of the Urban Immortal Cultivator</h1>

                    <p className="text-light mt-4 text-left line-clamp-2">
                       desc 1
                        <br />
                        desc 2
                    </p>
                    <div id="buttons" className="flex space-x-4 mt-6">
                        <Link href={`/manga/test`}>
                            <div className={`button-animate p-2 px-6 text-sm flex items-center text-center justify-center cursor-pointer mt-2 rounded-lg bg-zinc-700/40 border border-zinc-700/20 hover:bg-zinc-700/60`}>
                                <p>View Detail</p><i className={`fa fa-circle-info text-xl ml-2`}></i>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}