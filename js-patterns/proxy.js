const user = {
  name: "Jane Doe",
  age: "20",
  history: "A name to use everywhere",
};

const userProxy = new Proxy(user, {
  get: (obj, prop) => {
    if (!obj[prop]) {
      console.log(`this property doesn't seem to exists`);
    } else {
      console.log(`The value of ${prop} is ${obj[prop]}`);
    }
  },

  set: (obj, prop, value) => {
    if (prop === "age" && typeof value !== "number") {
      console.log(`Sorry, you can only pass numeric values for age`);
    } else if (prop === "name" && value.length < 2) {
      console.log(`You need to provide a valid name.`);
    } else {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
      obj[prop] = value;
    }
    return true;
  },
});

//Reflect

const personProxy = new Proxy(user, {
  get: (obj, prop) => {
    console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`);
  },
  set: (obj, prop, value) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
    Reflect.set(obj, prop, value);
  },
});

// userProxy.nonExistentProp;
// userProxy.name = "";
// userProxy.age = 43;

personProxy.name;
personProxy.age = 43;
personProxy.name = "Jane Doe";
