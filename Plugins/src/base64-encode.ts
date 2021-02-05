import { PluginArgument } from './lib/plugin-definition';

export = {
    name: 'Base-64 Encode',
    description: 'Encode text as a Base-64 encoded string',
    id: 'base64-encode',
    author: 'thealternator89',
    beepVersion: '1.0.0',
    process: async (args: PluginArgument) => {
        let binaryData = Buffer.from(args.textContent, 'utf8');
        return binaryData.toString('base64');
    },
};