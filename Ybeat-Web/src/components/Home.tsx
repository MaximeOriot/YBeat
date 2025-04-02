export default function Home() {
    return (
        <div className="fixed top-40 bg-gray-400 mx-20 w-240 rounded-lg border-2">
            <div className=" bg-gray-600 flex items-center justify-center">
                <h2 className="text-white">Accueil</h2>
            </div>
            <div className="text-part">
                <div>
                    <p className="text-black">YBeat trailer</p>
                </div>
            </div>
            <div className="mb-10">
                <video className="video border-1" width="550" height="250" controls>
                    <source src="" type="video/mp4" />
                </video>
            </div>
        </div>
    );
}