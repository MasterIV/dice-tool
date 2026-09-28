import {Button, type ButtonProps} from "@mui/material";

export default function Btn(props: ButtonProps) {
    return <Button variant='contained' fullWidth {...props} />;
}