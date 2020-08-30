export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type NonFunctionType = Exclude<SomeTypes, DebugType>;
type TypeExcludingFunction = Exclude<SomeTypes, Function>; // NonFunctionTypeと同じ

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type FunctionTypeByExtractingFunction = Extract<SomeTypes, Function>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;

type NullableTypes = string | number | null | undefined;
type NonNulableTypes = NonNullable<NullableTypes>;
