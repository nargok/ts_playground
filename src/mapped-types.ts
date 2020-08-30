export {};

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;
type PropertyTypes = keyof Profile;

// Pは一つずつ扱う "name" | "age"を
// T[P]の代入によりそれぞれのpropertyの型が得られる
type Optional<T> = { [P in keyof T]?: T[P] | null }; // nullを加えて既存のPartial型をカスタマイズ
type OptionalProfile = Optional<Profile>;
