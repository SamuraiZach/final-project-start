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
export function changeHemiFilter(
    v: string,
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
    SortValueList: string
) {
    console.log(v);
    if (v === "All") {
        if (SortValueList === "None") {
            setBoxes(ALLALL);
        } else if (SortValueList === "Alpha G to L") {
            setBoxes(ALLALPHAG2L);
        } else if (SortValueList === "Left to Right") {
            setBoxes(ALLL2R);
        } else if (SortValueList === "Alpha L to G") {
            setBoxes(ALLALPHAL2G);
        } else if (SortValueList === "Right to Left") {
            setBoxes(ALLR2L);
        } else if (SortValueList === "Population G to L") {
            setBoxes(ALLPOPG2L);
        } else if (SortValueList === "Population L to G") {
            setBoxes(ALLPOPL2G);
        }
    } else if (v === "West Side") {
        if (SortValueList === "None") {
            setBoxes(WESTNONE);
        } else if (SortValueList === "Alpha G to L") {
            setBoxes(WESTALPHAG2L);
        } else if (SortValueList === "Left to Right") {
            setBoxes(WESTL2R);
        } else if (SortValueList === "Alpha L to G") {
            setBoxes(WESTALPHAL2G);
        } else if (SortValueList === "Right to Left") {
            setBoxes(WESTR2L);
        } else if (SortValueList === "Population G to L") {
            setBoxes(WESTPOPG2L);
        } else if (SortValueList === "Population L to G") {
            setBoxes(WESTPOPL2G);
        }
    } else if (v === "East Side") {
        if (SortValueList === "None") {
            setBoxes(EASTNONE);
        } else if (SortValueList === "Alpha G to L") {
            setBoxes(EASTALPHAG2L);
        } else if (SortValueList === "Left to Right") {
            setBoxes(EASTL2R);
        } else if (SortValueList === "Alpha L to G") {
            setBoxes(EASTALPHAL2G);
        } else if (SortValueList === "Right to Left") {
            setBoxes(EASTR2L);
        } else if (SortValueList === "Population G to L") {
            setBoxes(EASTPOPG2L);
        } else if (SortValueList === "Population L to G") {
            setBoxes(EASTPOPL2G);
        }
    } else if (v === "North Side") {
        if (SortValueList === "None") {
            setBoxes(NORTHNONE);
        } else if (SortValueList === "Alpha G to L") {
            setBoxes(NORTHALPHAG2L);
        } else if (SortValueList === "Left to Right") {
            setBoxes(NORTHL2R);
        } else if (SortValueList === "Alpha L to G") {
            setBoxes(NORTHALPHAL2G);
        } else if (SortValueList === "Right to Left") {
            setBoxes(NORTHR2L);
        } else if (SortValueList === "Population G to L") {
            setBoxes(NORTHPOPG2L);
        } else if (SortValueList === "Population L to G") {
            setBoxes(NORTHPOPL2G);
        }
    } else if (v === "South Side") {
        if (SortValueList === "None") {
            setBoxes(SOUTHNONE);
        } else if (SortValueList === "Alpha G to L") {
            setBoxes(SOUTHALPHAG2L);
        } else if (SortValueList === "Left to Right") {
            setBoxes(SOUTHL2R);
        } else if (SortValueList === "Alpha L to G") {
            setBoxes(SOUTHALPHAL2G);
        } else if (SortValueList === "Right to Left") {
            setBoxes(SOUTHR2L);
        } else if (SortValueList === "Population G to L") {
            setBoxes(SOUTHPOPG2L);
        } else if (SortValueList === "Population L to G") {
            setBoxes(SOUTHPOPL2G);
        }
    }
}
