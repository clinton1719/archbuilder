import { Box, Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { getFormData } from "../slices/FormSlice";


export function AddServicesPage() {
    const formData = useSelector(getFormData);

    if (!formData) {
        return <Typography variant="h6" color="error">No form data available.</Typography>;
    }

    return (
        <Container maxWidth="lg">
            <Typography variant="h4" sx={{ mb: '2em', mt: '1em' }} textAlign={'center'}>
                Add Services to Your Architecture
            </Typography>
            <Box sx={{ mb: '2em' }}>
                <Typography variant="h6">Selected Pattern: {formData.pattern}</Typography>
                <Typography variant="body1">Project Type: {formData.projectType}</Typography>
                <Typography variant="body1">Consistency: {formData.consistency}</Typography>
                <Typography variant="body1">Scalability: {formData.scalability}</Typography>
            </Box>
            {/* 🔜 Insert service addition UI here */}
        </Container>
    );
}