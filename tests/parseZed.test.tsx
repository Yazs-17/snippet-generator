import parseZed from "../src/parseZed";
import { describe, expect, test } from "vitest";

describe("parseZed", () => {
  const description = "a";
  const tabTrigger = "b";
  const snippet = "c";

  test("parses simple snippet", () => {
    const result = `"a": {
  "prefix": "b",
  "body": [
    "c"
  ],
  "description": "a"
}`;
    expect(parseZed(description, tabTrigger, snippet)).toBe(result);
  });
});


