/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import update from "immutability-helper";
import type { CSSProperties, FC } from "react";
import { useCallback, useState } from "react";
import type { XYCoord } from "react-dnd";
import { useDrop } from "react-dnd";
import { Place } from "./Place";

import { Dustbin } from "./Basket";
import { Box } from "./Box";
import type { DragItem } from "./interfaces";
import { ItemTypes } from "./ItemTypes";
import { Button } from "react-bootstrap";

const styles: CSSProperties = {
    width: 1350,
    height: 750,
    position: "relative"
};

export interface ContainerProps {
    places: Place[];
}

export interface ContainerState {
    boxes: {
        [key: string]: {
            top: number;
            left: number;
            title: string;
            display: string;
        };
    };
    test: { [key: string]: { top: number; left: number; title: string } };
}

export const ContainerNorth: FC<ContainerProps> = ({ places }) => {
    const [test, testSet] = useState<{
        [key: string]: {
            top: number;
            left: number;
            title: string;
        };
    }>({
        a: {
            top: 175,
            left: 350,
            title: "https://lh3.googleusercontent.com/p/AF1QipMVXIU7C3h4NRLgIXA8u9eS1dqgzvTHGBusFkFG=s1360-w1360-h1020"
        }
    });
    const initBoxes = (
        places: Place[],
        test: {
            [key: string]: {
                top: number;
                left: number;
                title: string;
            };
        }
    ) => {
        //test["a"]({ top: 2, left: 2, title: "tt" });
        return true;
    };
    const [boxes, setBoxes] = useState<{
        [key: string]: {
            top: number;
            left: number;
            title: string;
            display: string;
        };
    }>({
        "Eiffel Tower, France": {
            top: 151,
            left: 589,
            title: "https://lh3.googleusercontent.com/p/AF1QipMVXIU7C3h4NRLgIXA8u9eS1dqgzvTHGBusFkFG=s1360-w1360-h1020",
            display: "inline"
        },
        "Niagra Falls, Canada": {
            top: 90,
            left: 365,
            title: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/3Falls_Niagara.jpg/1280px-3Falls_Niagara.jpg",
            display: "inline"
        },
        "Lincoln Memorial, USA": {
            top: 210,
            left: 365,
            title: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Aerial_view_of_Lincoln_Memorial_-_east_side_EDIT.jpeg/375px-Aerial_view_of_Lincoln_Memorial_-_east_side_EDIT.jpeg",
            display: "inline"
        },
        "Machu Picchu, Peru": {
            top: 0,
            left: 0,
            title: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Before_Machu_Picchu.jpg/450px-Before_Machu_Picchu.jpg",
            display: "inline"
        },
        "British Museum, Britain": {
            top: 90,
            left: 590,
            title: "https://lp-cms-production.imgix.net/2019-06/46e3203d7997df00a49d372a75086215-british-museum.jpg?auto=format&q=40&ar=16%3A9&fit=crop&crop=center&fm=auto&w=1946",
            display: "inline"
        },
        "Central Park USA": {
            top: 150,
            left: 365,
            title: "https://images.unsplash.com/photo-1575372587186-5012f8886b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9yayUyMGNlbnRyYWwlMjBwYXJrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            display: "inline"
        },
        "The Colosseum, Rome": {
            top: 190,
            left: 655,
            title: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/405px-Colosseo_2020.jpg",
            display: "inline"
        },
        "Disney Land, USA": {
            top: 175,
            left: 200,
            title: "https://i.insider.com/60c7608023393a00188e2e91?width=1000&format=jpeg&auto=webp",
            display: "inline"
        },
        "Forbidden City, China": {
            top: 200,
            left: 1025,
            title: "https://cdn.britannica.com/59/180959-050-54A641EE/Hall-of-Supreme-Harmony-Beijing-Forbidden-City.jpg?w=690&h=388&c=crop",
            display: "inline"
        },
        "Giza Pyramid, Egypt": {
            top: 250,
            left: 720,
            title: "https://cdn.mos.cms.futurecdn.net/YMa7Wx2FyjQFUjEeqa72Rm-1200-80.jpg.webp",
            display: "inline"
        },
        "Grand Canyon, USA": {
            top: 235,
            left: 250,
            title: "https://www.nps.gov/grca/planyourvisit/images/mather-point-2021.jpg?maxwidth=1200&maxheight=1200&autorotate=false",
            display: "inline"
        },
        "The Acropolis, Greece": {
            top: 180,
            left: 720,
            title: "https://whc.unesco.org/uploads/thumbs/site_0404_0001-750-750-20151105102353.jpg",
            display: "inline"
        },
        "Statue of Liberty, USA": {
            top: 150,
            left: 425,
            title: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Lady_Liberty_under_a_blue_sky_%28cropped%29.jpg/330px-Lady_Liberty_under_a_blue_sky_%28cropped%29.jpg",
            display: "inline"
        },
        "The Louvre, France": {
            top: 210,
            left: 595,
            title: "https://media.architecturaldigest.com/photos/5900cc370638dd3b70018b33/3:4/w_1547,h_2063,c_limit/Secrets%20of%20Louvre%201.jpg",
            display: "inline"
        },
        "Notre Dame, France": {
            top: 130,
            left: 650,
            title: "https://cdn.britannica.com/35/155335-050-D0C61BB7/Notre-Dame-de-Paris-France.jpg?w=690&h=388&c=crop",
            display: "inline"
        },
        "Sydney Opera House, Australia": {
            top: 0,
            left: 0,
            title: "https://static.dezeen.com/uploads/2022/09/sydney-opera-house-concert-hall-renewal-arm-architecture-susan-kuriakose_dezeen_2364_col_0.jpg",
            display: "inline"
        },
        "Taj Mahal, India": {
            top: 260,
            left: 890,
            title: "https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg",
            display: "inline"
        },
        "Great Wall of China": {
            top: 200,
            left: 950,
            title: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/1200px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg",
            display: "inline"
        },
        "Bora Bora Islands, French Polynesia": {
            top: 0,
            left: 0,
            title: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Bora_Bora_ISS006.jpg/260px-Bora_Bora_ISS006.jpg",
            display: "inline"
        },
        "Great Barrier Reef, Australia": {
            top: 0,
            left: 0,
            title: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/ISS-45_StoryOfWater%2C_Great_Barrier_Reef%2C_Australia.jpg/255px-ISS-45_StoryOfWater%2C_Great_Barrier_Reef%2C_Australia.jpg",
            display: "inline"
        },
        "Singapore, Asia": {
            top: 0,
            left: 0,
            title: "https://www.planetware.com/wpimages/2020/03/singapore-in-pictures-beautiful-places-to-photograph-marina-bay-sands.jpg",
            display: "inline"
        },
        "Milford Sound, New Zealand": {
            top: 0,
            left: 0,
            title: "https://www.newzealand.com/assets/Campaigns/If-You-Seek/Milford_Sound-Fiordland-MH1__aWxvdmVrZWxseQo_CropResizeWzEyMDAsNjMwLDc1LCJqcGciXQ.jpg",
            display: "inline"
        },
        "Banana Reef, Maldives": {
            top: 0,
            left: 0,
            title: "https://pyt-blogs.imgix.net/2020/04/banana-reef.jpg?auto=format&ixlib=php-3.3.0",
            display: "inline"
        },
        "Rio de Janeiro, Brazil": {
            top: 0,
            left: 0,
            title: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTe-dwgdLWZjmiZcegXH0teITQ29VOPrOo9DoQnJj7leKBUd8X27XJVKfDCPaSDl5SC",
            display: "inline"
        },
        "Santa Claus Village, Finland": {
            top: 75,
            left: 710,
            title: "https://santaclausvillage.info/userassets/uploads/2018/03/central-plaza-santa-claus-village-rovaniemi-lapland-finland-1-1170x692.jpg",
            display: "inline"
        },
        "Mount Fuji, Japan": {
            top: 200,
            left: 1100,
            title: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjKpXiV_c6wL661jMtt7R0m5Yahs6tGx2gFc4QhYGma1Kv6-7-AXC9eI2TlCtJZ_V2iMc&usqp=CAU",
            display: "inline"
        },
        "Victoria Falls, Zimbabwe": {
            top: 0,
            left: 0,
            title: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvClSWO6cjEqXmemco9GMaV5oRxiakbMPcrmoY6DLMuEcCJl12lXilEOqIRxCwG2CE8A&usqp=CAU",
            display: "inline"
        },
        "Havana, Cuba": {
            top: 280,
            left: 340,
            title: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Habana_Vieja_de_noche.jpg/280px-Habana_Vieja_de_noche.jpg",
            display: "inline"
        },
        "Serengeti National Park, Tanzania": {
            top: 0,
            left: 0,
            title: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Serengeti_sunset-1001.jpg",
            display: "inline"
        }
    });
    const addatEnd = () => {
        const yourKeyVariable = "happyCount";
        const someValueArray = {
            top: 400,
            left: 740,
            title: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Serengeti_sunset-1001.jpg",
            display: "inline"
        };

        //const obj = { [yourKeyVariable]: someValueArray };
        setBoxes({
            ...boxes,
            [yourKeyVariable]: someValueArray
        });
        //EXAMPLE OF PUSHING NEW KEY AT THE END
        console.log(boxes);
    };
    console.log(boxes);
    const moveBox = (id: string, left: number, top: number) => {
        setBoxes(
            update(boxes, {
                [id]: {
                    $merge: { left, top }
                }
            })
        );
    };
    const [, drop] = useDrop({
        accept: ItemTypes.BOX,
        drop(item: DragItem, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
            const left = Math.round(item.left + delta.x);
            const top = Math.round(item.top + delta.y);
            if (left > 120) {
                moveBox(item.id, left, top);
            }
            return undefined;
        }
    });

    return (
        <div>
            <div ref={drop} style={styles}>
                {Object.keys(boxes).map((d) => {
                    const { left, top, title, display } = boxes[d] as {
                        top: number;
                        left: number;
                        title: string;
                        display: string;
                    };
                    return (
                        <Box
                            key={d}
                            id={d}
                            left={left}
                            top={top}
                            display={display}
                        >
                            <img
                                src={title}
                                width="60"
                                height="60"
                                alt={title}
                            />
                        </Box>
                    );
                })}
            </div>
            <div
                style={{
                    overflow: "hidden",
                    clear: "both",
                    margin: "-1rem",
                    position: "absolute",
                    top: "0",
                    left: "0"
                }}
            >
                <Dustbin
                    boxes={boxes}
                    setBoxes={setBoxes}
                    color={"white"}
                ></Dustbin>
            </div>
            <div
                style={{
                    position: "absolute",
                    top: 713,
                    left: 30
                }}
            >
                <Button onClick={addatEnd}>Test Button</Button>
            </div>
        </div>
    );
};
//<Button onClick={addatEnd}>Test Button</Button> PUT IN EMPTY DIV
//<img src={title} width="60" height="60" alt={title} />
