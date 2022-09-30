import { Button, TextField } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import React, { FC, useState } from 'react';
import { addSchedule, ScheduleDto } from '../../../services/schedule.service';
import styles from './add-schedule.module.css';

const AddSchedule: FC<any> = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const handleSubmit= (e: any) => {
    const d = new Date(date);
    const dto = {truckName: name, scheduleDate: `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}` } as ScheduleDto;
    addSchedule( dto ).then(() => {});
  }

    return (
      <div >
        <form className={styles.AddSchedule} onSubmit={e => { handleSubmit(e) }}>
          <TextField id="standard-basic" 
            label="Truck Name" variant="standard" 
            onChange={e => setName(e.target.value)}
            value={name}/>

          <input
              name='date' 
              type='date'
              value={date}
              onChange={e => setDate(e.target.value)}
            />
          <Button variant="contained" type='submit'>Save</Button>
        </form>
      </div>
    )
};

export default AddSchedule;
