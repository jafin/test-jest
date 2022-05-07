import { generateUUID } from "../id";

test("can run test", () => {
  expect(generateUUID()).toBeDefined();
});
