export default class UnzipMock {
    
    install(){
        if (!window.zip){
            window.zip = {};
            window.zip.unzip = (fileUrl, dirUrl, cbs, progress) => {
                let operation = new UnzipOperationClass(fileUrl, dirUrl, cbs, progress);
                this.operations.push(operation);
            };
        }
    }

    getLastOperation(){
        return this.operations[this.operations.length - 1];
    }

    uninstall(){
        if (window.zip){
            delete window.zip;
            this.operations = [];
        }
    }
}

class UnzipOperationClass {
    constructor(fileUrl, dirUrl, cbs, progress){
        this.progressIntervalID = null;
        this.progressEvent = { loaded: 0, total: 100 };
        this.onprogress = progress;
        this.onsuccess = cbs;
        this.whenFail = -1;
        this.progressIntervalID = setInterval(() => {
            if (this.progressEvent.loaded === 100){
                cbs(0);
                clearInterval(this.progressIntervalID);
                this.progressEvent = { loaded: 0, total: 100 };
            } else if (this.whenFail && this.whenFail === this.progressEvent.loaded) {
                cbs(1);
                clearInterval(self.progressIntervalID);
                this.progressEvent = { loaded: 0, total: 100 };
            } else {
                progress(self.progressEvent);
                this.progressEvent.loaded += 1;
            }
        }, 10);
    }

    fail(){
        clearInterval(this.progressIntervalID);
        this.onsuccess(1);    
        this.progressEvent = { loaded: 0, total: 100 };
    }
}
