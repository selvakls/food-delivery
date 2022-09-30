import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import React, { FC } from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import AddSchedule from '../../organisms/add-schedule/add-schedule';
import DataTable from '../../organisms/table/data-table';

interface HometemplateProps {}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Hometemplate: FC<HometemplateProps> = () => (
  <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Stack spacing={2}>
        <Item>
          <AddSchedule></AddSchedule>
        </Item>
        <Item>
          <DataTable></DataTable>
        </Item>
      </Stack>
    </Box>
);

export default Hometemplate;
