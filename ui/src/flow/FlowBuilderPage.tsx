import { Box, Typography } from '@mui/material';

export function FlowBuilderPage() {

    return (
        <Box p={2}>
            <Typography variant="h5">Service Flow Designer</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
                Your suggested pattern: <strong>{'Saga'}</strong>
            </Typography>

            {/* 🔜 Insert React Flow canvas here later */}
        </Box>
    );
}
