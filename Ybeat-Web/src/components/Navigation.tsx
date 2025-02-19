export default function Navigation() {
    return (
        <nav className="bg-blue-600 text-white w-60 h-screen fixed left-0 top-0 flex flex-col shadow-lg">
            <div className="h-30 px-6 bg-blue-600 shadow-md flex items-center justify-center">
                <h2 className="text-xl font-bold">Menu</h2>
            </div>
            <ul className="bg-gray-800 flex-1 p-4 space-y-4">
                <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Accueil</li>
                <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Téléchargement</li>
                <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Notre équipe</li>
                <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Nous contacter</li>
            </ul>
        </nav>
    );
}
