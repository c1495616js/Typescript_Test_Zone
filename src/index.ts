function f() {
  console.log("f(): evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("f(): called", "target:", target, "key:", propertyKey, "desc:", descriptor);
  }
}

function g() {
  console.log("g(): evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("g(): called", "target:", target, "key:", propertyKey, "desc:", descriptor);
  }
}

class CarClass {
  @f()
  method3(){}
  @g() 
  method() {}
}