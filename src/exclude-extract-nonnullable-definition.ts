export {};

// distrive conditional types
// type MyExclude =
//   | (string extends string | number ? never : string) // true
//   | (number extends string | number ? never : number) // true
//   | (DebugType extends string | number ? never : DebugType); // false
type MyExclude = DebugType; // Exclude定義からどのように導かれるかトレースしたもの
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type NonFunctionType = Exclude<SomeTypes, DebugType>;
type TypeExcludingFunction = Exclude<SomeTypes, Function>; // NonFunctionTypeと同じ
type MyFunctionType = MyExclude;

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type FunctionTypeByExtractingFunction = Extract<SomeTypes, Function>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;

type NullableTypes = string | number | null | undefined;
type NonNulableTypes = NonNullable<NullableTypes>;
