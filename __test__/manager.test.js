const Manager = require("../lib/Manager");

describe("Manager", () => {
  const testManager = {
    name: "sean",
    id: 12345,
    email: "sean@gmail.com",
    officeNumber: 12345,
  };

  const obj = new Manager(
    testManager.name,
    testManager.id,
    testManager.email,
    testManager.officeNumber
  );

  describe("Constructor", () => {
    it("should create a new construct employee class", () => {
      expect(typeof obj).toEqual("object");
    });
  });

  describe("getName", () => {
    it("should return name when getName method is called", () => {
      expect(obj.getName()).toEqual("Sean");
    });
  });

  describe("Id", () => {
    it("should return id when getId method is called", () => {
      expect(obj.getId()).toEqual(12345);
    });
  });

  describe("Email", () => {
    it("should return email when getEmail method is called", () => {
      expect(obj.getEmail()).toEqual("sean@gmail.com");
    });
  });

  describe("OfficeNumber", () => {
    it("should return email when getOfficeNumber method is called", () => {
      expect(obj.getOfficeNumber()).toEqual(12345);
    });
  });

  describe("Role", () => {
    it("should return email when getRole method is called", () => {
      expect(obj.getRole()).toEqual("Manager");
    });
  });
});