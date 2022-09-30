import React from 'react';
import logo from './logo.svg';
import './App.css';
import DataTable from './components/organisms/table/data-table';
import AddSchedule from './components/organisms/add-schedule/add-schedule';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import Homepage from './components/pages/homepage/homepage';

function App() {
  const today = new Date();
  const onchange = () => {
    console.log("Onchange called");
  }
  return (
    <div className="App">
      <header className="App-header">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Homepage></Homepage>
      </LocalizationProvider>
        
      </header>
    </div>
  );
}

export default App;
