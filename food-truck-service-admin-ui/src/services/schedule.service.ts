import axios from "axios";
import moment from 'moment';

export type ScheduleDto = {
    id: number;
    scheduleDate: string;
    truckName: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export const fetchSchedules = async(date: Date) => {
    const query = moment(date).format('MM-DD-YYYY');
    return fetch(`http://localhost:3000/schedules?date=${query}`,
        {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
}
export const addSchedule =async (schedule: ScheduleDto) => {
    return axios.post(`http://localhost:3000/schedules`, schedule, {
        headers: {"Access-Control-Allow-Origin": "*"}
    });
}

export const getSchedules =async (date: Date) => {
    return axios.get(`http://localhost:3000/schedules?date=${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`,{
        headers: {"Access-Control-Allow-Origin": "*"}
    });
}