import { SetStateAction, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BirthDatePicker() {
  const [birthDate, setBirthDate] = useState(null);

  return (
    <DatePicker
      selected={birthDate}
      onChange={(date) => setBirthDate(date as SetStateAction<null>)}
      dateFormat="yyyy-MM-dd"
      placeholderText="تاريخ الميلاد"
      maxDate={new Date()}
      showYearDropdown
      scrollableYearDropdown
      name=""
    />
  );
}
