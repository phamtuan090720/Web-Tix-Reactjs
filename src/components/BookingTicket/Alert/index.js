import React from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Styled from 'styled-components';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

export default function SimpleAlerts(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },
    }));

    const Alert = Styled.div`
        color: rgb(97,26,21);
        background-color: rgb(253,236,234);
        padding: 5px 10px;
        border-radius: 5px;
        text-align: initial;
    `;
    return (
        <div className={useStyles.root}>
            <Alert>
                <ErrorOutlineIcon style={{ color: "red" }} />
                <span style={{ paddingLeft: 10 }}>
                    {props.mess}
                </span>
            </Alert>
        </div>
    );
}
