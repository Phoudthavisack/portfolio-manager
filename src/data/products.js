import { faker } from "@faker-js/faker";

const products = [...new Array(9)].map(genFakeData);

function genFakeData(e, i) {
  return {
    _id: faker.database.mongodbObjectId(),
    name: faker.commerce.productMaterial(),
    image: `${faker.image.food(450, 450)}?index=${i}`,
    description: faker.commerce.productDescription(),
  };
}

export default products;
