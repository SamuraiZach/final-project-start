/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactNode } from "react";
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
import { string } from "prop-types";
import { DeleteBin } from "./DeleteBasket";
import { ChildBin } from "./ChildBasket";
import { NewPlannerBin } from "./BasketNewPlanner";

const styles: CSSProperties = {
    width: 1350,
    height: 750,
    position: "relative"
};

export interface ContainerProps {
    places: Place[];
    boxes: {
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
    };
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
    >;
    deleteBox: (value: string) => void;
    basketMove: (item: object) => void;
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

export const Container: FC<ContainerProps> = ({
    places,
    boxes,
    setBoxes,
    deleteBox,
    basketMove
}) => {
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
    const childInstance = (): ReactNode => {
        return (
            <div
                style={{
                    overflow: "hidden",
                    clear: "both",
                    margin: "-1rem",
                    position: "relative",
                    top: "50",
                    left: "0%"
                }}
            >
                <ChildBin
                    boxes={boxes}
                    setBoxes={setBoxes}
                    color={"grey"}
                    basketMove={basketMove}
                ></ChildBin>
            </div>
        );
    };
    const renderLayers = () => {
        return (
            <div
                style={{
                    overflow: "hidden",
                    clear: "both",
                    position: "relative",
                    top: "0%",
                    left: "0%"
                }}
            >
                <Dustbin
                    boxes={boxes}
                    setBoxes={setBoxes}
                    color={"black"}
                    basketMove={basketMove}
                >
                    {childInstance()}
                </Dustbin>
                <NewPlannerBin
                    boxes={boxes}
                    setBoxes={setBoxes}
                    color={"black"}
                    basketMove={basketMove}
                >
                    {childInstance()}
                </NewPlannerBin>
            </div>
        );
    };
    renderLayers();
    return (
        <div>
            <div ref={drop} style={styles}>
                {Object.keys(boxes).map((d) => {
                    const {
                        left,
                        top,
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
                    } = boxes[d] as {
                        left: number;
                        top: number;
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
                    return (
                        <Box
                            key={d}
                            id={d}
                            left={left}
                            top={top}
                            title={title}
                            display={display}
                            Name={Name}
                            Country={Country}
                            Continent={Continent}
                            Population_Country={Population_Country}
                            Image={Image}
                            PopularFood={PopularFood}
                            resetTop={resetTop}
                            resetLeft={resetLeft}
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
                ref={() => renderLayers}
                className="itemconfiguration"
                style={{
                    position: "absolute",
                    left: "0%",
                    top: "0%",
                    border: "1px solid black",
                    width: "11.5%",
                    height: "623px",
                    maxHeight: "623px"
                }}
            >
                {renderLayers()}
            </div>
            <div
                className="itemconfiguration"
                style={{
                    top: "608px",
                    position: "absolute",
                    border: "1px solid black",
                    width: "11.5%",
                    height: "144px",
                    maxHeight: "144px"
                }}
            >
                <DeleteBin
                    boxes={boxes}
                    setBoxes={setBoxes}
                    color={"black"}
                    deleteBox={deleteBox}
                    basketMove={basketMove}
                ></DeleteBin>
            </div>
        </div>
    );
};
//<Button onClick={addatEnd}>Test Button</Button> PUT IN EMPTY DIV
//<img src={title} width="60" height="60" alt={title} />
