import request from "supertest";
import app from "../app";

describe("Test the root path", () => {
  it("It should response the GET method", (done) => {
    request(app)
      .get("/")
      .expect(200)
      .then((response) => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
