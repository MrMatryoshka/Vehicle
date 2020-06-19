function  List( marka, engine, year, mileage, drive, car, numberOfEngines, numberOfCabins, yachtLength, numberOfMotorHours,test) {
  this.marka= marka; //марка авто
  this.engine= engine; // двигатель
  this.productionYear= year; // год производства
  this.mileage= mileage; // пробег
  this.driveUnit= drive; // привод
  this.carClass= car; // комплектация
  this.numberOfEngines =numberOfEngines; // количество двигателей
  this.numberOfCabins = numberOfCabins; //количество кают / мест
  this.yachtLength = yachtLength; // длинна яхты / самолета
  this.numberOfMotorHours = numberOfMotorHours ;//количество моторо-часов
  this.test = 'Работает наследование ';
};


function Auto() {
  List.apply(this, arguments);
  this.marka= prompt('Введите данные автомобиля  марка ',' Бмв  ')
  this.engine= prompt('Введите данные автомобиля  двигатель ','  Дизель')
  this.productionYear= prompt('Введите данные автомобиля год производства ','  2020  ')
  this.mileage= prompt('Введите данные автомобиля  пробег ','  2000  ')
  this.driveUnit= prompt('Введите данные автомобиля  привод ','  Полный  ')
  this.carClass= prompt('Введите данные автомобиля комплектация','  Люкс ')
  this.listAuto = function () {
    return console.log( 'Параметры поиска автомобиля : ' +' Марка автомобиля: '+ this.marka + ' ' +' Двигатель:' + this.engine + ' Год производства:' +
    this.productionYear + ' Пробег:'+ this.mileage + ' Привод:'+ this.driveUnit+ ' Комплектаия:'+ this.carClass );
  }
};

function Yacht() {
  List.apply(this, arguments);
  this.marka= prompt('Введите данные корабля  марка ',' Анна  ')
  this.productionYear= prompt('Введите данные корабля год производства ','  2020  ')
  this.carClass= prompt('Введите данные корабля комплектация','  Люкс ')
  this.numberOfEngines =prompt('Введите данные корабля количество двигателей','  2 ')
  this.numberOfCabins =prompt('Введите данные корабля количество кают ','  2 ')
  this.yachtLength = prompt('Введите данные корабля длинна яхты ','  2 ')
  this.numberOfMotorHours = prompt('Введите данные корабля количество моторо-часов ','  10м ')
  this.listYacht = function () {
    return console.log('Параметры поиска корабля : ' +' Марка корабля: '+ this.marka + ' ' +' Двигатели:' + this.numberOfEngines + ' Год производства:' +
    this.productionYear + ' Пробег:'+ this.numberOfMotorHours + ' Длинна:'+ this.numberOfMotorHours+ ' Колличество кают: '+ this.numberOfCabins + ' Комплектация:'+ this.carClass) ;
  }
};
function Plane() {
  List.apply(this, arguments);
  this.marka= prompt('Введите данные самолета  марка ',' Анна  ')
  this.productionYear= prompt('Введите данные самолета год производства ','  2020  ')
  this.carClass= prompt('Введите данные самолета комплектация','  Люкс ')
  this.numberOfEngines =prompt('Введите данные самолета количество двигателей','  2 ')
  this.numberOfCabins =prompt('Введите данные самолета количество кают ','  2 ')
  this.yachtLength = prompt('Введите данные самолета длинна яхты ','  2 ')
  this.numberOfMotorHours = prompt('Введите данные самолета количество моторо-часов ','  10м ')
  this.listPlane = function () {
    return console.log('Параметры поиска самолета : ' +' Марка самолета: '+ this.marka + ' ' +' Двигатели:' + this.numberOfEngines + ' Год производства:' +
    this.productionYear + ' Пробег:'+ this.numberOfMotorHours + ' Длинна:'+ this.numberOfMotorHours+ ' Колличество кают: '+ this.numberOfCabins + ' Комплектация:'+ this.carClass) ;
  }
};

function  AllList() {
// debugger
while (true) {
  let log = prompt('Введите категорию транспортного средства ','Автомобиль,Карабль,Самолет');
  if (log === 'Автомобиль') {
    let auto = new Auto ()
    return auto.listAuto() ;
  }else if (log === 'Карабль' ) {
    let yacht= new Yacht()
    return yacht.listYacht();
  }else if (log === 'Самолет') {
    let plane =  new Plane()
    return plane.listPlane()
  }
}
}
AllList()
