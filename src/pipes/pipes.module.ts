import { NgModule } from '@angular/core';
import { CategoryIdToNamePipe } from './category-id-to-name/category-id-to-name';
@NgModule({
	declarations: [CategoryIdToNamePipe],
	imports: [],
	exports: [CategoryIdToNamePipe]
})
export class PipesModule {}
