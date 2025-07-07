import { Link, Typography } from "@mui/material";

export default function Copyright() {
    return (
        <Typography
            variant="body2"
            align="center"
            sx={{
                color: 'text.secondary',
            }}
        >
            {'Copyright © '}
            <Link color="inherit" href="#">
                Clinton Fernandes
            </Link>{' '}
            {new Date().getFullYear()}.
        </Typography>
    );
}