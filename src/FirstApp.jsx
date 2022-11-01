import React from "react";
import Counter from "./components/Counter";

const FirstApp = ( { titulo, subTitulo } ) => {
    return (
        <>
            <h1> {titulo} </h1>
            <h2> {subTitulo} </h2>
        </>
    )
}

export default FirstApp