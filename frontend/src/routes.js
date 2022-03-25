import { Navigate } from "react-router-dom";
import Interface from "./page/Interface"
import MaDoleance from "./page/MaDoleance";
import Accueil from "./page/Accueil";
import CahierDoleances from "./page/CahierDoleances";

const MAP_ROUTES = [
    { path: "/", element: <Navigate to="/app/Accueil" /> },
    { path: "/app", element: <Interface />, children: [
        { index: true, element: <Navigate to="/app/Accueil" /> },
        { path:"MaDoleance", element: <MaDoleance/>},
        { path: "Accueil", element: <Accueil/>},
        { path: "CahierDoleances", element: <CahierDoleances/>},
    ]},
];

export default MAP_ROUTES;