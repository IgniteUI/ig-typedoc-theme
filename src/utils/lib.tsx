import * as path from 'path';
import * as fs from 'fs';
import { DeclarationReflection, Reflection, SignatureReflection, TypeParameterReflection, JSX, DefaultThemeRenderContext } from "typedoc";

export function hasTypeParameters(
    reflection: Reflection
): reflection is Reflection & { typeParameters: TypeParameterReflection[] } {
    if (reflection instanceof DeclarationReflection || reflection instanceof SignatureReflection) {
        return reflection.typeParameters != null;
    }
    return false;
}

export function join<T>(joiner: JSX.Children, list: readonly T[], cb: (x: T) => JSX.Children) {
    const result: JSX.Children = [];

    for (const item of list) {
        if (result.length > 0) {
            result.push(joiner);
        }
        result.push(cb(item));
    }

    return <>{result}</>;
}


export function getConfigData(context: DefaultThemeRenderContext, prop: string, lang?: string): string {
    const fileName = 'config.json';

    const normalizedPath = path.join(__dirname, '..' , fileName);
    const config = JSON.parse(fs.readFileSync(normalizedPath, 'utf8'));
    const settingOpt =  context.options.getValue('localize') as string;
    const getLang = lang ? lang : settingOpt;

    let data;
    if (config && getLang && process.env.NODE_ENV) {
        data = config[getLang][process.env.NODE_ENV.trim()];
    }

    const res = data ? data[prop] : '';
    return res;
}
