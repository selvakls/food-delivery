import { Box, Button, TextField } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import React, { FC, useState } from 'react';
import { addSchedule, ScheduleDto } from '../../../services/schedule.service';
import styles from './add-schedule.module.css';
import moment from 'moment';
import { textAlign,styled  } from '@mui/system';


const StyledDiv = styled('div')({
  textAlign: "center",
  width: '100%'
});

const StyledForm = styled('form')({
  textAlign: "center",
  width: '100%',
});


const AddSchedule: FC<any> = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const handleSubmit= (e: any) => {
    const d = moment(new Date(date)).format('MM/DD/YYYY');
    const dto = {truckName: name, scheduleDate: d } as ScheduleDto;
    addSchedule( dto ).then(() => {});
  }

  const handleChange = (date: Date | null) => {
    if(date)
      setDate(date);
    else
      setDate(new Date());
  };

    return (
      <StyledDiv>
        <StyledForm className={styles.AddSchedule} onSubmit={e => { handleSubmit(e) }}>
            <TextField id="standard-basic" 
              key="password"
              label="Truck Name" variant="standard" 
              onChange={e => setName(e.target.value)}
              value={name}/>

            <DesktopDatePicker
                label="Schedule Date"
                inputFormat="MM/dd/yyyy"
                value={date}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            <Button variant="contained" type='submit'>Add Schedule</Button>
        </StyledForm>
      </StyledDiv>
    )
};

export default AddSchedule;
