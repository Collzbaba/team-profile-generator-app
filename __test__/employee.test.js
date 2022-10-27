

const Employee = require("../lib/Employee");

describe("Employee", () => {
  const testEmployee = {
    name: "Sean",
    id: 201,
    email: "sean@gmail.com",
  };

  const obj = new Employee(
    testEmployee.name,
    testEmployee.id,
    testEmployee.email
  );

  describe("Constructor", () => {
    it("should create a new construct employee class", () => {
      expect(typeof obj).toEqual("object");
    });
  });

  describe("getName", () => {
    it("should return name when getName method is called", () => {
      expect(obj.getName()).toEqual("sean");
    });
  });

  describe("Id", () => {
    it("should return id when getId method is called", () => {
      expect(obj.getId()).toEqual(103);
    });
  });

  describe("Email", () => {
    it("should return email when getEmail method is called", () => {
      expect(obj.getEmail()).toEqual("seand@gmail.com");
    });
  });
});