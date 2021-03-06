export default class FilePluginMock {
    constructor({ appID }){
        this.appID = appID;
    }

    install(){
        window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
        window.resolveLocalFileSystemURL = window.resolveLocalFileSystemURL || window.webkitResolveLocalFileSystemURL;
    
        if (window.cordova){
            window.cordova.file = {
                'applicationDirectory': 'file:///android_asset/',
                'applicationStorageDirectory': `file:///data/data/${this.appID}/`,
                'dataDirectory': `file:///data/data/${this.appID}/files/`,
                'cacheDirectory': `file:///data/data/${this.appID}/cache/`,
                'externalApplicationStorageDirectory': `file:///storage/emulated/0/Android/data/${this.appID}/`,
                'externalDataDirectory': `file:///storage/emulated/0/Android/data/${this.appID}/files/`,
                'externalCacheDirectory': `file:///storage/emulated/0/Android/data/${this.appID}/cache/`,
                'externalRootDirectory': 'file:///storage/emulated/0/',
                'tempDirectory': null,
                'syncedDataDirectory': null,
                'documentsDirectory': null,
                'sharedDirectory': null
            };
        }

        return Promise.all([
            initTemporaryDirectory(), 
            initPersistentDirectory()
        ]);
    
    }

    uninstall(){
        if (window.cordova.file){
            delete window.cordova.file;
        }
    }
}

function initTemporaryDirectory(){
    return new Promise(function(resolve, reject){
        window.requestFileSystem(0, 5 * 1024 * 1024 * 1024, function(fs){
            var temporaryFS = fs.root.toURL();
            window.cordova.file.tempDirectory = temporaryFS;
            window.cordova.file.cacheDirectory = temporaryFS;
            resolve(temporaryFS);
        }, reject);
    });
}

function initPersistentDirectory(){
    return new Promise(function(resolve, reject){
        window.requestFileSystem(0, 5 * 1024 * 1024 * 1024, function(fs){
            var persistentFS = fs.root.toURL();            
            window.cordova.file.applicationStorageDirectory = persistentFS;            
            resolve(persistentFS);
        }, reject);
    });
}
