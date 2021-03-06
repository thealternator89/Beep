import { Menu, MenuItem } from 'electron';

import { ipcHandler } from './ipc-handler';

export function buildMenus(appName: string) {
  const menu = new Menu();
  menu.append(buildApplicationMenu(appName));
  menu.append(buildEditMenu());

  Menu.setApplicationMenu(menu);
}

function buildApplicationMenu(appName: string) {
  return new MenuItem({
    label: appName,
    submenu: [
      {
        label: 'Command palette...',
        accelerator: 'CmdOrCtrl+Shift+P',
        click: () => ipcHandler.sendMenuCommand('toggleCommandPalette'),
      },
      {
        role: 'toggleDevTools',
        accelerator: 'CmdOrCtrl+Alt+I',
      },
      {
        role: 'quit',
        accelerator: 'CmdOrCtrl+Q',
      },
    ],
  });
}

function buildEditMenu() {
  return new MenuItem({
    label: 'Edit',
    submenu: [
      {
        label: 'Cut',
        accelerator: 'CmdOrCtrl+X',
        click: () => ipcHandler.sendMenuCommand('editor.cut'),
      },
      {
        label: 'Copy',
        accelerator: 'CmdOrCtrl+C',
        click: () => ipcHandler.sendMenuCommand('editor.copy'),
      },
      {
        label: 'Paste',
        accelerator: 'CmdOrCtrl+V',
        click: () => ipcHandler.sendMenuCommand('editor.paste'),
      },
    ],
  });
}
