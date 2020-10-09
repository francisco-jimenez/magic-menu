
import React, { FunctionComponent, useEffect, useState } from 'react';
import Menu, { Item as MenuItem, ItemGroup as MenuItemGroup, SubMenu } from 'rc-menu';
import zapIcon from './icons/zap.svg';


interface Props {
};


const MagicMenu3: FunctionComponent<Props> = (props: Props) => {

  useEffect(() => {
    document.getElementById("first_item")?.focus();
  })


  return (
    <>
      <Menu id='first_item' defaultActiveFirst ={true} defaultSelectedKeys={['a1']} mode='inline' style={{ margin: 20, width: 300 }}>
        <MenuItemGroup title="group 1" key="a">
          <MenuItem key="a1">
            <img src={zapIcon} alt="zapIcon" />
          </MenuItem>
          <MenuItem key="a2">3</MenuItem>
        </MenuItemGroup>
        <MenuItemGroup title="group 2" key="3">
          <MenuItem key="31">4</MenuItem>
          <MenuItem key="32">5</MenuItem>
        </MenuItemGroup>
      </Menu>
    </>
  );
}

export default MagicMenu3