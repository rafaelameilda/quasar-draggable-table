export interface ExampleStateInterface {
  prop: any;
}

function state(): ExampleStateInterface {
  return {
    prop: [],
  };
}

export default state;
