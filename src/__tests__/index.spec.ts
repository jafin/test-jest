import { generateUUID } from "../index";

test("can run test", () => {
  expect(generateUUID()).toBeDefined();
});
