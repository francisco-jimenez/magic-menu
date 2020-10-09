export interface TMenuOption {
    type : 'OPTION',
    iconName?: String,
    text: String,
    shortcut? : {
        keyStroke : String[]
        isSecuential: Boolean
    }
}

export interface TSubMenu {
    type : 'SUBMENU',
    text: String,
    options : TMenuOption[]
}

export interface TMenu {
    menu : Array<TMenuOption|TSubMenu>
}