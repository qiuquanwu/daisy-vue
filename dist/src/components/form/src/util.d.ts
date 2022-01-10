import { FormItemProps, FormRule } from "@components/form/types";
export declare const noop: (error?: any) => void;
export declare function getFieldsByPaths(fields: FormItemProps[], props: string | string[]): FormItemProps[];
export declare function getModelByPath(model: any, path: string): {
    value: any;
    parent: Record<string, any>;
};
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
export declare function getRulesByPath(rules: FormRule, path: string): FormRule[];
