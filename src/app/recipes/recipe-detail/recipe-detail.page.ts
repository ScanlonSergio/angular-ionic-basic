import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit, OnDestroy {
    recipe!: Recipe;
    constructor(
        private activatedRoute: ActivatedRoute,
        private recipesService: RecipesService,
        private router: Router,
        private alertController: AlertController
    ) {}

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((paramMap) => {
            if (!paramMap.has('recipeId')) {
                this.router.navigate(['/recipes']);
                return;
            }
            const recipeId = paramMap.get('recipeId');
            this.recipe = this.recipesService.getRecipe(recipeId!);
        });
    }

    ionViewWillEnter() {
        console.log('ionViewWillEnter');
    }

    ionViewDidEnter() {
        console.log('ionViewDidEnter');
    }

    ionViewWillLeave() {
        console.log('ionViewWillLeave');
    }

    ionViewDidLeave() {
        console.log('ionViewDidLeave');
    }

    onDeleteRecipe() {
        this.alertController.create({
            header: "Are You Sure?",
            message: "Do you want to delete this recipe?",
            buttons: [
                {
                    text: "Cancel",
                    role: "cancel"
                },
                {
                    text: "Delete",
                    handler: () => {
                        this.recipesService.deleteRecipe(this.recipe.id);
                        this.router.navigate(['/recipes']);
                    }
                }
            ]
        }).then(aleartEl => {
            aleartEl.present();
        })

    }

    ngOnDestroy() {
        console.log('ngOnDestroy');
    }
}
