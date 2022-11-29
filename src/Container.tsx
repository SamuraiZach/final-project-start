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

const styles: CSSProperties = {
    width: 1350,
    height: 750,
    position: "relative"
};

export interface ContainerProps {
    hideSourceOnDrag: boolean;
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

export const Container: FC<ContainerProps> = ({ hideSourceOnDrag, places }) => {
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
        "Eiffel Tower France": {
            top: 175,
            left: 350,
            title: "https://lh3.googleusercontent.com/p/AF1QipMVXIU7C3h4NRLgIXA8u9eS1dqgzvTHGBusFkFG=s1360-w1360-h1020",
            display: "inline"
        },
        "Niagra Falls Canada": {
            top: 80,
            left: 180,
            title: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/3Falls_Niagara.jpg/1280px-3Falls_Niagara.jpg",
            display: "inline"
        },
        "Lincoln Memorial USA": {
            top: 170,
            left: 165,
            title: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Aerial_view_of_Lincoln_Memorial_-_east_side_EDIT.jpeg/375px-Aerial_view_of_Lincoln_Memorial_-_east_side_EDIT.jpeg",
            display: "inline"
        },
        "Machu Picchu Peru": {
            top: 425,
            left: 160,
            title: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Before_Machu_Picchu.jpg/450px-Before_Machu_Picchu.jpg",
            display: "inline"
        },
        "British Museu Britain": {
            top: 100,
            left: 350,
            title: "https://lp-cms-production.imgix.net/2019-06/46e3203d7997df00a49d372a75086215-british-museum.jpg?auto=format&q=40&ar=16%3A9&fit=crop&crop=center&fm=auto&w=1946",
            display: "inline"
        },
        "Central Park USA": {
            top: 150,
            left: 250,
            title: "https://images.unsplash.com/photo-1575372587186-5012f8886b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9yayUyMGNlbnRyYWwlMjBwYXJrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            display: "inline"
        },
        "The Colosseum Rome": {
            top: 200,
            left: 460,
            title: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/405px-Colosseo_2020.jpg",
            display: "inline"
        },
        "Disney Land USA": {
            top: 235,
            left: 175,
            title: "https://i.insider.com/60c7608023393a00188e2e91?width=1000&format=jpeg&auto=webp",
            display: "inline"
        },
        "Forbidden City China": {
            top: 265,
            left: 840,
            title: "https://cdn.britannica.com/59/180959-050-54A641EE/Hall-of-Supreme-Harmony-Beijing-Forbidden-City.jpg?w=690&h=388&c=crop",
            display: "inline"
        },
        "Giza Pyramid Egypt": {
            top: 230,
            left: 540,
            title: "https://cdn.mos.cms.futurecdn.net/YMa7Wx2FyjQFUjEeqa72Rm-1200-80.jpg.webp",
            display: "inline"
        },
        "Mather Point USA": {
            top: 300,
            left: 160,
            title: "https://www.nps.gov/grca/planyourvisit/images/mather-point-2021.jpg?maxwidth=1200&maxheight=1200&autorotate=false",
            display: "inline"
        },
        "The Acropolis Greece": {
            top: 150,
            left: 520,
            title: "https://whc.unesco.org/uploads/thumbs/site_0404_0001-750-750-20151105102353.jpg",
            display: "inline"
        },
        "Statue of Liberty USA": {
            top: 135,
            left: 200,
            title: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Lady_Liberty_under_a_blue_sky_%28cropped%29.jpg/330px-Lady_Liberty_under_a_blue_sky_%28cropped%29.jpg",
            display: "inline"
        },
        "The Louvre France": {
            top: 95,
            left: 435,
            title: "https://media.architecturaldigest.com/photos/5900cc370638dd3b70018b33/3:4/w_1547,h_2063,c_limit/Secrets%20of%20Louvre%201.jpg",
            display: "inline"
        },
        "Notre Dame France": {
            top: 150,
            left: 435,
            title: "https://cdn.britannica.com/35/155335-050-D0C61BB7/Notre-Dame-de-Paris-France.jpg?w=690&h=388&c=crop",
            display: "inline"
        },
        "Opera House Australia": {
            top: 500,
            left: 950,
            title: "https://static.dezeen.com/uploads/2022/09/sydney-opera-house-concert-hall-renewal-arm-architecture-susan-kuriakose_dezeen_2364_col_0.jpg",
            display: "inline"
        },
        "Taj Mahal India": {
            top: 275,
            left: 720,
            title: "https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg",
            display: "inline"
        },
        "Great Wall of China": {
            top: 200,
            left: 840,
            title: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/1200px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg",
            display: "inline"
        }
    });
    const moveBox = (id: string, left: number, top: number) => {
        setBoxes(
            update(boxes, {
                [id]: {
                    $merge: { left, top }
                }
            })
        );
    };
    const [, drop] = useDrop(
        () => ({
            accept: ItemTypes.BOX,
            drop(item: DragItem, monitor) {
                const delta =
                    monitor.getDifferenceFromInitialOffset() as XYCoord;
                const left = Math.round(item.left + delta.x);
                const top = Math.round(item.top + delta.y);
                if (left > 120) {
                    moveBox(item.id, left, top);
                }
                return undefined;
            }
        }),
        [moveBox]
    );

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
                            hideSourceOnDrag={hideSourceOnDrag}
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
                <Dustbin boxes={boxes} setBoxes={setBoxes}></Dustbin>
            </div>
        </div>
    );
};

//<img src={title} width="60" height="60" alt={title} />
