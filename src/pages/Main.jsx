import * as React from 'react';
import { styled } from '@mui/system';
import Tabs from '@mui/base/Tabs';
import TabsList from '@mui/base/TabsList';
import TabPanel from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import Tab, { tabClasses } from '@mui/base/Tab';
import Carousel from '../components/Carousel';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import Category from '../components/Category';
import { useState } from 'react';
import { useEffect } from 'react';
import CardCategory from '../components/CardCategory';
import { Grid } from '@mui/material';


export default function Main() {

    // states
    const [textSearch, setTextSearch] = useState(null)
    const [data, setData] = useState([
        {
            name: 'Bird 1',
            url: 'img/1.jpg',
            desc: 'Burung Merak, dengan bulu cerah dan ekor yang berkilauan, menciptakan tampilan yang menakjubkan.',
            id_category: 1
        },
        {
            name: 'Bird 2',
            url: 'img/2.jpg',
            desc: 'Burung Rajawali, gagah dengan sayap kuat, memiliki bulu cokelat kehitaman yang menawan.',
            id_category: 1
        },
        {
            name: 'Bird 3',
            url: 'img/3.jpg',
            desc: 'Burung Kolibri, terkecil di dunia, memiliki bulu cerah dan sayap yang berdenyut cepat.',
            id_category: 1
        },
        {
            name: 'Bird 4',
            url: 'img/4.jpg',
            desc: 'Burung Kakaktua, kecil, cerdas, dan menggemaskan dengan bulu berwarna-warni.',
            id_category: 1
        },
        {
            name: 'Bird 5',
            url: 'img/5.jpg',
            desc: 'Burung Elang, pemangsa perkasa dengan cakar kuat dan sayap yang lebar.',
            id_category: 1
        },
        {
            name: 'Bird 6',
            url: 'img/6.jpg',
            desc: 'Burung Cendrawasih, eksotis dengan bulu berwarna-warni dan hiasan yang menakjubkan di kepala dan ekor.',
            id_category: 1
        },
        {
            name: 'Bird 7',
            url: 'img/7.jpg',
            desc: 'Burung Merbah, kecil, lincah, dan memiliki bulu lebat, sering terlihat mencari makanan di pepohonan.',
            id_category: 1
        },
        {
            name: 'Bird 8',
            url: 'img/8.jpg',
            desc: 'Burung Gagak, memiliki bulu hitam mengilap dan sering terlihat di sekitar pemakaman.',
            id_category: 1
        },
        {
            name: 'Fish 1',
            url: 'img/9.jpg',
            desc: 'Ikan berwarna-warni dengan pola menakjubkan di tubuhnya, menjadi daya tarik di kolam hias.',
            id_category: 2
        },
        {
            name: 'Fish 2',
            url: 'img/10.jpg',
            desc: 'Ikan kecil dengan sirip yang indah dan beragam warna, memikat penggemar ikan hias.',
            id_category: 2
        },
        {
            name: 'Fish 3',
            url: 'img/11.jpg',
            desc: 'Ikan air tawar yang populer dengan tubuh oval dan daging lezat yang disukai banyak orang.',
            id_category: 2
        },
        {
            name: 'Fish 4',
            url: 'img/12.jpg',
            desc: 'Ikan laut dengan kulit merah mencolok dan daging yang enak, sering dijadikan hidangan mewah.',
            id_category: 2
        },
        {
            name: 'Fish 5',
            url: 'img/13.jpg',
            desc: 'Ikan kecil dengan warna cerah, bintik-bintik, dan gerakan yang menggemaskan di akuarium.',
            id_category: 2
        },
        {
            name: 'Fish 6',
            url: 'img/14.jpg',
            desc: 'Ikan air tawar dan laut dengan daging oranye merah, kaya akan omega-3 dan lezat.',
            id_category: 2
        },
        {
            name: 'Fish 7',
            url: 'img/15.jpg',
            desc: 'Ikan air tawar dengan bentuk tubuh unik dan warna cerah yang menarik perhatian.',
            id_category: 2
        },
        {
            name: 'Fish 8',
            url: 'img/16.jpg',
            desc: 'Ikan pemangsa yang besar, kuat, dan terkenal dengan bentuk sirip punggung yang ikonik.',
            id_category: 2
        }
    ])
    const [category, setCategory] = useState([
        {
            id: 1,
            category: 'Burung'
        },
        {
            id: 2,
            category: 'Ikan'
        }
    ])
    const [dataGallery, setDataGallery] = useState([])

    // useEffect
    useEffect(() => {
        let flag = true

        if (flag === true) {
            setDataGallery(data)
        }

        return () => {
            flag = false
        }
    }, [])


    // function for search bar
    const handleSearch = (e) => {
        setTextSearch(e.target.value)
        setDataGallery(data)
        setTimeout(() => {
            if (e.target.value === '') {
                setDataGallery(data)
            } else {
                setDataGallery(data.filter(item => item.name.toLowerCase().includes(e.target.value)))
            }
        }, 500)
    }

    // function for filter button
    const handleFilter = (value) => {
        console.log(textSearch)
        setTimeout(() => {
            if (value === 0) {
                setDataGallery(data.filter(item => item.name.toLowerCase().includes(textSearch)))
            } else if (value === 1) {
                setDataGallery(data.filter(item => item.id_category === 1))
            } else if (value === 2) {
                setDataGallery(data.filter(item => item.id_category === 2))
            }
        }, 500)
        setTextSearch('')
    }

    return (
        <>
            <Tabs defaultValue={0}>
                <StyledTabsList>
                    <StyledTab value={0}>Home</StyledTab>
                    <StyledTab value={1}>Gallery</StyledTab>
                </StyledTabsList>
                <StyledTabPanel value={0}>
                    <Typography variant='h6'>Home Page</Typography>
                    <Carousel />
                    <Category data={data} category={category} />
                </StyledTabPanel>
                <StyledTabPanel value={1}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Stack direction="row" spacing={2}>
                            <Button variant="contained" onClick={() => handleFilter(0)}>All</Button>
                            <Button variant="contained" onClick={() => handleFilter(1)}>Burung</Button>
                            <Button variant="contained" onClick={() => handleFilter(2)}>Ikan</Button>
                        </Stack>
                        <TextField value={textSearch} sx={{ width: '75%', my: 3 }} label="Search Image" id="fullWidth" onChange={(e) => handleSearch(e)} />
                        <Grid container spacing={2} columns={12}>
                            {
                                dataGallery.map(item => {
                                    return (
                                        <CardCategory animal={item} />
                                    )
                                })
                            }
                        </Grid>
                    </Box>
                </StyledTabPanel>
            </Tabs>
        </>
    );
}

const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
};

const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
};

const StyledTab = styled(Tab)`
  font-family: IBM Plex Sans, sans-serif;
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  margin: 6px 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${blue[200]};
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: ${blue[600]};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StyledTabPanel = styled(TabPanel)(
    ({ theme }) => `
  width: 98%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  padding: 20px 12px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  border-radius: 12px;
  `,
);

const StyledTabsList = styled(TabsList)(
    ({ theme }) => `
  min-width: 400px;
  background-color: ${blue[500]};
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  `,
);