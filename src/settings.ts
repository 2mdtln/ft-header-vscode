import * as vscode from 'vscode';
import type { HeaderSettings } from './types';

export function readSettings(): HeaderSettings {
	const configuration = vscode.workspace.getConfiguration('ft_header');
	return {
		username: configuration.get<string>('username', '').trim(),
		email: configuration.get<string>('email', '').trim(),
	};
}

export async function promptForSettings() {
	const openSettings = 'Open Settings';
	const choice = await vscode.window.showErrorMessage(
		'Set both "ft_header > Username" and "ft_header > Email" in Settings.',
		openSettings,
	);

	if (choice === openSettings) {
		void vscode.commands.executeCommand('workbench.action.openSettings', '@ext:2mdtln.ft-header');
	}
}
