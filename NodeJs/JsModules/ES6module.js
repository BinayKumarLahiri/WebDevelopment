export const PI = 3.14;
export const c = 300000000;//Named Export: needed to be importted by their real name

const area = (radius)=>{
    return PI*radius*radius;
}
export default area; //Default Export: Can be importted by any name