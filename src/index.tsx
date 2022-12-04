/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { render } from "react-dom";
import { Interactables } from "./DraggingLayer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Button, Form, Modal } from "react-bootstrap";
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
import { forOwn } from "lodash";
import { ModalViewX } from "./Modal";
import "./App.css";
function App() {
    const [HemisphereSort, setHemiSort] = useState<string>("All");
    const [SortValueList, setSortValue] = useState<string>("None");
    const [modalEditOpen, setmodalEditOpen] = React.useState(false);
    const [modalViewOpen, setmodalViewOpen] = React.useState(false);

    const [boxes, setBoxes] = useState<{
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
    }>(ALLALL);
    //POST RENDER PLACE IS WHEN ADDING TO THE END BUT DUNNO HOW TO SORT SO IT JUST ADDS TO THE END
    const [postRenderPlace, setPost] = useState<{
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
    }>({});
    const [r] = useState<{
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
    }>(boxes);
    function updateValue(event: React.ChangeEvent<HTMLSelectElement>) {
        setHemiSort(event.target.value);
        changeHemiFilter(event.target.value);
    }
    function updateValueSort(event: React.ChangeEvent<HTMLSelectElement>) {
        setSortValue(event.target.value);
        changeListSort(event.target.value);
    }
    function addPostRender() {
        Object.keys(postRenderPlace).map((key) => {
            const {
                title,
                display,
                Name,
                Country,
                Continent,
                Population_Country,
                Image,
                PopularFood,
                resetTop,
                resetLeft
            } = postRenderPlace[key] as {
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
            setBoxes({
                ...boxes,
                [key]: {
                    top: resetTop,
                    left: resetLeft,
                    title: title,
                    display: display,
                    Name: Name,
                    Country: Country,
                    Continent: Continent,
                    Population_Country: Population_Country,
                    Image: Image,
                    PopularFood: PopularFood,
                    resetTop: resetTop,
                    resetLeft: resetLeft
                }
            });
        });
    }
    //for the change filter and sort try an update function with ternary operator where if its less use the position or 0 it
    function changeHemiFilter(v: string) {
        console.log(v);
        if (v === "All") {
            if (SortValueList === "None") {
                setBoxes(ALLALL);
                addPostRender();
            } else if (SortValueList === "Alpha G to L") {
                setBoxes(ALLALPHAG2L);
                addPostRender();
            } else if (SortValueList === "Left to Right") {
                setBoxes(ALLL2R);
                addPostRender();
            } else if (SortValueList === "Alpha L to G") {
                setBoxes(ALLALPHAL2G);
                addPostRender();
            } else if (SortValueList === "Right to Left") {
                setBoxes(ALLR2L);
                addPostRender();
            } else if (SortValueList === "Population G to L") {
                setBoxes(ALLPOPG2L);
                addPostRender();
            } else if (SortValueList === "Population L to G") {
                setBoxes(ALLPOPL2G);
                addPostRender();
            }
        } else if (v === "West Side") {
            if (SortValueList === "None") {
                setBoxes(WESTNONE);
                addPostRender();
            } else if (SortValueList === "Alpha G to L") {
                setBoxes(WESTALPHAG2L);
                addPostRender();
            } else if (SortValueList === "Left to Right") {
                setBoxes(WESTL2R);
                addPostRender();
            } else if (SortValueList === "Alpha L to G") {
                setBoxes(WESTALPHAL2G);
                addPostRender();
            } else if (SortValueList === "Right to Left") {
                setBoxes(WESTR2L);
                addPostRender();
            } else if (SortValueList === "Population G to L") {
                setBoxes(WESTPOPG2L);
                addPostRender();
            } else if (SortValueList === "Population L to G") {
                setBoxes(WESTPOPL2G);
                addPostRender();
            }
        } else if (v === "East Side") {
            if (SortValueList === "None") {
                setBoxes(EASTNONE);
                addPostRender();
            } else if (SortValueList === "Alpha G to L") {
                setBoxes(EASTALPHAG2L);
                addPostRender();
            } else if (SortValueList === "Left to Right") {
                setBoxes(EASTL2R);
                addPostRender();
            } else if (SortValueList === "Alpha L to G") {
                setBoxes(EASTALPHAL2G);
                addPostRender();
            } else if (SortValueList === "Right to Left") {
                setBoxes(EASTR2L);
                addPostRender();
            } else if (SortValueList === "Population G to L") {
                setBoxes(EASTPOPG2L);
                addPostRender();
            } else if (SortValueList === "Population L to G") {
                setBoxes(EASTPOPL2G);
                addPostRender();
            }
        } else if (v === "North Side") {
            if (SortValueList === "None") {
                setBoxes(NORTHNONE);
                addPostRender();
            } else if (SortValueList === "Alpha G to L") {
                setBoxes(NORTHALPHAG2L);
                addPostRender();
            } else if (SortValueList === "Left to Right") {
                setBoxes(NORTHL2R);
                addPostRender();
            } else if (SortValueList === "Alpha L to G") {
                setBoxes(NORTHALPHAL2G);
                addPostRender();
            } else if (SortValueList === "Right to Left") {
                setBoxes(NORTHR2L);
                addPostRender();
            } else if (SortValueList === "Population G to L") {
                setBoxes(NORTHPOPG2L);
                addPostRender();
            } else if (SortValueList === "Population L to G") {
                setBoxes(NORTHPOPL2G);
                addPostRender();
            }
        } else if (v === "South Side") {
            if (SortValueList === "None") {
                setBoxes(SOUTHNONE);
                addPostRender();
            } else if (SortValueList === "Alpha G to L") {
                setBoxes(SOUTHALPHAG2L);
                addPostRender();
            } else if (SortValueList === "Left to Right") {
                setBoxes(SOUTHL2R);
                addPostRender();
            } else if (SortValueList === "Alpha L to G") {
                setBoxes(SOUTHALPHAL2G);
                addPostRender();
            } else if (SortValueList === "Right to Left") {
                setBoxes(SOUTHR2L);
                addPostRender();
            } else if (SortValueList === "Population G to L") {
                setBoxes(NORTHPOPG2L);
                addPostRender();
            } else if (SortValueList === "Population L to G") {
                setBoxes(NORTHPOPL2G);
                addPostRender();
            }
        }
    }
    function changeListSort(c: string) {
        console.log(c);
        if (c === "None") {
            if (HemisphereSort === "All") {
                setBoxes(ALLALL);
                addPostRender();
            } else if (HemisphereSort === "West Side") {
                setBoxes(WESTNONE);
                addPostRender();
            } else if (HemisphereSort === "East Side") {
                setBoxes(EASTNONE);
                addPostRender();
            } else if (HemisphereSort === "South Side") {
                setBoxes(SOUTHNONE);
                addPostRender();
            } else if (HemisphereSort === "North Side") {
                setBoxes(NORTHNONE);
                addPostRender();
            }
        } else if (c === "Alpha G to L") {
            if (HemisphereSort === "All") {
                setBoxes(ALLALPHAG2L);
                addPostRender();
            } else if (HemisphereSort === "West Side") {
                setBoxes(WESTALPHAG2L);
                addPostRender();
            } else if (HemisphereSort === "East Side") {
                setBoxes(EASTALPHAG2L);
                addPostRender();
            } else if (HemisphereSort === "South Side") {
                setBoxes(SOUTHALPHAG2L);
                addPostRender();
            } else if (HemisphereSort === "North Side") {
                setBoxes(NORTHALPHAG2L);
                addPostRender();
            }
        } else if (c === "Left to Right") {
            if (HemisphereSort === "All") {
                setBoxes(ALLL2R);
                addPostRender();
            } else if (HemisphereSort === "West Side") {
                setBoxes(WESTL2R);
                addPostRender();
            } else if (HemisphereSort === "East Side") {
                setBoxes(EASTL2R);
                addPostRender();
            } else if (HemisphereSort === "South Side") {
                setBoxes(SOUTHL2R);
                addPostRender();
            } else if (HemisphereSort === "North Side") {
                setBoxes(NORTHL2R);
                addPostRender();
            }
        } else if (c === "Alpha L to G") {
            if (HemisphereSort === "All") {
                setBoxes(ALLALPHAL2G);
                addPostRender();
            } else if (HemisphereSort === "West Side") {
                setBoxes(WESTALPHAL2G);
                addPostRender();
            } else if (HemisphereSort === "East Side") {
                setBoxes(EASTALPHAL2G);
                addPostRender();
            } else if (HemisphereSort === "South Side") {
                setBoxes(SOUTHALPHAL2G);
                addPostRender();
            } else if (HemisphereSort === "North Side") {
                setBoxes(NORTHALPHAL2G);
                addPostRender();
            }
        } else if (c === "Right to Left") {
            if (HemisphereSort === "All") {
                setBoxes(ALLR2L);
                addPostRender();
            } else if (HemisphereSort === "West Side") {
                setBoxes(WESTR2L);
                addPostRender();
            } else if (HemisphereSort === "East Side") {
                setBoxes(EASTR2L);
                addPostRender();
            } else if (HemisphereSort === "South Side") {
                setBoxes(SOUTHR2L);
                addPostRender();
            } else if (HemisphereSort === "North Side") {
                setBoxes(NORTHR2L);
                addPostRender();
            }
        } else if (c === "Population G to L") {
            if (HemisphereSort === "All") {
                setBoxes(ALLPOPG2L);
                addPostRender();
            } else if (HemisphereSort === "West Side") {
                setBoxes(WESTPOPG2L);
                addPostRender();
            } else if (HemisphereSort === "East Side") {
                setBoxes(EASTPOPG2L);
                addPostRender();
            } else if (HemisphereSort === "South Side") {
                setBoxes(SOUTHPOPG2L);
                addPostRender();
            } else if (HemisphereSort === "North Side") {
                setBoxes(NORTHPOPG2L);
                addPostRender();
            }
        } else if (c === "Population L to G") {
            if (HemisphereSort === "All") {
                setBoxes(ALLPOPL2G);
                addPostRender();
            } else if (HemisphereSort === "West Side") {
                setBoxes(WESTPOPL2G);
                addPostRender();
            } else if (HemisphereSort === "East Side") {
                setBoxes(EASTPOPL2G);
                addPostRender();
            } else if (HemisphereSort === "South Side") {
                setBoxes(SOUTHPOPL2G);
                addPostRender();
            } else if (HemisphereSort === "North Side") {
                setBoxes(NORTHPOPL2G);
                addPostRender();
            }
        }
    }
    function emptyHouse() {
        setBoxes({});
    }
    function startingOver() {
        setBoxes(ALLALL);
    }
    function resetValues() {
        console.log(Object.entries(boxes));
        Object.keys(boxes).map((key) => {
            const {
                title,
                display,
                Name,
                Country,
                Continent,
                Population_Country,
                Image,
                PopularFood,
                resetTop,
                resetLeft
            } = boxes[key] as {
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
            setBoxes({
                ...r,
                [key]: {
                    top: resetTop,
                    left: resetLeft,
                    title: title,
                    display: display,
                    Name: Name,
                    Country: Country,
                    Continent: Continent,
                    Population_Country: Population_Country,
                    Image: Image,
                    PopularFood: PopularFood,
                    resetTop: resetTop,
                    resetLeft: resetLeft
                }
            });
        });
    }
    function deleteBox(value: string) {
        setBoxes(
            forOwn(boxes, function (x, k) {
                x.Name === value && delete boxes[k];
                setBoxes(boxes);
            })
        );
    }
    function basketMove(item: object) {
        setBoxes({
            ...boxes,
            [Object(item).id]: {
                top: 650,
                left: 0,
                title: Object(item).title,
                display: "inline",
                Name: Object(item).Name,
                Country: Object(item).Country,
                Continent: Object(item).Continent,
                Population_Country: Object(item).Population_Country,
                Image: Object(item).Image,
                PopularFood: [Object(item).PopularFood],
                resetTop: Object(item).resetTop,
                resetLeft: Object(item).resetLeft
            }
        });
    }
    const addatEnd = () => {
        const yourKeyVariable = "happyCount";
        const someValueArray = {
            top: 400,
            left: 740,
            title: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Serengeti_sunset-1001.jpg",
            display: "inline",
            Name: "",
            Country: "",
            Continent: "",
            Population_Country: 32932389,
            Image: "",
            PopularFood: ["CACA"],
            resetTop: 400,
            resetLeft: 740
        };
        setPost({ ...postRenderPlace, [yourKeyVariable]: someValueArray });
        setBoxes({
            ...boxes,
            [yourKeyVariable]: someValueArray
        });
        //EXAMPLE OF PUSHING NEW KEY AT THE END
        console.log(boxes);
    };

    const [ModalTitle, setModalTitle] = useState<string>("None");
    const [ModalKey, setModalKey] = useState<string>("None");
    const [ModalPopCountry, setModalPopCountry] = useState<number>(0);
    const [ModalPopFood, setModalPopFood] = useState<string[]>([""]);
    const [ModalTop, setModalTop] = useState<number>(0);
    const [ModalLeft, setModalLeft] = useState<number>(0);
    const [ModalDisplay, setModalDisplay] = useState<string>("None");
    const [ModalCountry, setModalCountry] = useState<string>("None");
    const [ModalContinent, setModalContinent] = useState<string>("None");
    const [ModalName, setModalName] = useState<string>("None");
    const [ModalImage, setModalImage] = useState<string>("None");

    const showModalEdit = (
        key: string,
        title: string,
        Left: number,
        Top: number,
        PopCountry: number,
        PopFood: string[],
        Name: string,
        Display: string,
        Image: string,
        Country: string,
        Continent: string
    ) => {
        console.log(key);
        setModalKey(key);
        setModalTitle(title);
        setModalLeft(Left);
        setModalTop(Top);
        setModalPopCountry(PopCountry);
        setModalDisplay(Display);
        setModalName(Name);
        setModalCountry(Country);
        setModalContinent(Continent);
        setModalImage(Image);
        setModalPopFood(PopFood);
        setmodalEditOpen(true);
    };
    const closeEditModal = () => {
        setmodalEditOpen(false);
    };
    const closeViewModal = () => {
        setmodalViewOpen(false);
    };
    const showModalView = (
        key: string,
        title: string,
        Left: number,
        Top: number,
        PopCountry: number,
        PopFood: string[],
        Name: string,
        Display: string,
        Image: string,
        Country: string,
        Continent: string
    ) => {
        console.log(key);
        setModalKey(key);
        setModalTitle(title);
        setModalLeft(Left);
        setModalTop(Top);
        setModalPopCountry(PopCountry);
        setModalDisplay(Display);
        setModalName(Name);
        setModalCountry(Country);
        setModalContinent(Continent);
        setModalImage(Image);
        setModalPopFood(PopFood);
        setmodalViewOpen(true);
    };
    return (
        <div className="App">
            <DndProvider backend={HTML5Backend}>
                <div
                    style={{
                        position: "absolute",
                        left: "43%"
                    }}
                >
                    <span>Team 4: Traveler Map Planner</span>
                </div>
                <div
                    style={{
                        position: "absolute",
                        left: "5%",
                        top: "3%"
                    }}
                >
                    <span>View Places</span>
                </div>
                <div
                    style={{
                        position: "absolute",
                        left: "40%",
                        top: "25px"
                    }}
                >
                    <span>Zachariah Barraza, Tavon Gage, Michael King</span>
                </div>
                <div
                    style={{
                        position: "absolute",
                        left: "23%",
                        top: "50px",
                        border: "1px solid black"
                    }}
                >
                    <img
                        src={require("./worldmap2.png")}
                        alt="oops mad no load teehee"
                        height={750}
                        width={1200}
                    />
                </div>
                <div
                    style={{
                        position: "absolute",
                        right: "1%",
                        top: "40px"
                    }}
                >
                    <Form.Label>Show Hemisphere Specific Places</Form.Label>
                    <Form.Select
                        value={HemisphereSort}
                        onChange={updateValue}
                        style={{ width: 255 }}
                    >
                        <option value="All">All</option>
                        <option value="West Side">Western Hemisphere</option>
                        <option value="East Side">Eastern Hemisphere</option>
                        <option value="North Side">Northern Hemisphere</option>
                        <option value="South Side">Southern Hemisphere</option>
                    </Form.Select>
                </div>
                <div
                    style={{
                        position: "absolute",
                        left: "15%",
                        top: "50px",
                        height: "750px",
                        width: "1350px"
                    }}
                >
                    <Interactables
                        sortValue={HemisphereSort}
                        boxes={boxes}
                        setBoxes={setBoxes}
                        deleteBox={deleteBox}
                        basketMove={basketMove}
                    />
                </div>
                <div
                    style={{
                        position: "absolute",
                        right: "1%",
                        top: "12%"
                    }}
                >
                    <Form.Label>Sort View</Form.Label>
                    <Form.Select
                        value={SortValueList}
                        onChange={updateValueSort}
                        style={{
                            width: 255
                        }}
                    >
                        <option value="None">None</option>
                        <option value="Alpha G to L">Alpha G to L</option>
                        <option value="Left to Right">Left to Right</option>
                        <option value="Alpha L to G">Alpha L to G</option>
                        <option value="Right to Left">Right to Left</option>
                        <option value="Population G to L">
                            Population G to L
                        </option>
                        <option value="Population L to G">
                            Population L to G
                        </option>
                    </Form.Select>
                </div>
                <div
                    style={{
                        position: "absolute",
                        top: "21%",
                        right: "1%"
                    }}
                >
                    <Button style={{ width: 255 }} /*onClick={resetValues}*/>
                        Add Place
                    </Button>
                </div>
                <div
                    style={{
                        position: "absolute",
                        top: "26%",
                        right: "1%"
                    }}
                >
                    <Button style={{ width: 255 }} onClick={emptyHouse}>
                        Clear
                    </Button>
                </div>
                <div
                    style={{
                        position: "absolute",
                        top: "31%",
                        right: "1%"
                    }}
                >
                    <Button style={{ width: 255 }} onClick={resetValues}>
                        Reset Positions
                    </Button>
                </div>
                <div
                    style={{
                        position: "absolute",
                        top: "36%",
                        right: "1%"
                    }}
                >
                    <Button style={{ width: 255 }} onClick={startingOver}>
                        Restart
                    </Button>
                </div>
                <div
                    className="itemconfiguration"
                    style={{
                        position: "relative",
                        left: "0%",
                        top: "50px",
                        border: "1px solid black",
                        width: "15%",
                        height: "752px",
                        maxHeight: "752px",
                        display: "inline-block"
                    }}
                >
                    {Object.keys(boxes).map((key) => {
                        const {
                            title,
                            Population_Country,
                            PopularFood,
                            top,
                            left,
                            display,
                            Country,
                            Continent,
                            Name,
                            Image
                        } = boxes[key] as {
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
                        };
                        return (
                            <div key={key}>
                                <div key={key}>
                                    <img
                                        key={key}
                                        id={key}
                                        src={title}
                                        width="90"
                                        height="140"
                                        alt={title}
                                        style={{
                                            position: "relative"
                                        }}
                                    />
                                    <span
                                        style={{
                                            display: "wrap",
                                            position: "absolute"
                                        }}
                                    >
                                        {key} Population: {Population_Country},
                                        Popular food: {PopularFood.toString()}
                                    </span>
                                    <Button
                                        style={{
                                            display: "wrap",
                                            position: "relative",
                                            top: "50px"
                                        }}
                                        onClick={() =>
                                            showModalEdit(
                                                key,
                                                title,
                                                left,
                                                top,
                                                Population_Country,
                                                PopularFood,
                                                Name,
                                                display,
                                                Image,
                                                Country,
                                                Continent
                                            )
                                        }
                                    >
                                        EDIT
                                    </Button>
                                    <Button
                                        style={{
                                            display: "wrap",
                                            position: "relative",
                                            top: "50px"
                                        }}
                                        onClick={() =>
                                            showModalView(
                                                key,
                                                title,
                                                left,
                                                top,
                                                Population_Country,
                                                PopularFood,
                                                Name,
                                                display,
                                                Image,
                                                Country,
                                                Continent
                                            )
                                        }
                                    >
                                        VIEW MORE
                                    </Button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div
                    style={{
                        position: "absolute",
                        top: 900,
                        left: 30
                    }}
                >
                    <Button onClick={addatEnd}>addAtEnd button test</Button>
                </div>
                <div>
                    <Modal show={modalViewOpen} onHide={closeViewModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>{ModalKey}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img
                                style={{
                                    position: "relative"
                                }}
                                src={ModalTitle}
                                width="50%"
                            ></img>
                        </Modal.Body>
                    </Modal>
                </div>
                <div>
                    <Modal show={modalEditOpen} onHide={closeEditModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>{ModalKey}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img
                                style={{
                                    position: "relative"
                                }}
                                src={ModalTitle}
                                width="50%"
                            ></img>
                        </Modal.Body>
                    </Modal>
                </div>
            </DndProvider>
        </div>
    );
}
//EDIT PLACE NEEDS FORM SAME WITH VIEW MORE
const rootElement = document.getElementById("root");
render(<App />, rootElement);
export default App;
//MODAL EDIT AND VIEW ARE PROTOTYPES JUST TO GET STUFF TO WORK
