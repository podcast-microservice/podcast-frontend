import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

const FilterPodcast = () => {
  return (
    <div className='tw-flex tw-items-center tw-justify-center'>
      <FormControl size='small' className='tw-input tw-w-32 tw-input-rounded tw-mr-3'>
        <Select labelId='demo-simple-select-label' id='demo-simple-select' defaultValue={10}>
          <MenuItem value={10}>2021</MenuItem>
          <MenuItem value={20}>2022</MenuItem>
          <MenuItem value={30}>2023</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label='Search'
        variant='outlined'
        className='tw-input tw-input-rounded'
        size='small'
        InputProps={{
          endAdornment: (
            <SearchIcon
              className='tw-text-[20px] tw-cursor-pointer'
              onClick={() => {
                console.log('click icon');
              }}
            />
          )
        }}
      />
    </div>
  );
};

export default FilterPodcast;
