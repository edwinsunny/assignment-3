import MotionHoc from "./MotionHoc";
import React, { useState } from 'react';
import { Calendar,Modal  } from 'antd';
import  { Dayjs } from 'dayjs';
import { CalendarMode } from 'antd/es/calendar/generateCalendar';
import './MyStyle.css';

const CalendarDoc = () => {

  const [open, setOpen] = useState(false);
  const [selecteddate,setselecteddate] = useState('');

  const onPanelChange = (value:Dayjs,mode:CalendarMode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  return(
    <div>
      <h1>Calendar</h1>
      <div className="container">
      <Modal
        title="My Calendar Modal"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <p>You Selected The {selecteddate}</p>
        <p>From Calendar</p>
      </Modal>
      <Calendar fullscreen={false} onSelect={(moment)=>{setselecteddate(moment.format('YYYY-MM-DD'),setOpen(true))}} onPanelChange={onPanelChange} />
      </div>
    </div>
  );
};

const calendar = MotionHoc(CalendarDoc);

export default calendar;
