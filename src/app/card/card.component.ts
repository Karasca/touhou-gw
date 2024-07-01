import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostBinding, HostListener, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  
})
export class CardComponent implements AfterViewInit {
  @Input() firstName = "";
  @Input() id = 0;
  //@Input() familyName = "";
  //@Input() possessive = false;
  @Input() image = 'assets/images/chara/';
  flipped = true;
  //constrain = 20;

  // @ViewChild('charImg') charImg!: ElementRef;

  // @HostBinding('style.transform') transformation = '';

  // @HostListener('mousemove', ['$event'])
  // handleHostMousemove(event: PointerEvent){
  //   if(!this.flipped){
  //     console.log(this.flipped);
  //     let x = event.clientX;
  //     let y = event.clientY;
  //     // let position:number[] = [x,y];
  
  //     window.requestAnimationFrame(() => {
  //       this.setTransform(x,y);
  //     })
  //   }else{
  //     console.log(this.flipped);
  //   }
    
  // }

  // @HostListener('mouseleave', ['$event'])
  // handleHostMouseleave(event: PointerEvent){
  //   this.transformation
  // }

  // @HostListener('click', ['$event'])
  // handleHostMouseclick(event: PointerEvent){
  //   this.transformation = 'rotateY(180deg);'
  // }

  // setTransform(x:number,y:number){
  //   this.transformation = this.transforms(x,y);
  // }

  // transforms(x: number, y: number) {
  //   let constrain = 20;
  //   let box = this.charImg.nativeElement.getBoundingClientRect();
  //   let calcX = -(y - box.y - (box.height / 2)) / constrain;
  //   let calcY = (x - box.x - (box.width / 2)) / constrain;
    
  //   return "perspective(50px) "
  //     + "   rotateX("+ calcX +"deg) "
  //     + "   rotateY("+ calcY +"deg) ";
  // };

  
  click(){
    this.flipped  = !this.flipped;
  }

  async ngAfterViewInit(){
    await this.delay(500+this.id*25);
    this.flipped = false;
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  // mouseMoveEvent(){}

  // mouseLeaveEvent(){}

}
