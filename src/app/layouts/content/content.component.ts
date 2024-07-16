import { Component } from '@angular/core';

interface CardType {
  name : string, 
  description : string,
  image : string
}
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  cards : CardType [] = [
    {
      name : 'card1', 
      description : 'Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.',
      image : 'https://brunswickbowling.com/uploads/bowler_products/Products/Shoes/Mens/_600x600_crop_center-center_none/Brunswick_Avalanche_Grey_Navy_Side_Right_Outer_catalog_1600x1600.png'
    },
    {
      name : 'card2', 
      description : 'Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.',
      image : 'https://brunswickbowling.com/uploads/bowler_products/Products/Shoes/Mens/_600x600_crop_center-center_none/Brunswick_Avalanche_Grey_Navy_Side_Right_Outer_catalog_1600x1600.png'
    },
    {
      name : 'card3', 
      description : 'Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.',
      image : 'https://brunswickbowling.com/uploads/bowler_products/Products/Shoes/Mens/_600x600_crop_center-center_none/Brunswick_Avalanche_Grey_Navy_Side_Right_Outer_catalog_1600x1600.png'
    } ,
    {
      name : 'card1', 
      description : 'Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.',
      image : 'https://brunswickbowling.com/uploads/bowler_products/Products/Shoes/Mens/_600x600_crop_center-center_none/Brunswick_Avalanche_Grey_Navy_Side_Right_Outer_catalog_1600x1600.png'
    },
    {
      name : 'card2', 
      description : 'Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.',
      image : 'https://brunswickbowling.com/uploads/bowler_products/Products/Shoes/Mens/_600x600_crop_center-center_none/Brunswick_Avalanche_Grey_Navy_Side_Right_Outer_catalog_1600x1600.png'
    },
    {
      name : 'card3', 
      description : 'Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.',
      image : 'https://brunswickbowling.com/uploads/bowler_products/Products/Shoes/Mens/_600x600_crop_center-center_none/Brunswick_Avalanche_Grey_Navy_Side_Right_Outer_catalog_1600x1600.png'
    }      
]

}
