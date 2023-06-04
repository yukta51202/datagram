import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, img  }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(<Box mb = "30px">
        <Typography
            variant = "h3"
            color = {colors.grey[100]}
            fontWeight = "600"
            sx={{ m: "20px 0 5px 0px"}}
            > 
            {title} 
        </Typography>
    </Box>
   );
}

export default Header;