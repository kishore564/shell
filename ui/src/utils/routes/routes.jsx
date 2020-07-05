import React from 'react';
import Dashboard from '../../screens/dashboard/Dashboard';
import Nav from '../../screens/nav/Nav';
import SubNav from '../../screens/subNav/SubNav';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    AppstoreOutlined
} from '@ant-design/icons';

const routes=[    
    {
        name:"Dashboard",
        icon: <UserOutlined />,
        path:"/",
        module: Dashboard ,
        childern:[]
    },
    {
        name:"Demo Nav",
        icon: <VideoCameraOutlined />,
        path:"/nav",
        module: Nav,
        childern:[]
    },
    {
        name:"Sub Nav",
        icon: <UploadOutlined />,
        path:"subNav",
        module: SubNav,
        childern:[
            {
                name:"Sub Nav 1",
                icon: <AppstoreOutlined />,
                path:"/subNav/subNav1",
                module: Dashboard                 
            },
            {
                name:"Sub Nav 2",
                icon: <AppstoreOutlined />,
                path:"/subNav/subNav2",
                module: Dashboard                 
            }
        ]
    }

]

export default routes;