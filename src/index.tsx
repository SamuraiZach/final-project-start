import React, { useState } from "react";
import { render } from "react-dom";
import { Interactables } from "./DraggingLayer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Button, Form } from "react-bootstrap";
import SAMPLE from "./PlacesKeyVersion.json";
//import { Box } from "./Box";
import "./App.css";
function App() {
    const [sortValue, setValue] = useState<string>("All");
    const [SortValueList, setSortValue] = useState<string>("None");
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
        };
    }>(SAMPLE);
    console.log(Object.keys(boxes).length);
    function updateValue(event: React.ChangeEvent<HTMLSelectElement>) {
        setValue(event.target.value);
    }
    function updateValueSort(event: React.ChangeEvent<HTMLSelectElement>) {
        setSortValue(event.target.value);
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
            PopularFood: ["CACA"]
        };

        //const obj = { [yourKeyVariable]: someValueArray };
        setBoxes({
            ...boxes,
            [yourKeyVariable]: someValueArray
        });
        //EXAMPLE OF PUSHING NEW KEY AT THE END
        console.log(boxes);
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
                        value={sortValue}
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
                        sortValue={sortValue}
                        boxes={boxes}
                        setBoxes={setBoxes}
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
                    <Button style={{ width: 255 }} /*onClick={addatEnd}*/>
                        Add Place
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
                        const { title, Population_Country, PopularFood } =
                            boxes[key] as {
                                Population_Country: number;
                                PopularFood: string[];
                                title: string;
                            };
                        return (
                            <div key={key}>
                                <div key={key}>
                                    <img
                                        key={key}
                                        id={key}
                                        src={title}
                                        width="90"
                                        height="100"
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
                    <Button onClick={addatEnd}>
                        BUTTON FOR ADDING JUST NEED FORMS?
                    </Button>
                </div>
            </DndProvider>
        </div>
    );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
export default App;
