import * as yup from "yup";
import type { ObjectShape } from "yup/lib/object";

let schema: any;
let errors: {string?: string[]} = {};

export const createSchema = <TNextShape extends ObjectShape>(additions: TNextShape, excludes?: [string, string][]) => {
  schema = yup.object().shape(additions, excludes);
  return { handleChange, errors};
};

export const handleChange = async (event: Event) => {
  delete errors[(event.target as any).name];
  try {
    await schema.validate({ [(event.target as any).name]: (event.target as any).value }, { abortEarly: false });
  } catch (e) {
    e.inner.map(i => errors[i.path] = i.errors );
  }
};