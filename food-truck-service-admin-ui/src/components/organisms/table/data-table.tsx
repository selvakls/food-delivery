import React, { FC, useEffect, useState } from 'react';
import { fetchSchedules, getSchedules, ScheduleDto } from '../../../services/schedule.service';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {AxiosResponse} from "axios";
import { Typography } from '@mui/material';

interface TableProps {
  
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'truckName', headerName: 'Truck name', width: 200 },
  { field: 'scheduleDate', headerName: 'Schedule Date', width: 300},
];

const DataTable: FC<TableProps> = () => {
  const [schedule, setSchedule] = useState([] as Array<ScheduleDto>);

  useEffect(() => {
    getSchedules(new Date()).then((response: AxiosResponse<Array<ScheduleDto>>) => {
      setSchedule(response.data);
    });
  }, []);
  return (
  <div style={{ height: 800, width: '100%' }}>
    <Typography variant="h3" component="h4">
      Today's Schedule
    </Typography>;
      <DataGrid
        rows={schedule}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[20]}
        checkboxSelection
      />
    </div>
)};

export default DataTable;
