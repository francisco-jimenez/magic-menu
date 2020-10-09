export interface MenuOption {
    iconName?: String,
    text: String,
    shortcut? : {
        keyStroke : String[]
        isSecuential: Boolean
    }
}

export interface SubMenu {
    text: String,
    options : MenuOption[]
}

export interface Menu {
    menu : Array<MenuOption|SubMenu>
}