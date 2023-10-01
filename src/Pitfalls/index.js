// Cannot read property name of undefined ...

let obj = {
  name: "utkarsh",
  class: "9th",
};

const name = obj.name;

// if obj = null
// then  you can do

// 1. SHORT CIRCUIT  (MOSLTY this is preferable.)

const name1 = obj && obj.name;

// 2. Optional Colsaking
const name2 = obj?.name;
