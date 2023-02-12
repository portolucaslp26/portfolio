import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  strings: string[] =[
    'Desenvolva seus projetos!',
    'Entre em contato agora!',
    'Dê vida às suas ideias de projetos!',
    'O céu é o limite!'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
