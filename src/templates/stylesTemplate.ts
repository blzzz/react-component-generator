import { toKebabCase } from "../utilities";

export function stylesTemplate(componentName: string, useCssModules:boolean, fileHeadContent:string = "") {
  const componentClassName = useCssModules ? componentName : toKebabCase(componentName);
  return `${fileHeadContent.replace(new RegExp("{{componentClassName}}", 'g'), componentClassName)}
.${componentClassName} {
  
}
`.trimLeft();
}
