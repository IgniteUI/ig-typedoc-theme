import * as path from 'path';
import * as fs from 'fs';
import { DeclarationReflection, Reflection, SignatureReflection, TypeParameterReflection, JSX, DefaultThemeRenderContext, ReflectionFlags, ReflectionKind } from "typedoc";

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

export function classNames(names: Record<string, boolean | null | undefined>) {
    return Object.entries(names)
        .filter(([, include]) => include)
        .map(([key]) => key)
        .join(" ");
}

export function renderTypeParametersSignature(
    typeParameters: readonly TypeParameterReflection[] | undefined
): JSX.Element {
    return (
        <>
            {!!typeParameters && typeParameters.length > 0 && (
                <>
                    <span class="tsd-signature-symbol">{"<"}</span>
                    {join(<span class="tsd-signature-symbol">{", "}</span>, typeParameters, (item) => (
                        <span class="tsd-signature-type" data-tsd-kind={ReflectionKind.singularString(item.kind)}>
                            {item.name}
                        </span>
                    ))}
                    <span class="tsd-signature-symbol">{">"}</span>
                </>
            )}
        </>
    );
}

export function renderFlags(flags: ReflectionFlags) {
    return (
        <>
            {flags.map((item) => (
                <>
                    <span class={"tsd-flag ts-flag" + item}>{item}</span>{" "}
                </>
            ))}
        </>
    );
}

/**
 * Insert word break tags ``<wbr>`` into the given string.
 *
 * Breaks the given string at ``_``, ``-`` and capital letters.
 *
 * @param str The string that should be split.
 * @return The original string containing ``<wbr>`` tags where possible.
 */
 export function wbr(str: string): (string | JSX.Element)[] {
    const ret: (string | JSX.Element)[] = [];
    const re = /[\s\S]*?(?:([^_-][_-])(?=[^_-])|([^A-Z])(?=[A-Z][^A-Z]))/g;
    let match: RegExpExecArray | null;
    let i = 0;
    while ((match = re.exec(str))) {
        ret.push(match[0]);
        ret.push(<wbr />);
        i += match[0].length;
    }
    ret.push(str.slice(i));

    return ret;
}

export function stringify(data: unknown) {
    if (typeof data === "bigint") {
        return data.toString() + "n";
    }
    return JSON.stringify(data);
}

export function getConfigData(context: DefaultThemeRenderContext, prop: string, lang?: string): string {
    const configOption = context.options.getValue('config') as string;
    const product = context.options.getValue('product') as string;
    const prodArr = product.split('-');
    const prodName = prodArr[prodArr.length - 1];
    let fileName = prodName == 'angular' ? 'config.json' : prodName + '.config.json';
    if (configOption && configOption !== "") {
        fileName = configOption;
    }
    const filePath = getConfigFilePath(fileName);

    const config = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const settingOpt =  context.options.getValue('localize') as string;
    const getLang = lang ? lang : settingOpt;

    let data;
    if (config && getLang && process.env.NODE_ENV) {
        data = config[getLang][process.env.NODE_ENV.trim()];
    }

    const res = data ? data[prop] : '';
    return res;
}

export function getConfigFilePath(fileName: string) : string {
    const normalizedPath = path.join(__dirname, '..' , fileName);
    if (fs.existsSync(normalizedPath)) {
        return normalizedPath;
    } else {
        // fallback to default config
        return path.join(__dirname, '..' , 'config.json');
    }
}
