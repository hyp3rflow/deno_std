Deno.test("hi", async (t) => {
  await t.step('hello', async (t) => {
    await t.step('bye', () => {})
  })
})

Deno.test("hi", () => {
  assertSnapshot();
})
Deno.test("hi", () => {})
Deno.test("hi", () => {})

function assertSnapshot(t) {
  const callCount = t[assertSnapshot.callCountSymbol] || 0;
  t[assertSnapshot.callCountSymbol] = callCount + 1;
  t.teardown(() => {
    //
  });
}
assertSnapshot.callCountSymbol = Symbol('assertSnapshot call count');
Deno.test.teardown(() => {
  ///
});
