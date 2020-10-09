
import React, { FunctionComponent, useEffect, useState } from 'react';
import Menu, { Item as MenuItem, ItemGroup as MenuItemGroup, SubMenu } from 'rc-menu';
import zapIcon from './icons/zap.svg';
import MainMenu from './MainMenu/MainMenu';
import { TMenu } from '../../models/Menu';


interface Props {
};


const MagicMenu: FunctionComponent<Props> = (props: Props) => {

    useEffect(() => {
        document.getElementById("first_item")?.focus();
    })

    const menuOptions: TMenu = {
        menu: [
            {
                type: 'OPTION',
                text: 'Set Reminder...',
                iconName: 'zap',
            },
            {
                type: 'OPTION',
                text: 'Sales',
                iconName: 'light',
                shortcut: {
                    keyStroke: ['S'],
                    isSecuential: false
                }
            },
            {
                type: 'SUBMENU',
                text: 'Go to',
                options: [
                    {
                        type: 'OPTION',
                        text: 'Clients',
                        iconName: 'zap',
                        shortcut: {
                            keyStroke: ['C'],
                            isSecuential: false
                        }
                    },
                    {
                        type: 'OPTION',
                        text: 'No shortcut',
                        iconName: 'zap',
                    },
                ],
            },
        ]
    }


    return (
        <>
            <MainMenu
                menu={menuOptions}
            />
        </>
    );
}

export default MagicMenu