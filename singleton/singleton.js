const Singleton = (function () {
    function ProcessManager() {
        this.numProcess = 0
    }
    let pManager;

    function createProcceManager() {
        pManager = new ProcessManager()
        return pManager;
    }

    return {
        getProcessManager:() => {
            if (!pManager) pManager = createProcceManager()
            return pManager
        }
    }
})()

const processManager = Singleton.getProcessManager();
const processManager2 = Singleton.getProcessManager();


console.log(processManager)
console.log(processManager2)

console.log(processManager === processManager2)