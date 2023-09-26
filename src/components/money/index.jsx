import React from "react";
import { Button, Stack, Typography } from "@mui/material"
import { Checkroom } from "@mui/icons-material"

const sx = { height: 60, minWidth: 217, borderRadius: 2 };
 
const MoneyStuff = () => {
    return (<Stack direction="row" spacing={2} justifyContent="center" width="100%">
        {/*<Box sx={{display: "flex", alignItems: "center"} }><Typography>Support Us: </Typography></Box>*/}
        <Stack direction="row" spacing={2} sx={{ overflowX: "auto" }}>
            <Merchandise />
            <BuyMeACoffee />
        </Stack>
    </Stack>)
}

const Merchandise = () => {
    return (<Button sx={sx} variant="contained" startIcon={<Checkroom />} rel="noreferrer" target="_blank" href="https://thegraffbrothers.threadless.com/">
        <Typography component="h3" variant="h5">Apparel</Typography>
    </Button>)
}

const BuyMeACoffee = () => {

    return (<div>
        <a href="https://www.buymeacoffee.com/graffbrothers" target="_blank" rel="noreferrer"
        ><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style={sx} /></a>
    </div>)
}

export default MoneyStuff;
