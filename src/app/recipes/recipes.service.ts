import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
    providedIn: 'root'
})
export class RecipesService {
    private recipes: Recipe[] = [
        {
            id: 'r1',
            title: 'Schnitzel',
            imageUrl: 'https://honest-food.net/wp-content/uploads/2012/12/wiener-schnitzel-recipe-2-500x500.jpg',
            ingredients: ['French Fries', 'Meat', 'Salad']
        },
        {
            id: 'r2',
            title: 'Spaghetti',
            imageUrl: 'https://cdn.kuali.com/wp-content/uploads/2021/03/26171017/classic-italian-dish-pasta-bolognese-black-background-top-view-horizontal-830x553.jpg',
            ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
        },
        {
            id: 'r3',
            title: 'Chicken Enchiladas',
            imageUrl: 'https://cdn-rdb.arla.com/Files/puckarabia-en/3661505487/d3413a09-06f3-48b2-bd15-9fdcf8b7dd5a.jpg?w=1230&h=670&mode=crop&ak=aee88f72&hm=5f828870',
            ingredients: ['Chicken', 'Cream', 'Tortilla Bread', 'Pepper']
        },
        {
            id: 'r4',
            title: 'Pepperoni Pizza',
            imageUrl: 'https://cdn-rdb.arla.com/Files/puckarabia-en/1375617499/162baeba-e6c0-4823-9d9e-bcffd5e6fce8.jpg?w=1230&h=670&mode=crop&ak=aee88f72&hm=5f828870',
            ingredients: ['Mozarella Cheese', 'Dough', 'Beef Peppeoni']
        }
    ];
    constructor() { }

    getAllRecipes() {
        return [...this.recipes];
    }

    getRecipe(recipeId: string) {
        return {...this.recipes.find(recipe => {
        return recipe.id === recipeId;
        })}
    }

    deleteRecipe(recipeId: any) {
        console.log(recipeId);
        this.recipes = this.recipes.filter(recipe => recipe.id != recipeId);
    }
}
