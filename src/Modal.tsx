import type { FC } from "react";
import React from "react";
//import { useState } from "react";
//import { Form, Button } from "react-bootstrap";

export interface InteractablesProp {
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
    modalEditOpen: boolean;
    setModalTitle: React.Dispatch<React.SetStateAction<string>>;
    setModalLeft: React.Dispatch<React.SetStateAction<number>>;
    setModalTop: React.Dispatch<React.SetStateAction<number>>;
    setModalPopCountry: React.Dispatch<React.SetStateAction<number>>;
    setModalDisplay: React.Dispatch<React.SetStateAction<string>>;
    setModalName: React.Dispatch<React.SetStateAction<string>>;
    setModalCountry: React.Dispatch<React.SetStateAction<string>>;
    setModalContinent: React.Dispatch<React.SetStateAction<string>>;
    setModalImage: React.Dispatch<React.SetStateAction<string>>;
    setModalPopFood: React.Dispatch<React.SetStateAction<string[]>>;
    setmodalEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalViewX: FC<InteractablesProp> = ({
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
    modalEditOpen,
    setModalTitle,
    setModalLeft,
    setModalTop,
    setModalPopCountry,
    setModalDisplay,
    setModalName,
    setModalCountry,
    setModalContinent,
    setModalImage,
    setModalPopFood,
    setmodalEditOpen
}) => {
    if (modalEditOpen === true) {
        setModalTop(top);
        setModalTitle(title);
        setModalLeft(left);
        setModalPopCountry(Population_Country);
        setModalDisplay(display);
        setModalName(Name);
        setModalCountry(Country);
        setModalContinent(Continent);
        setModalImage(Image);
        setModalPopFood(PopularFood);
    }
    setmodalEditOpen(false);
    return <div></div>;
};
