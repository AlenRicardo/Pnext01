import React from 'react';
import Navigator from './navigation';

const Layout = (props) => {
    return ( 
        <div>
            <Navigator/>
            <div>
                {props.children}
            </div>
        </div>
     );
}
 
export default Layout;