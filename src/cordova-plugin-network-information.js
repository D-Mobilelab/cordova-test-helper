const Connection = {
  UNKNOWN: 'unknown',
  ETHERNET: 'ethernet',
  WIFI: 'wifi',
  CELL_2G: '2g',
  CELL_3G: '3g',
  CELL_4G: '4g',
  CELL: 'cellular',
  NONE: 'none',
};

export default class NetInfoMock {

    install(){
        window.Connection = Connection;
        if (!window.navigator.connection){
            window.navigator.connection = {
                type: Connection.WIFI,
                getInfo: (cbs, cbe) => {}
            };
        }
    }
    
    uninstall(){
        if (window.navigator.connection){
            window.navigator.connection = null;    
        }
        delete window.Connection;
    }
}
