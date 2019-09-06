const DO_LOG = false;

export default function countRenders(func: Function) {
    if (DO_LOG) {
        console.count(`${func.name} render`)
    }
}
