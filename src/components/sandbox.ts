export const last = <T>(arr: T[]) => {
  return arr[arr.length - 1];
};

const l = last([1, 2, 3]);
const l2 = last(["1", "2", "2"]);

console.log(l);

export const makeArr = <X, Y= number>(x: X, y: Y):[X,Y] => {
  return [x, y];
};


export const makeFullName = <T extends {firstName: string, lastName: string}>(obj: T) =>{

return { ...obj, fullName: obj.firstName + ' ' + obj.lastName}
}


export interface Tab<T>{
    id: string, 
    position:number,
    data:T
}

type numberTab = Tab<number>;

type StringTab = Tab<string>;