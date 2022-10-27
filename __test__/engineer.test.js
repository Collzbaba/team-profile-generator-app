const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  const testEngineer = {
    name: "Blessed",
    id: 102,
    email: "collzbadodo@gmail.com",
    github: "Collzbaba",
    role: "Engineer",
  };

  const obj = new Engineer(
    testEngineer.name,
    testEngineer.id,
    testEngineer.email,
    testEngineer.github
  );

  describe("Constructor", () => {
    it("should create a new construct employee class", () => {
      expect(obj).toEqual({
        name: "Blessed",
        id: 102,
        email: "collzbadodo@gmail.com",
        github: "Collzbaba",
        role: "Engineer",
      });
    });
  });

  describe("getName", () => {
    it("should return name when getName method is called", () => {
      expect(obj.getName()).toEqual("collzbaba");
    });
  });

  describe("Id", () => {
    it("should return id when getId method is called", () => {
      expect(obj.getId()).toEqual(103);
    });
  });

  describe("Email", () => {
    it("should return email when getEmail method is called", () => {
      expect(obj.getEmail()).toEqual("collzbadodo@gmail.com");
    });
  });

  describe("GitHub", () => {
    it("should return email when getGithub method is called", () => {
      expect(obj.getGithub()).toEqual("Collzbaba");
    });
  });

  describe("Role", () => {
    it("should return email when getRole method is called", () => {
      expect(obj.getRole()).toEqual("Engineer");
    });
  });
});