const Intern = require("../lib/Intern");

describe("Intern", () => {
  const testIntern = {
    name: "kelvin",
    id: 107,
    email: "kelvin@gmail.com",
    school: "GGU",
    role: "Intern",
  };

  const obj = new Intern(
    testIntern.name,
    testIntern.id,
    testIntern.email,
    testIntern.school
  );

  describe("Constructor", () => {
    it("should create a new construct employee class", () => {
      expect(obj).toEqual({
        name: "kelvin",
        id: 107,
        email: "kelvin@gmail.com",
        school: "GGU",
        role: "Intern",
      });
    });
  });

  describe("getName", () => {
    it("should return name when getName method is called", () => {
      expect(obj.getName()).toEqual("kelvin");
    });
  });

  describe("Id", () => {
    it("should return id when getId method is called", () => {
      expect(obj.getId()).toEqual(107);
    });
  });

  describe("Email", () => {
    it("should return email when getEmail method is called", () => {
      expect(obj.getEmail()).toEqual("kelvin@gmail.com");
    });
  });

  describe("School", () => {
    it("should return email when getSchool method is called", () => {
      expect(obj.getSchool()).toEqual("GGU");
    });
  });

  describe("Role", () => {
    it("should return email when getRole method is called", () => {
      expect(obj.getRole()).toEqual("Intern");
    });
  });
});