import React, { useState } from "react";
import { render } from "react-dom";
import { Interactables } from "./DraggingLayer";
import update from "immutability-helper";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Button, Form, Modal } from "react-bootstrap";
import ALLALL from "./PlaceKeys/ALLALL.json";
import { changeListSort } from "./sort";
import { changeHemiFilter } from "./hemifilter";
import { forOwn } from "lodash";
import "./App.css";
function App() {
    //test
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let PopulateTrips: any[] = [];
    const [preMap, setPreMap] = useState("");
    const [preMapName, setPMN] = useState("");
    const [initArrayMaps, setAMaps] = useState([
        "https://wallpapercave.com/wp/wp2753342.png",
        "https://www.50states.com/wp-content/uploads/2020/12/US-Blank-map.jpg",
        "https://www.frugallivingnw.com/wp-content/uploads/2014/05/disney-world-free-map.jpg",
        "https://www1.udel.edu/RH/Maps/UDmapwithhouses%20copy.jpg",
        "https://www.yosemite.com/wp-content/uploads/2022/02/MariposaCountyMAP_2021_cmyk-1-1024x854.jpg"
    ]);
    const [mapArryNames, setMapnames] = useState([
        "World Map",
        "USA",
        "Disney World",
        "UD Map",
        "Yosemite Map"
    ]);
    const [MapLink, setMap] = useState(
        "https://wallpapercave.com/wp/wp2753342.png"
    );
    const [indexSelectDop, setISD] = useState(0);
    const [indexMapDop, setIMD] = useState(0);
    const [valueofDropContainers, setDropContainer] = useState(1);
    const [resetChildTrips, setCTreset] = useState(false);
    const [show, setShow] = useState(false);
    const [showMap, setShowMap] = useState(false);
    const [name, setName] = useState("");
    const [source, setSource] = useState("");
    const [continent, setContinent] = useState("");
    const [country, setCountry] = useState("");
    const [population, setPopulation] = useState(0);
    const [food, setFood] = useState([""]);
    const [HemisphereSort, setHemiSort] = useState<string>("All");
    const [SortValueList, setSortValue] = useState<string>("None");
    const [modalEditOpen, setmodalEditOpen] = React.useState(false);
    const [modalViewOpen, setmodalViewOpen] = React.useState(false);
    const ISDHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setISD(parseInt(event.target.value));
    };
    const IMDHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setIMD(parseInt(event.target.value));
    };
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

    console.log(Object.keys(boxes).sort());
    console.log(Object.keys(boxes).length);

    const handleClose = () => {
        setPreMap("");
        setPMN("");
        setName("");
        setSource("");
        setContinent("");
        setCountry("");
        setPopulation(0);
        setFood([""]);
        setShow(false);
    };
    const handleCloseMap = () => {
        setShowMap(false);
    };
    const handleShowMap = () => setShowMap(true);
    const handleShow = () => setShow(true);
    const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    const mapHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPreMap(event.target.value);
    };
    const mapHandlerName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPMN(event.target.value);
    };
    const confirmMap = () => {
        setMap(preMap);
        mapArryNames.push(preMapName);
        setMapnames(mapArryNames);
        initArrayMaps.push(preMap);
        setAMaps(initArrayMaps);
        setPreMap("");
        setPMN("");
        handleCloseMap();
        console.log(initArrayMaps);
    };
    const sourceHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSource(event.target.value);
    };
    const continentHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContinent(event.target.value);
    };
    const countryHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value);
    };
    const populationHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPopulation(parseInt(event.target.value));
    };
    const foodHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFood([event.target.value]);
    };
    const MnameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setModalName(event.target.value);
    };
    const MsourceHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setModalTitle(event.target.value);
    };
    const McontinentHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setModalContinent(event.target.value);
    };
    const McountryHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setModalCountry(event.target.value);
    };
    const MpopulationHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setModalPopCountry(parseInt(event.target.value));
    };
    const MfoodHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (indexSelectDop > ModalPopFood.length) {
            setModalPopFood([...ModalPopFood, event.target.value]);
        } else {
            ModalPopFood[indexSelectDop] = event.target.value;
            setModalPopFood(ModalPopFood);
        }
    };
    function updateValue(event: React.ChangeEvent<HTMLSelectElement>) {
        setHemiSort(event.target.value);
        changeHemiFilter(event.target.value, setBoxes, SortValueList);
        addPostRender();
    }
    function updateValueSort(event: React.ChangeEvent<HTMLSelectElement>) {
        setSortValue(event.target.value);
        changeListSort(event.target.value, setBoxes, HemisphereSort);
        addPostRender();
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

    function emptyHouse() {
        setBoxes({});
    }
    function startingOver() {
        setMap("https://wallpapercave.com/wp/wp2753342.png");
        PopulateTrips = [];
        setDropContainer(1);
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
        const yourKeyVariable = name + ", " + country;
        const someValueArray = {
            top: 400,
            left: 640,
            //title: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Serengeti_sunset-1001.jpg",
            title: source,
            display: "inline",
            Name: name,
            Country: country,
            Continent: continent,
            Population_Country: population,
            Image: source,
            PopularFood: food,
            resetTop: 400,
            resetLeft: 640
        };
        setPost({ ...postRenderPlace, [yourKeyVariable]: someValueArray });
        setBoxes({
            ...boxes,
            [yourKeyVariable]: someValueArray
        });
        handleClose();
        setName("");
        setSource("");
        setCountry("");
        setContinent("");
        setPopulation(0);
        setFood([""]);
        //EXAMPLE OF PUSHING NEW KEY AT THE END
        console.log(boxes);
    };

    const [ModalTitle, setModalTitle] = useState<string>("None");
    const [ModalKey, setModalKey] = useState<string>("None");
    const [ModalPopCountry, setModalPopCountry] = useState<number>(0);
    const [ModalPopFood, setModalPopFood] = useState<string[]>([""]);
    const [ModalTop, setModalTop] = useState<number>(0);
    const [ModalLeft, setModalLeft] = useState<number>(0);
    const [wikiLink, setWikiLink] = useState<string>("");
    const [ModalCountry, setModalCountry] = useState<string>("None");
    const [ModalContinent, setModalContinent] = useState<string>("None");
    const [ModalName, setModalName] = useState<string>("None");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const arraySelectDown: any[] = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pastMap: any[] = [];

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
        setModalName(Name);
        setModalCountry(Country);
        setModalContinent(Continent);
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
        setModalName(Name);
        setModalCountry(Country);
        setModalContinent(Continent);
        setModalPopFood(PopFood);
        setmodalViewOpen(true);
        setWikiLink("https://en.wikipedia.org/wiki/" + Name);
    };
    const editAdd = (
        top: number,
        left: number,
        title: string,
        Name: string,
        Country: string,
        Continent: string,
        Population_Country: number,
        PopularFood: string[]
    ) => {
        setBoxes(
            update(boxes, {
                [ModalKey]: {
                    $merge: {
                        top,
                        left,
                        title,
                        Name,
                        Country,
                        Continent,
                        Population_Country,
                        PopularFood
                    }
                }
            })
        );
        setmodalEditOpen(false);
    };
    for (let i = 0; i < ModalPopFood.length + 1; i++) {
        arraySelectDown.push(
            <option key={i} value={i}>
                {i + 1}
            </option>
        );
    }
    for (let i = 0; i < initArrayMaps.length; i++) {
        pastMap.push(
            <option key={i} value={i}>
                {mapArryNames[i]}
            </option>
        );
    }
    const [slider, setSlider] = useState(0);
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
                        right: "5%",
                        top: "43.4%"
                    }}
                >
                    <span>Value Scale: {slider}</span>
                </div>
                <div
                    style={{
                        position: "absolute",
                        right: "3%",
                        top: "46%"
                    }}
                >
                    <Button
                        onClick={() =>
                            setSlider(slider < 20 ? slider + 2 : slider)
                        }
                    >
                        Increase
                    </Button>
                    <Button
                        onClick={() =>
                            setSlider(slider > -20 ? slider - 2 : slider)
                        }
                    >
                        Decrease
                    </Button>
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
                    <img src={MapLink} height={750} width={1200} />
                </div>
                <div
                    style={{
                        position: "absolute",
                        top: "51.1%",
                        right: "1%"
                    }}
                >
                    <Button style={{ width: 255 }} onClick={handleShowMap}>
                        Change Background
                    </Button>
                </div>
                <div>
                    <Modal show={showMap} onHide={handleCloseMap}>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                Wish to change the background?
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Label>Enter Background Name:</Form.Label>
                            <Form.Control
                                type="textarea"
                                placeholder="Background Name..."
                                value={preMapName}
                                onChange={mapHandlerName}
                                autoFocus
                            />
                            <Form.Label>Enter Background URL:</Form.Label>
                            <Form.Control
                                type="textarea"
                                placeholder="Background Url..."
                                value={preMap}
                                onChange={mapHandler}
                                autoFocus
                            />
                            <Form.Label>
                                Sample Backgrounds/Additional Changes:
                            </Form.Label>
                            <Form.Group className="add">
                                <Form.Select
                                    value={indexMapDop}
                                    onChange={IMDHandler}
                                >
                                    {pastMap}
                                </Form.Select>
                                <Form.Control
                                    type="textarea"
                                    placeholder="Map Urls..."
                                    value={initArrayMaps[indexMapDop]}
                                />
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={confirmMap}>
                                Confirm Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
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
                        slider={slider}
                        sortValue={HemisphereSort}
                        boxes={boxes}
                        setBoxes={setBoxes}
                        deleteBox={deleteBox}
                        basketMove={basketMove}
                        setDropContainer={setDropContainer}
                        valueofDropContainers={valueofDropContainers}
                        PopulateTrips={PopulateTrips}
                        resetChildTrips={resetChildTrips}
                        setCTreset={setCTreset}
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
                    <Button style={{ width: 255 }} onClick={handleShow}>
                        Add Place
                    </Button>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add a New Place!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="addPlaceName">
                                <Form.Label>Name!</Form.Label>
                                <Form.Control
                                    type="textarea"
                                    placeholder="Place Name..."
                                    value={name}
                                    onChange={nameHandler}
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="addPlaceCountry">
                                <Form.Label>Place Country...</Form.Label>
                                <Form.Control
                                    type="textarea"
                                    placeholder="Place Country..."
                                    value={country}
                                    onChange={countryHandler}
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="addPlaceContinent">
                                <Form.Label>Place Continent...</Form.Label>
                                <Form.Control
                                    type="textarea"
                                    placeholder="Place Continent..."
                                    value={continent}
                                    onChange={continentHandler}
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="addPlacePopulation">
                                <Form.Label>Place Population...</Form.Label>
                                <Form.Control
                                    type="textarea"
                                    placeholder="Place Population Number..."
                                    value={population}
                                    onChange={populationHandler}
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="addPlaceFood">
                                <Form.Label>Place Popular Food...</Form.Label>
                                <Form.Control
                                    type="textarea"
                                    placeholder="Place Popular Food..."
                                    value={food}
                                    onChange={foodHandler}
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="addPlaceImage">
                                <Form.Label>
                                    Paste Image Address Here!
                                </Form.Label>
                                <Form.Control
                                    type="textarea"
                                    placeholder="Right Click on Image and copy image address. "
                                    value={source}
                                    onChange={sourceHandler}
                                />
                            </Form.Group>
                            <img
                                src={source}
                                style={{
                                    position: "relative",
                                    left: "0%",
                                    width: "100%",
                                    height: "100%"
                                }}
                            ></img>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={addatEnd}>Add!</Button>
                    </Modal.Footer>
                </Modal>
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
                        Restart/Clear Additional Planners
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
                                        {Name}, {Country} Population:{" "}
                                        {Population_Country}, Popular food:{" "}
                                        {PopularFood.toString()}
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
                                width="100%"
                            ></img>
                            <ul>
                                <li>
                                    {ModalKey} which is in {ModalCountry} has a
                                    population of: {ModalPopCountry}
                                </li>
                                <li>
                                    Popular food from {ModalKey} include:{" "}
                                    {ModalPopFood.toString()}
                                </li>
                                <li>
                                    {ModalName} is located in {ModalContinent},{" "}
                                    {ModalCountry}
                                </li>
                                <li>
                                    {ModalKey} is currently located at: {"("}
                                    {ModalLeft}
                                    {","}
                                    {ModalTop}
                                    {")"}
                                </li>
                                <li>
                                    The image used for {ModalKey} is from this
                                    url <a href={ModalTitle}>here!</a>
                                </li>
                                <li>
                                    Wish to learn more about {ModalKey}? Check
                                    out:{" "}
                                    <a href={wikiLink}>
                                        https://en.wikipedia.org/wiki/
                                        {ModalName}
                                    </a>
                                </li>
                            </ul>
                        </Modal.Body>
                    </Modal>
                </div>
                <div>
                    <Modal show={modalEditOpen} onHide={closeEditModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                Edit: {ModalName}, {ModalCountry}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <img
                                    style={{
                                        position: "relative"
                                    }}
                                    src={ModalTitle}
                                    width="50%"
                                ></img>
                                <Form.Group className="addPlaceName">
                                    <Form.Label>Name:</Form.Label>
                                    <Form.Control
                                        type="textarea"
                                        placeholder="Place Name..."
                                        value={ModalName}
                                        onChange={MnameHandler}
                                        autoFocus
                                    />
                                </Form.Group>
                                <Form.Group className="addPlaceCountry">
                                    <Form.Label>Country: </Form.Label>
                                    <Form.Control
                                        type="textarea"
                                        placeholder="Place Country..."
                                        value={ModalCountry}
                                        onChange={McountryHandler}
                                        autoFocus
                                    />
                                </Form.Group>
                                <Form.Group className="addPlaceContinent">
                                    <Form.Label>Continent: </Form.Label>
                                    <Form.Control
                                        type="textarea"
                                        placeholder="Place Continent..."
                                        value={ModalContinent}
                                        onChange={McontinentHandler}
                                        autoFocus
                                    />
                                </Form.Group>
                                <Form.Group className="addPlacePopulation">
                                    <Form.Label>Population: </Form.Label>
                                    <Form.Control
                                        type="textarea"
                                        placeholder="Place Population Number..."
                                        value={ModalPopCountry}
                                        onChange={MpopulationHandler}
                                        autoFocus
                                    />
                                </Form.Group>
                                <Form.Group className="addPlaceImage">
                                    <Form.Label>Edit Popular Food: </Form.Label>
                                </Form.Group>
                                <Form.Group className="add">
                                    <Form.Select
                                        value={indexSelectDop}
                                        onChange={ISDHandler}
                                    >
                                        {arraySelectDown}
                                    </Form.Select>
                                    <Form.Control
                                        type="textarea"
                                        placeholder="Edit food"
                                        value={ModalPopFood[indexSelectDop]}
                                        onChange={MfoodHandler}
                                    />
                                </Form.Group>
                                <Form.Group className="addPlaceImage">
                                    <Form.Label>
                                        Image address for: {ModalKey}
                                    </Form.Label>
                                    <Form.Control
                                        type="textarea"
                                        placeholder="Right Click on Image and copy image address. "
                                        value={ModalTitle}
                                        onChange={MsourceHandler}
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                onClick={() =>
                                    editAdd(
                                        ModalTop,
                                        ModalLeft,
                                        ModalTitle,
                                        ModalName,
                                        ModalCountry,
                                        ModalContinent,
                                        ModalPopCountry,
                                        ModalPopFood
                                    )
                                }
                            >
                                Add
                            </Button>
                        </Modal.Footer>
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
