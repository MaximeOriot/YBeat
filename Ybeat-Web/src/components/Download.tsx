export default function Download() {
    return (
        <div className="fixed top-50 left-150 mx-auto p-8 bg-blue-100 rounded-lg border-2 border-blue-600 shadow-md">
            <div>
                <h2 className="text-3xl font-semibold text-blue-600 mb-6">Téléchargement :</h2>
            </div>
            <div className="flex items-center justify-center">
                <button className="bg-blue-300 py-2 px-6 rounded-lg hover:bg-blue-400 active:bg-blue-700 transition duration-300">
                    Télécharger YBeat (windows)
                </button>
            </div>
        </div>
    );
}
