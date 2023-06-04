import { Box, Typography } from "@mui/material";
import CardCategory from "./CardCategory";
import Grid from '@mui/material/Grid';

const CategoryHome = ({ data, category }) => {
    return (
            category.map(item => {
                let barrier = 0;
                return (
                    <Box sx={{ display: "flex", flexDirection: 'column', marginTop: '20px' }}>
                        <Typography variant='h6' sx={{ textAlign: 'left', mb: 2 }}>{item.category}</Typography>
                        <Grid container spacing={2} columns={12}>
                            {data.map((set, i) => {
                                if (item.id === set.id_category && barrier < 4) {
                                    barrier++;
                                    return <CardCategory key={i} animal={set} />;
                                }
                                return null;
                            })}
                        </Grid>
                    </Box>
                )
            })
    )
}

export default CategoryHome

