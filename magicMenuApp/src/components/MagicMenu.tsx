import Button from '@material-ui/core/Button/Button';
import Menu from '@material-ui/core/Menu/Menu';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import React, { FunctionComponent, useState } from 'react';


interface Props {
};


const MagicMenu: FunctionComponent<Props> = (props: Props) => {

    const handleClick = () => alert('clicked')
    const handleClose = () => alert('closed')

    return (
        <>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={(handleClick)}>
                Open Menu
            </Button>
            <Menu
                id="simple-menu"
                // anchorEl={anchorEl}
                keepMounted
                open={true}
                onClose={handleClose}
            >
                <MenuItem autoFocus ={true} onClick={handleClick}>Profile</MenuItem>
                <MenuItem onClick={handleClick}>My account</MenuItem>
                <MenuItem onClick={handleClick}>Logout</MenuItem>
            </Menu>
        </>
    );
}

export default MagicMenu