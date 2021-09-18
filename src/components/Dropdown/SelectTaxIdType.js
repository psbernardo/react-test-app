import React, { useState } from 'react';
import { InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';
import { listSystemCodes } from '../../services/CommonService';

export default function SelectTaxIdType(props) {
  const [systemCode, setSystemCode] = useState([]);
  const [mounted, setMounted] = React.useState(false);

  const getSystemCodeTypes = async () => {
    const { systemcodesList } = await listSystemCodes(
      props.type,
      props.subType
    );

    setSystemCode(systemcodesList);
  };

  React.useEffect(() => {
    if (!systemCode.length && !mounted) {
      getSystemCodeTypes();
    }
    return () => {
      setMounted(true);
    };
    // eslint-disable-next-line
  }, [systemCode, mounted]);

  return (
    <FormControl error={props.error} fullWidth>
      <InputLabel shrink required={props.required}>
        {props.label}
      </InputLabel>
      <Select
        displayEmpty
        fullWidth
        disabled={props.disabled}
        name={props.name}
        value={props.value ? props.value : ''}
        onChange={props.onChange}
      >
        {props.country !== 'US' ? (
          <MenuItem key="blank" value="">
            <em>Blank</em>
          </MenuItem>
        ) : null}

        {systemCode.length
          ? systemCode.map((item, index) => (
              <MenuItem key={index} value={item?.code}>
                {props.itemLabel === 'code' ? item?.code : item?.description}
              </MenuItem>
            ))
          : null}
      </Select>
    </FormControl>
  );
}
// import React from 'react';
// import { InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';

// export default function SelectTaxIdType(props) {
//   return (
//     <FormControl error={props.error} fullWidth>
//       <InputLabel shrink required={props.required}>
//         {props.label}
//       </InputLabel>
//       <Select
//         displayEmpty
//         fullWidth
//         disabled={props.disabled}
//         name={props.name}
//         value={props.value}
//         onChange={props.onChange}
//       >
//         {props.country !== 'US' ? <MenuItem value="">Blank</MenuItem> : null}
//         <MenuItem value="SSN">SSN</MenuItem>
//         <MenuItem value="TIN">TIN</MenuItem>
//         <MenuItem value="Passport">PASSPORT</MenuItem>
//       </Select>
//     </FormControl>
//   );
// }
