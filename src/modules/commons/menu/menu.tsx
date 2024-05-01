import "./menu.css";
import React from 'react';
import "../styles/index.css";
import { Menu, MenuProps } from 'antd';
import { HomeOutlined, CustomerServiceOutlined } from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

const DotIcon: React.FC = () => (
    <svg style={{ width: 6.67 }} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"></path>
    </svg>
);

const CustomMenu: React.FC = () => {
    const items: MenuItem[] = [
        {
            key: 'commercial',
            label: 'Commercial',
            icon: <CustomerServiceOutlined />,
            children: [
                { icon: <DotIcon />, key: 'leads', label: 'Leads' },
                { icon: <DotIcon />, key: 'appointments', label: 'Appointments' },
                { icon: <DotIcon />, key: 'customers', label: 'Customers' }
            ],
        },
        {
            key: 'production',
            label: 'Production',
            icon: <HomeOutlined />,
            children: [
                { key: '9', label: 'Option 9' },
                { key: '10', label: 'Option 10' },
                // {
                //     key: 'sub3',
                //     label: 'Submenu',
                //     children: [
                //         { key: '11', label: 'Option 11' },
                //         { key: '12', label: 'Option 12' },
                //     ],
                // },
            ],
        },
    ];

    return (
        <Menu
            className='bg-grey otline-none bdr-none'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['commercial', 'production']}
            mode="inline"
            theme="light"
            items={items}
        />
    )
}

export default CustomMenu;