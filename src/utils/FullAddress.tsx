import Select, { StylesConfig, GroupBase } from "react-select";
import governorates from '@/db/Egypt-Government/governorates.json';
import center_govs from '@/db/Egypt-Government/center_govs.json';
import city_centers from '@/db/Egypt-Government/city_centers.json';

export default function FullAddress({
  governorate,
  setGovernorate,
  department,
  setDepartment,
  setNeighborhood,
  setAddressDetails,
  addressDetails
}: {
  governorate: { id: string, name: string },
  setGovernorate: (arg0: { id: string, name: string }) => void,
  department: { id: string, name: string },
  setDepartment: (arg0: { id: string, name: string }) => void,
  setNeighborhood: (arg0: { id: string, name: string }) => void,
  setAddressDetails: (arg0: string) => void,
  addressDetails: string
}) {

  const governorateOptions = governorates.map(g => ({
    value: g.id,
    label: g.name_ar
  }));

  const departmentOptions = center_govs
    .filter(el => el.governorate_id === governorate.id)
    .map(dep => ({
      value: dep.id,
      label: dep.name_ar
    }));

  const neighborhoodOptions = city_centers
    .filter(ele => ele.center_gov_id === department.id)
    .map(vill => ({
      value: vill.id,
      label: vill.name_ar
    }));
type OptionType = {
  value: string;
  label: string;
};
const customStyles: StylesConfig<OptionType, false, GroupBase<OptionType>> = {
  control: (provided) => ({
    ...provided,
    width: "100%",
    backgroundColor: "var(--background)",
    borderColor: "var(--border)",
    borderWidth:"2px",
    borderRadius: "4px",
    minHeight: "40px",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "var(--background)",
  }),
  input: (provided) => ({
    ...provided,
    color: "var(--foreground)",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused
      ? "rgba(0, 123, 255, 0.1)"
      : "transparent",
    color: "var(--foreground)",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "var(--foreground)",
  }),
};
  return (
    <div className='flex justify-center items-center flex-col w-full bg-background text-foreground'>
      
      {/* Governorate */}
      <div className="relative w-full">
      <Select
        options={governorateOptions}
        placeholder="اختر المحافظة"
        isClearable
        value={governorate.id ? { value: governorate.id, label: governorate.name } : null}
        onChange={(selected) => {
          if (selected) {
            setGovernorate({ id: selected.value, name: selected.label });
          } else {
            setGovernorate({ id: '', name: '' });
          }
          setDepartment({ id: '', name: '' });
          setNeighborhood({ id: '', name: '' });
        }}
        styles={customStyles}
        className="w-full  my-3 rounded border relative"
      />
    <span className="text-red-500 text-3xl absolute top-[25%] left-1">*</span>
    </div>

      {/* Department */}
      <div className="relative w-full">
      <Select
        options={departmentOptions}
        placeholder="اختر المركز"
        isClearable
        value={department.id ? { value: department.id, label: department.name } : null}
        onChange={(selected) => {
          if (selected) {
            setDepartment({ id: selected.value, name: selected.label });
          } else {
            setDepartment({ id: '', name: '' });
          }
          setNeighborhood({ id: '', name: '' });
        }}
        styles={customStyles}
        className="w-full  my-3 rounded border"
      />
    <span className="text-red-500 text-3xl absolute top-[25%] left-1">*</span>
    </div>

      {/* Neighborhood */}
      <div className="relative w-full">
      <Select
        options={neighborhoodOptions}
        placeholder="اختر الحي/القرية"
        isClearable
        onChange={(selected) => {
          if (selected) {
            setNeighborhood({ id: selected.value, name: selected.label });
          } else {
            setNeighborhood({ id: '', name: '' });
          }
        }}
        styles={customStyles}
        className="w-full  my-3 rounded border"
      />
    <span className="text-red-500 text-3xl absolute top-[25%] left-1">*</span>
    </div>
    
      {/* Address Details */}
      <input
        type="text"
        placeholder="تفاصيل العنوان"
        value={addressDetails}
        onChange={(e) => setAddressDetails(e.target.value)}
        className="w-full p-2 my-3 border rounded bg-background"
      />
    </div>
  );
}
