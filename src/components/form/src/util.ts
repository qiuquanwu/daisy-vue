import { flatten, isArray, isPlainObject } from "@utils/helper";
import { FormItemProps, FormRule } from "@components/form/types";

// eslint-disable-next-line
export const noop = (error?: any): void => {};

export function getFieldsByPaths(
  fields: FormItemProps[],
  props: string | string[]
): FormItemProps[] {
  const formatPath = (path: string) =>
    path
      .replace(/\[(\w+)\]/g, ".$1")
      .replace(/(\.\$each)?\.(\d+)/g, ".$2")
      .replace(/^\./, "");
  const finalProps = flatten<string>([props]).map(formatPath);
  let fieldsRs = [];

  finalProps.forEach((propName) => {
    fieldsRs = fieldsRs.concat(
      fields.filter((field) => {
        const prop = formatPath(field.prop);
        return prop.indexOf(propName) === 0;
      })
    );
  });

  return fieldsRs;
}

export function getModelByPath(
  // eslint-disable-next-line
  model: any,
  path: string
  // eslint-disable-next-line
): { value: any; parent: Record<string, any> } {
  let temp = path.replace(/\[(\w+)\]/g, ".$1");
  temp = temp.replace(/(\.\$each)?\.(\d+)/g, ".$2");
  temp = temp.replace(/^\./, "");
  console.log("getModelByPath", model, path);

  const keyArray = temp.split(".");

  let parent = null;
  let value = model;
  keyArray.forEach((key) => {
    parent = value;
    value = value[key];
  });

  return {
    value,
    parent,
  };
}

/**
 *
  rules: {
    students: [
      {minLength: minLength(3), message: 'Required at least 3 students'},
      {$each: {
        name: [
          {required, message: 'Please input student name', trigger: 'blur'}
        ]
      }
    }],
  }
  path: students[0].name
  => [{message: 'Please input student name', trigger: 'blur', required: ƒ}]
 * @param rules
 * @param path
 * @returns
 */
export function getRulesByPath(rules: FormRule, path: string): FormRule[] {
  let temp = path.replace(/\[(\w+)\]/g, ".$1");
  temp = temp.replace(/(\.\$each)?\.\d+/g, ".$each");
  temp = temp.replace(/^\./, "");
  const keyArray = temp.split(".");
  console.log("getRulesByPath", rules, path, temp);

  let value;
  let ruleList = rules;
  keyArray.forEach((key) => {
    if (isArray(ruleList)) {
      value = ruleList.find((n) => n[key])[key];
    } else if (isPlainObject(ruleList)) {
      value = ruleList[key] as FormRule[];
    }
    ruleList = value as FormRule;
  });
  console.log("getRulesByPath value", value);

  return value as FormRule[];
}
