runFormatTest(import.meta, ["babel", "flow"], { semi: false });
runFormatTest(import.meta, ["babel", "flow"], {
  semi: false,
  quoteProps: "consistent",
});
runFormatTest(import.meta, ["babel", "flow"], {
  semi: false,
  quoteProps: "preserve",
});
