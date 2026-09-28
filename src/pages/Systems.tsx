import type {System} from "../systems";
import systems from "../systems";
import {Button, ButtonGroup, Typography} from "@mui/material";
import {Link} from "react-router";


interface SystemsProps {

}

export default function Systems({}: SystemsProps) {
    return Object.entries(systems).map(([key, system]: [string, System]) => {
        return <div className="box">
            <Typography variant="h5">{system.name}</Typography>
            <ButtonGroup>
                <Button component={Link} to={`/${key}/compact`}>Compact</Button>
            </ButtonGroup>
        </div>;
    });
}