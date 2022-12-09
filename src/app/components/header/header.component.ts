import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: "./header.component.html",
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  flag = false;
  dark = false;
  public selected = false;
  public sections = 4;
  public scroll!: number; 

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.renderer.listen(window, 'scroll', ($event) => {
      this.scroll = (window.scrollY / this.sections);
  })
  }

  showMenu(){
    this.flag = !this.flag;
  }
  removeMenu(){
    this.flag = false;      
  }
  darkTheme(){
    this.dark = !this.dark;
    if(this.dark){
      this.renderer.addClass(document.body, 'dark-theme'); 
    }else{
      this.renderer.removeClass(document.body, 'dark-theme');
    }    
  }

}
