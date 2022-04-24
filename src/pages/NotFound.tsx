import React from "react";
import styled from "styled-components";
import {Panels} from "../components/panels";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const NotFoundStyles = styled(motion.div)`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    .content{
        text-align: center;
        h1, h2{
            display: block;
            margin: 1vh 0;
            text-transform: capitalize;
            padding: 10px;
        }
        h1{
            font-size: calc(var(--VW)*20);
        }
        h2{
            font-size: calc(var(--VW)*5);
            a{
                text-decoration: underline;
            }
        }
    }
`

const NotFound = ()=>{
    return (
        <>
        <Panels/>
        <NotFoundStyles
        initial={{backgroundColor: "#000000", pointerEvents: "none"}}
        animate={{backgroundColor: "transparent", pointerEvents: "unset"}}
        exit={{opacity: [1, 1, 0], transition:{duration: 2, times: [0, 0.99, 1]}}}
        >
            <div className="content">
                <h1>404</h1>
                <h2>Whoops! Seems Like You're Lost! Click Here To <Link to="/">Go Home</Link></h2>
            </div>
        </NotFoundStyles>
        </>
    )
}

export {NotFound}