import logo from './logo.svg';
import './App.css';
import React, { memo, useCallback, useMemo, useState } from 'react';
import Child from './component/Child';
import { Button } from '@mui/material';
import BasicModal from './Dialog';


const heavyProcess = (times) => {
  for (let i = 0; i < times; i++) {
    console.log('Go ...', i + 1);
  }
  return `Heavy process done (result: ${times})`;
};
const App = () => {

  const [value, setValue] = React.useState(0)
  const handleClick = () => {
    setValue(value => value + 1)
  }

  const heavyProcessValue = useMemo(() => heavyProcess(1000), [])
  //const heavyProcessValue1 =  heavyProcess(1000)

  const [countParent, setParentCount] = useState(0)
  const [childvalue, setChildvalue] = useState({ name: "ramesh", countChild: 0 })
  const increaseCount = useCallback(() => {
    setChildvalue(childValues => ({ ...childValues, countChild: childValues.countChild + 1 }))
  }, [childvalue])


  var list = [{id: 1, name: 'sai'}, {id: 2, name: 'ramesh'}, {id: 3, name: 'puli'}]

  var list2 = list.filter((item) => item.id > 2)
  // console.log(list, "list")

  // console.log(list2, "list1")

  list2[0].name = 40

  console.log(list2, "list21")
  console.log(list, "list")


  //const promis1 = new Promise((resolve, reject) => {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i)
    }, 1000)
  }

 

  

  // });

  // const promis2 = new Promise((resolve, reject) => {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i)
    }, 1000)
  }
 // });


  console.log("parent")
  return (
    <div className="App">

      <Button variant="contained" color="secondary" style={{ borderRadius: 20, paddingLeft: 20, paddingRight: 20 }} onClick={handleClick}> click me</Button>
      <BasicModal />
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal> */}

      {/* <div className="main">
        <button type="button" onClick={handleClick}>Parent button</button>
        <p>{countParent}</p>
        <Child childvalue={childvalue} onIncreaseCount={increaseCount} />

        <div>{value}</div>
      </div> */}
    </div>
  );
}
export default App;


