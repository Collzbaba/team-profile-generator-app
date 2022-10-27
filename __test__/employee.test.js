const Employee = require("../lib/Employee");

describe("Employee", () => {
  const testEmployee = {
    name: "Fav",
    id: 120,
    email: "fav@gmail.com",
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
      expect(obj.getName()).toEqual("fav");
    });
  });

  describe("Id", () => {
    it("should return id when getId method is called", () => {
      expect(obj.getId()).toEqual(120);
    });
  });

  describe("Email", () => {
    it("should return email when getEmail method is called", () => {
      expect(obj.getEmail()).toEqual("fav@gmail.com");
    });
  });
});