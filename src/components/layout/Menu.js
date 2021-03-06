import * as React from 'react';
import { useSelector } from 'react-redux';
import { DashboardMenuItem, Menu, MenuItemLink, getResources } from 'react-admin';
import DefaultIcon from '@material-ui/icons/ViewList';

export const CustomMenu = (props) => {
    const resources = useSelector(getResources);
    return (
        <Menu {...props}>
            <DashboardMenuItem />
            {resources.map(resource => (
                <MenuItemLink
                    key={resource.name}
                    to={`/${resource.name}`}
                    primaryText={
                        (resource.options && resource.options.label) ||
                        resource.name
                    }
                    leftIcon={
                        resource.icon ? <resource.icon /> : <DefaultIcon />
                    }
                    onClick={props.onMenuClick}
                    sidebarIsOpen={props.open}
                />
            ))}
        </Menu>
    );
};