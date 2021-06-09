

export async function preview() {
  const Eleventy = require("@11ty/eleventy");
  console.log(Eleventy)
  const inst = new Eleventy();
  await inst.init();
  await inst.write();
}
setInterval(() => preview(), 2000)