let slotList = [
    {
      slotNr: "A1",
      name: "Coca Cola",
      price: 2.50,
      quantity: 10
    },
    {
      slotNr: "A2",
      name: "Fanta",
      price: 2.20,
      quantity: 5
    },
    { slotNr: "A3",
      name: "Sprite",
      price: 2.25,
      quantity: 0
    },
    {
      slotNr: "B1",
      name: "Chaudfontaine",
      price: 1.75,
      quantity: 6
    },
    { slotNr: "B2",
      name: "Nalu",
      price: 2.30,
      quantity: 1
    },
    {
      slotNr: "B3",
      name: "Fuze Tea",
      price: 2.35,
      quantity: 8
    },
    {
      slotNr: "C1",
      name: "Bounty",
      price: 2.20,
      quantity: 9
    },
    {
      slotNr: "C2",
      name: "Mentos",
      price: 1.85,
      quantity: 4
    },
    { slotNr: "C3",
      name: "Skittles",
      price: 2.95,
      quantity: 6
    },
    {
      slotNr: "D1",
      name: "Twix",
      price: 1.95,
      quantity: 3
    },
    { slotNr: "D2",
      name: "Snickers",
      price: 1.50,
      quantity: 6
    },
    {
      slotNr: "D3",
      name: "Mars",
      price: 2.00,
      quantity: 6
    }
];

function Iterator(start, end, step, slots) {
    let nextIndex = start;
    let iterationCount = 0;
  
    const slotIterator = {
      next: function() {
          let result;
  
          if (nextIndex < end) {
              result = { 
                slotNr: slots[nextIndex].slotNr,
                name: slots[nextIndex].name, 
                price: slots[nextIndex].price,
                quantity : slots[nextIndex].quantity,
                done: false 
              }
              nextIndex += step;
              iterationCount++;
              return result;
          }
          return { 
            value: iterationCount, 
            done: true 
          }
      }
    };
    return slotIterator;
}

const SlotIt = Iterator(0, 12, 1, slotList);
let result = SlotIt.next();
let searchSlot;
let selectedSlot = "D2";

while (!result.done) {
  if (result.slotNr == selectedSlot){
    searchSlot = result;
  }
  result = SlotIt.next();
}
if (searchSlot == null){
  console.log("Slot does not exist")
}else{
  console.log(`You have picked ${searchSlot.name} for €${searchSlot.price}`);
}

const SlotIt2 = Iterator(0, 12, 1, slotList);
result = SlotIt2.next();
let searchSlot2;
selectedSlot = "C4";

while (!result.done) {
  if (result.slotNr == selectedSlot){
    searchSlot2 = result;
  }
  result = SlotIt2.next();
}
if (searchSlot2 == null){
  console.log("Slot does not exist")
}else{
  console.log(`You have picked ${searchSlot2.name} for €${searchSlot2.price}`);
}
