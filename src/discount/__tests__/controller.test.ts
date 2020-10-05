import { mock } from "jest-mock-extended";
import * as Koa from "koa";
import controller from "../controller";

const mockedContext = mock<Koa.Context>();

beforeEach(() => {
  jest.resetAllMocks();
  mockedContext.body = "";
});

it("Hello World", async () => {
  const result = await controller.get(mockedContext);

  expect(result.body).toBe("Hello World");
});
