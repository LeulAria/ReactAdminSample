import { Sidebar, Layout } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useSidebarStyles = makeStyles({
    drawerPaper: {
        // backgroundColor: '#3F4652',
    },
});

export const MySidebar = props => {
    const classes = useSidebarStyles();
    return (
        <Sidebar classes={classes} {...props} />
    );
};