export {};

let name = "sukeroku";

name = "jiro";

let nickname = "jiro" as const;
// nickname = "saburo"; // error!

let profile = {
  name: "jiro",
  height: 50,
} as const;

// profile.name = "saburo"; // error!
// profile.height = 90; // error!
