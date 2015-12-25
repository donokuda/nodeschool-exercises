function foo() {
  var bar;
  quux = "baz";

  function zip() {
    bar = true;
    var quux = "biz";
  }

  return zip;
}
