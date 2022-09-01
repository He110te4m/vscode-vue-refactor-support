import type { ExtensionContext } from 'vscode'
export function activate(context: ExtensionContext) {
  globalThis.console.log(context)
}
