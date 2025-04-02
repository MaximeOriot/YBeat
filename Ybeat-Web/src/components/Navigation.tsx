import { NavStateEnum } from "../enums/nav-state.enum";

export default function Navigation({ onNavClick }: { onNavClick: (navState: NavStateEnum) => void }) {
    return (
        <nav className="bg-blue-600 text-white w-60 h-screen fixed left-0 top-0 flex flex-col shadow-lg">
            <div className="h-30 px-6 bg-gray-600 shadow-md flex items-center justify-center">
                <h2 className="text-xl font-bold">Menu</h2>
            </div>
            <ul className="bg-gray-800 flex-1 p-4 space-y-4">
                <li 
                className="hover:bg-gray-700 p-2 rounded cursor-pointer"
                onClick={() => onNavClick(NavStateEnum.HOME)}>
                    Accueil
                </li>
                <li className="hover:bg-gray-700 p-2 rounded cursor-pointer" 
                onClick={() => onNavClick(NavStateEnum.DOWNLOAD)}>
                    Téléchargement
                </li>
                <li 
                className="hover:bg-gray-700 p-2 rounded cursor-pointer"
                onClick={() => onNavClick(NavStateEnum.TEAM)}>
                    Notre équipe
                </li>
                <li 
                className="hover:bg-gray-700 p-2 rounded cursor-pointer"
                onClick={() => onNavClick(NavStateEnum.CONTACT)}>
                    Nous contacter
                </li>
            </ul>
        </nav>
    );
}
