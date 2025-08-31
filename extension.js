// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');


/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	//console.log('Congratulations, your extension "conversormayusminus" is now active!');

	// Comando para convertir selección a minúsculas
	const toLowerCase = vscode.commands.registerCommand('conversormayusminus.toLowerCase', function () {
		const editor = vscode.window.activeTextEditor;
		if (!editor) { 
			return;
		}
		const selections = editor.selections; 
		editor.edit(editBuilder => {
			selections.forEach(selection => {
				let text = editor.document.getText(selection);
				if (text.length > 0) {
					editBuilder.replace(selection, text.toLowerCase());
				}
			});
		});
	});
	context.subscriptions.push(toLowerCase);

	// Comando para convertir selección a mayúsculas
	const toUpperCase = vscode.commands.registerCommand('conversormayusminus.toUpperCase', function () {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}
		const selections = editor.selections;
		editor.edit(editBuilder => {
			selections.forEach(selection => {
				let text = editor.document.getText(selection);
				if (text.length > 0) {
					editBuilder.replace(selection, text.toUpperCase());
				}
			});
		});
	});
	context.subscriptions.push(toUpperCase);
	
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
