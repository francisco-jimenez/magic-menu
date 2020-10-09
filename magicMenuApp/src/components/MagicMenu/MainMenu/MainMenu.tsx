
import React, { FunctionComponent, useEffect, useState } from 'react';
import Menu, { MenuItem, ItemGroup as MenuItemGroup, SubMenu } from 'rc-menu';
// import zapIcon from './icons/zap.svg';
import zapIcon from './icons/zap.svg';
import lightIcon from './icons/light.svg';
import { TMenu, TMenuOption, TSubMenu } from '../../../models/Menu';
import { setStyle } from 'rc-menu/lib/util';


interface Props {
  menu: TMenu
};


const MainMenu: FunctionComponent<Props> = (props: Props) => {

  useEffect(() => {
    document.getElementById("first_item")?.focus();
  })

  const getIcon = (iconName: String) => {
    if (iconName === 'zap') return zapIcon
    if (iconName === 'light') return lightIcon
  }

  const renderMenuItem = (menuItem: TMenuOption, key: any, isSubMenu?: Boolean) => {
    const getStyle = () => {
      if (isSubMenu) {
        return { marginLeft: '10px' }
      }
      else return {}
    }
    return (
      <MenuItem key={key} style={getStyle()}>
        {menuItem.iconName && <img src={getIcon(menuItem.iconName)} className='mm-item-list-icon' alt="icon" />}
        <div>
          {menuItem.text}
        </div>
        {menuItem.shortcut &&
          <div className='mm-item-list-shortcut'>
            {menuItem.shortcut.keyStroke}
          </div>
        }
      </MenuItem>
    )
  }

  const renderSubMenu = (subMenuItem: TSubMenu, options: TMenuOption[], subMenuIndex: any) => (
    <MenuItemGroup title={subMenuItem.text} key="3">
      {options.map(
        (option, index) => {
          return renderMenuItem(option, '' + subMenuIndex + index, true)
        }
      )}
    </MenuItemGroup>
  )


  return (
    <>
      <Menu id='first_item' defaultActiveFirst={true} mode='inline' style={{ margin: 20, width: 300 }}>
        {/* <MenuItemGroup title="group 1" key="a"> */}
        {props.menu.menu.map(
          (menuItem, index) => {
            if (menuItem.type === 'OPTION') {
              return renderMenuItem(menuItem, index)
            }
            if (menuItem.type === 'SUBMENU') {
              return renderSubMenu(menuItem, menuItem.options, index)
            }
          }
        )}
      </Menu>
    </>
  );
}

export default MainMenu

{/* <>
<MenuItem key="a1">
  <img src={zapIcon} className='mm-item-list-icon' alt="zapIcon" />
  <div>
    Set a reminder...
</div>
  <div className='mm-item-list-shortcut'>
    H
</div>
</MenuItem>
<MenuItem key="a2">3</MenuItem> */}
{/* </MenuItemGroup> */ }
{/* <MenuItemGroup title="group 2" key="3">
  <MenuItem key="31">4</MenuItem>
  <MenuItem key="32">5</MenuItem>
</MenuItemGroup>
</> */}