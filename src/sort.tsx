import ALLALL from "./PlaceKeys/ALLALL.json";
import ALLALPHAG2L from "./PlaceKeys/ALL-ALPHAG2L.json";
import ALLALPHAL2G from "./PlaceKeys/ALL-ALPHAL2G.json";
import ALLL2R from "./PlaceKeys/ALL-L2R.json";
import ALLPOPG2L from "./PlaceKeys/ALL-POPG2L.json";
import ALLPOPL2G from "./PlaceKeys/ALL-POPL2G.json";
import ALLR2L from "./PlaceKeys/ALL-R2L.json";
import EASTALPHAG2L from "./PlaceKeys/EAST-ALPHAG2L.json";
import EASTALPHAL2G from "./PlaceKeys/EAST-ALPHAL2G.json";
import EASTL2R from "./PlaceKeys/EAST-L2R.json";
import EASTNONE from "./PlaceKeys/EAST-NONE.json";
import EASTPOPL2G from "./PlaceKeys/EAST-POPL2G.json";
import EASTPOPG2L from "./PlaceKeys/EAST-POPG2L.json";
import EASTR2L from "./PlaceKeys/EAST-R2L.json";
import NORTHALPHAG2L from "./PlaceKeys/NORTH-ALPHAG2L.json";
import NORTHALPHAL2G from "./PlaceKeys/NORTH-ALPHAL2G.json";
import NORTHL2R from "./PlaceKeys/NORTH-L2R.json";
import NORTHNONE from "./PlaceKeys/NORTH-NONE.json";
import NORTHPOPL2G from "./PlaceKeys/NORTH-POPL2G.json";
import NORTHPOPG2L from "./PlaceKeys/NORTH-POPG2L.json";
import NORTHR2L from "./PlaceKeys/NORTH-R2L.json";
import SOUTHALPHAG2L from "./PlaceKeys/SOUTH-ALPHAG2L.json";
import SOUTHALPHAL2G from "./PlaceKeys/SOUTH-ALPHAL2G.json";
import SOUTHL2R from "./PlaceKeys/SOUTH-L2R.json";
import SOUTHNONE from "./PlaceKeys/SOUTH-NONE.json";
import SOUTHPOPL2G from "./PlaceKeys/SOUTH-POPL2G.json";
import SOUTHPOPG2L from "./PlaceKeys/SOUTH-POPG2L.json";
import SOUTHR2L from "./PlaceKeys/SOUTH-R2L.json";
import WESTALPHAG2L from "./PlaceKeys/WEST-ALPHAG2L.json";
import WESTALPHAL2G from "./PlaceKeys/WEST-ALPHAL2G.json";
import WESTL2R from "./PlaceKeys/WEST-L2R.json";
import WESTNONE from "./PlaceKeys/WEST-NONE.json";
import WESTPOPL2G from "./PlaceKeys/WEST-POPL2G.json";
import WESTPOPG2L from "./PlaceKeys/WEST-POPG2L.json";
import WESTR2L from "./PlaceKeys/WEST-R2L.json";
export function changeListSort(
    c: string,
    setBoxes: React.Dispatch<
        React.SetStateAction<{
            [key: string]: {
                top: number;
                left: number;
                title: string;
                display: string;
                Name: string;
                Country: string;
                Continent: string;
                Population_Country: number;
                Image: string;
                PopularFood: string[];
                resetTop: number;
                resetLeft: number;
            };
        }>
    >,
    HemisphereSort: string
) {
    console.log(c);
    if (c === "None") {
        if (HemisphereSort === "All") {
            setBoxes(ALLALL);
        } else if (HemisphereSort === "West Side") {
            setBoxes(WESTNONE);
        } else if (HemisphereSort === "East Side") {
            setBoxes(EASTNONE);
        } else if (HemisphereSort === "South Side") {
            setBoxes(SOUTHNONE);
        } else if (HemisphereSort === "North Side") {
            setBoxes(NORTHNONE);
        }
    } else if (c === "Alpha G to L") {
        if (HemisphereSort === "All") {
            setBoxes(ALLALPHAG2L);
        } else if (HemisphereSort === "West Side") {
            setBoxes(WESTALPHAG2L);
        } else if (HemisphereSort === "East Side") {
            setBoxes(EASTALPHAG2L);
        } else if (HemisphereSort === "South Side") {
            setBoxes(SOUTHALPHAG2L);
        } else if (HemisphereSort === "North Side") {
            setBoxes(NORTHALPHAG2L);
        }
    } else if (c === "Left to Right") {
        if (HemisphereSort === "All") {
            setBoxes(ALLL2R);
        } else if (HemisphereSort === "West Side") {
            setBoxes(WESTL2R);
        } else if (HemisphereSort === "East Side") {
            setBoxes(EASTL2R);
        } else if (HemisphereSort === "South Side") {
            setBoxes(SOUTHL2R);
        } else if (HemisphereSort === "North Side") {
            setBoxes(NORTHL2R);
        }
    } else if (c === "Alpha L to G") {
        if (HemisphereSort === "All") {
            setBoxes(ALLALPHAL2G);
        } else if (HemisphereSort === "West Side") {
            setBoxes(WESTALPHAL2G);
        } else if (HemisphereSort === "East Side") {
            setBoxes(EASTALPHAL2G);
        } else if (HemisphereSort === "South Side") {
            setBoxes(SOUTHALPHAL2G);
        } else if (HemisphereSort === "North Side") {
            setBoxes(NORTHALPHAL2G);
        }
    } else if (c === "Right to Left") {
        if (HemisphereSort === "All") {
            setBoxes(ALLR2L);
        } else if (HemisphereSort === "West Side") {
            setBoxes(WESTR2L);
        } else if (HemisphereSort === "East Side") {
            setBoxes(EASTR2L);
        } else if (HemisphereSort === "South Side") {
            setBoxes(SOUTHR2L);
        } else if (HemisphereSort === "North Side") {
            setBoxes(NORTHR2L);
        }
    } else if (c === "Population G to L") {
        if (HemisphereSort === "All") {
            setBoxes(ALLPOPG2L);
        } else if (HemisphereSort === "West Side") {
            setBoxes(WESTPOPG2L);
        } else if (HemisphereSort === "East Side") {
            setBoxes(EASTPOPG2L);
        } else if (HemisphereSort === "South Side") {
            setBoxes(SOUTHPOPG2L);
        } else if (HemisphereSort === "North Side") {
            setBoxes(NORTHPOPG2L);
        }
    } else if (c === "Population L to G") {
        if (HemisphereSort === "All") {
            setBoxes(ALLPOPL2G);
        } else if (HemisphereSort === "West Side") {
            setBoxes(WESTPOPL2G);
        } else if (HemisphereSort === "East Side") {
            setBoxes(EASTPOPL2G);
        } else if (HemisphereSort === "South Side") {
            setBoxes(SOUTHPOPL2G);
        } else if (HemisphereSort === "North Side") {
            setBoxes(NORTHPOPL2G);
        }
    }
}
