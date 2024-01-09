
let rPOWDER = behaviors.POWDER
console.log("Welcome to the console.");
console.log(rPOWDER);
elements.test = {
    name: "Alex",
    color: "#00FFF2",
    behavior: behaviors.POWDER,
    category: "land",
    state: "solid",
    density: 19,
    temp: 1e23,
    tempHigh: 1e88,
    stateHigh: "molten_alex",
    reactions: {
      
    },
};
elements.molten_alex = {
    name:"Liquid Alex",
    color:"#0000ff",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 10,
    temp: 9.9e99,
    tempHigh: 9.99e999,
    stateHigh: "alex_gas",
    tempLow: 9.9e1,
    stateLow: "test",
    reactions: {
    },
};

elements.alex_gas = {
    name:"Alex gas",
    color:"#00ff00",
    behavior: behaviors.GAS,
    category: "gases",
    state: "gas",
    density: 5,
    temp: 99.99e99,
    tempLow: 450e999,
    stateLow: "molten_alex",
    reactions: {
       
    },
