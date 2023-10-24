import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TempService } from '../service/temp.service';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _TempService:TempService){}

  days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  months = ['January','February','March','April','May','June','July','August',
             'September','October','November','December',];

  ngOnInit(): void {
    this.GetData('cairo')
    this.MakeSearch()
  }
  
  MakeSearch(){
    let searchInpt:any = document.querySelector('.search');
    searchInpt.addEventListener('keyup' , () => {
      if(searchInpt.value == ''){
        this.GetData('cairo')
      }
      this.GetData(searchInpt.value)
    })
  }

  GetData(search:any){
    this._TempService.getData(search).subscribe( (res) => {
      this.Today(res)
      this.NextDay(res)
      this.ThirdDay(res)
    })
  }

  TDNumMon:string = ''; TDlocName:string = ''; TDtemp_c:string = '';TDconditionTxt:string = '';
  TDhumidity:string = '';TDwind_kph:string = '';TDwind_dir:string = '';TDconditionIc:string = '';
  Today(data:any){
    let day:Date = new Date();
    console.log('day.getDate()',day.getDate())
    console.log('day.getMonth()',day.getMonth())
    // console.log('months[day.getMonth()',this.months[day.getMonth()])
    this.TDNumMon = day.getDate() + ' ' + this.months[day.getMonth()]
    this.TDlocName = data.location.name
    this.TDtemp_c = data.current.temp_c
    this.TDconditionTxt = data.current.condition.text
    this.TDhumidity = data.current.humidity
    this.TDwind_kph = data.current.wind_kph
    this.TDwind_dir = data.current.wind_dir
    this.TDconditionIc = `https:${data.current.condition.icon}`   
  }

  NDName:string = '';NDmaxtemp_c:string = '';NDmintemp_c:string = '';NDdayIco:string = '';NDdescription:string = '';
  NextDay(data:any){
    let day:Date = new Date();
    let dayName = day.getDay() + 1
    // console.log('dayName', dayName)
    if(dayName == 7)
    {
      dayName = 0
    } 
    this.NDName = this.days[dayName]
    this.NDmaxtemp_c = data.forecast.forecastday[1].day.maxtemp_c
    this.NDmintemp_c = data.forecast.forecastday[1].day.mintemp_c
    this.NDdayIco = `https:${data.forecast.forecastday[1].day.condition.icon}`
    this.NDdescription = data.forecast.forecastday[1].day.condition.text
  }

  THName:string = '';THmaxtemp_c:string = '';THmintemp_c:string = '';THdayIco:string = '';THdescription:string = '';
  ThirdDay(data:any){
    let day:Date = new Date();
    let dayName = day.getDay() + 2
    if(dayName == 8)
    {
      dayName = 1
    }
    if(dayName == 7)
    {
      dayName = 0
    }
    this.THName = this.days[dayName]
    this.THmaxtemp_c = data.forecast.forecastday[2].day.maxtemp_c
    this.THmintemp_c = data.forecast.forecastday[2].day.mintemp_c
    this.THdayIco = `https:${data.forecast.forecastday[2].day.condition.icon}`
    this.THdescription = data.forecast.forecastday[2].day.condition.text
  }

}
