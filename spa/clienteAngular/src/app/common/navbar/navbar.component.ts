import { Component } from '@angular/core';
import { NavbarService } from '../../servicios/navbar.service';
import { Navbar,NavbarItem } from '../../interfaz/navbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  navbar!: Navbar;
  sitename:string = '';
  links:NavbarItem[] = [];

  constructor(private navbarService: NavbarService) {
    this.navbarService.obtenerDatos().subscribe(respuesta => {
        this.navbar = respuesta as Navbar
        this.sitename = this.navbar["site-name"]
        this.links = this.navbar["links"]
      })
  }

}
