import * as React from "react";
import { useRecordContext } from 'react-admin';

import { makeStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';

const useStyles = makeStyles({
    link: {
        display: "flex",
        alignItems: "center",
        textDecoration: 'none',
    },
    icon: {
        width: '0.5em',
        height: '0.5em',
        paddingLeft: 5,
    },
});

const MyUrlField = ({ source }) => {
    const record = useRecordContext();
    const classes = useStyles();

    return record ? (
        <a href={record[source]} className={classes.link} target="_blank">
            {record[source]}
            <LaunchIcon className={classes.icon} />
        </a>
    ) : null;
}

export default MyUrlField