import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { FerramentaSearch } from "shared/components";
import { LayoutBase } from "shared/layout";
import { DddService } from "shared/services/api/ddd/DddService";

interface Ddd {
  _id: string;
  destiny: string;
  origin: string;
  price: number;
}


export const DashBoards = () => {

  const dddAll = DddService.getAll()
  const [stateDdd, setStateDdd] = useState<Ddd[]>([]);  

  const getDdd = async () => {
    const ddd = dddAll.then((value: Array<Ddd>) => {setStateDdd(value)});
  };
  
  useEffect(() => {    
    getDdd() 
  }, []);

  return (
    <LayoutBase titulo={'Telzir'} barraFerramentas={(
      <FerramentaSearch></FerramentaSearch>
    )}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Origem</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value='ok'
          label="Origem"
          // onChange={handleChange}
        >
          {stateDdd.map(doc => {
            return (
              <MenuItem value={doc._id}>{doc.origin}</MenuItem>
            )
          })}
          
        </Select>
      </FormControl>
      
    </LayoutBase>
    
    
    
  );
}