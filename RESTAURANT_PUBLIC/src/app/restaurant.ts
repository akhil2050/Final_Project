export class Restaurant {
    _id!: string;
    name!: string;
    type!: string;
    quantity!: string;
    discount!: string;
    total!: string;
}

export class Chefs {
    _id!: string;
    name!: string;
    description!: string;
    imgUrl!: string;
}

export class Locator {
    _id!: string;
    branch!: string;
    address!: string;
    city!: string;
    phone!: string;
    email!: string;
}

export class Recipe {
    _id!: string;
    title!: string;
    ingredients!: string;
    type!: string;
    cookingTime!: string;
    description!: string;
    imgUrl!: string;
}